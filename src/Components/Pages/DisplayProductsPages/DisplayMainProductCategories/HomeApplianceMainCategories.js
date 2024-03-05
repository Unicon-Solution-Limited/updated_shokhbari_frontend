import React from "react";
import "./DisplayMainProduct.css";
import { Link } from "react-router-dom";

const HomeApplianceMainCategories = () => {
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
              to={`/HomeApplianceItem/${"Home_Entertainment"}`}
              className="custom-link"
            >
              <button className="mb-2 mainCategory-button">
                <img
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1709189955/shokhbari_electronices/laptopIcon.jpg_vyfjno.png"
                  alt="Logo"
                  className="logo-category"
                />
                <span className="categoryHeadline">Home Entertainment</span>
              </button>
            </Link>
          </div>

          <div className="col-xs-12 col-lg-4 mb-3">
            <Link
              to={`/HomeApplianceItem/${"Refrigerator_Freezer"}`}
              className="custom-link"
            >
              <button className="mb-2 mainCategory-button">
                <img
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1709189955/shokhbari_electronices/laptopIcon.jpg_vyfjno.png"
                  alt="Logo"
                  className="logo-category"
                />
                <span className="categoryHeadline">
                  Refrigerator and Freezer
                </span>
              </button>
            </Link>
          </div>

          <div className="col-xs-12 col-lg-4 mb-3">
            <Link
              to={`/HomeApplianceItem/${"Cooling_Heating"}`}
              className="custom-link"
            >
              <button className="mb-2 mainCategory-button">
                <img
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1709189955/shokhbari_electronices/laptopIcon.jpg_vyfjno.png"
                  alt="Logo"
                  className="logo-category"
                />
                <span className="categoryHeadline">Cooling and Heating</span>
              </button>
            </Link>
          </div>

          <div className="col-xs-12 col-lg-4 mb-3">
            <Link
              to={`/HomeApplianceItem/${"Kitchen_Appliance"}`}
              className="custom-link"
            >
              <button className="mb-2 mainCategory-button">
                <img
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1709189955/shokhbari_electronices/laptopIcon.jpg_vyfjno.png"
                  alt="Logo"
                  className="logo-category"
                />
                <span className="categoryHeadline">Kitchen Appliance</span>
              </button>
            </Link>
          </div>

          <div className="col-xs-12 col-lg-4 mb-3">
            <Link
              to={`/HomeApplianceItem/${"Bath_Fixtures"}`}
              className="custom-link"
            >
              <button className="mb-2 mainCategory-button">
                <img
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1709189955/shokhbari_electronices/laptopIcon.jpg_vyfjno.png"
                  alt="Logo"
                  className="logo-category"
                />
                <span className="categoryHeadline">Bath Fixtures</span>
              </button>
            </Link>
          </div>

          <div className="col-xs-12 col-lg-4 mb-3">
            <Link
              to={`/HomeApplianceItem/${"Washing_Machine"}`}
              className="custom-link"
            >
              <button className="mb-2 mainCategory-button">
                <img
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1709189955/shokhbari_electronices/laptopIcon.jpg_vyfjno.png"
                  alt="Logo"
                  className="logo-category"
                />
                <span className="categoryHeadline">Washing Machine</span>
              </button>
            </Link>
          </div>

          <div className="col-xs-12 col-lg-4 mb-3">
            <Link
              to={`/HomeApplianceItem/${"Cleaning_Equipments"}`}
              className="custom-link"
            >
              <button className="mb-2 mainCategory-button">
                <img
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1709189955/shokhbari_electronices/laptopIcon.jpg_vyfjno.png"
                  alt="Logo"
                  className="logo-category"
                />
                <span className="categoryHeadline">Cleaning Equipments</span>
              </button>
            </Link>
          </div>

          <div className="col-xs-12 col-lg-4 mb-3">
            <Link
              to={`/HomeApplianceItem/${"Iron_Garment_steamers"}`}
              className="custom-link"
            >
              <button className="mb-2 mainCategory-button">
                <img
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1709189955/shokhbari_electronices/laptopIcon.jpg_vyfjno.png"
                  alt="Logo"
                  className="logo-category"
                />
                <span className="categoryHeadline">
                  Iron & Garment steamers
                </span>
              </button>
            </Link>
          </div>

          <div className="col-xs-12 col-lg-4 mb-3">
            <Link
              to={`/HomeApplianceItem/${"Home_lighting"}`}
              className="custom-link"
            >
              <button className="mb-2 mainCategory-button">
                <img
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1709189955/shokhbari_electronices/laptopIcon.jpg_vyfjno.png"
                  alt="Logo"
                  className="logo-category"
                />
                <span className="categoryHeadline">Home lighting</span>
              </button>
            </Link>
          </div>

          <div className="col-xs-12 col-lg-4 mb-3">
            <Link
              to={`/HomeApplianceItem/${"Others_Appliances"}`}
              className="custom-link"
            >
              <button className="mb-2 mainCategory-button">
                <img
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1709189955/shokhbari_electronices/laptopIcon.jpg_vyfjno.png"
                  alt="Logo"
                  className="logo-category"
                />
                <span className="categoryHeadline">Others Appliances</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeApplianceMainCategories;
