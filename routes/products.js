const express = require('express');
const router = express.Router();
const {create,getAll, createCategory} = require("../controllers/productsCtrl");


router.get('/', getAll);
router.post('/', create);
router.post('/category', createCategory);

module.exports = router;