import {
  CART_ADD_DECREMENT,
  CART_ADD_INCREMENT,
  CART_ADD_ITEM,
  CART_EMPTY_ITEM,
} from '../constants/cartConstants';

export const addToCart = (qty, data) => async (dispatch, getState) => {
  const { id, name, img, slug, price, abbreviated } = data;
  dispatch({
    type: CART_ADD_ITEM, // Type AJOUT D'UN ARTILE
    payload: {
      id,
      name,
      img,
      slug,
      price,
      abbreviated,
      qty,
    },
  });
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

export const cartIncrement = (id) => async (dispatch, getState) => {
  dispatch({
    type: CART_ADD_INCREMENT,
    payload: id,
  });
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

export const cartDecrement = (id) => async (dispatch, getState) => {
  dispatch({
    type: CART_ADD_DECREMENT,
    payload: id,
  });
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

export const cartItemRemove = () => async (dispatch, getState) => {
  dispatch({
    type: CART_EMPTY_ITEM,
  });
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};
