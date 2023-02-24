import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import datas from '../Data';
import { urunEkle, urunSil } from './redux/actions/main';

const ProductDetail = () => {
  const [sepetBtn, setSepetBtn] = useState('Sepete Ekle');

  const urunid = useParams();
  const urunDetay = datas.filter((x) => x.id == urunid.id);
  const urun = urunDetay[0];
  //   console.log(urunDetay);

  const dispatch = useDispatch();

  const sepeteEkle = (urun) => {
    if (sepetBtn === 'Sepete Ekle') {
      dispatch(urunEkle(urun));
      setSepetBtn('Sepetten Kaldır');
    } else {
      dispatch(urunSil(urun));
      setSepetBtn('Sepete Ekle');
    }
  };

  return (
    <div>
      <div className="container">
        <div className="row my-5 py-5">
          <div className="col-md-6 urun">
            <img src={urun.img} alt="" width="400px" />
          </div>
          <div className="col-md-6">
            <h1>{urun.title}</h1>
            <hr />
            <h2>{urun.price} ₺</h2>
            <p>{urun.desc}</p>
            <button
              className="btn btn-outline-success my-5 w-50"
              onClick={() => sepeteEkle(urun)}
            >
              {sepetBtn}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
