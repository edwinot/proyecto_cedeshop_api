const { getProducts, createProduct, createProductCategory } = require("../services/productsService");




const getAll = async (req, res) => {
    const shopId = req.query.shop_id;
    const filter = req.query.filter;
    const {response, httpStatus} = await getProducts(shopId, filter);
    res.status(httpStatus).json(response);

}

const create = async (req, res) => {
    const product = req.body;
    const {response, httpStatus} = await createProduct (product);
    res.status(httpStatus).json(response);
}

const createCategory = async (req, res) => {
    const category = req.body;
    const {response, httpStatus} = await createProductCategory (category);
    res.status(httpStatus).json(response);
}

module.exports = {
    create,
    getAll,
    createCategory
}