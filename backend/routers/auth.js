const express = require("express");
const router = express.Router();

const {register, login, logout} = require("../controllers/auth");


router.get("/register", register);
router.get("/login", login);
router.get("/logout", logout);

module.exports = router;