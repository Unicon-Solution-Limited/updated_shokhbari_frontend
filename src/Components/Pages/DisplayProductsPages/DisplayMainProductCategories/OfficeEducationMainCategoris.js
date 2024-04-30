import React from "react";
import "./DisplayMainProduct.css";
import { Link } from "react-router-dom";
import AllHeader from "../../../Shared/Header/AllHeader";
import AllFooter from "../../../Shared/Footer/AllFooter";

const OfficeEducationMainCategoris = () => {
  return (
    <>
      <AllHeader />
      {/* Banner */}
      <div className="electronic-banner">
        <img
          src="https://res.cloudinary.com/shokhbari/image/upload/v1714042589/Office_And_Education_mullvz.jpg"
          alt=""
        />
      </div>

      {/* Content */}
      <div className="container py-5">
        <div className="row">
          {/* Buttons */}
          <div className="col-xs-12 col-lg-4 mb-3">
            <Link
              to={`/OfficeEducationItem/${"Paper_Products"}`}
              className="custom-link"
            >
              <button className="mb-2 mainCategory-button">
                <img
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1712211140/paper_ozm2qo.png"
                  alt="Logo"
                  className="logo-category"
                />
                <span className="categoryHeadline">Paper Products</span>
              </button>
            </Link>
          </div>

          <div className="col-xs-12 col-lg-4 mb-3">
            <Link
              to={`/OfficeEducationItem/${"Writing_Correction"}`}
              className="custom-link"
            >
              <button className="mb-2 mainCategory-button">
                <img
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1711963261/kkk1_u6ycpd.png"
                  alt="Logo"
                  className="logo-category"
                />
                <span className="categoryHeadline">Writing and Correction</span>
              </button>
            </Link>
          </div>

          <div className="col-xs-12 col-lg-4 mb-3">
            <Link
              to={`/OfficeEducationItem/${"Files_Folders"}`}
              className="custom-link"
            >
              <button className="mb-2 mainCategory-button">
                <img
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1711963452/Untitled-2_nqjbk5.png"
                  alt="Logo"
                  className="logo-category"
                />
                <span className="categoryHeadline">Files and Folders</span>
              </button>
            </Link>
          </div>

          <div className="col-xs-12 col-lg-4 mb-3">
            <Link
              to={`/OfficeEducationItem/${"Desk_Accessories"}`}
              className="custom-link"
            >
              <button className="mb-2 mainCategory-button">
                <img
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1712212516/table_vzd85t.png"
                  alt="Logo"
                  className="logo-category"
                />
                <span className="categoryHeadline">Desk Accessories</span>
              </button>
            </Link>
          </div>

          <div className="col-xs-12 col-lg-4 mb-3">
            <Link
              to={`/OfficeEducationItem/${"Books"}`}
              className="custom-link"
            >
              <button className="mb-2 mainCategory-button">
                <img
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1711964075/newBook_luhw9b.png"
                  alt="Logo"
                  className="logo-category"
                />
                <span className="categoryHeadline">Books</span>
              </button>
            </Link>
          </div>

          <div className="col-xs-12 col-lg-4 mb-3">
            <Link
              to={`/OfficeEducationItem/${"Others_Stationeries"}`}
              className="custom-link"
            >
              <button className="mb-2 mainCategory-button">
                <img
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1712033067/95_gt7y09.png"
                  alt="Logo"
                  className="logo-category"
                />
                <span className="categoryHeadline">Others Stationeries</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
      <AllFooter />
    </>
  );
};

export default OfficeEducationMainCategoris;
