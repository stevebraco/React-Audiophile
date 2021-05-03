import { CART_ADD_INCREMENT, CART_ADD_ITEM } from "../constants/cartConstants"
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
            qty
            
        }
    })
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};




