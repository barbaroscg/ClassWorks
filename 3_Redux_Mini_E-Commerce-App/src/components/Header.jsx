import React from 'react';
import { NavLink } from 'react-router-dom';
import CartBtn from '../components/buttons/CartBtn';
import Login from '../components/buttons/Login';
import Signup from '../components/buttons/Signup';

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Anasayfa
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">
                  Ürünler
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  Hakkımızda
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  İletişim
                </NavLink>
              </li>
            </ul>

            <NavLink className="navbar-brand ms-auto fw-bold" to="/">
              K-365 E-Commerce-App
            </NavLink>
            <Login />
            <Signup />
            <CartBtn />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
