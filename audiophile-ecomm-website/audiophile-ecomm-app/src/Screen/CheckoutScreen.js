import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import BtnGoBack from '../components/BtnGoBack';
import Modal from '@material-ui/core/Modal';

export default function CheckoutScreen() {
  const [paymentMethod, setPaymentMethod] = useState('Paypal');
  const [open, setOpen] = useState(false);

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart; // Déstructure cart.cartItems

  const filterPrice = (price) => {
    const priceLength = price.toString().length;
    if (priceLength >= 4) {
      price = (price / 1000).toFixed(3);
    }
    return price;
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="container">
      <BtnGoBack />
      <div className="checkout-summary dp-flex space-between container">
        <div className="checkout">
          <h3 className="checkout__title">checkout</h3>
          <form>
            <div>
              <small className="checkout__small">billing details</small>
              <div className="checkout__container-two dp-flex space-between">
                <div className="checkout__form-group">
                  <label htmlFor="name">name</label>
                  <input type="text" name="name" placeholder="Alexei Ward" />
                </div>

                <div className="checkout__form-group">
                  <label htmlFor="email">email address</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="alexei@mail.com"
                  />
                </div>
              </div>
              <div className="checkout__form-group">
                <label htmlFor="number">phone number</label>
                <input
                  type="text"
                  name="number"
                  placeholder="+1 202-555-0136"
                />
              </div>
            </div>
            <div>
              <small className="checkout__small">shipping info</small>
              <div className="checkout__form-group-full">
                <label htmlFor="address">address</label>
                <input
                  type="text"
                  name="address"
                  placeholder="1137 Williams Avenue"
                />
              </div>

              <div className="checkout__container-two dp-flex space-between">
                <div className="checkout__form-group">
                  <label htmlFor="zipcode">ZIP code</label>
                  <input type="text" name="zipcode" placeholder="10001" />
                </div>
                <div className="checkout__form-group">
                  <label htmlFor="city">city</label>
                  <input type="text" name="city" placeholder="New York" />
                </div>
              </div>

              <div className="checkout__form-group">
                <label htmlFor="country">country</label>
                <input type="text" name="country" placeholder="United States" />
              </div>
            </div>
            <div>
              <small className="checkout__small">payment details</small>
              <div className="dp-flex space-between">
                <label> payment method </label>
                <div>
                  <div className="checkout__method">
                    <input
                      type="radio"
                      id="paypal"
                      value="PayPal"
                      name="paymentMethod"
                      required
                      checked
                      onChange={(e) => setPaymentMethod(e.target.value)}
                    />
                    <label htmlFor="paypal" className="no-capitalize">
                      e-Money
                    </label>
                  </div>
                  <div className="checkout__method">
                    <input
                      type="radio"
                      id="stripe"
                      value="Stripe"
                      name="paymentMethod"
                      required
                      onChange={(e) => setPaymentMethod(e.target.value)}
                    />
                    <label htmlFor="stripe" className="no-capitalize">
                      Cash on Delivery
                    </label>
                  </div>
                </div>
              </div>
              <div className="checkout__container-two dp-flex space-between">
                <div className="checkout__form-group">
                  <label htmlFor="moneyNumber" className="no-capitalize">
                    e Money Number
                  </label>
                  <input
                    type="text"
                    id="moneyNumber"
                    name="moneyNumber"
                    placeholder="238521993"
                  />
                </div>
                <div className="checkout__form-group ">
                  <label htmlFor="moneyPin" className="no-capitalize">
                    e Money PIN
                  </label>
                  <input
                    type="text"
                    id="moneyPin"
                    name="moneyPin"
                    placeholder="6891"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="summary">
          <h3 className="checkout__title">summary</h3>
          <div>
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="cart__product dp-flex space-between"
              >
                <div className="dp-flex ">
                  <img
                    className="cart__img"
                    src={`${process.env.PUBLIC_URL}/assets/cart/image-${item.slug}.jpg`}
                    alt=""
                  />
                  <div>
                    <p className="uppercase"> {item.abbreviated} </p>
                    <strong className="black-op">
                      {' '}
                      ${filterPrice(item.price)}{' '}
                    </strong>
                  </div>
                </div>

                <div>
                  <p className="card__value-details--summary black-op">
                    {' '}
                    x{item.qty}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="summary__prices dp-flex fd-column">
            <div className="dp-flex space-between">
              <p className="uppercase">total</p>
              <strong> ${filterPrice(cart.totalPrice)} </strong>
            </div>
            <div className="dp-flex space-between">
              <p className="uppercase">shipping</p>
              <strong> ${filterPrice(cart.totalShipping)} </strong>
            </div>
            <div className="dp-flex space-between">
              <p className="uppercase">vat (included)</p>
              <strong>
                {' '}
                {(cart.totalPrice / cart.totalShipping / 100).toFixed(3)}{' '}
              </strong>
            </div>
            <div className="dp-flex space-between">
              <p className="uppercase">grand total</p>
              <strong className="c-primary">
                {' '}
                {((cart.totalPrice + cart.totalShipping) / 1000).toFixed(
                  3
                )}{' '}
              </strong>
            </div>
            <button
              onClick={handleOpen}
              className="btn btn-primary btn-primary--checkout"
            >
              continue & pay
            </button>
          </div>
        </div>
      </div>
      <Modal open={open} onClose={handleClose}>
        <div className="modal-checkout">
          <h1>coucou</h1>
        </div>
      </Modal>
    </div>
  );
}
