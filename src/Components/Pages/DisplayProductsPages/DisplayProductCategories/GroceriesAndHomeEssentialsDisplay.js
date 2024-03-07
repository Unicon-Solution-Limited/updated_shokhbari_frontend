import React, { useState, useEffect } from "react";
import AllHeader from "../../../Shared/Header/AllHeader";
import AllFooter from "../../../Shared/Footer/AllFooter";
import { Link, useParams } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "./CategoryDisplay.css";
import loader from "../../../Image/loder.gif";

const GroceriesAndHomeEssentialsDisplay = () => {
  const { itemName } = useParams();
  return (
    <>
      <AllHeader />
      <div className="d-flex align-items-start">
        {/* Categories start */}
        <aside>
          {/* Prime food */}
          {itemName === "Prime_Food" && (
            <div id="Prime_Food">
              <LazyLoadImage
                src="https://res.cloudinary.com/shokhbari/image/upload/v1705230011/01_Bath_Body_kkuokk.jpg"
                alt=""
                className="img-fluid subCateBanner mb-5"
                effect="blur"
              />
              <section className="row tab-content-body m-0 container-fluid">
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
                  <figcaption className="categoryImageCaption">
                    Pulses
                  </figcaption>
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
          )}

          {/* Fruits and vegetables */}
          {itemName === "Fruits_Vagetables" && (
            <div id="Fruits_Vagetables">
              <LazyLoadImage
                src="https://res.cloudinary.com/shokhbari/image/upload/v1705230012/02_Beauty_Tools_pfoksa.jpg"
                alt=""
                className="img-fluid subCateBanner mb-5"
                effect="blur"
              />
              <section className="row tab-content-body m-0 container-fluid justify-content-center">
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
                  <figcaption className="categoryImageCaption">
                    Fruit
                  </figcaption>
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
          )}

          {/* Meat Fish and sea food */}
          {itemName === "Meat_Fish_Seafood" && (
            <div id="MeatFish_Seafood">
              <LazyLoadImage
                src="https://res.cloudinary.com/shokhbari/image/upload/v1705230011/03_Fragraneces_Men_Women_rg9nv8.jpg"
                alt=""
                className="img-fluid subCateBanner mb-5"
                effect="blur"
              />
              <section className="row tab-content-body m-0 container-fluid justify-content-center">
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
          )}

          {/* Cooking Inredient */}
          {itemName === "Cooking_Ingredient" && (
            <div>
              <LazyLoadImage
                src="https://res.cloudinary.com/shokhbari/image/upload/v1705230011/04_Hair_Care_cgm6d3.jpg"
                alt=""
                className="img-fluid subCateBanner mb-5"
                effect="blur"
              />
              <section className="row tab-content-body m-0 container-fluid">
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
                  <figcaption className="categoryImageCaption">
                    Herbs
                  </figcaption>
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
                  <figcaption className="categoryImageCaption">
                    Sauces
                  </figcaption>
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
          )}

          {/* Breakfast and tea-coffe */}
          {itemName === "Breakfast_Tea_Coffee" && (
            <div id="Breakfast_Tea">
              <LazyLoadImage
                src="https://res.cloudinary.com/shokhbari/image/upload/v1705230011/05_Skin_Care_t1wx3a.jpg"
                alt=""
                className="img-fluid subCateBanner mb-5"
                effect="blur"
              />
              <section className="row tab-content-body m-0 container-fluid justify-content-center">
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
                  <figcaption className="categoryImageCaption">
                    Coffee
                  </figcaption>
                </Link>
              </section>
            </div>
          )}

          {/* Sweets and Dairy */}
          {itemName === "Sweets_Dairy" && (
            <div id="Sweets_Dairy">
              <LazyLoadImage
                src="https://res.cloudinary.com/shokhbari/image/upload/v1705230011/06_MakeUp_d11nfa.jpg"
                alt=""
                className="img-fluid subCateBanner mb-5"
                effect="blur"
              />
              <section className="row tab-content-body m-0 container-fluid">
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
                  <figcaption className="categoryImageCaption">
                    Butter
                  </figcaption>
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
                  <figcaption className="categoryImageCaption">
                    Cheese
                  </figcaption>
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
                  <figcaption className="categoryImageCaption">
                    Sweets
                  </figcaption>
                </Link>
              </section>
            </div>
          )}

          {/* Bakery and snacks */}
          {itemName === "Bakery_Snacks" && (
            <div id="Bakery_Snacks">
              <LazyLoadImage
                src="https://res.cloudinary.com/shokhbari/image/upload/v1705230011/07_Oral_Care_jouacy.jpg"
                alt=""
                className="img-fluid subCateBanner mb-5"
                effect="blur"
              />
              <section className="row tab-content-body m-0 container-fluid justify-content-center">
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
                  <figcaption className="categoryImageCaption">
                    Breads
                  </figcaption>
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
                  <figcaption className="categoryImageCaption">
                    Bakes
                  </figcaption>
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
                  <figcaption className="categoryImageCaption">
                    Snacks
                  </figcaption>
                </Link>
              </section>
            </div>
          )}

          {/* Forzen Item */}
          {itemName === "Forzen_Item" && (
            <div id="Forzen_Item">
              <LazyLoadImage
                src="https://res.cloudinary.com/shokhbari/image/upload/v1705233307/Feminine-care_pptwkw.jpg"
                alt=""
                className="img-fluid subCateBanner mb-5"
                effect="blur"
              />
              <section className="row tab-content-body m-0 container-fluid justify-content-center">
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
          )}

          {/* Jarred and canned food */}
          {itemName === "Jarred_Canned" && (
            <div id="Jarred_Canned">
              <LazyLoadImage
                src="https://res.cloudinary.com/shokhbari/image/upload/v1705233307/Feminine-care_pptwkw.jpg"
                alt=""
                className="img-fluid subCateBanner mb-5"
                effect="blur"
              />
              <section className="row tab-content-body m-0 container-fluid justify-content-center">
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
          )}

          {/* Beverage and chocolate */}
          {itemName === "Beverage_Chocolate" && (
            <div id="Beverage_Chocolate">
              <LazyLoadImage
                src="https://res.cloudinary.com/shokhbari/image/upload/v1705233307/Feminine-care_pptwkw.jpg"
                alt=""
                className="img-fluid subCateBanner mb-5"
                effect="blur"
              />
              <section className="row tab-content-body m-0 container-fluid justify-content-center">
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
                  <figcaption className="categoryImageCaption">
                    Juice
                  </figcaption>
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
                  <figcaption className="categoryImageCaption">
                    Water
                  </figcaption>
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
          )}

          {/* Soup and Noodles */}
          {itemName === "Soup_Noodles" && (
            <div id="Soup_Noodles">
              <LazyLoadImage
                src="https://res.cloudinary.com/shokhbari/image/upload/v1705233307/Feminine-care_pptwkw.jpg"
                alt=""
                className="img-fluid subCateBanner mb-5"
                effect="blur"
              />
              <section className="row tab-content-body m-0 container-fluid justify-content-center">
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
                  <figcaption className="categoryImageCaption">
                    Parta
                  </figcaption>
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
          )}

          {/* Home Essentials */}
          {itemName === "Home_Essentials" && (
            <div id="Home_Essentials">
              <LazyLoadImage
                src="https://res.cloudinary.com/shokhbari/image/upload/v1705233307/Feminine-care_pptwkw.jpg"
                alt=""
                className="img-fluid subCateBanner mb-5"
                effect="blur"
              />
              <section className="row tab-content-body m-0 container-fluid justify-content-center">
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
          )}

          {/* Cleaning needs */}
          {itemName === "Clearing_Needs" && (
            <div id="Clearing_Needs">
              <LazyLoadImage
                src="https://res.cloudinary.com/shokhbari/image/upload/v1705233307/Feminine-care_pptwkw.jpg"
                alt=""
                className="img-fluid subCateBanner mb-5"
                effect="blur"
              />
              <section className="row tab-content-body m-0 container-fluid justify-content-center">
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
          )}
        </aside>
        {/* Categories end */}
      </div>
      <AllFooter />
    </>
  );
};

export default GroceriesAndHomeEssentialsDisplay;
