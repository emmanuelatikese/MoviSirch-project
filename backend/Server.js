const express = require("express");
const app = express();
const dot = require("dotenv");
const router = require("./routers/auth");
dot.config();
const db = require ("../backend/db.js");
const cookie = require("cookie-parser")
app.use(express.json());
app.use(cookie);

app.use('/', router);



const connect = async () => {
    await db.connect(()=> {
        console.log("connected to db...")
    });
    await app.listen(process.env.PORT || 3000, ()=> {
        console.log("connecting on PORT + " + process.env.PORT + "...");
    });
}

connect();
