const ShopModel = require('../models/shopModel')



const getShops = async (filter) => {
    let query = {};
    if (filter) query = {name: { $regex: filter, $options: 'i'}};
    const shops = await ShopModel.find(query);
    return {
        response: shops,
        httpStatus: 200
    }
}

const createShop = async (shopData) => {
    try {
        const shop = ShopModel(shopData)
        await shop.save();
        return {
            response: shop,
            httpStatus: 201
        };
    } catch (error) {
        return {
            response: "server error",
            httpStatus: 500
        }
    }
    
}



module.exports = {
    createShop, 
    getShops,
    
}