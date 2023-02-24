import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { urunSil } from './components/redux/actions/main';
import { NavLink } from 'react-router-dom';

const Cart = () => {
  const state = useSelector((state) => state.urunlerEkle);
  const dispatch = useDispatch();

  const handleKapat = (urun) => {
    dispatch(urunSil(urun));
  };

  const sepettekiUrunler = (sepetUrun) => {
    return (
      <div className="bg-dark my-5 px-4 rounded-3">
        <div className="container py-3 my-5">
          <button
            className="btn-close btn-close-white float-end my-5"
            aria-label="Close"
            onClick={() => handleKapat(sepetUrun)}
          ></button>
          <div className="row justify-content-center text-light my-5">
            <div className="col-md-4">
              <img src={sepetUrun.img} alt={sepetUrun.title} height="300px" />
            </div>
            <div className="col-md-4">
              <h3>{sepetUrun.title}</h3>
              <p className="lead fw-bold ">Fiyat: {sepetUrun.price} ₺</p>
              <p className="lead  ">Açıklama: {sepetUrun.desc} ₺</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const sepetBos = () => {
    return (
      <div className="bg-dark my-5 px-4 rounded-3">
        <div className="container py-3 my-5 text-white">
          <div className="row">
            <h3>Sepetinizde Hiç Ürün Bulunmamaktadır...</h3>
          </div>
        </div>
      </div>
    );
  };

  const odemeBtn = () => {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <NavLink to="/checkout" className="btn btn-success w-25 ">
              Ödemeye Geç
            </NavLink>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      {state.length === 0 && sepetBos()}
      {state.length !== 0 && state.map(sepettekiUrunler)}
      {state.length !== 0 && odemeBtn()}
    </div>
  );
};

export default Cart;
