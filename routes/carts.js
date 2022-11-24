const express = require('express');
const router = express.Router();
const {getProductsCart, addProductCart} = require("../controllers/cartsCtrl");
const authVerify = require('./../middlewares/authVerify');


router.get("/", authVerify, getProductsCart);
router.post("/", authVerify, addProductCart);

module.exports = router;