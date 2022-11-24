
const express = require('express');
const app = express();


app.use(express.urlencoded({extended: false}));
app.use(express.json());

require('dotenv').config();
require('./connection/mongoconn');

const PORT = 3001;

const shopsRoutes = require('./routes/shops');
app.use('/shops', shopsRoutes);

const productsRoutes = require('./routes/products');
app.use('/products', productsRoutes);

const usersRoutes = require('./routes/users');
app.use('/users', usersRoutes);

const cartRoutes = require('./routes/carts');
app.use('/cart', cartRoutes);


app.listen(PORT, () => {
    console.log( `Server running on port ${PORT}`)
})