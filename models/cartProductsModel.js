const mongoose = require('mongoose');
const {Schema} = mongoose;

const CartProductsSchema = new Schema (
    {
        product_id: {
            type: Schema.Types.ObjectId,
            ref: "products"
        },
        quantity: Number,
        unit_price: Number,
        cart_id: {
            type: Schema.Types.ObjectId,
            ref: "carts"
        }
        
    },
    {
       timestamps: true 
    }
);

const CartProducts = mongoose.model("carts_products", CartProductsSchema);

module.exports = CartProducts;