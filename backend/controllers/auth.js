const db = require("../db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// registrations


const register = (req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password
    const values = [ username, email, password];
    db.query("SELECT * FROM users WHERE username = ? OR email = ? ", [values[0], values[1]], (err, data)=>{
        if (data.length > 0) return res.status(409).json("This account already exist");
        if (err) return res.json(err);

        // hashing passwords
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(values[2], salt);
    values[2] = hash;

    db.query("INSERT INTO users (username, email, password) VALUES (?, ?, ?)", values, (err, data)=>{
        if (err) return res.json(err);
        return res.status(200).json("Registration was a success")
    })
    });


}


// login

const login = (req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password
    const values = [ username, email, password];
    db.query("SELECT password FROM users WHERE username = ?", [username], (err, data)=>{
        console.log(data);
        if (!(data)) return res.json("Username don't exist");
        if (err) return res.json(err);
        if (!(bcrypt.compareSync(password, data[0].password))) return res.status(404).json("Wrong password");

        const token = jwt.sign({id: data[0].id}, "token");;
        res.cookie("access_token", token, {
            httpOnly: true
        }).json("cookie was a success");
    })
}



//logout

const logout = (req, res) => {
    res.clearCookie("access_token", {
        sameSite: "none",
        secure: true
    })
}

module.exports = {register, login, logout};