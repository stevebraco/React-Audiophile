import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "@material-ui/core/Modal";
import { useDispatch, useSelector } from "react-redux";
import {
  cartDecrement,
  cartIncrement,
  cartItemRemove,
} from "../actions/cartActions";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart; // Déstructure cart.cartItems

  const totalPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  cart.totalPrice = totalPrice;
  cart.totalShipping = 50
  cart.totalTax = 1.079

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleIncrement = (item) => {
    dispatch(cartIncrement(item));
  };
  const handleDecrement = (item) => {
    dispatch(cartDecrement(item));
  };

  const cartEmpty = () => {
    dispatch(cartItemRemove());
  };

  const filterPrice = (price) => {
    const priceLength = price.toString().length;
    if (priceLength >= 4) {
      price = (price / 1000).toFixed(3);
    }

    return price;
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
          <div className="cart__info dp-flex space-between">
            <h6> cart ({cartItems.length}) </h6>
            <button
              className=" cart__remove black-op"
              onClick={() => cartEmpty()}
            >
              {" "}
              Remove all
            </button>
          </div>
          <div className="cart__container">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="cart__product dp-flex space-between"
                >
                <div className="dp-flex">
                <img
                  className="cart__img"
                  src={`${process.env.PUBLIC_URL}/assets/cart/image-${item.slug}.jpg`}
                  alt=""
                />
                <div>
                  <p className="uppercase"> {item.name} </p>
                  <strong className="black-op">
                    {" "}
                    ${filterPrice(item.price)}{" "}
                  </strong>
                </div>
                </div>

                <div className="card__wrapper-input card__wrapper-input--cart">
                  <p className="card__value-details"> {item.qty}</p>
                  <button
                    className="card__plus-details black-op"
                    onClick={() => handleIncrement(item.id)}
                  >
                    +
                  </button>
                  <button
                    className="card__minus-details black-op"
                    onClick={() => handleDecrement(item.id)}
                  >
                    -
                  </button>
                </div>

              </div>
            ))}
          </div>
          <div className="dp-flex space-between">
            <div>
              <p className="uppercase black-op">total</p>
            </div>
            <strong>$ {filterPrice(totalPrice)}</strong>
          </div>
          <Link
            className="btn btn-primary btn-primary--checkout"
            to="/checkout"
          >
            {" "}
            checkout{" "}
          </Link>
        </div>
      </Modal>
    </header>
  );
}
