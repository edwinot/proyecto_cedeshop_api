const bcrypt = require("bcrypt");
const UserModel = require('./../models/userModel');
const jwt =require('jsonwebtoken')

const registerUser = async (userData) => {
    try{
        const passHashed = await bcrypt.hash(userData.password, 10);
        userData.password = passHashed;
        const user = UserModel(userData);
        await user.save();
        return {
            response: user,
            httpStatus: 201

        }
    } catch (error) {
        return {
            response: "server error",
            httpStatus: 500,
        };
    }
};

const loginUser = async (userData) => {
    try{
        const user = await UserModel.findOne({ email: userData.email});//findOne devueve un objeto, find un arreglo
        if (user) {
            const match = await bcrypt.compare(userData.password, user.password);
            if (match) {
                //crear token
                const payload = {  
                    id: user._id,
                    name: user.name
                }
                const token = jwt.sign(payload, process.env.JWT_SECRET_KEY, {
                    expiresIn: 60
                });
                return{
                    response: {
                        token: token,
                    },
                    httpStatus: 200
                }
            }
        }
        return {
            response: "user unauthorized",
            httpStatus: 401,
        };
        
    } catch (error) {
        return {
            response: "server error",
            httpStatus: 500,
        };
    }
}

const infoUser = async (id) => {
    try{
        const user = await UserModel.findById(id);
        return {
            response: user,
            httpStatus: user ? 200 : 404
        };
    } catch (error) {
        return {
            response: "server error",
            httpStatus: 500,
        };
    }
}

module.exports = {
    registerUser,
    loginUser,
    infoUser
}

