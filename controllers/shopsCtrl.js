const {getShops, createShop} = require('../services/shopsService')

const getAll = async (req, res) => {
    const filter = req.query.filter;
    const {response, httpStatus} = await getShops(filter);
    res.status(httpStatus).json(response);

}

const create = async (req, res) => {
    const shop = req.body;
    const {response, httpStatus} = await createShop (shop);
    res.status(httpStatus).json(response);
}

module.exports = {
    create,
    getAll
}