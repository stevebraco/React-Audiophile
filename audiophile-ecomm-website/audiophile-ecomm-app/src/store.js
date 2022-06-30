import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { cartReducer } from './reducers/cartReducers';
import { checkoutReducer } from './reducers/checkoutReducers';
import { productsReducer } from './reducers/productsReducers';

const initialState = {
  products: localStorage.getItem('productsList')
    ? JSON.parse(localStorage.getItem('productsList'))
    : [],
  cart: {
    cartItems: localStorage.getItem('cartItems')
      ? JSON.parse(localStorage.getItem('cartItems'))
      : [],
  },
  checkout: localStorage.getItem('checkout')
    ? JSON.parse(localStorage.getItem('checkout'))
    : [],
};

const reducer = combineReducers({
  cart: cartReducer,
  products: productsReducer,
  checkout: checkoutReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
