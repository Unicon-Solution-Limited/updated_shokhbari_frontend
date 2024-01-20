import React, { useState, useEffect } from "react";
import AllHeader from "../../../Shared/Header/AllHeader";
import AllFooter from "../../../Shared/Footer/AllFooter";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "./CategoryDisplay.css";
import loader from "../../../Image/loder.gif";

const GroceriesAndHomeEssentialsDisplay = () => {
  return (
    <>
      <AllHeader />
      <div className="d-flex align-items-start categoryDisplay">
        {/* Sidebar start */}
        <aside
          className="nav flex-column nav-pills me-2 categoryButtonBody"
          role="tablist"
          aria-orientation="vertical"
        >
          <section className="categoryButtonHeader">
            <span>Groceries And Home Essentials</span>
          </section>
          <button
            className="nav-link active categoryButton"
            id="Prime_Food-tab"
            data-bs-toggle="pill"
            data-bs-target="#Prime_Food"
            type="button"
            role="tab"
            aria-controls="Prime_Food"
            aria-selected="true"
          >
            Prime Food
          </button>

          <button
            className="nav-link categoryButton"
            id="Fruits_Vagetables-tab"
            data-bs-toggle="pill"
            data-bs-target="#Fruits_Vagetables"
            type="button"
            role="tab"
            aria-controls="Fruits_Vagetables"
            aria-selected="false"
          >
            Fruits & Vagetables
          </button>

          <button
            className="nav-link categoryButton"
            id="MeatFish_Seafood-tab"
            data-bs-toggle="pill"
            data-bs-target="#MeatFish_Seafood"
            type="button"
            role="tab"
            aria-controls="MeatFish_Seafood"
            aria-selected="false"
          >
            Meat Fish & Seafood
          </button>

          <button
            className="nav-link categoryButton"
            id="Cooking_Ingredient-tab"
            data-bs-toggle="pill"
            data-bs-target="#Cooking_Ingredient"
            type="button"
            role="tab"
            aria-controls="Cooking_Ingredient"
            aria-selected="false"
          >
            Cooking Ingredient
          </button>

          <button
            className="nav-link categoryButton"
            id="Breakfast_Tea-tab"
            data-bs-toggle="pill"
            data-bs-target="#Breakfast_Tea"
            type="button"
            role="tab"
            aria-controls="Breakfast_Tea"
            aria-selected="false"
          >
            Breakfast Tea & Coffee
          </button>

          <button
            className="nav-link categoryButton"
            id="Sweets_Dairy-tab"
            data-bs-toggle="pill"
            data-bs-target="#Sweets_Dairy"
            type="button"
            role="tab"
            aria-controls="Sweets_Dairy"
            aria-selected="false"
          >
            Sweets & Dairy
          </button>

          <button
            className="nav-link categoryButton"
            id="Bakery_Snacks-tab"
            data-bs-toggle="pill"
            data-bs-target="#Bakery_Snacks"
            type="button"
            role="tab"
            aria-controls="Bakery_Snacks"
            aria-selected="false"
          >
            Bakery Snacks
          </button>

          <button
            className="nav-link categoryButton"
            id="Forzen_Item-tab"
            data-bs-toggle="pill"
            data-bs-target="#Forzen_Item"
            type="button"
            role="tab"
            aria-controls="Forzen_Item"
            aria-selected="false"
          >
            Forzen Item
          </button>

          <button
            className="nav-link categoryButton"
            id="Jarred_Canned-tab"
            data-bs-toggle="pill"
            data-bs-target="#Jarred_Canned"
            type="button"
            role="tab"
            aria-controls="Jarred_Canned"
            aria-selected="false"
          >
            Jarred and Canned Food
          </button>

          <button
            className="nav-link categoryButton"
            id="Beverage_Chocolate-tab"
            data-bs-toggle="pill"
            data-bs-target="#Beverage_Chocolate"
            type="button"
            role="tab"
            aria-controls="Beverage_Chocolate"
            aria-selected="false"
          >
            Beverage Chocolate
          </button>

          <button
            className="nav-link categoryButton"
            id="Soup_Noodles-tab"
            data-bs-toggle="pill"
            data-bs-target="#Soup_Noodles"
            type="button"
            role="tab"
            aria-controls="Soup_Noodles"
            aria-selected="false"
          >
            Soup & Noodles
          </button>

          <button
            className="nav-link categoryButton"
            id="Home_Essentials-tab"
            data-bs-toggle="pill"
            data-bs-target="#Home_Essentials"
            type="button"
            role="tab"
            aria-controls="Home_Essentials"
            aria-selected="false"
          >
            Home Essentials
          </button>

          <button
            className="nav-link categoryButton"
            id="Clearing_Needs-tab"
            data-bs-toggle="pill"
            data-bs-target="#Clearing_Needs"
            type="button"
            role="tab"
            aria-controls="Clearing_Needs"
            aria-selected="false"
          >
            Clearing Needs
          </button>
        </aside>
        {/* Sidebar end */}

        {/* Categories start */}
        <aside
          className="tab-content me-2 categoryContentDisplay"
          id="v-pills-tabContent"
        >
          {/* Prime food */}
          <div
            className="tab-pane fade show active"
            id="Prime_Food"
            role="tabpanel"
            aria-labelledby="Prime_Food-tab"
          >
            <section className="row tab-content-body">
              <section className="d-flex justify-content-center my-3 tab-content-head">
                <LazyLoadImage
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1705230011/01_Bath_Body_kkuokk.jpg"
                  alt=""
                  className="img-fluid subCateBanner"
                  effect="blur"
                />
              </section>
              <Link
                className="col-12 col-lg-2 col-md-2 categoryContentBody"
                to={`/displayProduct/${"Rice"}`}
              >
                <LazyLoadImage
                  src=""
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">Rice</figcaption>
              </Link>

              <Link
                className="col-12 col-lg-2 col-md-2 categoryContentBody"
                to={`/displayProduct/${"Pulses"}`}
              >
                <LazyLoadImage
                  src=""
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">Pulses</figcaption>
              </Link>

              <Link
                className="col-12 col-lg-2 col-md-2 categoryContentBody"
                to={`/displayProduct/${"AttaSuji"}`}
              >
                <LazyLoadImage
                  src=""
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Atta & Suji
                </figcaption>
              </Link>

              <Link
                className="col-12 col-lg-2 col-md-2 categoryContentBody"
                to={`/displayProduct/${"SugerSalt"}`}
              >
                <LazyLoadImage
                  src=""
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Suger & Salt
                </figcaption>
              </Link>

              <Link
                className="col-12 col-lg-2 col-md-2 categoryContentBody"
                to={`/displayProduct/${"PowderedMilk"}`}
              >
                <LazyLoadImage
                  src=""
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Powdered Milk
                </figcaption>
              </Link>

              <Link
                className="col-12 col-lg-2 col-md-2 categoryContentBody"
                to={`/displayProduct/${"OtherPriceFood"}`}
              >
                <LazyLoadImage
                  src=""
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Other Prime Food
                </figcaption>
              </Link>
            </section>
          </div>

          {/* Fruits and vegetables */}
          <div
            className="tab-pane fade"
            id="Fruits_Vagetables"
            role="tabpanel"
            aria-labelledby="Fruits_Vagetables-tab"
          >
            <section className="row tab-content-body">
              <section className="img-fluid d-flex justify-content-center my-3 tab-content-head">
                <LazyLoadImage
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1705230012/02_Beauty_Tools_pfoksa.jpg"
                  alt=""
                  className="img-fluid subCateBanner"
                  effect="blur"
                />
              </section>
              <Link
                className="col-12 col-lg-2 col-md-2 categoryContentBody"
                to={`/displayProduct/${"Vegetables"}`}
              >
                <LazyLoadImage
                  src=""
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Vegetables
                </figcaption>
              </Link>

              <Link
                className="col-12 col-lg-2 col-md-2 categoryContentBody"
                to={`/displayProduct/${"Fruit"}`}
              >
                <LazyLoadImage
                  src=""
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">Fruit</figcaption>
              </Link>

              <Link
                className="col-12 col-lg-2 col-md-2 categoryContentBody"
                to={`/displayProduct/${"DryFruit"}`}
              >
                <LazyLoadImage
                  src=""
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  DryFruit
                </figcaption>
              </Link>
            </section>
          </div>

          {/* Meat Fish and sea food */}
          <div
            className="tab-pane fade"
            id="MeatFish_Seafood"
            role="tabpanel"
            aria-labelledby="MeatFish_Seafood-tab"
          >
            <section className="row tab-content-body">
              <section className="d-flex justify-content-center my-3 tab-content-head">
                <LazyLoadImage
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1705230011/03_Fragraneces_Men_Women_rg9nv8.jpg"
                  alt=""
                  className="img-fluid subCateBanner"
                  effect="blur"
                />
              </section>
              <Link
                className="col-12 col-lg-2 col-md-2 categoryContentBody"
                to={`/displayProduct/${"Meat"}`}
              >
                <LazyLoadImage
                  src=""
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">Meat</figcaption>
              </Link>

              <Link
                className="col-12 col-lg-2 col-md-2 categoryContentBody"
                to={`/displayProduct/${"Fish"}`}
              >
                <LazyLoadImage
                  src=""
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">Fish</figcaption>
              </Link>

              <Link
                className="col-12 col-lg-2 col-md-2 categoryContentBody"
                to={`/displayProduct/${"Dry Fish"}`}
              >
                <LazyLoadImage
                  src=""
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Dry Fish
                </figcaption>
              </Link>

              <Link
                className="col-12 col-lg-2 col-md-2 categoryContentBody"
                to={`/displayProduct/${"SeaFood"}`}
              >
                <LazyLoadImage
                  src=""
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Sea Food
                </figcaption>
              </Link>
            </section>
          </div>

          {/* Cooking Inredient */}
          <div
            className="tab-pane fade"
            id="Cooking_Ingredient"
            role="tabpanel"
            aria-labelledby="Cooking_Ingredient-tab"
          >
            <section className="row tab-content-body">
              <section className="d-flex justify-content-center my-3 tab-content-head">
                <LazyLoadImage
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1705230011/04_Hair_Care_cgm6d3.jpg"
                  alt=""
                  className="img-fluid subCateBanner"
                  effect="blur"
                />
              </section>
              <Link
                className="col-12 col-lg-2 col-md-2 categoryContentBody"
                to={`/displayProduct/${"CookingOils"}`}
              >
                <LazyLoadImage
                  src=""
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Cooking Oils
                </figcaption>
              </Link>

              <Link
                className="col-12 col-lg-2 col-md-2 categoryContentBody"
                to={`/displayProduct/${"SpicesCondiments"}`}
              >
                <LazyLoadImage
                  src=""
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Spices Condiments
                </figcaption>
              </Link>

              <Link
                className="col-12 col-lg-2 col-md-2 categoryContentBody"
                to={`/displayProduct/${"FoodAdditives"}`}
              >
                <LazyLoadImage
                  src=""
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Food Additives
                </figcaption>
              </Link>

              <Link
                className="col-12 col-lg-2 col-md-2 categoryContentBody"
                to={`/displayProduct/${"Herbs"}`}
              >
                <LazyLoadImage
                  src=""
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">Herbs</figcaption>
              </Link>

              <Link
                className="col-12 col-lg-2 col-md-2 categoryContentBody"
                to={`/displayProduct/${"Sauces"}`}
              >
                <LazyLoadImage
                  src=""
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">Sauces</figcaption>
              </Link>

              <Link
                className="col-12 col-lg-2 col-md-2 categoryContentBody"
                to={`/displayProduct/${"InstantMix"}`}
              >
                <LazyLoadImage
                  src=""
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Instant-Mix
                </figcaption>
              </Link>
            </section>
          </div>

          {/* Breakfast and tea-coffe */}
          <div
            className="tab-pane fade"
            id="Breakfast_Tea"
            role="tabpanel"
            aria-labelledby="Breakfast_Tea-tab"
          >
            <section className="row tab-content-body">
              <section className="d-flex justify-content-center my-3 tab-content-head">
                <LazyLoadImage
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1705230011/05_Skin_Care_t1wx3a.jpg"
                  alt=""
                  className="img-fluid subCateBanner"
                  effect="blur"
                />
              </section>
              <Link
                className="col-12 col-lg-2 col-md-2 categoryContentBody"
                to={`/displayProduct/${"BreakfastFood"}`}
              >
                <LazyLoadImage
                  src=""
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Breakfast Food
                </figcaption>
              </Link>

              <Link
                className="col-12 col-lg-2 col-md-2 categoryContentBody"
                to={`/displayProduct/${"Tea"}`}
              >
                <LazyLoadImage
                  src=""
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">Tea</figcaption>
              </Link>

              <Link
                className="col-12 col-lg-2 col-md-2 categoryContentBody"
                to={`/displayProduct/${"Coffee"}`}
              >
                <LazyLoadImage
                  src=""
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">Coffee</figcaption>
              </Link>
            </section>
          </div>

          {/* Sweets and Dairy */}
          <div
            className="tab-pane fade"
            id="Sweets_Dairy"
            role="tabpanel"
            aria-labelledby="Sweets_Dairy-tab"
          >
            <section className="row tab-content-body">
              <section className="d-flex justify-content-center my-3 tab-content-head">
                <LazyLoadImage
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1705230011/06_MakeUp_d11nfa.jpg"
                  alt=""
                  className="img-fluid subCateBanner"
                  effect="blur"
                />
              </section>
              <Link
                className="col-12 col-lg-2 col-md-2 categoryContentBody"
                to={`/displayProduct/${"Milk"}`}
              >
                <LazyLoadImage
                  src=""
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">Milk</figcaption>
              </Link>

              <Link
                className="col-12 col-lg-2 col-md-2 categoryContentBody"
                to={`/displayProduct/${"Butter"}`}
              >
                <LazyLoadImage
                  src=""
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">Butter</figcaption>
              </Link>

              <Link
                className="col-12 col-lg-2 col-md-2 categoryContentBody"
                to={`/displayProduct/${"Cheese"}`}
              >
                <LazyLoadImage
                  src=""
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">Cheese</figcaption>
              </Link>

              <Link
                className="col-12 col-lg-2 col-md-2 categoryContentBody"
                to={`/displayProduct/${"Yougrat"}`}
              >
                <LazyLoadImage
                  src=""
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Yougrat
                </figcaption>
              </Link>

              <Link
                className="col-12 col-lg-2 col-md-2 categoryContentBody"
                to={`/displayProduct/${"IceCrem"}`}
              >
                <LazyLoadImage
                  src=""
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Ice Crem
                </figcaption>
              </Link>

              <Link
                className="col-12 col-lg-2 col-md-2 categoryContentBody"
                to={`/displayProduct/${"Sweets"}`}
              >
                <LazyLoadImage
                  src=""
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">Sweets</figcaption>
              </Link>
            </section>
          </div>

          {/* Bakery and snacks */}
          <div
            className="tab-pane fade"
            id="Bakery_Snacks"
            role="tabpanel"
            aria-labelledby="Bakery_Snacks-tab"
          >
            <section className="row tab-content-body">
              <section className="d-flex justify-content-center my-3 tab-content-head">
                <LazyLoadImage
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1705230011/07_Oral_Care_jouacy.jpg"
                  alt=""
                  className="img-fluid subCateBanner"
                  effect="blur"
                />
              </section>
              <Link
                className="col-12 col-lg-2 col-md-2 categoryContentBody"
                to={`/displayProduct/${"Breads"}`}
              >
                <LazyLoadImage
                  src=""
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">Breads</figcaption>
              </Link>

              <Link
                className="col-12 col-lg-2 col-md-2 categoryContentBody"
                to={`/displayProduct/${"Cookies"}`}
              >
                <LazyLoadImage
                  src=""
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Cookies
                </figcaption>
              </Link>

              <Link
                className="col-12 col-lg-2 col-md-2 categoryContentBody"
                to={`/displayProduct/${"Bakes"}`}
              >
                <LazyLoadImage
                  src=""
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">Bakes</figcaption>
              </Link>

              <Link
                className="col-12 col-lg-2 col-md-2 categoryContentBody"
                to={`/displayProduct/${"Snacks"}`}
              >
                <LazyLoadImage
                  src=""
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">Snacks</figcaption>
              </Link>
            </section>
          </div>

          {/* Forzen Item */}
          <div
            className="tab-pane fade"
            id="Forzen_Item"
            role="tabpanel"
            aria-labelledby="Forzen_Item-tab"
          >
            <section className="row tab-content-body">
              <section className="d-flex justify-content-center my-3 tab-content-head">
                <LazyLoadImage
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1705233307/Feminine-care_pptwkw.jpg"
                  alt=""
                  className="img-fluid subCateBanner"
                  effect="blur"
                />
              </section>
              <Link
                className="col-12 col-lg-2 col-md-2 categoryContentBody"
                to={`/displayProduct/${"ReadyToCook"}`}
              >
                <LazyLoadImage
                  src=""
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Ready To Cook
                </figcaption>
              </Link>

              <Link
                className="col-12 col-lg-2 col-md-2 categoryContentBody"
                to={`/displayProduct/${"OtherFrozenItem"}`}
              >
                <LazyLoadImage
                  src=""
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Other Frozen Item
                </figcaption>
              </Link>
            </section>
          </div>

          {/* Jarred and canned food */}
          <div
            className="tab-pane fade"
            id="Jarred_Canned"
            role="tabpanel"
            aria-labelledby="Jarred_Canned-tab"
          >
            <section className="row tab-content-body">
              <section className="d-flex justify-content-center my-3 tab-content-head">
                <LazyLoadImage
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1705233307/Feminine-care_pptwkw.jpg"
                  alt=""
                  className="img-fluid subCateBanner"
                  effect="blur"
                />
              </section>
              <Link
                className="col-12 col-lg-2 col-md-2 categoryContentBody"
                to={`/displayProduct/${"JarredFood"}`}
              >
                <LazyLoadImage
                  src=""
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Jarred Food
                </figcaption>
              </Link>

              <Link
                className="col-12 col-lg-2 col-md-2 categoryContentBody"
                to={`/displayProduct/${"CannedFoods"}`}
              >
                <LazyLoadImage
                  src=""
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Canned Foods
                </figcaption>
              </Link>
            </section>
          </div>

          {/* Beverage and chocolate */}
          <div
            className="tab-pane fade"
            id="Beverage_Chocolate"
            role="tabpanel"
            aria-labelledby="Beverage_Chocolate-tab"
          >
            <section className="row tab-content-body">
              <section className="d-flex justify-content-center my-3 tab-content-head">
                <LazyLoadImage
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1705233307/Feminine-care_pptwkw.jpg"
                  alt=""
                  className="img-fluid subCateBanner"
                  effect="blur"
                />
              </section>
              <Link
                className="col-12 col-lg-2 col-md-2 categoryContentBody"
                to={`/displayProduct/${"SoftDrinks"}`}
              >
                <LazyLoadImage
                  src=""
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Soft Drinks
                </figcaption>
              </Link>

              <Link
                className="col-12 col-lg-2 col-md-2 categoryContentBody"
                to={`/displayProduct/${"Juice"}`}
              >
                <LazyLoadImage
                  src=""
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">Juice</figcaption>
              </Link>

              <Link
                className="col-12 col-lg-2 col-md-2 categoryContentBody"
                to={`/displayProduct/${"Water"}`}
              >
                <LazyLoadImage
                  src=""
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">Water</figcaption>
              </Link>

              <Link
                className="col-12 col-lg-2 col-md-2 categoryContentBody"
                to={`/displayProduct/${"PowderedMlik"}`}
              >
                <LazyLoadImage
                  src=""
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Powdered Mlik
                </figcaption>
              </Link>

              <Link
                className="col-12 col-lg-2 col-md-2 categoryContentBody"
                to={`/displayProduct/${"Chocolate"}`}
              >
                <LazyLoadImage
                  src=""
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Chocolate
                </figcaption>
              </Link>
            </section>
          </div>

          {/* Soup and Noodles */}
          <div
            className="tab-pane fade"
            id="Soup_Noodles"
            role="tabpanel"
            aria-labelledby="Soup_Noodles-tab"
          >
            <section className="row tab-content-body">
              <section className="d-flex justify-content-center my-3 tab-content-head">
                <LazyLoadImage
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1705233307/Feminine-care_pptwkw.jpg"
                  alt=""
                  className="img-fluid subCateBanner"
                  effect="blur"
                />
              </section>
              <Link
                className="col-12 col-lg-2 col-md-2 categoryContentBody"
                to={`/displayProduct/${"Noodles"}`}
              >
                <LazyLoadImage
                  src=""
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Noodles
                </figcaption>
              </Link>

              <Link
                className="col-12 col-lg-2 col-md-2 categoryContentBody"
                to={`/displayProduct/${"Parta"}`}
              >
                <LazyLoadImage
                  src=""
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">Parta</figcaption>
              </Link>

              <Link
                className="col-12 col-lg-2 col-md-2 categoryContentBody"
                to={`/displayProduct/${"Soup"}`}
              >
                <LazyLoadImage
                  src=""
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">Soup</figcaption>
              </Link>

              <Link
                className="col-12 col-lg-2 col-md-2 categoryContentBody"
                to={`/displayProduct/${"InstandFood"}`}
              >
                <LazyLoadImage
                  src=""
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Instand Food
                </figcaption>
              </Link>
            </section>
          </div>

          {/* Home Essentials */}
          <div
            className="tab-pane fade"
            id="Home_Essentials"
            role="tabpanel"
            aria-labelledby="Home_Essentials-tab"
          >
            <section className="row tab-content-body">
              <section className="d-flex justify-content-center my-3 tab-content-head">
                <LazyLoadImage
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1705233307/Feminine-care_pptwkw.jpg"
                  alt=""
                  className="img-fluid subCateBanner"
                  effect="blur"
                />
              </section>
              <Link
                className="col-12 col-lg-2 col-md-2 categoryContentBody"
                to={`/displayProduct/${"Household"}`}
              >
                <LazyLoadImage
                  src=""
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Household
                </figcaption>
              </Link>

              <Link
                className="col-12 col-lg-2 col-md-2 categoryContentBody"
                to={`/displayProduct/${"KitchenDining"}`}
              >
                <LazyLoadImage
                  src=""
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Kitchen & Dining
                </figcaption>
              </Link>

              <Link
                className="col-12 col-lg-2 col-md-2 categoryContentBody"
                to={`/displayProduct/${"Bath"}`}
              >
                <LazyLoadImage
                  src=""
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">Bath</figcaption>
              </Link>
            </section>
          </div>

          {/* Cleaning needs */}
          <div
            className="tab-pane fade"
            id="Clearing_Needs"
            role="tabpanel"
            aria-labelledby="Clearing_Needs-tab"
          >
            <section className="row tab-content-body">
              <section className="d-flex justify-content-center my-3 tab-content-head">
                <LazyLoadImage
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1705233307/Feminine-care_pptwkw.jpg"
                  alt=""
                  className="img-fluid subCateBanner"
                  effect="blur"
                />
              </section>
              <Link
                className="col-12 col-lg-2 col-md-2 categoryContentBody"
                to={`/displayProduct/${"ClearingNeedsHousehold"}`}
              >
                <LazyLoadImage
                  src=""
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Household
                </figcaption>
              </Link>

              <Link
                className="col-12 col-lg-2 col-md-2 categoryContentBody"
                to={`/displayProduct/${"CleaningKitchenDining"}`}
              >
                <LazyLoadImage
                  src=""
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Cleaning Kitchen & Dining
                </figcaption>
              </Link>

              <Link
                className="col-12 col-lg-2 col-md-2 categoryContentBody"
                to={`/displayProduct/${"ClearingNeedsBath"}`}
              >
                <LazyLoadImage
                  src=""
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">Bath</figcaption>
              </Link>
            </section>
          </div>
        </aside>
        {/* Categories end */}
      </div>
      <AllFooter />
    </>
  );
};

export default GroceriesAndHomeEssentialsDisplay;
