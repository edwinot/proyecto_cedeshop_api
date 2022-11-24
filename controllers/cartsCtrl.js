const {getProductsCartUser, addProductCartUser} = require('./../services/cartsService')

const getProductsCart = async (req, res) => {
    const {id} = req.payload;
    const {response, httpStatus} = await getProductsCartUser(id);
    res.status(httpStatus).json(response);
}

const addProductCart = async (req, res) => {
    const {id} = req.payload;
    const { product_id: productId } =req.body;
    const {response, httpStatus }= await addProductCartUser(id, productId);
    res.status(httpStatus).jason(response)
}

module.exports = {
    getProductsCart,
    addProductCart
}