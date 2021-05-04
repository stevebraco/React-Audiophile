import { CART_ADD_DECREMENT, CART_ADD_INCREMENT, CART_ADD_ITEM, CART_EMPTY_ITEM } from "../constants/cartConstants"
import test from '../data.json'

export const addToCart = (productId, qty) => async (dispatch, getState) => {
    console.log(productId, qty);
    //Middleware crée en backend pour avoir l'id
    const data =  test[productId]
    dispatch({  // expédier l'action
        type: CART_ADD_ITEM, // Type AJOUT D'UN ARTILE
        payload: {           // LES DONNEES A AVOIR POUR AFFICHER L'ARTICLE
            id: data.id,
            name: data.name,
            img: data.image.desktop,
            slug: data.slug,
            price: data.price,
            abbreviated: data.abbreviated,
            qty
            
        }
    })
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

export const cartIncrement = (id) => async (dispatch, getState) => {
    console.log(id);
    dispatch({
        type: CART_ADD_INCREMENT,
        payload: id
    })
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));

}

export const cartDecrement = (id) => async (dispatch, getState) => {
    console.log(id);
    dispatch({
        type: CART_ADD_DECREMENT,
        payload: id
    })
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));

}

export const cartItemRemove = () => async (dispatch, getState) => {
    dispatch({
        type: CART_EMPTY_ITEM,
    })
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));

}






