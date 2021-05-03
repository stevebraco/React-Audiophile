import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Modal from "@material-ui/core/Modal";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../actions/cartActions";


export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [qty, setQty] = useState(0);



  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart; // Déstructure cart.cartItems

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  

  return (
    <header className="header">
      <nav className="navbar container dp-flex">
        <div className="navbar__menu dp-flex">
          <img
            className="navbar__logo"
            src={`${process.env.PUBLIC_URL}/assets/shared/desktop/logo.svg`}
            alt="logo"
          />
          <Link className="navbar__link" to="/">
            home
          </Link>
          <Link className="navbar__link" to="/headphones">
            headphones
          </Link>
          <Link className="navbar__link" to="/speakers">
            speakers
          </Link>
          <Link className="navbar__link" to="/earphones">
            earphones
          </Link>
        </div>
        <button onClick={handleOpen}>
          <img
            src={`${process.env.PUBLIC_URL}/assets/shared/desktop/icon-cart.svg`}
            alt="cart"
          />
        </button>
      </nav>
      <Modal open={open} onClose={handleClose}>
        <div className="cart">
          <div className='dp-flex'>
          <p> cart ({cartItems.length}) </p>
          <button> Remove all</button>
          </div>
          <div>
          {
            cartItems.map(item => (
              <div>
                <p>{item.id}</p>
              <img className='cart__img' src={`${process.env.PUBLIC_URL}/assets/cart/image-${item.slug}.jpg`} alt=""/>
              <div>
              <p> {item.name} </p>
              <p> {item.price} </p>
              </div>
              
              <div className="card__wrapper-input">
             <p> {item.qty}</p>
              <button
                className="card__plus-details black-op"
              >
                +
              </button>
              <button
                className="card__minus-details black-op"
              >
                -
              </button>
            </div>

              </div>
            ))
          }
          </div>
        </div>
      </Modal>
    </header>
  );
}
