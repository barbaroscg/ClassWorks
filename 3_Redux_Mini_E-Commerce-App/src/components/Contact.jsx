import React from 'react';

const Contact = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12 text-start my-4 py-4">
            <h1>Bize sorularınızı iletiniz</h1>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-md-5">
            <img
              src="https://arasturkproperty.com/wp-content/uploads/2022/01/contactus-1.jpg"
              alt=""
              width="500px"
              height="400px"
            />
          </div>
          <div className="col-md-6">
            <form>
              <div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    Adınız
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Kampüs 365"
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="name@example.com"
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlTextarea1"
                    className="form-label"
                  >
                    Açıklama Yazınız
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows={3}
                    defaultValue={''}
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-outline-success w-100 my-4"
                >
                  Gönder
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
