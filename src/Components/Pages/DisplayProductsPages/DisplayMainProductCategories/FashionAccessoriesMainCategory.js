import React from "react";
import "./DisplayMainProduct.css";
import { Link } from "react-router-dom";
import AllHeader from "../../../Shared/Header/AllHeader";
import AllFooter from "../../../Shared/Footer/AllFooter";

const FashionAccessoriesMainCategory = () => {
  return (
    <>
      <AllHeader />
      {/* Banner */}
      <div className="electronic-banner">
        <img
          src="https://res.cloudinary.com/shokhbari/image/upload/v1714476653/Fashion_Accessories_uzxakm.jpg"
          alt=""
        />
      </div>

      {/* Content */}
      <div className="container py-5">
        <div className="row">
          {/* Buttons */}
          <div className="col-xs-12 col-lg-4 mb-3">
            <Link
              to={`/FashionAccessoriesItem/${"Hair Accessories"}`}
              className="custom-link"
            >
              <button className="mb-2 mainCategory-button">
                <img
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1711791737/heair_y32uye.png"
                  alt="Logo"
                  className="logo-category"
                />
                <span className="categoryHeadline">Hair Accessories</span>
              </button>
            </Link>
          </div>

          <div className="col-xs-12 col-lg-4 mb-3">
            <Link
              to={`/FashionAccessoriesItem/${"Jewelry"}`}
              className="custom-link"
            >
              <button className="mb-2 mainCategory-button">
                <img
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1711860272/new_kiy6vy.png"
                  alt="Logo"
                  className="logo-category"
                />
                <span className="categoryHeadline">Jewelry</span>
              </button>
            </Link>
          </div>

          <div className="col-xs-12 col-lg-4 mb-3">
            <Link
              to={`/FashionAccessoriesItem/${"Sunglass"}`}
              className="custom-link"
            >
              <button className="mb-2 mainCategory-button">
                <img
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1712383222/newGlass_ozn7ek.png"
                  alt="Logo"
                  className="logo-category"
                />
                <span className="categoryHeadline">Sunglass</span>
              </button>
            </Link>
          </div>

          <div className="col-xs-12 col-lg-4 mb-3">
            <Link
              to={`/FashionAccessoriesItem/${"Watch"}`}
              className="custom-link"
            >
              <button className="mb-2 mainCategory-button">
                <img
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1712209501/watch_e8yctt.png"
                  alt="Logo"
                  className="logo-category"
                />
                <span className="categoryHeadline">Watch</span>
              </button>
            </Link>
          </div>

          <div className="col-xs-12 col-lg-4 mb-3">
            <Link
              to={`/FashionAccessoriesItem/${"Bag"}`}
              className="custom-link"
            >
              <button className="mb-2 mainCategory-button">
                <img
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1712209705/bag_yi178p.png"
                  alt="Logo"
                  className="logo-category"
                />
                <span className="categoryHeadline">Bag</span>
              </button>
            </Link>
          </div>

          <div className="col-xs-12 col-lg-4 mb-3">
            <Link
              to={`/FashionAccessoriesItem/${"Belt"}`}
              className="custom-link"
            >
              <button className="mb-2 mainCategory-button">
                <img
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1712209974/belt_qjh30x.png"
                  alt="Logo"
                  className="logo-category"
                />
                <span className="categoryHeadline">Belt</span>
              </button>
            </Link>
          </div>

          <div className="col-xs-12 col-lg-4 mb-3">
            <Link
              to={`/FashionAccessoriesItem/${"Ties & Accessoires"}`}
              className="custom-link"
            >
              <button className="mb-2 mainCategory-button">
                <img
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1711863153/new_e8javn.png"
                  alt="Logo"
                  className="logo-category"
                />
                <span className="categoryHeadline">Ties & Accessoires</span>
              </button>
            </Link>
          </div>

          <div className="col-xs-12 col-lg-4 mb-3">
            <Link
              to={`/FashionAccessoriesItem/${"Footwear"}`}
              className="custom-link"
            >
              <button className="mb-2 mainCategory-button">
                <img
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1711947532/Untitled-1_uqbftq.png"
                  alt="Logo"
                  className="logo-category"
                />
                <span className="categoryHeadline">Footwear</span>
              </button>
            </Link>
          </div>

          <div className="col-xs-12 col-lg-4 mb-3">
            <Link
              to={`/FashionAccessoriesItem/${"Umbrellas"}`}
              className="custom-link"
            >
              <button className="mb-2 mainCategory-button">
                <img
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1711949868/ppp_kimgm4.png"
                  alt="Logo"
                  className="logo-category"
                />
                <span className="categoryHeadline">Umbrellas</span>
              </button>
            </Link>
          </div>

          <div className="col-xs-12 col-lg-4 mb-3">
            <Link
              to={`/FashionAccessoriesItem/${"Face Mask"}`}
              className="custom-link"
            >
              <button className="mb-2 mainCategory-button">
                <img
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1711950141/facemask_ynxxps.png"
                  alt="Logo"
                  className="logo-category"
                />
                <span className="categoryHeadline">Face Mask</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
      <AllFooter />
    </>
  );
};

export default FashionAccessoriesMainCategory;
