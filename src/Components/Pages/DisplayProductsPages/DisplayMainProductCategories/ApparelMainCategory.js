import React from "react";
import "./DisplayMainProduct.css";
import { Link } from "react-router-dom";

const ApparelMainCategory = () => {
  return (
    <div>
      {/* Banner */}
      <div className="electronic-banner">
        <img
          src="https://res.cloudinary.com/shokhbari/image/upload/v1686396982/shokhbari_apparel/01_Mens-Clothings_ox7ynd.webp"
          alt=""
        />
      </div>

      {/* Content */}
      <div className="container py-5">
        <div className="row">
          {/* Buttons */}
          <div className="col-xs-12 col-lg-4 mb-3">
            <Link
              to={`/ApparelsItem/${"Men’s-Clothing"}`}
              className="custom-link"
            >
              <button className="mb-2 mainCategory-button">
                <img
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1709189955/shokhbari_electronices/laptopIcon.jpg_vyfjno.png"
                  alt="Logo"
                  className="logo-category"
                />
                <span className="categoryHeadline">Men’s-Clothing</span>
              </button>
            </Link>
          </div>
          <div className="col-xs-12 col-lg-4 mb-3">
            <Link
              to={`/ApparelsItem/${"Women’s-Clothing"}`}
              className="custom-link"
            >
              <button className="mb-2 mainCategory-button">
                <img
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1709375778/brandPc1_uroglw.png"
                  alt="Logo"
                  className="logo-category"
                />
                <span className="categoryHeadline">Women’s-Clothing</span>
              </button>
            </Link>
          </div>

          <div className="col-xs-12 col-lg-4 mb-3">
            <Link to={`/ApparelsItem/${"Fabrics"}`} className="custom-link">
              <button className="mb-2 mainCategory-button">
                <img
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1709375778/brandPc1_uroglw.png"
                  alt="Logo"
                  className="logo-category"
                />
                <span className="categoryHeadline">Fabrics</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApparelMainCategory;
