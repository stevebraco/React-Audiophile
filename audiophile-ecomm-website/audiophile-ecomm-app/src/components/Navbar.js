import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="header">
      <nav className="navbar container dp-flex">
        <div className="navbar__menu dp-flex">
          <img className="navbar__logo" src={`${process.env.PUBLIC_URL}/assets/shared/desktop/logo.svg`} alt="logo" />
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
        <img src={`${process.env.PUBLIC_URL}/assets/shared/desktop/icon-cart.svg`} alt="cart" />
      </nav>
    </header>
  );
}
