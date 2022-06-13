import {
  CART_ADD_DECREMENT,
  CART_ADD_INCREMENT,
  CART_ADD_ITEM,
  CART_EMPTY_ITEM,
} from '../constants/cartConstants';

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM: //Action: AJOUT ARTICLE
      const item = action.payload;
      const existItem = state.cartItems.find((x) => x.id === item.id); // item existe déja
      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) => {
            return x.id === existItem.id ? item : x;
          }),
        };
      } else {
        return { ...state, cartItems: [...state.cartItems, item] };
      }

    case CART_EMPTY_ITEM:
      return { ...state, cartItems: [] };

    case CART_ADD_INCREMENT:
      let addedItem = state.cartItems.find(
        (item) => item.id === action.payload
      );
      addedItem.qty += 1;
      if (addedItem.qty >= 10) {
        addedItem.qty = 10;
      }
      return {
        ...state,
      };

    case CART_ADD_DECREMENT:
      const { cartItems } = state;
      let takeOffItem = state.cartItems.find(
        (item) => item.id === action.payload
      );
      takeOffItem.qty -= 1;
      if (takeOffItem.qty === 0) {
        const deleteItem = state.cartItems.filter(
          (x) => x.id !== action.payload
        );
        return { ...state, cartItems: deleteItem };
      }
      return {
        ...state,
      };

    default:
      return state;
  }
};

// export const addIncrementReducer = (state = {cartItems:[]}, action ) => {
//   switch(action.type) {
//     case CART_ADD_INCREMENT:
//       console.log('coucou');
//       return {
//         ...state
//       }
//   }
// }
