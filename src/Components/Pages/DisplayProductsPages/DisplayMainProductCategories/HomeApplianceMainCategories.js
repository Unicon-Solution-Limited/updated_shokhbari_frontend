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
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1712040684/uni_v2k99t.png"
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
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1712041079/hello_x3csoy.png"
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
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1712043452/5_kw58rk.png"
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
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1712044723/red_nzdez0.png"
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
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1712045256/data_pz3mnm.png"
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
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1712045565/bg_cocnau.png"
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
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1712047030/danda_uinxs3.png"
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
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1712046697/hhhhhh_ajbtgg.png"
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
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1712048411/new_nkcjtu.png"
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
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1712048944/icon_ckxxqh.png"
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
