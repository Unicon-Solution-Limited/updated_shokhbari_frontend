import React from "react";
import "./DisplayMainProduct.css";
import { Link } from "react-router-dom";

const AutoMobileMainCategories = () => {
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
              to={`/AutomobileItem/${"Automobile"}`}
              className="custom-link"
            >
              <button className="mb-2 mainCategory-button">
                <img
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1712384022/car_bysdx9.png"
                  alt="Logo"
                  className="logo-category"
                />
                <span className="categoryHeadline">Automobile</span>
              </button>
            </Link>
          </div>

          <div className="col-xs-12 col-lg-4 mb-3">
            <Link
              to={`/AutomobileItem/${"Automobile_Parts"}`}
              className="custom-link"
            >
              <button className="mb-2 mainCategory-button">
                <img
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1712384249/car_parts_w7lbd9.png"
                  alt="Logo"
                  className="logo-category"
                />
                <span className="categoryHeadline">Automobile Parts</span>
              </button>
            </Link>
          </div>

          <div className="col-xs-12 col-lg-4 mb-3">
            <Link
              to={`/AutomobileItem/${"Interior_Accessories_Care"}`}
              className="custom-link"
            >
              <button className="mb-2 mainCategory-button">
                <img
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1712385605/nnn_hc6yoi.png"
                  alt="Logo"
                  className="logo-category"
                />
                <span className="categoryHeadline">
                  Interior Accessories Care
                </span>
              </button>
            </Link>
          </div>

          <div className="col-xs-12 col-lg-4 mb-3">
            <Link
              to={`/AutomobileItem/${"Exterior_Accessories_Care"}`}
              className="custom-link"
            >
              <button className="mb-2 mainCategory-button">
                <img
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1712396149/cleaning_c8po2g.png"
                  alt="Logo"
                  className="logo-category"
                />
                <span className="categoryHeadline">
                  Exterior Accessories Care
                </span>
              </button>
            </Link>
          </div>

          <div className="col-xs-12 col-lg-4 mb-3">
            <Link to={`/AutomobileItem/${"Bike"}`} className="custom-link">
              <button className="mb-2 mainCategory-button">
                <img
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1712396015/1_fjeckb.png"
                  alt="Logo"
                  className="logo-category"
                />
                <span className="categoryHeadline">Bike</span>
              </button>
            </Link>
          </div>

          <div className="col-xs-12 col-lg-4 mb-3">
            <Link
              to={`/AutomobileItem/${"Bike_Parts_Accessories"}`}
              className="custom-link"
            >
              <button className="mb-2 mainCategory-button">
                <img
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1712393286/timer_mxde23.png"
                  alt="Logo"
                  className="logo-category"
                />
                <span className="categoryHeadline">Bike Parts Accessories</span>
              </button>
            </Link>
          </div>

          <div className="col-xs-12 col-lg-4 mb-3">
            <Link
              to={`/AutomobileItem/${"Oil_Fluids"}`}
              className="custom-link"
            >
              <button className="mb-2 mainCategory-button">
                <img
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1712393530/jarNew_xo7mow.png"
                  alt="Logo"
                  className="logo-category"
                />
                <span className="categoryHeadline">Oil Fluids</span>
              </button>
            </Link>
          </div>

          <div className="col-xs-12 col-lg-4 mb-3">
            <Link
              to={`/AutomobileItem/${"Riders Gear"}`}
              className="custom-link"
            >
              <button className="mb-2 mainCategory-button">
                <img
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1712394107/helmet_bjjtch.png"
                  alt="Logo"
                  className="logo-category"
                />
                <span className="categoryHeadline">Riders Gear</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutoMobileMainCategories;
