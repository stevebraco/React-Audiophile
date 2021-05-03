import { CART_ADD_INCREMENT, CART_ADD_ITEM } from "../constants/cartConstants";

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM: //Action: AJOUT ARTICLE
      const item = action.payload;
      console.log("CARD_ADD_ITEM", item);
      console.log("item.product", item.id);
      const existItem = state.cartItems.find((x) => x.id === item.id); // item existe déja
      console.log("exist item", existItem);
      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.id === existItem.id ? item : x
          ),
        };
      } else {
        return { ...state, cartItems: [...state.cartItems, item] };
      };

    default:
      return state;
  }
};

