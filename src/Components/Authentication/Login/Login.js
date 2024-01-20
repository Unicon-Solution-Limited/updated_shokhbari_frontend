import React, { useEffect, useRef, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import googleIcon from "../../Image/Logo/google.svg";
import { useAuth } from "../AuthContext/AuthContext";
import "./Login.css";
import AllHeader from "./../../Shared/Header/AllHeader";
import AllFooter from "./../../Shared/Footer/AllFooter";

const Login = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { login, signWithGoogle, setIsNavigate, currentUser } = useAuth();
  const emailRef = useRef();
  const passwordRef = useRef();

  // react router dom path detect and go there
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  // navigation changer
  useEffect(() => {
    setIsNavigate(true);
  });

  // sign with email and password
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     setError("");
  //     setLoading(true);
  //     await login(emailRef.current.value, passwordRef.current.value);
  //     history.replace(from);
  //   } catch (err) {
  //     setError(err.message);
  //   }
  //   setLoading(false);
  // };
  // sign with email and password
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);

      //get jwt token
      const currentUser = {
        email: emailRef.current.value,
      };
      console.log(currentUser);

      fetch(`${process.env.REACT_APP_BACKEND_URL}/jwt`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(currentUser),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data) {
            localStorage.setItem("shokhbari-token", data.token);
            history.replace(from);
          }
        });
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  // sign with google
  const handleGoogleSignup = async () => {
    try {
      setError("");
      setLoading(true);
      await signWithGoogle();
      history.replace(from);
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  //when googlepopup successfull with currentUser email  and then the jwt will set
  useEffect(() => {
    const email = currentUser?.email;
    if (currentUser?.email) {
      //get jwt token
      const currentUser = {
        email: email,
      };
      console.log(currentUser);

      fetch(`${process.env.REACT_APP_BACKEND_URL}/jwt`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(currentUser),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data) {
            localStorage.setItem("shokhbari-token", data.token);
          }
        });
    }
  }, [currentUser?.email]);

  return (
    <>
      <AllHeader />
      <div className="main-box my-5 py-3">
        <h4 className="text-center">Login</h4>
        <form className="from-box px-5" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              ref={emailRef}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              required
            />
            <div id="emailHelp" className="form-text"></div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              ref={passwordRef}
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              required
            />
          </div>
          {/* error showing */}
          <p style={{ color: "red", textAlign: "center", fontWeight: "700" }}>
            {error}
          </p>
          <input
            type="submit"
            disabled={loading}
            value="Login"
            className="login-btn mt-2"
          />
        </form>

        {/* google sign button*/}
        <div className="google-box" onClick={handleGoogleSignup}>
          <button className="google-btn container">
            <img className="google-icon" src={googleIcon} alt="google" />
            <span>Continue with google</span>
          </button>
        </div>

        <div className="switch-registration-text pb-3">
          {/* <p>Need an account?</p> */}

          <Link to="/forgotPassword" className="login-text pt-3">
            Forget Password ?
          </Link>

          <Link to="/signup" className="login-text pt-3">
            Signup
          </Link>
        </div>
      </div>
      <AllFooter />
    </>
  );
};

export default Login;
