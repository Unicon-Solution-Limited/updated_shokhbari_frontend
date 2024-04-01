import React from "react";
import "./DisplayMainProduct.css";
import { Link } from "react-router-dom";

const BeautiPersonalMainCategories = () => {
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
            <Link to={`/BeautyItem/${"Bath_Body"}`} className="custom-link">
              <button className="mb-2 mainCategory-button">
                <img
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1711951668/Untitled-2_pw6l4e.png"
                  alt="Logo"
                  className="logo-category"
                />
                <span className="categoryHeadline">Bath & Body</span>
              </button>
            </Link>
          </div>

          <div className="col-xs-12 col-lg-4 mb-3">
            <Link to={`/BeautyItem/${"Beauty_Tools"}`} className="custom-link">
              <button className="mb-2 mainCategory-button">
                <img
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1711952410/new_o97usr.png"
                  alt="Logo"
                  className="logo-category"
                />
                <span className="categoryHeadline">Beauty Tools</span>
              </button>
            </Link>
          </div>

          <div className="col-xs-12 col-lg-4 mb-3">
            <Link to={`/BeautyItem/${"Fragrances"}`} className="custom-link">
              <button className="mb-2 mainCategory-button">
                <img
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1711953071/ddddd_mznjtr.png"
                  alt="Logo"
                  className="logo-category"
                />
                <span className="categoryHeadline">Fragrances</span>
              </button>
            </Link>
          </div>

          <div className="col-xs-12 col-lg-4 mb-3">
            <Link to={`/BeautyItem/${"Hair_Care"}`} className="custom-link">
              <button className="mb-2 mainCategory-button">
                <img
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1711953537/tttttt_diu2by.png"
                  alt="Logo"
                  className="logo-category"
                />
                <span className="categoryHeadline">Hair Care</span>
              </button>
            </Link>
          </div>

          <div className="col-xs-12 col-lg-4 mb-3">
            <Link to={`/BeautyItem/${"Skin_Care"}`} className="custom-link">
              <button className="mb-2 mainCategory-button">
                <img
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1711954478/dmt_ov5l1h.png"
                  alt="Logo"
                  className="logo-category"
                />
                <span className="categoryHeadline">Skin Care</span>
              </button>
            </Link>
          </div>

          <div className="col-xs-12 col-lg-4 mb-3">
            <Link to={`/BeautyItem/${"Make_up"}`} className="custom-link">
              <button className="mb-2 mainCategory-button">
                <img
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1711954690/lipistic_os8cdm.png"
                  alt="Logo"
                  className="logo-category"
                />
                <span className="categoryHeadline">Make up</span>
              </button>
            </Link>
          </div>

          <div className="col-xs-12 col-lg-4 mb-3">
            <Link to={`/BeautyItem/${"Oral_Care"}`} className="custom-link">
              <button className="mb-2 mainCategory-button">
                <img
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1711955155/brash_s0k5kl.png"
                  alt="Logo"
                  className="logo-category"
                />
                <span className="categoryHeadline">Oral Care</span>
              </button>
            </Link>
          </div>

          <div className="col-xs-12 col-lg-4 mb-3">
            <Link to={`/BeautyItem/${"Feminine_Care"}`} className="custom-link">
              <button className="mb-2 mainCategory-button">
                <img
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1711955499/pad_kzvhuq.png"
                  alt="Logo"
                  className="logo-category"
                />
                <span className="categoryHeadline">Feminine Care</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeautiPersonalMainCategories;
