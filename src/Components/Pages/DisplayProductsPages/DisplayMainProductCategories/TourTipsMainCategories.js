import React from "react";
import "./DisplayMainProduct.css";
import { Link } from "react-router-dom";
import AllHeader from "../../../Shared/Header/AllHeader";
import AllFooter from "../../../Shared/Footer/AllFooter";

const TourTipsMainCategories = () => {
  return (
    <>
      <AllHeader />
      {/* Banner */}
      <div className="electronic-banner">
        <img
          src="https://res.cloudinary.com/shokhbari/image/upload/v1714473055/Tour_And_Trips1_qdfsq9.jpg"
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
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1712559437/travelp_mzek9a.png"
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
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1712562307/stay_pdem9x.png"
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
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1712562014/tour_xuqarm.png"
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
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1712562176/tourPackgae_bbmg90.png"
                  alt="Logo"
                  className="logo-category"
                />
                <span className="categoryHeadline">Package Tour</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
      <AllFooter />
    </>
  );
};

export default TourTipsMainCategories;
