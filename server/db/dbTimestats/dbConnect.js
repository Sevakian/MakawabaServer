const mysql = require('mysql');

const dbConnection = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'timestats',
    port: '3306'
})

module.exports = dbConnection