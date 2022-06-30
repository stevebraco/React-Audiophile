import { CHECKOUT_DATA } from '../constants/checkoutConstants';

export const checkoutReducer = (state = { data: [] }, action) => {
  switch (action.type) {
    case CHECKOUT_DATA:
      return { ...action.payload };

    default:
      return state;
  }
};
