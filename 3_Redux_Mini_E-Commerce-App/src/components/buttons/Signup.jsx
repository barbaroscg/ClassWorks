import React from 'react';

const Signup = () => {
  return (
    <div>
      <div>
        {/* Button trigger modal */}
        <button
          type="button"
          className="btn btn-outline-success ms-2"
          data-bs-toggle="modal"
          data-bs-target="#signupModal"
        >
          <span className="fa fa-user-plus me-2"></span>
          Kayıt Ol
        </button>
        {/* Modal */}
        <div
          className="modal fade"
          id="signupModal"
          tabIndex={-1}
          aria-labelledby="signupModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="signupModalLabel">
                  Kayıt Ol
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
                  Google ile kayıt ol
                </button>
                <button className="btn btn-success w-100 mb-2">
                  <span className="fa fa-facebook me-2"></span>
                  Facebook ile kayıt ol
                </button>
                <form>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Username
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                    />
                    <div id="emailHelp" className="form-text">
                      We'll never share your email with anyone else.
                    </div>
                  </div>

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
                    Register
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

export default Signup;
