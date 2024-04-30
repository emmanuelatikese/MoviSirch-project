const mysql = require("mysql");


const db = mysql.createConnection
({
    host: "localhost",
    user: "root",
    password: "442emma",
    database: "Emma",
})


module.exports = db;

