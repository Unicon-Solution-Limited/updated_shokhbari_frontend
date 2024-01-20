import React from "react";
import AllHeader from "../Shared/Header/AllHeader";
import AllFooter from "../Shared/Footer/AllFooter";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import googleIcon from "../Image/Logo/google.svg";
import "./MerchantFrontPage.css";

const MerchantFrontPage = () => {
  return (
    <>
      <AllHeader />
      <main className="container my-5">
      <h2 className="text-center mb-4">Merchant Zone</h2>
        <section className="merchant-front-button">
          <Link to="/merchant-policies" className="myBtn py-2 px-3">
            Policy
          </Link>
          <Link
            to="/merchant-dashboard"
            className="myBtn py-2 px-3"
          >
            Dashboard
          </Link>
        </section>
      </main>

      {/* ******************************** Login Form */}
      <div
        class="modal fade"
        id="loginModal"
        tabindex="-1"
        aria-labelledby="loginModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="loginModalLabel">
                Merchant Login
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div className="py-3">
                <form className="from-box">
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      //   ref={emailRef}
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      required
                    />
                    <div id="emailHelp" className="form-text"></div>
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleInputPassword1"
                      className="form-label"
                    >
                      Password
                    </label>
                    <input
                      //   ref={passwordRef}
                      type="password"
                      className="form-control"
                      id="exampleInputPassword1"
                      required
                    />
                  </div>
                  {/* error showing */}
                  {/* <p style={{ color: "red", textAlign: "center", fontWeight: "700" }}>
                        {error}
                    </p> */}
                  <input
                    type="submit"
                    // disabled={loading}
                    value="Login"
                    className="login-btn mt-2"
                  />
                </form>
                {/* google sign button*/}
                <div className="google-box">
                  <button className="google-btn container">
                    <img
                      className="google-icon"
                      src={googleIcon}
                      alt="google"
                    />
                    <span>Continue with google</span>
                  </button>
                </div>
                <div className="switch-registration-text pb-3">
                  {/* <p>Need an account?</p> */}

                  <Link to="/forgotPassword" className="login-text pt-3">
                    Forget Password ?
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ******************************** Registration Form */}
      {/* <div
        class="modal fade"
        id="registrationModal"
        tabindex="-1"
        aria-labelledby="registrationModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="registrationModalLabel">
                Merchant Registration
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div className="">
                <h6 className="text-danger text-center">
                  প্রিয় উদ্দ্যোক্তা! মার্সেন্ট হতে আহগ্রহ প্রকাশ করার জন্য
                  আপনাকে ধন্যবাদ।
                </h6>
                <form className="py-2">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-2">
                        <label htmlFor="displayName" className="form-label">
                          Your Business/Store Name *
                        </label>
                        <input
                          //   ref={nameRef}
                          required
                          type="text"
                          className="form-control"
                          id="displayName"
                          aria-describedby="nameHelp"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-2">
                        <label htmlFor="displayName" className="form-label">
                          Your Name *
                        </label>
                        <input
                          //   ref={nameRef}
                          required
                          type="text"
                          className="form-control"
                          id="displayName"
                          aria-describedby="nameHelp"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-2">
                        <label htmlFor="displayName" className="form-label">
                          Your Contact Number *
                        </label>
                        <input
                          //   ref={nameRef}
                          required
                          type="text"
                          className="form-control"
                          id="displayName"
                          aria-describedby="nameHelp"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-2">
                        <label
                          htmlFor="exampleInputEmail1"
                          className="form-label"
                        >
                          Email address *
                        </label>
                        <input
                          //   ref={emailRef}
                          required
                          type="email"
                          className="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                        />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="mb-2">
                        <label
                          htmlFor="exampleInputPassword1"
                          className="form-label"
                        >
                          Password
                        </label>
                        <input
                          //   ref={passwordRef}
                          required
                          type="password"
                          className="form-control"
                          id="exampleInputPassword1"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-2">
                        <label
                          htmlFor="exampleInputConfirmPassword"
                          className="form-label-signup mb-2"
                        >
                          Confirm password
                        </label>
                        <input
                          //   ref={confirmPasswordRef}
                          required
                          type="password"
                          className="form-control"
                          id="exampleInputConfirmPassword"
                        />
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div className="form-check my-4">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label class="form-check-label" for="flexCheckDefault">
                        I Accept <Link to="/">Terms and Condition</Link>
                        </label>
                      </div>
                    </div>
                  </div>
                  <input
                    type="submit"
                    // disabled={loading}
                    value="Signup"
                    className="btn-signup"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <AllFooter />
    </>
  );
};

export default MerchantFrontPage;
