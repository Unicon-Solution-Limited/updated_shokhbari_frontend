import React from "react";
import "./DisplayMainProduct.css";
import { Link } from "react-router-dom";

const KidsMainCategories = () => {
  return (
    <div>
      {/* Banner */}
      <div className="electronic-banner">
        <img
          src="https://res.cloudinary.com/shokhbari/image/upload/v1714471715/Kids_Segment2_ebk1sa.png"
          alt=""
        />
      </div>

      {/* Content */}
      <div className="container py-5">
        <div className="row">
          {/* Buttons */}
          <div className="col-xs-12 col-lg-4 mb-3">
            <Link to={`/KidsItem/${"Baby_Clothing"}`} className="custom-link">
              <button className="mb-2 mainCategory-button">
                <img
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1712556790/babyClothin_v1nj78.png"
                  alt="Logo"
                  className="logo-category"
                />
                <span className="categoryHeadline">Kids Clothing</span>
              </button>
            </Link>
          </div>

          <div className="col-xs-12 col-lg-4 mb-3">
            <Link to={`/KidsItem/${"Baby_Footwaer"}`} className="custom-link">
              <button className="mb-2 mainCategory-button">
                <img
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1712557031/foot_bhfydc.png"
                  alt="Logo"
                  className="logo-category"
                />
                <span className="categoryHeadline">Kids Footwaer</span>
              </button>
            </Link>
          </div>

          <div className="col-xs-12 col-lg-4 mb-3">
            <Link to={`/KidsItem/${"Baby_Care"}`} className="custom-link">
              <button className="mb-2 mainCategory-button">
                <img
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1712559110/saban_ubzydr.png"
                  alt="Logo"
                  className="logo-category"
                />
                <span className="categoryHeadline">Kids Care</span>
              </button>
            </Link>
          </div>

          <div className="col-xs-12 col-lg-4 mb-3">
            <Link
              to={`/KidsItem/${"Baby_Accessories"}`}
              className="custom-link"
            >
              <button className="mb-2 mainCategory-button">
                <img
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1712558254/ac_ekvd2j.png"
                  alt="Logo"
                  className="logo-category"
                />
                <span className="categoryHeadline">Kids Accessories</span>
              </button>
            </Link>
          </div>

          <div className="col-xs-12 col-lg-4 mb-3">
            <Link
              to={`/KidsItem/${"Baby_Feeding_Nursery"}`}
              className="custom-link"
            >
              <button className="mb-2 mainCategory-button">
                <img
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1712557459/accesrois_tro1x7.png"
                  alt="Logo"
                  className="logo-category"
                />
                <span className="categoryHeadline">Kids Feeding</span>
              </button>
            </Link>
          </div>

          <div className="col-xs-12 col-lg-4 mb-3">
            <Link
              to={`/KidsItem/${"Baby_Sports_Outdoor"}`}
              className="custom-link"
            >
              <button className="mb-2 mainCategory-button">
                <img
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1712558655/car_ianbpj.png"
                  alt="Logo"
                  className="logo-category"
                />
                <span className="categoryHeadline">Kids Sports Outdoor</span>
              </button>
            </Link>
          </div>

          <div className="col-xs-12 col-lg-4 mb-3">
            <Link to={`/KidsItem/${"Baby_Toys_Games"}`} className="custom-link">
              <button className="mb-2 mainCategory-button">
                <img
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1712558819/toyyyyy_abhaca.png"
                  alt="Logo"
                  className="logo-category"
                />
                <span className="categoryHeadline">Kids Toys Games</span>
              </button>
            </Link>
          </div>

          <div className="col-xs-12 col-lg-4 mb-3">
            <Link to={`/KidsItem/${"Baby_Education"}`} className="custom-link">
              <button className="mb-2 mainCategory-button">
                <img
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1712558926/education_yvxd8m.png"
                  alt="Logo"
                  className="logo-category"
                />
                <span className="categoryHeadline">Kids Education</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KidsMainCategories;
