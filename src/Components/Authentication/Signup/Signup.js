import React, { useEffect, useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Signup.css";
import { useAuth } from "../AuthContext/AuthContext";
import AllHeader from "../../Shared/Header/AllHeader";
import AllFooter from "../../Shared/Footer/AllFooter";

const Signup = () => {
  let history = useHistory();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { signup, signWithGoogle, setIsNavigate } = useAuth();
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  // navigation changer
  useEffect(() => {
    setIsNavigate(true);
  });

  // sign with email and password
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (passwordRef.current.value.length < 6) {
      return setError("password must be at least 6 characters");
    }
    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      return setError("Password does not matched!");
    }
    try {
      setError("");
      setLoading(true);
      await signup(
        nameRef.current.value,
        emailRef.current.value,
        passwordRef.current.value
      );
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
          }
        });
      history.push("/");
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  return (
    <>
      <AllHeader />
      <div className="main-box-signup my-5 py-4">
        <h4 className="text-center py-3">Create an account</h4>
        <form className="from-box-signup px-3 py-2" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-6">
              <div className="mb-2">
                <label htmlFor="displayName" className="form-label">
                  Your Name
                </label>
                <input
                  ref={nameRef}
                  required
                  type="text"
                  className="form-control"
                  id="displayName"
                  aria-describedby="nameHelp"
                />
              </div>

              <div className="mb-2">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  ref={passwordRef}
                  required
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>
            </div>

            <div className="col-md-6">
              <div className="mb-2">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  ref={emailRef}
                  required
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>

              <div className="mt-2">
                <label
                  htmlFor="exampleInputConfirmPassword"
                  className="form-label-signup mb-2"
                >
                  Confirm password
                </label>
                <input
                  ref={confirmPasswordRef}
                  required
                  type="password"
                  className="form-control"
                  id="exampleInputConfirmPassword"
                />
              </div>
            </div>
          </div>
          <p
            style={{
              color: "red",
              textAlign: "center",
              fontWeight: "700",
              paddingTop: "20px",
            }}
          >
            {error}
          </p>
          <input
            type="submit"
            disabled={loading}
            value="Signup"
            className="btn-signup"
          />
        </form>

        <div className="switch-registration-text-signup">
          <p>Allready have an account?</p>
          <Link to="/login" className="text-signup">
            Login
          </Link>
        </div>
      </div>
      <AllFooter />
    </>
  );
};

export default Signup;
