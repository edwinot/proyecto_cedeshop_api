const mongoose = require('mongoose');
const {Schema} = mongoose;

const ShopsSchema = new Schema (
    {
        name: String,
        image: String,
        location: String,
        category: String,
           
    },
    {
       timestamps: true 
    }
);

const Shop = mongoose.model("shops", ShopsSchema);

module.exports = Shop;