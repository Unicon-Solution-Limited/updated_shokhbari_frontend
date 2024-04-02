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
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1712033302/furniture_t47rdx.png"
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
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1712033672/home_bysrag.png"
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
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1712034202/plate_nmbcmq.png"
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
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1712034946/chamus_hzshhi.png"
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
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1712035618/new_chair_ph7k9v.png"
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
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1712036195/noksa_wzn5ge.png"
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
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1712036693/jontro_bd1vex.png"
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
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1712037815/belun_yhertq.png"
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
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1712038139/222_cj0gf5.png"
                  alt="Logo"
                  className="logo-category"
                />
                <span className="categoryHeadline">Gardening</span>
              </button>
            </Link>
          </div>

          <div className="col-xs-12 col-lg-4 mb-3">
            <Link to={`/HomeAndLifestyleItem/${"Pet"}`} className="custom-link">
              <button className="mb-2 mainCategory-button">
                <img
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1712039301/pettt_yqegty.png"
                  alt="Logo"
                  className="logo-category"
                />
                <span className="categoryHeadline">Pet</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAndLifeMainCategories;
