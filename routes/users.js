const express = require('express');
const router = express.Router();
const {signup, login, info} = require("../controllers/usersCtrl");
const authVerify = require('../middlewares/authVerify');


router.post("/signup", signup);
router.post("/login", login);
router.get("/info", authVerify, info)

module.exports = router;