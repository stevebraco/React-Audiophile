import React from "react";
import { Link } from "react-router-dom";
import Bringing from "../components/Bringing";
import Categories from "../components/Categories";

export default function HomeScreen() {
  return (
    <>
      <section className="home">
        <div className="home__container container">
          <div className="home__description-headphones">
            <p className="new-product l-spacing">new product</p>
            <h1 className="home__title">XX99 Mark II Headphones</h1>
            <p className="home__text">
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <Link className="btn btn-primary">see product</Link>
          </div>
        </div>
      </section>
      <Categories />
      <div className="container">
        <div className="speaker-zx9 dp-flex">
          <div className="speaker-zx9__img"
>
          <img
            src="./assets/home/desktop/image-speaker-zx9.png"
            alt=""
            srcset=""
          />
          </div>
          <div className="speaker-zx9__description">
            <h1 className="speaker-zx9__title">zx9 speaker</h1>
            <p className="speaker-zx9__text">
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
            <Link className="btn btn-black">see product</Link>
          </div>
        </div>

        <div className="speaker-zx7">
          <div className="speaker-zx7__description">
            <h4 className="speaker-zx7__title">zx7 speaker</h4>
            <Link className="btn btn-outline">see product</Link>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="earphones-yx1 dp-flex">
          <img
            className="earphones-yx1__img"
            src="./assets/home/desktop/image-earphones-yx1.jpg"
            alt=""
          />
          <div className="earphones-yx1__description">
            <h4 className="earphones-yx1__title">zx7 speaker</h4>
            <Link className="btn btn-outline">see product</Link>
          </div>
        </div>
      </div>
      <Bringing/>
    </>
  );
}
