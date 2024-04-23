const mysql = require("mysql");


const db = mysql.createConnection
({
    host: process.env.USERHOST,
    user: process.env.USER,
    password: process.env.USERPWD,
    database: process.env.USERDB,
})


module.exports = db;

