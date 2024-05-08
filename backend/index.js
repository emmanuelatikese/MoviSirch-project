const express = require("express");
const app = express();
const dot = require("dotenv");
const router = require("./routers/auth.js");
dot.config();

const cors = require("cors");
const db = require ("./db.js");
const cookie = require("cookie-parser");

app.use(cors());
app.use(express.json());
app.use(cookie());
app.use('/api', router);

const Port = process.env.PORT || 3000;


app.listen(Port, ()=>{
    console.log("connected on Port:" + Port);
})
