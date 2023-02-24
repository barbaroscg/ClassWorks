import React from 'react';
import { NavLink } from 'react-router-dom';
import datas from '../Data';

const Product = () => {
  const data = datas;

  const cardItem = (item) => {
    return (
      <div className="col-md-4 " key={item.id}>
        <div className="card my-5 " style={{ width: '18rem' }}>
          <img src={item.img} className="card-img-top" alt={item.title} />
          <div className="card-body">
            <h5 className="card-title">{item.title}</h5>
            <p className="lead">{item.price} TL</p>
            <NavLink to={`/products/${item.id}`} className="btn btn-primary">
              Buy Now
            </NavLink>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="container py-5">
        <div className="row">
          <div className="col-12 ">
            <h1>Ürünler</h1>
            <hr />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">{data.map(cardItem)}</div>
      </div>
    </div>
  );
};

export default Product;
