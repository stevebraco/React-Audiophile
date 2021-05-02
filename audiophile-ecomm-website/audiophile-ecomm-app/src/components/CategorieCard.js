import React from 'react'
import { Link } from "react-router-dom";


export default function CategorieCard({img, title}) {
    return (
        <div className='categorie'>
        <figure className="categorie__figure">
        <img className='categorie__img' src={img} alt={title}/>
        </figure>
        <h6 className="categorie__title">{title}</h6>
        <Link className='btn-shop'>
        <span>shop</span>
        <img
              src="./assets/shared/desktop/icon-arrow-right.svg"
              alt="chevron-right"
            />
        </Link>
    </div>
    )
}
