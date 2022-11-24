const mongoose = require('mongoose');
const {Schema} = mongoose;

const ProductSchema = new Schema (
    {
        name: String,
        price: Number,
        image: String,
        category_id : {
            type: Schema.Types.ObjectId,
            ref: 'product_categories'
        },
        shop_id: {
            type: Schema.Types.ObjectId,
            ref: 'shops'
        }
        
    },
    {
       timestamps: true 
    }
);

const Product = mongoose.model("products", ProductSchema);

module.exports = Product;