import React, { useEffect } from 'react'
import { useDispatch} from 'react-redux';
import { addToCart } from '../actions/cartActions';

export default function CartScreen(props) {
    const productId = props.match.params.slug;
    const qty = props.location.search
    ? Number(props.location.search.split("=")[1])
    : 1;    console.log(productId, qty);

   
  const dispatch = useDispatch();
  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);
    return (
        <div>
        CART
        </div>
    )
}
