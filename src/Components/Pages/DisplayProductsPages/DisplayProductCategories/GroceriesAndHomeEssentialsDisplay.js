import React, { useState, useEffect } from "react";
import AllHeader from "../../../Shared/Header/AllHeader";
import AllFooter from "../../../Shared/Footer/AllFooter";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "./CategoryDisplay.css";
import loader from "../../../Image/loder.gif";

const GroceriesAndHomeEssentialsDisplay = () => {
  const [groceriesActiveTab, setGroceriesgroceriesActiveTab] = useState("");

  useEffect(() => {
    const storedTab = localStorage.getItem("groceriesActiveTab");
    setGroceriesgroceriesActiveTab(storedTab || "#Prime_Food-tab"); // Setting default active tab
  }, []);

  const handleTabChange = (tab) => {
    setGroceriesgroceriesActiveTab(tab);
    localStorage.setItem("groceriesActiveTab", tab);
  };
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
            id="Prime_Food-tab"
            data-bs-toggle="pill"
            data-bs-target="#Prime_Food"
            type="button"
            role="tab"
            aria-controls="Prime_Food"
            aria-selected={
              groceriesActiveTab === "#Prime_Food-tab" ? "true" : "false"
            }
            className={`nav-link categoryButton ${
              groceriesActiveTab === "#Prime_Food-tab" ? "active" : ""
            }`}
            onClick={() => handleTabChange("#Prime_Food-tab")}
          >
            Prime Food
          </button>

          <button
            id="Fruits_Vagetables-tab"
            data-bs-toggle="pill"
            data-bs-target="#Fruits_Vagetables"
            type="button"
            role="tab"
            aria-controls="Fruits_Vagetables"
            aria-selected={
              groceriesActiveTab === "#Fruits_Vagetables-tab" ? "true" : "false"
            }
            className={`nav-link categoryButton ${
              groceriesActiveTab === "#Fruits_Vagetables-tab" ? "active" : ""
            }`}
            onClick={() => handleTabChange("#Fruits_Vagetables-tab")}
          >
            Fruits & Vagetables
          </button>

          <button
            id="MeatFish_Seafood-tab"
            data-bs-toggle="pill"
            data-bs-target="#MeatFish_Seafood"
            type="button"
            role="tab"
            aria-controls="MeatFish_Seafood"
            aria-selected={
              groceriesActiveTab === "#MeatFish_Seafood-tab" ? "true" : "false"
            }
            className={`nav-link categoryButton ${
              groceriesActiveTab === "#MeatFish_Seafood-tab" ? "active" : ""
            }`}
            onClick={() => handleTabChange("#MeatFish_Seafood-tab")}
          >
            Meat Fish & Seafood
          </button>

          <button
            id="Cooking_Ingredient-tab"
            data-bs-toggle="pill"
            data-bs-target="#Cooking_Ingredient"
            type="button"
            role="tab"
            aria-controls="Cooking_Ingredient"
            aria-selected={
              groceriesActiveTab === "#Cooking_Ingredient-tab"
                ? "true"
                : "false"
            }
            className={`nav-link categoryButton ${
              groceriesActiveTab === "#Cooking_Ingredient-tab" ? "active" : ""
            }`}
            onClick={() => handleTabChange("#Cooking_Ingredient-tab")}
          >
            Cooking Ingredient
          </button>

          <button
            id="Breakfast_Tea-tab"
            data-bs-toggle="pill"
            data-bs-target="#Breakfast_Tea"
            type="button"
            role="tab"
            aria-controls="Breakfast_Tea"
            aria-selected={
              groceriesActiveTab === "#Breakfast_Tea-tab" ? "true" : "false"
            }
            className={`nav-link categoryButton ${
              groceriesActiveTab === "#Breakfast_Tea-tab" ? "active" : ""
            }`}
            onClick={() => handleTabChange("#Breakfast_Tea-tab")}
          >
            Breakfast Tea & Coffee
          </button>

          <button
            id="Sweets_Dairy-tab"
            data-bs-toggle="pill"
            data-bs-target="#Sweets_Dairy"
            type="button"
            role="tab"
            aria-controls="Sweets_Dairy"
            aria-selected={
              groceriesActiveTab === "#Sweets_Dairy-tab" ? "true" : "false"
            }
            className={`nav-link categoryButton ${
              groceriesActiveTab === "#Sweets_Dairy-tab" ? "active" : ""
            }`}
            onClick={() => handleTabChange("#Sweets_Dairy-tab")}
          >
            Sweets & Dairy
          </button>

          <button
            id="Bakery_Snacks-tab"
            data-bs-toggle="pill"
            data-bs-target="#Bakery_Snacks"
            type="button"
            role="tab"
            aria-controls="Bakery_Snacks"
            aria-selected={
              groceriesActiveTab === "#Bakery_Snacks-tab" ? "true" : "false"
            }
            className={`nav-link categoryButton ${
              groceriesActiveTab === "#Bakery_Snacks-tab" ? "active" : ""
            }`}
            onClick={() => handleTabChange("#Bakery_Snacks-tab")}
          >
            Bakery Snacks
          </button>

          <button
            id="Forzen_Item-tab"
            data-bs-toggle="pill"
            data-bs-target="#Forzen_Item"
            type="button"
            role="tab"
            aria-controls="Forzen_Item"
            aria-selected={
              groceriesActiveTab === "#Forzen_Item-tab" ? "true" : "false"
            }
            className={`nav-link categoryButton ${
              groceriesActiveTab === "#Forzen_Item-tab" ? "active" : ""
            }`}
            onClick={() => handleTabChange("#Forzen_Item-tab")}
          >
            Forzen Item
          </button>

          <button
            id="Jarred_Canned-tab"
            data-bs-toggle="pill"
            data-bs-target="#Jarred_Canned"
            type="button"
            role="tab"
            aria-controls="Jarred_Canned"
            aria-selected={
              groceriesActiveTab === "#Jarred_Canned-tab" ? "true" : "false"
            }
            className={`nav-link categoryButton ${
              groceriesActiveTab === "#Jarred_Canned-tab" ? "active" : ""
            }`}
            onClick={() => handleTabChange("#Jarred_Canned-tab")}
          >
            Jarred and Canned Food
          </button>

          <button
            id="Beverage_Chocolate-tab"
            data-bs-toggle="pill"
            data-bs-target="#Beverage_Chocolate"
            type="button"
            role="tab"
            aria-controls="Beverage_Chocolate"
            aria-selected={
              groceriesActiveTab === "#Beverage_Chocolate-tab"
                ? "true"
                : "false"
            }
            className={`nav-link categoryButton ${
              groceriesActiveTab === "#Beverage_Chocolate-tab" ? "active" : ""
            }`}
            onClick={() => handleTabChange("#Beverage_Chocolate-tab")}
          >
            Beverage Chocolate
          </button>

          <button
            id="Soup_Noodles-tab"
            data-bs-toggle="pill"
            data-bs-target="#Soup_Noodles"
            type="button"
            role="tab"
            aria-controls="Soup_Noodles"
            aria-selected={
              groceriesActiveTab === "#Soup_Noodles-tab" ? "true" : "false"
            }
            className={`nav-link categoryButton ${
              groceriesActiveTab === "#Soup_Noodles-tab" ? "active" : ""
            }`}
            onClick={() => handleTabChange("#Soup_Noodles-tab")}
          >
            Soup & Noodles
          </button>

          <button
            id="Home_Essentials-tab"
            data-bs-toggle="pill"
            data-bs-target="#Home_Essentials"
            type="button"
            role="tab"
            aria-controls="Home_Essentials"
            aria-selected={
              groceriesActiveTab === "#Home_Essentials-tab" ? "true" : "false"
            }
            className={`nav-link categoryButton ${
              groceriesActiveTab === "#Home_Essentials-tab" ? "active" : ""
            }`}
            onClick={() => handleTabChange("#Home_Essentials-tab")}
          >
            Home Essentials
          </button>

          <button
            id="Clearing_Needs-tab"
            data-bs-toggle="pill"
            data-bs-target="#Clearing_Needs"
            type="button"
            role="tab"
            aria-controls="Clearing_Needs"
            aria-selected={
              groceriesActiveTab === "#Clearing_Needs-tab" ? "true" : "false"
            }
            className={`nav-link categoryButton ${
              groceriesActiveTab === "#Clearing_Needs-tab" ? "active" : ""
            }`}
            onClick={() => handleTabChange("#Clearing_Needs-tab")}
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
            id="Prime_Food"
            role="tabpanel"
            aria-labelledby="Prime_Food-tab"
            className={`tab-pane fade ${
              groceriesActiveTab === "#Prime_Food-tab" ? "show active" : ""
            }`}
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
            id="Fruits_Vagetables"
            role="tabpanel"
            aria-labelledby="Fruits_Vagetables-tab"
            className={`tab-pane fade ${
              groceriesActiveTab === "#Fruits_Vagetables-tab"
                ? "show active"
                : ""
            }`}
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
            id="MeatFish_Seafood"
            role="tabpanel"
            aria-labelledby="MeatFish_Seafood-tab"
            className={`tab-pane fade ${
              groceriesActiveTab === "#MeatFish_Seafood-tab"
                ? "show active"
                : ""
            }`}
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
            id="Cooking_Ingredient"
            role="tabpanel"
            aria-labelledby="Cooking_Ingredient-tab"
            className={`tab-pane fade ${
              groceriesActiveTab === "#Cooking_Ingredient-tab"
                ? "show active"
                : ""
            }`}
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
            id="Breakfast_Tea"
            role="tabpanel"
            aria-labelledby="Breakfast_Tea-tab"
            className={`tab-pane fade ${
              groceriesActiveTab === "#Breakfast_Tea-tab" ? "show active" : ""
            }`}
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
            id="Sweets_Dairy"
            role="tabpanel"
            aria-labelledby="Sweets_Dairy-tab"
            className={`tab-pane fade ${
              groceriesActiveTab === "#Sweets_Dairy-tab" ? "show active" : ""
            }`}
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
            id="Bakery_Snacks"
            role="tabpanel"
            aria-labelledby="Bakery_Snacks-tab"
            className={`tab-pane fade ${
              groceriesActiveTab === "#Bakery_Snacks-tab" ? "show active" : ""
            }`}
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
            id="Forzen_Item"
            role="tabpanel"
            aria-labelledby="Forzen_Item-tab"
            className={`tab-pane fade ${
              groceriesActiveTab === "#Forzen_Item-tab" ? "show active" : ""
            }`}
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
            id="Jarred_Canned"
            role="tabpanel"
            aria-labelledby="Jarred_Canned-tab"
            className={`tab-pane fade ${
              groceriesActiveTab === "#Jarred_Canned-tab" ? "show active" : ""
            }`}
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
            id="Beverage_Chocolate"
            role="tabpanel"
            aria-labelledby="Beverage_Chocolate-tab"
            className={`tab-pane fade ${
              groceriesActiveTab === "#Beverage_Chocolate-tab"
                ? "show active"
                : ""
            }`}
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
            id="Soup_Noodles"
            role="tabpanel"
            aria-labelledby="Soup_Noodles-tab"
            className={`tab-pane fade ${
              groceriesActiveTab === "#Soup_Noodles-tab" ? "show active" : ""
            }`}
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
            id="Home_Essentials"
            role="tabpanel"
            aria-labelledby="Home_Essentials-tab"
            className={`tab-pane fade ${
              groceriesActiveTab === "#Home_Essentials-tab" ? "show active" : ""
            }`}
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
            id="Clearing_Needs"
            role="tabpanel"
            aria-labelledby="Clearing_Needs-tab"
            className={`tab-pane fade ${
              groceriesActiveTab === "#Clearing_Needs-tab" ? "show active" : ""
            }`}
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
