import React from "react";
import "./DisplayMainProduct.css";
import { Link } from "react-router-dom";
import AllHeader from "../../../Shared/Header/AllHeader";
import AllFooter from "../../../Shared/Footer/AllFooter";

const SportsMainCategories = () => {
  return (
    <>
      <AllHeader />
      {/* Banner */}
      <div className="electronic-banner">
        <img
          src="https://res.cloudinary.com/shokhbari/image/upload/v1713431842/Sports_And_Entertainment_1_g5frh9.jpg"
          alt=""
        />
      </div>

      {/* Content */}
      <div className="container py-5">
        <div className="row">
          {/* Buttons */}
          <div className="col-xs-12 col-lg-4 mb-3">
            <Link
              to={`/SportsItem/${"Exercise&Fitness"}`}
              className="custom-link"
            >
              <button className="mb-2 mainCategory-button">
                <img
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1712049919/tt_hszlue.png"
                  alt="Logo"
                  className="logo-category"
                />
                <span className="categoryHeadline">
                  Exercise & Fitness, Yoga
                </span>
              </button>
            </Link>
          </div>

          <div className="col-xs-12 col-lg-4 mb-3">
            <Link
              to={`/SportsItem/${"OutdoorRecreation"}`}
              className="custom-link"
            >
              <button className="mb-2 mainCategory-button">
                <img
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1712125909/55555_mjhnbd.png"
                  alt="Logo"
                  className="logo-category"
                />
                <span className="categoryHeadline">Outdoor Recreation</span>
              </button>
            </Link>
          </div>

          <div className="col-xs-12 col-lg-4 mb-3">
            <Link
              to={`/SportsItem/${"IndoorRecreation"}`}
              className="custom-link"
            >
              <button className="mb-2 mainCategory-button">
                <img
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1712126078/daba_k8ewsq.png"
                  alt="Logo"
                  className="logo-category"
                />
                <span className="categoryHeadline">Indoor Recreation</span>
              </button>
            </Link>
          </div>

          <div className="col-xs-12 col-lg-4 mb-3">
            <Link
              to={`/SportsItem/${"Camping Hiking"}`}
              className="custom-link"
            >
              <button className="mb-2 mainCategory-button">
                <img
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1712125630/hellloooo_udd0s9.png"
                  alt="Logo"
                  className="logo-category"
                />
                <span className="categoryHeadline">Camping Hiking</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
      <AllFooter />
    </>
  );
};

export default SportsMainCategories;
