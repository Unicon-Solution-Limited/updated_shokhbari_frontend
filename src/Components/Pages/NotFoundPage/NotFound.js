import React from "react";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="notFoundBody">
      <div className="mainNotFoundBody">
        <img src="https://i.ibb.co/rdKV70q/404.gif" alt="Not Found" />
        <br />
        <a href="/" className="btn myBtn mt-3">
          Go Back Home Page
        </a>
      </div>
    </div>
  );
};

export default NotFound;
