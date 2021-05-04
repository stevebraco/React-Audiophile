import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../actions/cartActions";
import Categories from "../components/Categories";
import Data from "../data.json";

export default function ProductDetailScreen(props) {
  const [qty, setQty] = useState(1);

  const productId = props.match.params.slug - 1;

  const [product] = useState(Data[productId]);
  const dispatch = useDispatch();

  const addToCartHandler = (productId, qty) => {
    //  props.history.push(`/cart/${productId}?qty=${qty} `)
    dispatch(addToCart(productId, qty));
  };

  const {
    name,
    id,
    category,
    description,
    image,
    imgStart,
    new: newProduct,
    price,
    features,
    includes,
    gallery,
    others,
  } = product;

  const handleToIncrement = () => {
    setQty(qty + 1);
  };
  const handleToDecrement = () => {
    setQty(qty - 1);
    if (qty <= 1) {
      setQty(1);
    }
  };

  const filterPrice = (price) => {
    
    const priceLength = price.toString().length
    if(priceLength === 4) {
      price = (price / 1000).toFixed(3);
    }


    return  price

  }
  
  

  return (
    <>
      {/* <div className="background-nav"></div> */}
    <div className='container'>
        <Link  to={`/${category}`}>
          <span className="go-back black-op"> Go Back </span>
        </Link>
      <div
        className="card dp-flex"
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
          <p className="card__description-details black-op ">{description}</p>
          <h6 className="card__price-details">$ {filterPrice(price)}</h6>
          <div className="dp-flex">
            <div className="card__wrapper-input">
              <p
                className="card__value-details"
              > {qty} </p>
              <button
                onClick={handleToIncrement}
                className="card__plus-details black-op"
              >
                +
              </button>
              <button
                onClick={handleToDecrement}
                className="card__minus-details black-op"
              >
                -
              </button>
            </div>
            <button
              onClick={() => addToCartHandler(productId, qty)}
              className="btn btn-primary"
            >
              add to cart
            </button>
          </div>
        </div>
      </div>
      <div className="card-features">
        <div className="card-features__container dp-flex ">
          <div className="card-features__description">
            <h3 className="card-features__title">features</h3>
            <p className="card-features__text black-op">{features}</p>
          </div>

          <div className="card-features__description-box">
            <h3 className="card-features__title">in the box</h3>
            <ul>
              {includes.map((item, index) => (
                <li key={index} >
                  <strong className="c-primary">{item.quantity}x</strong>
                  <span className="card-features__item black-op">
                    {item.item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="gallery">
        <div className="gallery__container dp-flex">
          <div className="gallery__two-gallery dp-flex fd-column">
            <img
              className="gallery__img"
              src={`${process.env.PUBLIC_URL}/${gallery.first.desktop}`}
              alt=""
            />
            <img
              className="gallery__img"
              src={`${process.env.PUBLIC_URL}/${gallery.second.desktop}`}
              alt=""
            />
          </div>
          <img
            className="gallery__img"
            src={`${process.env.PUBLIC_URL}/${gallery.third.desktop}`}
            alt=""
          />
        </div>
      </div>
      <div className="also-like">
        <h3 className="also-like__heading">you may also like</h3>
        <div className="also-like__container dp-flex">
          {others.map((item) => (
            <div key={id} className="also-like__card">
              <img
                className="also-like__img"
                src={`${process.env.PUBLIC_URL}/${item.image.desktop}`}
                alt={item.slug}
              />
              <h5 className="also-like__title"> {item.name} </h5>
              <Link to={`/product/${id}`} className="btn btn-primary">
                {" "}
                see product
              </Link>
            </div>
          ))}
        </div>
      </div>
        <Categories/>
    </div>
    </>
  );
}
