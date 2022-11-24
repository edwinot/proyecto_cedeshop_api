const ProductModel = require("../models/productModel");
const ProductCategoryModel = require("../models/productCategoryModel");


const getProducts = async (shopId, filter) => {
    let query = {
        shop_id: shopId,
    };
    if (filter) query.name = { $regex: filter, $options: "i"};
    const products = await ProductModel
        .find(query)
        .populate("shop_id","name")
        .populate("category_id","name")
        .exec();
    
    return {
        response: products,
        httpStatus: products.length === 0 ? 404 : 200
    }
}

const createProduct = async (productData) => {
    try {
        const product = ProductModel(productData);
        await product.save();
        return {
            response: product,
            httpStatus: 201
        };
    } catch (error) {
        return {
            response: "server error",
            httpStatus: 500
        }
    }
}

const createProductCategory = async (productCategoryData) => {
    try {
        const productCategory = ProductCategoryModel(productCategoryData);
        await productCategory.save();
        return {
            response: productCategory,
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
    
    getProducts,
    createProduct,
    createProductCategory

}