import React, { useState } from "react";

export default function CheckoutScreen() {
  const [paymentMethod, setPaymentMethod] = useState("Paypal");
  return (
    <div className="checkout container">
      <h3>checkout</h3>
      <form>
        <div>
          <small>billing details</small>
          <div className='checkout__container-two dp-flex space-between'>
            <div className='checkout__form-group'>
              <label htmlFor="name">name</label>
              <input type="text" name="name" placeholder="Alexei Ward" />
            </div>

            <div className='checkout__form-group'>
              <label htmlFor="email">email address</label>
              <input type="email" name="email" placeholder="alexei@mail.com" />
            </div>
          </div>
          <div className='checkout__form-group'>
            <label htmlFor="number">phone number</label>
            <input type="text" name="number" placeholder="+1 202-555-0136" />
          </div>
        </div>
        <div>
          <small>shipping info</small>
          <div className='checkout__form-group-full'>
            <label htmlFor="address">address</label>
            <input
              type="text"
              name="address"
              placeholder="1137 Williams Avenue"
            />
          </div>

          <div className='checkout__container-two dp-flex space-between'>
            <div className='checkout__form-group'>
              <label htmlFor="zipcode">ZIP code</label>
              <input type="text" name="zipcode" placeholder="10001" />
            </div>
            <div className='checkout__form-group'>
              <label htmlFor="city">city</label>
              <input type="text" name="city" placeholder="New York" />
            </div>
          </div>

          <div className='checkout__form-group'>
            <label htmlFor="country">country</label>
            <input type="text" name="country" placeholder="United States" />
          </div>
        </div>
        <div>
          <small>payment details</small>
            <div>
              <input
                type="radio"
                id="paypal"
                value="PayPal"
                name="paymentMethod"
                required
                checked
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              <label htmlFor="paypal">E-money</label>
            </div>
            <div>
              <input
                type="radio"
                id="stripe"
                value="Stripe"
                name="paymentMethod"
                required
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              <label htmlFor="stripe">Cash on Delivery</label>
            </div>
        </div>
      </form>
    </div>
  );
}
