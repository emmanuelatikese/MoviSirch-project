const db = require("./db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// registrations


export const register = (req, res) => {
    const values = [ req.body.username, req.body.email, req.body.pwd]
    db.query("SELECT * FROM users WHERE username = ? OR email = ? ", 4000, [values[0], values[1]], (err, data)=>{
        if (data.length) return res.status(409).json("This account already exist");
        if (err) return res.json(err);
    });

    // hashing passwords
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(values[2], salt);
    values[2] = hash;

    db.query("INSERT INTO users (username, email, password) VALUES (?, ?, ?)", 4000, values, (err, data)=>{
        if (err) return res.json(err);
        return res.status(200).json("Registration was a success")
    })
}


// login

export const login = (req, res) => {
    values = [req.body.username, req.body.pwd]
    db.query("SELECT pwd FROM users WHERE username = ?", values[0], (err, data)=>{
        if (data.length === 0) return res.json("Username don't exist");
        if (err) return res.json(err);
        if (!(bcrypt.compareSync(values[1], data[0].pwd))) return res.status(404).json("Wrong password");

        const token = jwt.sign({id: data[0].id}, "token");;
        res.cookie("access_token", token, {
            httpOnly: true
        }).json("cookie was a success");
    })
}



//logout

export const logout = (req, res) => {
    res.clearCookie("access_token", {
        sameSite: "none",
        secure: true
    })
}