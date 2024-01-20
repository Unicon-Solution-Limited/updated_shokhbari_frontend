import React, { useEffect, useRef, useState } from "react";
import { useAuth } from "../../Authentication/AuthContext/AuthContext";
import { Link, useHistory } from "react-router-dom";
import "./UserProfile.css";
import UserProfileEditPopup from "./UserProfileEditPopup/UserProfileEditPopup";

const UserProfile = () => {
  const { currentUser, passwordUpdate, logout, updateUserImage } = useAuth();
  const [popupCondition, setPopupCondition] = useState(false);
  const fileRef = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  //this is for mobile image update
  // const handleFileSubmit = async (e) => {
  //   e.preventDefault();

  //   const promisesForFile = [];
  //   setLoading(true);

  //   if (fileRef.current.value) {
  //     promisesForFile.push(updateUserImage(fileRef.current.value));
  //   }

  //   Promise.all(promisesForFile)
  //     .then(() => {
  //       history.push("/userProfile");
  //       window.location.reload();
  //     })
  //     .catch(() => {
  //       setError("Faild to update your profile or already exist");
  //     })
  //     .finally(() => {
  //       setLoading(false);
  //     });
  // };

  // console.log(currentUser, "image data");

  return (
    <>
      <div className="userProfile">
        <div className="jumbotron">
          <h2 className="d-flex">
            Welcome,
            <span style={{ color: "#ffaa00", paddingLeft: "5px" }}>
              <h2> {currentUser.displayName} </h2>{" "}
            </span>
          </h2>
          <h3>Your Information</h3>
        </div>

        <div className="row g-3 pt-3">
          {/* this is for name edit */}
          <div className="col-md-12">
            <div>
              <label htmlFor="nameInput" className="form-label">
                Name
              </label>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  id="nameInput"
                  name="name"
                  defaultValue={currentUser?.displayName}
                  readOnly
                />

                <button
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                  className="popup-edit-save-btn"
                  onClick={() => setPopupCondition("name")}
                >
                  <i className="bi bi-pencil-square p-2"></i>
                  Edit
                </button>
              </div>
            </div>
          </div>
          {/* this is for email edit */}
          <div className="col-md-12">
            <label htmlFor="emailInput" className="form-label">
              Email
            </label>
            <div className="input-group">
              <input
                type="email"
                className="form-control"
                name="email"
                id="emailInput"
                defaultValue={currentUser?.email}
                readOnly
              />
              <button
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
                className="popup-edit-save-btn"
                onClick={() => setPopupCondition("email")}
              >
                <i className="bi bi-pencil-square p-2"></i>
                Edit
              </button>
            </div>
          </div>
          {/* this is for password edit */}
          <div className="col-md-12">
            <label htmlFor="passwordInput" className="form-label">
              Password
            </label>
            <div className="input-group">
              <input
                type="password"
                className="form-control"
                name="password"
                id="passwordInput"
                readOnly
                defaultValue="*********"
              />

              <button
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
                className="popup-edit-save-btn"
                onClick={() => setPopupCondition("password")}
              >
                <i className="bi bi-pencil-square p-2"></i>
                Edit
              </button>
            </div>
          </div>

          {/*start profile image updte */}
          {/* <div className="col-md-12">
            <form className=" pb-3">
              <label htmlFor="fileInput" className="form-label">
                Update profile image
              </label>
              <div className="input-group">
                <input
                  type="file"
                  className="form-control"
                  name="file"
                  id="fileInput"
                  required
                />

                <button
                  className="image-upload-btn"
                  style={{ padding: "0px 5px" }}
                >
                  <i className="bi bi-pencil-square p-1"></i>
                  Save
                </button>
              </div>
            </form>
          </div> */}
          {/*end profile img updte */}

          {/* condition pass for the popup input*/}
          <UserProfileEditPopup popupCondition={popupCondition} />
        </div>
      </div>
    </>
  );
};

export default UserProfile;
