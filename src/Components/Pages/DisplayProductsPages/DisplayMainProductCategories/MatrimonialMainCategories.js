import React from "react";
import "./DisplayMainProduct.css";
import { Link } from "react-router-dom";

const MatrimonialMainCategories = () => {
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
              to={`/MatrimonialItem/${"Wedding_Planner"}`}
              className="custom-link"
            >
              <button className="mb-2 mainCategory-button">
                <img
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1709375778/brandPc1_uroglw.png"
                  alt="Logo"
                  className="logo-category"
                />
                <span className="categoryHeadline">Wedding Planner</span>
              </button>
            </Link>
          </div>

          <div className="col-xs-12 col-lg-4 mb-3">
            <Link
              to={`/MatrimonialItem/${"Wedding_Dress"}`}
              className="custom-link"
            >
              <button className="mb-2 mainCategory-button">
                <img
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1709375778/brandPc1_uroglw.png"
                  alt="Logo"
                  className="logo-category"
                />
                <span className="categoryHeadline">
                  Wedding Dress Collection
                </span>
              </button>
            </Link>
          </div>

          <div className="col-xs-12 col-lg-4 mb-3">
            <Link
              to={`/MatrimonialItem/${"Wedding_Jewelry"}`}
              className="custom-link"
            >
              <button className="mb-2 mainCategory-button">
                <img
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1709375778/brandPc1_uroglw.png"
                  alt="Logo"
                  className="logo-category"
                />
                <span className="categoryHeadline">
                  Wedding Jewelry Collection
                </span>
              </button>
            </Link>
          </div>

          <div className="col-xs-12 col-lg-4 mb-3">
            <Link
              to={`/MatrimonialItem/${"Wedding_Footwear"}`}
              className="custom-link"
            >
              <button className="mb-2 mainCategory-button">
                <img
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1709375778/brandPc1_uroglw.png"
                  alt="Logo"
                  className="logo-category"
                />
                <span className="categoryHeadline">Wedding Footwear</span>
              </button>
            </Link>
          </div>

          <div className="col-xs-12 col-lg-4 mb-3">
            <Link
              to={`/MatrimonialItem/${"Wedding_Accessories"}`}
              className="custom-link"
            >
              <button className="mb-2 mainCategory-button">
                <img
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1709375778/brandPc1_uroglw.png"
                  alt="Logo"
                  className="logo-category"
                />
                <span className="categoryHeadline">Wedding Accessories</span>
              </button>
            </Link>
          </div>

          <div className="col-xs-12 col-lg-4 mb-3">
            <Link
              to={`/MatrimonialItem/${"Beauty_Park"}`}
              className="custom-link"
            >
              <button className="mb-2 mainCategory-button">
                <img
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1709375778/brandPc1_uroglw.png"
                  alt="Logo"
                  className="logo-category"
                />
                <span className="categoryHeadline">Beauty Park</span>
              </button>
            </Link>
          </div>

          <div className="col-xs-12 col-lg-4 mb-3">
            <Link
              to={`/MatrimonialItem/${"Wedding_Vehicle"}`}
              className="custom-link"
            >
              <button className="mb-2 mainCategory-button">
                <img
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1709375778/brandPc1_uroglw.png"
                  alt="Logo"
                  className="logo-category"
                />
                <span className="categoryHeadline">Wedding Vehicle</span>
              </button>
            </Link>
          </div>

          <div className="col-xs-12 col-lg-4 mb-3">
            <Link
              to={`/MatrimonialItem/${"Cinemafogrophy_Photography"}`}
              className="custom-link"
            >
              <button className="mb-2 mainCategory-button">
                <img
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1709375778/brandPc1_uroglw.png"
                  alt="Logo"
                  className="logo-category"
                />
                <span className="categoryHeadline">
                  Cinemafogrophy Photography
                </span>
              </button>
            </Link>
          </div>

          <div className="col-xs-12 col-lg-4 mb-3">
            <Link
              to={`/MatrimonialItem/${"Wedding_Venue"}`}
              className="custom-link"
            >
              <button className="mb-2 mainCategory-button">
                <img
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1709375778/brandPc1_uroglw.png"
                  alt="Logo"
                  className="logo-category"
                />
                <span className="categoryHeadline">Wedding Venue</span>
              </button>
            </Link>
          </div>

          <div className="col-xs-12 col-lg-4 mb-3">
            <Link
              to={`/MatrimonialItem/${"Catering_Service"}`}
              className="custom-link"
            >
              <button className="mb-2 mainCategory-button">
                <img
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1709375778/brandPc1_uroglw.png"
                  alt="Logo"
                  className="logo-category"
                />
                <span className="categoryHeadline">Catering Service</span>
              </button>
            </Link>
          </div>

          <div className="col-xs-12 col-lg-4 mb-3">
            <Link
              to={`/MatrimonialItem/${"Sound_System"}`}
              className="custom-link"
            >
              <button className="mb-2 mainCategory-button">
                <img
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1709375778/brandPc1_uroglw.png"
                  alt="Logo"
                  className="logo-category"
                />
                <span className="categoryHeadline">Sound System</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatrimonialMainCategories;
