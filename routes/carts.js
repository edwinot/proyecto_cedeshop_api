const express = require('express');
const router = express.Router();
const {getProductsCart, addProductCart} = require("../controllers/cartsCtrl");


router.get("/", getProductsCart);
router.post("/", addProductCart);

module.exports = router;