const {registerUser, loginUser, infoUser} = require('../services/usersService')

const signup = async (req, res) => {
    const user = req.body;
    const {response, httpStatus} = await registerUser(user);
    res.status(httpStatus).json(response);
}

const login = async (req, res) => {
    const user = req.body;
    const {response, httpStatus} = await loginUser(user);
    res.status(httpStatus).json(response);
}

const info = async (req, res) => {
    const {id, name} = req.payload;
    const {response, httpStatus} = await infoUser(id);
    res.status(httpStatus).json(response);
}


module.exports = {
    login,
    signup,
    info
}