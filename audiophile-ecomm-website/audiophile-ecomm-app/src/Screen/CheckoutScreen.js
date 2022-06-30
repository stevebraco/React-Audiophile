import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import BtnGoBack from '../components/BtnGoBack';
import Modal from '@material-ui/core/Modal';
import { infoCheckout } from '../actions/checkoutAction';
import { removeError, showError } from '../lib/checkoutForm';

export default function CheckoutScreen() {
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart; // Déstructure cart.cartItems

  const [paymentMethod, setPaymentMethod] = useState('emoney');

  const filterPrice = (price) => {
    const priceLength = price.toString().length;
    if (priceLength >= 4) {
      price = (price / 1000).toFixed(3);
    }
    return price;
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const [
      name,
      email,
      phoneNumber,
      addressShipping,
      zipcode,
      city,
      country,
      ,
      ,
      moneyNumber,
      moneyPin,
    ] = e.target;

    dispatch(
      infoCheckout({
        nameValue: name.value,
        emailValue: email.value,
        numberValue: phoneNumber.value,
        addressValue: addressShipping.value,
        zipcodeValue: zipcode.value,
        cityValue: city.value,
        countryValue: country.value,
        paymentMethod,
        moneyNumberValue: moneyNumber.value,
        moneyPinValue: moneyPin.value,
      })
    );
    const arrayInputs = [...e.target];
    let error = 0;
    arrayInputs.forEach((item) => {
      if (item.value === '') {
        if (item.parentElement.children[0].localName === 'label') {
          error += 1;
          showError(item);
        }
      } else {
        removeError(item);
      }
      if (item.name === 'email') {
        const re =
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(item.value.trim())) {
          error += 1;
          showError(item);
        } else {
          removeError(item);
        }
      }
    });
    if (!error) {
      setOpen(true);
    }
  };

  return (
    <div className="container">
      <BtnGoBack />
      <form
        className="checkout-summary dp-flex space-between container"
        onSubmit={handleSubmit}
      >
        <div className="checkout">
          <h3 className="checkout__title">checkout</h3>
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
                  type="text"
                  name="email"
                  placeholder="alexei@mail.com"
                  id="email"
                />
              </div>
            </div>
            <div className="checkout__form-group">
              <label htmlFor="number">phone number</label>
              <input type="text" name="number" placeholder="+1 202-555-0136" />
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
                    id="emoney"
                    value="emoney"
                    name="paymentMethod"
                    checked={paymentMethod === 'emoney'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                  <label htmlFor="emoney" className="no-capitalize">
                    e-Money
                  </label>
                </div>
                <div className="checkout__method">
                  <input
                    type="radio"
                    id="cash"
                    value="cash"
                    name="paymentMethod"
                    checked={paymentMethod === 'cash'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                  <label htmlFor="cash" className="no-capitalize">
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
                      ${filterPrice(item.price)}{' '}
                    </strong>
                  </div>
                </div>

                <div>
                  <p className="card__value-details--summary black-op">
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
                {(cart.totalPrice / cart.totalShipping / 100).toFixed(3)}
              </strong>
            </div>
            <div className="dp-flex space-between">
              <p className="uppercase">grand total</p>
              <strong className="c-primary">
                {((cart.totalPrice + cart.totalShipping) / 1000).toFixed(3)}
              </strong>
            </div>
            <button
              disabled={cartItems.length === 0}
              type="submit"
              // onClick={handleOpen}
              className={
                cartItems.length === 0
                  ? 'btn btn-disabled btn-primary--checkout'
                  : 'btn btn-primary btn-primary--checkout'
              }
            >
              continue & pay
            </button>
          </div>
        </div>
      </form>
      <Modal open={open} onClose={handleClose}>
        <div className="modal-checkout">
          <h1>coucou</h1>
        </div>
      </Modal>
    </div>
  );
}
