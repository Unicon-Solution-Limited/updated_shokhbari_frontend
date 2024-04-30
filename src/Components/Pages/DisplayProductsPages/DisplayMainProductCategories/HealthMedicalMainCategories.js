import React from "react";
import "./DisplayMainProduct.css";
import { Link } from "react-router-dom";

const HealthMedicalMainCategories = () => {
  return (
    <div>
      {/* Banner */}
      <div className="electronic-banner">
        <img
          src="https://res.cloudinary.com/shokhbari/image/upload/v1714465613/Health_And_Medical_Accessories1_fix_font_ubcy2k.jpg"
          alt=""
        />
      </div>

      {/* Content */}
      <div className="container py-5">
        <div className="row">
          {/* Buttons */}
          <div className="col-xs-12 col-lg-4 mb-3">
            <Link
              to={`/HealthItem/${"Personal_Care_Safety"}`}
              className="custom-link"
            >
              <button className="mb-2 mainCategory-button">
                <img
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1712396410/Untitled-1-Recovered_nd55ct.png"
                  alt="Logo"
                  className="logo-category"
                />
                <span className="categoryHeadline">Personal Care & Safety</span>
              </button>
            </Link>
          </div>

          <div className="col-xs-12 col-lg-4 mb-3">
            <Link
              to={`/HealthItem/${"Medical_Supplies"}`}
              className="custom-link"
            >
              <button className="mb-2 mainCategory-button">
                <img
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1712550077/newDt_j6jyfm.png"
                  alt="Logo"
                  className="logo-category"
                />
                <span className="categoryHeadline">Medical Supplies</span>
              </button>
            </Link>
          </div>

          <div className="col-xs-12 col-lg-4 mb-3">
            <Link
              to={`/HealthItem/${"Food_Supplement's"}`}
              className="custom-link"
            >
              <button className="mb-2 mainCategory-button">
                <img
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1712397400/yt_ildnsw.png"
                  alt="Logo"
                  className="logo-category"
                />
                <span className="categoryHeadline">Food Supplement's</span>
              </button>
            </Link>
          </div>

          <div className="col-xs-12 col-lg-4 mb-3">
            <Link
              to={`/HealthItem/${"Sexual_Wellness"}`}
              className="custom-link"
            >
              <button className="mb-2 mainCategory-button">
                <img
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1712551083/sex_lypo0f.png"
                  alt="Logo"
                  className="logo-category"
                />
                <span className="categoryHeadline">Sexual Wellness</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthMedicalMainCategories;
