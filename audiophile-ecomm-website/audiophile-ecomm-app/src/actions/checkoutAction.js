import { CHECKOUT_DATA } from '../constants/checkoutConstants';

export const infoCheckout = (data) => async (dispatch, getState) => {
  dispatch({
    type: CHECKOUT_DATA, // Type AJOUT D'UN ARTILE
    payload: data,
  });
  localStorage.setItem('checkout', JSON.stringify(getState().checkout));
};
