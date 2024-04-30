import React from "react";
import "./DisplayMainProduct.css";
import { Link } from "react-router-dom";
import AllHeader from "../../../Shared/Header/AllHeader";
import AllFooter from "../../../Shared/Footer/AllFooter";

const HomeApplianceMainCategories = () => {
  return (
    <>
      <AllHeader />
      {/* Banner */}
      <div className="electronic-banner">
        <img
          src="https://res.cloudinary.com/shokhbari/image/upload/v1713430191/Home_Appliance_1_r62fte.jpg"
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
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1712566217/e_nwlsw1.png"
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
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1712566109/ref_kneskt.png"
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
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1712565880/acNew_ouizss.png"
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
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1712563340/homeKitchen_vmrr27.png"
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
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1712563812/t_y0a60i.png"
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
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1712564207/td_dibb7r.png"
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
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1712564583/c_o7tspg.png"
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
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1712564842/l1_y4p39j.png"
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
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1712565133/fan_vdkue0.png"
                  alt="Logo"
                  className="logo-category"
                />
                <span className="categoryHeadline">Others Appliances</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
      <AllFooter />
    </>
  );
};

export default HomeApplianceMainCategories;
