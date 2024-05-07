const mysql = require("mysql");


const db = mysql.createConnection
({
    host: "sql8.freesqldatabase.com",
    user: "sql8704483",
    password: "JUTi55h9IB",
    database: "sql8704483",
})


module.exports = db;

