const express = require("express");
const app = express();
const dot = require("dotenv");
const router = require("./routers/auth.js");
dot.config();

const cors = require("cors");
const db = require ("./db.js");
const cookie = require("cookie-parser");

// Adding configuration cors, json and cookie to the configuration.
app.use(cors());
app.use(express.json());
app.use(cookie());

// making the api router.
app.use('/api', router);

const Port = process.env.PORT || 3000;

// setting up server 
app.listen(Port, ()=>{
    console.log("connected on Port:" + Port);
})
