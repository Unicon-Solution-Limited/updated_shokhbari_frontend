import React from "react";
import "./DisplayMainProduct.css";
import { Link } from "react-router-dom";

const GiftCraftMainCategories = () => {
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
              to={`/GiftCraftItem/${"Novelty_Gifts"}`}
              className="custom-link"
            >
              <button className="mb-2 mainCategory-button">
                <img
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1711956071/Untitled-1_pideb3.png"
                  alt="Logo"
                  className="logo-category"
                />
                <span className="categoryHeadline">Novelty Gifts</span>
              </button>
            </Link>
          </div>

          <div className="col-xs-12 col-lg-4 mb-3">
            <Link
              to={`/GiftCraftItem/${"Promotional_Items"}`}
              className="custom-link"
            >
              <button className="mb-2 mainCategory-button">
                <img
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1711958474/Untitled-1_zs9mfg.png"
                  alt="Logo"
                  className="logo-category"
                />
                <span className="categoryHeadline">Promotional Items</span>
              </button>
            </Link>
          </div>

          <div className="col-xs-12 col-lg-4 mb-3">
            <Link
              to={`/GiftCraftItem/${"Crafting_Accessories"}`}
              className="custom-link"
            >
              <button className="mb-2 mainCategory-button">
                <img
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1711960127/kechi_d5heir.png"
                  alt="Logo"
                  className="logo-category"
                />
                <span className="categoryHeadline">Crafting Accessories</span>
              </button>
            </Link>
          </div>

          <div className="col-xs-12 col-lg-4 mb-3">
            <Link
              to={`/GiftCraftItem/${"Festival_Decoration"}`}
              className="custom-link"
            >
              <button className="mb-2 mainCategory-button">
                <img
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1711961998/jjjjjjjjj_agshe5.png"
                  alt="Logo"
                  className="logo-category"
                />
                <span className="categoryHeadline">Festival Decoration</span>
              </button>
            </Link>
          </div>

          <div className="col-xs-12 col-lg-4 mb-3">
            <Link
              to={`/GiftCraftItem/${"Gift_Wrapping_Supplies"}`}
              className="custom-link"
            >
              <button className="mb-2 mainCategory-button">
                <img
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1711961486/new_wduqgq.png"
                  alt="Logo"
                  className="logo-category"
                />
                <span className="categoryHeadline">Gift Wrapping Supplies</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GiftCraftMainCategories;
