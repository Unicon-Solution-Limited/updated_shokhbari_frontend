import React, { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../../Authentication/AuthContext/AuthContext";
import "./UserProfileEditPopup.css";

function UserProfileEditPopup({ popupCondition }) {
  const emailRef = useRef();
  const passwordRef = useRef();
  const nameRef = useRef();
  const passwordConfirmRef = useRef();
  const { currentUser, updateUserName, updatePassword, updateEmail } =
    useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  //submission for Name
  const handleNameSubmit = async (e) => {
    e.preventDefault();

    const promisesForName = [];
    setLoading(true);

    if (nameRef.current.value) {
      promisesForName.push(updateUserName(nameRef.current.value));
    }

    Promise.all(promisesForName)
      .then(() => {
        history.push("/dashboard");
        window.location.reload();
      })
      .catch(() => {
        setError("Faild to update your profile or already exist");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // submission for Email
  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    const promisesForEmail = [];
    setLoading(true);
    if (emailRef.current.value !== currentUser.email) {
      promisesForEmail.push(updateEmail(emailRef.current.value));
    }

    Promise.all(promisesForEmail)
      .then(() => {
        history.push("/dashboard");
        window.location.reload();
      })
      .catch(() => {
        setError("Faild to update your profile or already exist");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // submission for password
  const handlePasswordSubmit = async (e) => {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Password do not match!");
    }

    const promisesForPassword = [];
    setLoading(true);

    if (passwordRef.current.value) {
      promisesForPassword.push(updatePassword(passwordRef.current.value));
    }

    Promise.all(promisesForPassword)
      .then(() => {
        history.push("/dashboard");
        window.location.reload();
      })
      .catch(() => {
        setError("password must be 6 character");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      {/* modal popup start  */}
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="text-center mb-4">Update Profile</h2>
              {error && (
                <div className="alert alert-danger" role="alert">
                  {error}
                </div>
              )}
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            {/* this is modal body */}
            <div className="modal-body">
              <div>
                {/* new name */}

                <div className="pb-5">
                  {popupCondition === "name" && (
                    <form onSubmit={handleNameSubmit}>
                      <label htmlFor="inputUserName1" className="form-label">
                        Enter new name
                      </label>
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control"
                          ref={nameRef}
                          required
                          id="inputUserName1"
                          name="name"
                          placeholder="Type your new name"
                        />
                        <button className="popup-edit-save-btn">
                          <i className="bi bi-check2-circle p-2"></i>
                          Save
                        </button>
                      </div>
                    </form>
                  )}
                </div>

                {/* new email */}
                {popupCondition === "email" && (
                  <div className="pb-5">
                    <form onSubmit={handleEmailSubmit}>
                      <label
                        htmlFor="inputUserEmail1"
                        className="form-label pt-2"
                      >
                        Enter new email
                      </label>
                      <div className="input-group">
                        <input
                          type="email"
                          className="form-control"
                          ref={emailRef}
                          required
                          id="inputUserEmail1"
                          name="email"
                          placeholder="Type your new email"
                        />

                        <button className="popup-edit-save-btn">
                          <i className="bi bi-check2-circle p-2"></i>
                          Save
                        </button>
                      </div>
                    </form>
                  </div>
                )}

                {/* new password */}
                {popupCondition === "password" && (
                  <div className="pb-5">
                    <form onSubmit={handlePasswordSubmit}>
                      <div className="mb-3">
                        <label
                          htmlFor="inputPassword1"
                          className="form-label pt-2"
                        >
                          Enter new password
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          id="inputPassword1"
                          ref={passwordRef}
                          placeholder="Type your new password"
                        />
                      </div>

                      {/* <div className="mb-3"> */}
                      <label htmlFor="passwordConfirm" className="form-label">
                        Password Confirmation
                      </label>
                      <div className="input-group">
                        <input
                          type="password"
                          className="form-control"
                          id="passwordConfirm"
                          ref={passwordConfirmRef}
                          placeholder="Confirm your password"
                        />
                        <button className="popup-edit-save-btn">
                          <i className="bi bi-check2-circle p-2"></i>
                          Save
                        </button>
                      </div>
                    </form>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* modal popup end */}
    </>
  );
}

export default UserProfileEditPopup;
