const express = require('express');
const router = express.Router();
const pool = require('../database');

router.post('/login', (req, res, next) => {
    var body = req.body;
    let username = body.username;
    let password = body.password;

    authenticateAsync(username, password)
        .then(
            function (result) {
                if (result) {
                    res.status(200);
                    res.json(result);
                }
                else {
                    res.status(401);
                    res.send(result);
                }
            }, function (err) {
                res.status(500);
                res.send(err);
            }
        )

})

function authenticateAsync(username, password) {
    return new Promise((resolve, reject) => {
        pool.getConnection(function (err, connection) {
            if (err) {
                console.log(err);
                reject(err);
            }
            else {
                let sql = `SELECT * FROM administrators WHERE email = '${username}' && password = '${password}'`;
                connection.query(sql, function (err, res) {
                    if (err) {
                        // Not authenticated
                        reject(false);
                    }
                    else {
                        if (res.length > 0) {
                            // authenticated
                            resolve(res[0]);
                        }
                        else {
                            resolve(null);
                        }
                    }

                    connection.release();
                })
            }
        })
    })

}

module.exports = router;