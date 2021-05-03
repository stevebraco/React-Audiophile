import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <nav className=" footer__nav dp-flex">
          <img
            className="navbar__logo"
            src={`${process.env.PUBLIC_URL}/assets/shared/desktop/logo.svg`}
            alt="logo"
          />
          <div className="navbar__menu dp-flex">
            <Link className="navbar__link" to="/">
              home
            </Link>
            <Link className="navbar__link" to="/headphones">
              headphones
            </Link>
            <Link className="navbar__link" to="/speakers">
              speakers
            </Link>
            <Link className="navbar__link" to="/earphones">
              earphones
            </Link>
          </div>
        </nav>

        <div className="footer__content dp-flex">
          <p className="footer__text">
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </p>
          <div className="footer__social dp-flex">
            <img
              src={`${process.env.PUBLIC_URL}/assets/shared/desktop/icon-facebook.svg`}
              alt="facebook"
            />
            <img
              src={`${process.env.PUBLIC_URL}/assets/shared/desktop/icon-twitter.svg`}
              alt="twitter"
            />
            <img
              src={`${process.env.PUBLIC_URL}/assets/shared/desktop/icon-instagram.svg`}
              alt="instagram"
            />
          </div>
        </div>
        <div className="footer__copy">Copyright 2021. All Rights Reserved</div>
      </div>
    </footer>
  );
}
