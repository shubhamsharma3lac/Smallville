const mysql = require('mysql');

var pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'echoecho_12',
    port: 3306,
    database: 'users'
});

var conn2 = mysql.createConnection({
    host: '35.192.100.36',
    user: 'root',
    password: 'echoecho_12',
    database: 'users',
    port: 3309
});

module.exports = pool;