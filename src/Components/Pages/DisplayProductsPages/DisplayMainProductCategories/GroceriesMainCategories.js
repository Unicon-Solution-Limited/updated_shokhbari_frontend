import React from "react";
import "./DisplayMainProduct.css";
import { Link } from "react-router-dom";

const GroceriesMainCategories = () => {
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
            <Link to={`/GroceriesItem/${"Prime_Food"}`} className="custom-link">
              <button className="mb-2 mainCategory-button">
                <img
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1712130581/prime_food_t6bwml.png"
                  alt="Logo"
                  className="logo-category"
                />
                <span className="categoryHeadline">Prime Food</span>
              </button>
            </Link>
          </div>

          <div className="col-xs-12 col-lg-4 mb-3">
            <Link
              to={`/GroceriesItem/${"Fruits_Vagetables"}`}
              className="custom-link"
            >
              <button className="mb-2 mainCategory-button">
                <img
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1712130693/frouts_c4xd5a.png"
                  alt="Logo"
                  className="logo-category"
                />
                <span className="categoryHeadline">Fruits & Vagetables</span>
              </button>
            </Link>
          </div>

          <div className="col-xs-12 col-lg-4 mb-3">
            <Link
              to={`/GroceriesItem/${"Meat_Fish_Seafood"}`}
              className="custom-link"
            >
              <button className="mb-2 mainCategory-button">
                <img
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1712131431/Untitled-2_hc5jlg.png"
                  alt="Logo"
                  className="logo-category"
                />
                <span className="categoryHeadline">Meat Fish & Seafood</span>
              </button>
            </Link>
          </div>

          <div className="col-xs-12 col-lg-4 mb-3">
            <Link
              to={`/GroceriesItem/${"Cooking_Ingredient"}`}
              className="custom-link"
            >
              <button className="mb-2 mainCategory-button">
                <img
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1712131646/cooking_ingredients_ipfyab.png"
                  alt="Logo"
                  className="logo-category"
                />
                <span className="categoryHeadline">Cooking Ingredient</span>
              </button>
            </Link>
          </div>

          <div className="col-xs-12 col-lg-4 mb-3">
            <Link
              to={`/GroceriesItem/${"Breakfast_Tea_Coffee"}`}
              className="custom-link"
            >
              <button className="mb-2 mainCategory-button">
                <img
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1712136542/breakfast_lh75f9.png"
                  alt="Logo"
                  className="logo-category"
                />
                <span className="categoryHeadline">Breakfast Tea & Coffee</span>
              </button>
            </Link>
          </div>

          <div className="col-xs-12 col-lg-4 mb-3">
            <Link
              to={`/GroceriesItem/${"Sweets_Dairy"}`}
              className="custom-link"
            >
              <button className="mb-2 mainCategory-button">
                <img
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1712132616/milk_rhfrij.png"
                  alt="Logo"
                  className="logo-category"
                />
                <span className="categoryHeadline">Sweets & Dairy</span>
              </button>
            </Link>
          </div>

          <div className="col-xs-12 col-lg-4 mb-3">
            <Link
              to={`/GroceriesItem/${"Bakery_Snacks"}`}
              className="custom-link"
            >
              <button className="mb-2 mainCategory-button">
                <img
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1712133032/bekary_kcvwcu.png"
                  alt="Logo"
                  className="logo-category"
                />
                <span className="categoryHeadline">Bakery Snacks</span>
              </button>
            </Link>
          </div>

          <div className="col-xs-12 col-lg-4 mb-3">
            <Link
              to={`/GroceriesItem/${"Forzen_Item"}`}
              className="custom-link"
            >
              <button className="mb-2 mainCategory-button">
                <img
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1712133210/new_Frozen_ckb8z1.png"
                  alt="Logo"
                  className="logo-category"
                />
                <span className="categoryHeadline">Forzen Item</span>
              </button>
            </Link>
          </div>

          <div className="col-xs-12 col-lg-4 mb-3">
            <Link
              to={`/GroceriesItem/${"Jarred_Canned"}`}
              className="custom-link"
            >
              <button className="mb-2 mainCategory-button">
                <img
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1712133309/jar_and_cen_hjatcg.png"
                  alt="Logo"
                  className="logo-category"
                />
                <span className="categoryHeadline">Jarred and Canned Food</span>
              </button>
            </Link>
          </div>

          <div className="col-xs-12 col-lg-4 mb-3">
            <Link
              to={`/GroceriesItem/${"Beverage_Chocolate"}`}
              className="custom-link"
            >
              <button className="mb-2 mainCategory-button">
                <img
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1712134078/T_holsyz.png"
                  alt="Logo"
                  className="logo-category"
                />
                <span className="categoryHeadline">Beverage Chocolate</span>
              </button>
            </Link>
          </div>

          <div className="col-xs-12 col-lg-4 mb-3">
            <Link
              to={`/GroceriesItem/${"Soup_Noodles"}`}
              className="custom-link"
            >
              <button className="mb-2 mainCategory-button">
                <img
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1712134248/noodles_j5pjsi.png"
                  alt="Logo"
                  className="logo-category"
                />
                <span className="categoryHeadline">Soup & Noodles</span>
              </button>
            </Link>
          </div>

          <div className="col-xs-12 col-lg-4 mb-3">
            <Link
              to={`/GroceriesItem/${"Home_Essentials"}`}
              className="custom-link"
            >
              <button className="mb-2 mainCategory-button">
                <img
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1712134606/cook_jomow2.png"
                  alt="Logo"
                  className="logo-category"
                />
                <span className="categoryHeadline">Home Essentials</span>
              </button>
            </Link>
          </div>

          <div className="col-xs-12 col-lg-4 mb-3">
            <Link
              to={`/GroceriesItem/${"Clearing_Needs"}`}
              className="custom-link"
            >
              <button className="mb-2 mainCategory-button">
                <img
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1712135181/test_lgj00w.png"
                  alt="Logo"
                  className="logo-category"
                />
                <span className="categoryHeadline">Clearing Needs</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroceriesMainCategories;
