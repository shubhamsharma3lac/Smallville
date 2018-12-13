const express = require('express');
const router = express.Router();
const multer = require('multer');
var storage = multer.diskStorage({
    destination: function (req, file, callback) {
        var dir = 'uploads/' + req.body.userid;
        if(!fs.existsSync(dir)){
            fs.mkdirSync(dir);

        }
        callback(null, dir)
    },
    filename: function (req, file, callback) {
        callback(null, file.originalname);
    }
});
var upload = multer({ storage: storage });
var database = require('../database');
const fs = require('fs');
const path = require('path');


router.post('/profile/update/', upload.single('avatar'), (req, res, next) => {
    var file = req.file;
    var userid = req.userid;

    updateAvatar(file);
    res.status(201);
    res.end();
})

function updateAvatar(file) {
    database.getConnection(function (err, connection) {
        if (err) {
            console.log(err);
            return;
        }

        var sql = 'UPADTE administrators SET avatar = ? WHERE id = 1';
        connection.query(sql, [fs.readFileSync(path.join(__dirname, '../uploads', file.originalname))], function (err, result) {
            if (err) {
                console.log(err);
                return;
            }

        })

    })
}

module.exports = router;