import React from 'react';

const Login = () => {
  return (
    <div>
      <div>
        {/* Button trigger modal */}
        <button
          type="button"
          className="btn btn-outline-success ms-auto"
          data-bs-toggle="modal"
          data-bs-target="#loginModal"
        >
          <span className="fa fa-sign-in me-2"></span>
          Giriş
        </button>
        {/* Modal */}
        <div
          className="modal fade"
          id="loginModal"
          tabIndex={-1}
          aria-labelledby="loginModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="loginModalLabel">
                  Giriş
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <button className="btn btn-success w-100 mb-2">
                  <span className="fa fa-google me-2"></span>
                  Google ile Giriş
                </button>
                <button className="btn btn-success w-100 mb-2">
                  <span className="fa fa-facebook me-2"></span>
                  Facebook ile Giriş
                </button>
                <form>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                    <div id="emailHelp" className="form-text">
                      We'll never share your email with anyone else.
                    </div>
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleInputPassword1"
                      className="form-label"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputPassword1"
                    />
                  </div>
                  <div className="mb-3 form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="exampleCheck1"
                    />
                    <label className="form-check-label" htmlFor="exampleCheck1">
                      Check me out
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-outline-success w-100"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
