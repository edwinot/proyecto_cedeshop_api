const mongoose = require('mongoose');
const {Schema} = mongoose;

const CartSchema = new Schema (
    {
        status: {
            type: Number,
            required: true
        },
        user_id: {
            type: Schema.Types.ObjectId,
            ref: "users"
        }
        
    },
    {
       timestamps: true 
    }
);

const Cart = mongoose.model("carts", CartSchema);

module.exports = Cart;