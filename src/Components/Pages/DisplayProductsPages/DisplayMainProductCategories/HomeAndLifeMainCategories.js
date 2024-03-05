import React from "react";
import "./DisplayMainProduct.css";
import { Link } from "react-router-dom";

const HomeAndLifeMainCategories = () => {
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
              to={`/HomeAndLifestyleItem/${"Furniture"}`}
              className="custom-link"
            >
              <button className="mb-2 mainCategory-button">
                <img
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1709189955/shokhbari_electronices/laptopIcon.jpg_vyfjno.png"
                  alt="Logo"
                  className="logo-category"
                />
                <span className="categoryHeadline">Furniture</span>
              </button>
            </Link>
          </div>

          <div className="col-xs-12 col-lg-4 mb-3">
            <Link
              to={`/HomeAndLifestyleItem/${"Home_Textile"}`}
              className="custom-link"
            >
              <button className="mb-2 mainCategory-button">
                <img
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1709189955/shokhbari_electronices/laptopIcon.jpg_vyfjno.png"
                  alt="Logo"
                  className="logo-category"
                />
                <span className="categoryHeadline">Home Textile</span>
              </button>
            </Link>
          </div>

          <div className="col-xs-12 col-lg-4 mb-3">
            <Link
              to={`/HomeAndLifestyleItem/${"DinnerWare"}`}
              className="custom-link"
            >
              <button className="mb-2 mainCategory-button">
                <img
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1709189955/shokhbari_electronices/laptopIcon.jpg_vyfjno.png"
                  alt="Logo"
                  className="logo-category"
                />
                <span className="categoryHeadline">DinnerWare</span>
              </button>
            </Link>
          </div>

          <div className="col-xs-12 col-lg-4 mb-3">
            <Link
              to={`/HomeAndLifestyleItem/${"Kitchen Accessories"}`}
              className="custom-link"
            >
              <button className="mb-2 mainCategory-button">
                <img
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1709189955/shokhbari_electronices/laptopIcon.jpg_vyfjno.png"
                  alt="Logo"
                  className="logo-category"
                />
                <span className="categoryHeadline">Kitchen_Accessories</span>
              </button>
            </Link>
          </div>

          <div className="col-xs-12 col-lg-4 mb-3">
            <Link
              to={`/HomeAndLifestyleItem/${"Decor"}`}
              className="custom-link"
            >
              <button className="mb-2 mainCategory-button">
                <img
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1709189955/shokhbari_electronices/laptopIcon.jpg_vyfjno.png"
                  alt="Logo"
                  className="logo-category"
                />
                <span className="categoryHeadline">Decor</span>
              </button>
            </Link>
          </div>

          <div className="col-xs-12 col-lg-4 mb-3">
            <Link
              to={`/HomeAndLifestyleItem/${"Wallart"}`}
              className="custom-link"
            >
              <button className="mb-2 mainCategory-button">
                <img
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1709189955/shokhbari_electronices/laptopIcon.jpg_vyfjno.png"
                  alt="Logo"
                  className="logo-category"
                />
                <span className="categoryHeadline">Wallart</span>
              </button>
            </Link>
          </div>

          <div className="col-xs-12 col-lg-4 mb-3">
            <Link
              to={`/HomeAndLifestyleItem/${"Tools_Diy_outdoor"}`}
              className="custom-link"
            >
              <button className="mb-2 mainCategory-button">
                <img
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1709189955/shokhbari_electronices/laptopIcon.jpg_vyfjno.png"
                  alt="Logo"
                  className="logo-category"
                />
                <span className="categoryHeadline">Tools Diy and outdoor</span>
              </button>
            </Link>
          </div>

          <div className="col-xs-12 col-lg-4 mb-3">
            <Link
              to={`/HomeAndLifestyleItem/${"Event_Party_Supplies"}`}
              className="custom-link"
            >
              <button className="mb-2 mainCategory-button">
                <img
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1709189955/shokhbari_electronices/laptopIcon.jpg_vyfjno.png"
                  alt="Logo"
                  className="logo-category"
                />
                <span className="categoryHeadline">Event & Party Supplies</span>
              </button>
            </Link>
          </div>

          <div className="col-xs-12 col-lg-4 mb-3">
            <Link
              to={`/HomeAndLifestyleItem/${"Gardening"}`}
              className="custom-link"
            >
              <button className="mb-2 mainCategory-button">
                <img
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1709189955/shokhbari_electronices/laptopIcon.jpg_vyfjno.png"
                  alt="Logo"
                  className="logo-category"
                />
                <span className="categoryHeadline">Gardening</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAndLifeMainCategories;
