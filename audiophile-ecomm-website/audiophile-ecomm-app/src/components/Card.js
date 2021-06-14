import React from "react";
import { Link } from "react-router-dom";

export default function Card({ name, id, category, description, image, slug, imgStart, new: newProduct, }) {
  return (
    <div className="card  dp-flex container" 
    style={{
              display: 'flex',
              flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'
            }}
    >
      <picture className='card__picture'>
      <source media="(max-width: 985px)" srcset={image.tablet}/> 
      <img className="card__img" src={image.desktop} alt={name} />
      </picture>
      <div className="card__content">
        {newProduct ? (
          <p className="card__new-product l-spacing">new product</p>
        ) : null}

        <h2 className="card__title ">{name}</h2>
        <p className="card__description black-op">{description}</p>
        <Link to={`/product/${id}`} className="btn btn-primary"> see product</Link>
      </div>
    </div>
  );
}
