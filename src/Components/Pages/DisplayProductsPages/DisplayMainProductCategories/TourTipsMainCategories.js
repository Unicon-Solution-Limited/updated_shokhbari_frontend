import React from "react";
import "./DisplayMainProduct.css";
import { Link } from "react-router-dom";

const TourTipsMainCategories = () => {
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
            <Link to={`/TripItem/${"Travel"}`} className="custom-link">
              <button className="mb-2 mainCategory-button">
                <img
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1709189955/shokhbari_electronices/laptopIcon.jpg_vyfjno.png"
                  alt="Logo"
                  className="logo-category"
                />
                <span className="categoryHeadline">Travel</span>
              </button>
            </Link>
          </div>

          <div className="col-xs-12 col-lg-4 mb-3">
            <Link to={`/TripItem/${"Stay"}`} className="custom-link">
              <button className="mb-2 mainCategory-button">
                <img
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1709189955/shokhbari_electronices/laptopIcon.jpg_vyfjno.png"
                  alt="Logo"
                  className="logo-category"
                />
                <span className="categoryHeadline">Stay</span>
              </button>
            </Link>
          </div>

          <div className="col-xs-12 col-lg-4 mb-3">
            <Link to={`/TripItem/${"Tour_Guide"}`} className="custom-link">
              <button className="mb-2 mainCategory-button">
                <img
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1709189955/shokhbari_electronices/laptopIcon.jpg_vyfjno.png"
                  alt="Logo"
                  className="logo-category"
                />
                <span className="categoryHeadline">Tour Guide</span>
              </button>
            </Link>
          </div>

          <div className="col-xs-12 col-lg-4 mb-3">
            <Link to={`/TripItem/${"Package_Tour"}`} className="custom-link">
              <button className="mb-2 mainCategory-button">
                <img
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1709189955/shokhbari_electronices/laptopIcon.jpg_vyfjno.png"
                  alt="Logo"
                  className="logo-category"
                />
                <span className="categoryHeadline">Package Tour</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourTipsMainCategories;