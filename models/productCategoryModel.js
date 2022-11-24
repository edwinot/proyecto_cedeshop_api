const mongoose = require('mongoose');
const {Schema} = mongoose;

const ProductCategorySchema = new Schema (
    {
        name: String,
        
    },
    {
       timestamps: true 
    }
);

const ProductCategory = mongoose.model("product_categories", ProductCategorySchema);

module.exports = ProductCategory;