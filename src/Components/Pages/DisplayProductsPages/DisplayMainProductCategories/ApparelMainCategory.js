import React from "react";
import "./DisplayMainProduct.css";
import { Link } from "react-router-dom";

const ApparelMainCategory = () => {
  return (
    <div>
      {/* Banner */}
      <div className="electronic-banner">
        <img
          src="https://res.cloudinary.com/shokhbari/image/upload/v1714476780/Apparel_Collection1_mysy22.jpg"
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
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1711790303/ht_bkaklu.png"
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
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1711789212/2_agr4fd.png"
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
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1711789423/febirc_jqcakh.png"
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
