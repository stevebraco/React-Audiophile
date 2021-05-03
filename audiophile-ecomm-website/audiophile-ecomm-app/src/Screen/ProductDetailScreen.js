import React, { useState } from "react";
import Card from "../components/Card";
import ProductDetail from "../components/ProductDetail";
import Data from "../data.json";

export default function ProductDetailScreen(props) {
  const [qty, setQty] = useState(1);

  const index = props.match.params.slug - 1;

  const [product, setProduct] = useState(Data[index]);

  const addToCartHandler = () => {
    props.history.push(`/cart/${index}?qty=${qty} `)
}

  const {
    name,
    id,
    category,
    description,
    image,
    slug,
    imgStart,
    new: newProduct,
    price,
    features,
    includes,
  } = product;
  const priceChange = parseFloat(price / 1000);

  return (
    <div>
      PRODUCT DETAILS
      <>
        <div
          className="card dp-flex container"
          style={{
            display: "flex",
            flexDirection: imgStart === "start" ? "row-reverse" : "row",
          }}
        >
          <img
            className="card__img"
            src={`${process.env.PUBLIC_URL}/${image.desktop}`}
            alt={name}
          />
          <div className="card__content">
            {newProduct ? (
              <p className="card__new-product l-spacing">new product</p>
            ) : null}

            <h2 className="card__title">{name}</h2>
            <p className="card__description-details ">{description}</p>
            <h6 className="card__price-details">${priceChange}</h6>
            <div className="dp-flex">
              <div className="card__wrapper-input">
                <input
                  className="card__input-details"
                  type="text"
                  onChange={(e) => setQty(e.target.value)}
                  value={qty}
                />
                <button className="card__plus-details">+</button>
                <button className="card__minus-details">-</button>
              </div>
              <button onClick={addToCartHandler} className="btn btn-primary">
                add to cart
              </button>
            </div>
          </div>
        </div>
        <div className="card-features container">
          <div className="card-features__container dp-flex ">
            <div className="card-features__description">
              <h3 className="card-features__title">features</h3>
              <p className="card-features__text">{features}</p>
            </div>

            <div className="card-features__description-box">
              <h3 className="card-features__title">in the box</h3>
              <ul>
                {includes.map((item) => (
                  <li>
                    {" "}
                    {item.quantity}x{" "}
                    <span className="c-primary card-features__item">
                      {item.item}
                    </span>{" "}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}
