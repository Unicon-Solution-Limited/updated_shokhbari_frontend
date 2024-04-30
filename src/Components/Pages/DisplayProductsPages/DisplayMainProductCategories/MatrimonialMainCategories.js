import React from "react";
import "./DisplayMainProduct.css";
import { Link } from "react-router-dom";
import AllHeader from "../../../Shared/Header/AllHeader";
import AllFooter from "../../../Shared/Footer/AllFooter";

const MatrimonialMainCategories = () => {
  return (
    <>
      <AllHeader />
      {/* Banner */}
      <div className="electronic-banner">
        <img
          src="https://res.cloudinary.com/shokhbari/image/upload/v1714470113/Matrimonial2_cwtb7d.jpg"
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
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1712554319/new1_ixvuka.png"
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
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1712553349/jam_km9ut5.png"
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
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1712553776/ring8_yn9gv1.png"
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
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1712554139/juta1_nblgad.png"
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
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1712554729/u_as4iac.png"
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
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1712554936/cosmetics_a0nnyg.png"
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
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1712555120/car1_vnizrh.png"
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
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1712555332/camera_rnkheh.png"
                  alt="Logo"
                  className="logo-category"
                />
                <span className="categoryHeadline">Cinematic Photography</span>
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
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1712555563/ghor_m73x0i.png"
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
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1712556602/fooddt_ffvrzv.png"
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
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1712556469/box_tyglcg.png"
                  alt="Logo"
                  className="logo-category"
                />
                <span className="categoryHeadline">Sound System</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
      <AllFooter />
    </>
  );
};

export default MatrimonialMainCategories;
