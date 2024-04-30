import React from "react";
import "./DisplayMainProduct.css";
import { Link } from "react-router-dom";
import AllHeader from "../../../Shared/Header/AllHeader";
import AllFooter from "../../../Shared/Footer/AllFooter";

const HomeAndLifeMainCategories = () => {
  return (
    <>
      <AllHeader />
      {/* Banner */}
      <div className="electronic-banner">
        <img
          src="https://res.cloudinary.com/shokhbari/image/upload/v1713429717/Home_And_Lifestyle1_d4clfr.jpg"
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
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1712212928/dt1_g2zubd.png"
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
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1712213335/new_zlnyrf.png"
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
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1712213831/spoon_qojbet.png"
                  alt="Logo"
                  className="logo-category"
                />
                <span className="categoryHeadline">Kitchen Accessories</span>
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
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1712216945/smell_mmku2h.png"
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
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1712382658/tools_ctg3dv.png"
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
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1712381846/recov_arszhg.png"
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
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1713179372/gd_qv60ln.png"
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
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1712382838/new_pet_h4ecjk.png"
                  alt="Logo"
                  className="logo-category"
                />
                <span className="categoryHeadline">Pet</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
      <AllFooter />
    </>
  );
};

export default HomeAndLifeMainCategories;
