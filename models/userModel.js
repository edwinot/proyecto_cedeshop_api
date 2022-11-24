const mongoose = require('mongoose');
const {Schema} = mongoose;

const UserSchema = new Schema (
    {
        name: String,
        phone: String,
        document: String,
        email: {
            type: String,
            unique: true,
            required: true
        },
        role: {
            type: Number,
            default: 1
        },
        password: {
            type: String,
            required: true,
        }
    },
    {
       timestamps: true 
    }
);

const User = mongoose.model("users", UserSchema);

module.exports = User;