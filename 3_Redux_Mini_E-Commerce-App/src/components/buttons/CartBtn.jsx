import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const CartBtn = () => {
  const state = useSelector((state) => state.urunlerEkle);
  // console.log(state);
  // console.log(state.length);
  return (
    <div>
      <NavLink to="/cart" className="btn btn-outline-primary ms-2">
        <span className="fa fa-shopping-cart me-1">
          {' '}
          Sepet ({state.length}){' '}
        </span>
      </NavLink>
    </div>
  );
};

export default CartBtn;
