const mysql = require('mysql');

const dbConnection = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'gaming',
    port: '3306'
})

module.exports = dbConnection