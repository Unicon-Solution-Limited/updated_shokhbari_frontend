import React from "react";
import "./DisplayMainProduct.css";
import { Link } from "react-router-dom";

const OfficeEducationMainCategoris = () => {
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
              to={`/OfficeEducationItem/${"Paper_Products"}`}
              className="custom-link"
            >
              <button className="mb-2 mainCategory-button">
                <img
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1711962983/pic_nlzkk1.png"
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
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1711963937/newt_r7tlpl.png"
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
    </div>
  );
};

export default OfficeEducationMainCategoris;
