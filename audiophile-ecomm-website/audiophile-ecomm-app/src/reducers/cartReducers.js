import { CART_ADD_ITEM} from '../constants/cartConstants'


export const cartReducer = (state = { cartItems: [] }, action) => {
    switch (action.type) {
      case CART_ADD_ITEM: //Action: AJOUT ARTICLE
        const item = action.payload;
        console.log('CARD_ADD_ITEM',item);
        const existItem = state.cartItems.find((x) => x.product === item.product); // item existe déja
        console.log('exist item',existItem);
       
          return { ...state, cartItems: [...state.cartItems, item] };
        
     
      default:
        return state;
    }
  };
  