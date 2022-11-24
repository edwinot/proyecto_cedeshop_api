const CartModel = require('./../models/cartModel');
const CartProductsModel = require('../models/cartProductsModel');
const ProductModel = require('./../models/productModel');

const CART_STATUS = {
    'ACTIVE':1,
    'CLOSED':2
}

const getProductsCartUser = async (idUser) => {
    //TODO
    /*
        [
            {
                product: {
                    _id,
                    name,
                    image
                },
                quantity:
                price:
            }
        ]
    */
}

const addProductCartUser = async (idUser, idProduct) => {
    try{
        const product = await ProductModel.findById(idProduct);
        //carrito activo
        const cartActive = await getActiveCartByUser(idUser);
        
        // agregar producto a la lista del carrito
        const data = {
            product_id: idProduct,
            quantity: 1,
            unit_price: product.price,
            cart_id: cartActive._id

        };
        const cartProduct = CartProductsModel(data);
        await cartProduct.save();

        return {
            response: cartProduct,
            httpStatus: 201
        }

    } catch (error){
        return {
            response: "server error",
            httpStatus: 500
        }
    }
};

const getActiveCartByUser = async (idUser)=>{
    const query = {
        user_id: idUser,
        status: CART_STATUS.ACTIVE
    };
    let cart = null;
    cart = await CartModel.findOne(query);

    if (!cart) {
        cart = CartModel(query);
        await cart.save()
    

    }
    return cart;
}

module.exports = {
    addProductCartUser,
    getProductsCartUser
}