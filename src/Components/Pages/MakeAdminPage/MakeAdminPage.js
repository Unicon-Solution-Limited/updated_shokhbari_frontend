import React, { useEffect, useRef, useState } from "react";
import "./MakeAdminPage.css";
import { useAuth } from "../../Authentication/AuthContext/AuthContext";

const MakeAdminPage = () => {
  const adminRef = useRef();
  const [isAdminAdd, setIsAdminAdd] = useState(false);
  const { currentUser } = useAuth();

  const handleAdminSubmit = () => {
    const mailEmail = {
      adminEmail: adminRef?.current?.value,
    };
    // INSERT A ADMIN AT THE DATABASE
    fetch(
      `${process.env.REACT_APP_BACKEND_URL}/admin?email=${currentUser.email}`,
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("shokhbari-token")}`,
        },
        body: JSON.stringify(mailEmail),
      }
    )
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          setIsAdminAdd(true);
        }
      });
  };

  return (
    <div className="makeAdminMainDiv">
      <form className="makeAdminFrom" onSubmit={handleAdminSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            ref={adminRef}
            aria-describedby="emailHelp"
          />
        </div>

        <button type="submit" className="makeAdminButton btn myBtn mb-3">
          Submit
        </button>
        <br />
        {isAdminAdd && (
          <span className="text-success">
            <i className="bi bi-check-circle"></i>
            Admin added Succuessfully
          </span>
        )}
      </form>
    </div>
  );
};

export default MakeAdminPage;
