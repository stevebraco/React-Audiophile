import React from "react";
import { Link } from "react-router-dom";

export default function Card({ name, description, image, newProduct, imgStart }) {
  return (
    <div className="card dp-flex container" 
    style={{
              display: 'flex',
              flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'
            }}
    >
      <img className="card__img" src={image.desktop} alt={name} />
      <div className="card__content">
        {newProduct ? (
          <p className="card__new-product l-spacing">{newProduct}</p>
        ) : null}

        <h2 className="card__title">{name}</h2>
        <p className="card__description">{description}</p>
        <Link className="btn btn-primary"> see product</Link>
      </div>
    </div>
  );
}
