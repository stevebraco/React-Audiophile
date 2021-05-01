import React from "react";
import { Link } from "react-router-dom";


export default function HomeScreen() {
  return (
    <section className="home">
      <div className="home__container container">
        <div className="home__description-headphones">
          <p className='new-product' >new product</p>
          <h1 className='home__title' >XX99 Mark II Headphones</h1>
          <p className='home__text'>
          Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
          </p>
          <Link className='btn btn-primary' >
          see product
          </Link>
        </div>
        <img className='' src="./assets/home/desktop/image-hero.jpg" alt="" srcset=""/>
        
      </div>
    </section>
  );
}
