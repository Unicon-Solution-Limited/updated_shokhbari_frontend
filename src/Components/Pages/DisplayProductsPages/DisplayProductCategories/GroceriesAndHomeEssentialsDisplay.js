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
                src="https://res.cloudinary.com/shokhbari/image/upload/v1713786738/Prime_Food2_nifwzp.jpg"
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
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1711014641/Rice-2_s3gktq.jpg"
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
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1711014632/Pulses-3_leb6bh.jpg"
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
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1711014624/Atta-_-Suji-2_n22llt.jpg"
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
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1711014646/Suger-_-Salt-1_ji92m1.jpg"
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
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1711014627/Powdered-Milk-1_omfqb5.jpg"
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
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1711014637/Other-Prime-Food-2_fuvlts.jpg"
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
                src="https://res.cloudinary.com/shokhbari/image/upload/v1713786833/Fruits_Vagetables2_pqxzy7.jpg"
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
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1711171827/Vegetables-4_l4emip.jpg"
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
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1711171814/Fruit-_3_zgi6zr.jpg"
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
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1711171795/DryFruit_Nut_1_fzzatf.jpg"
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
                src="https://res.cloudinary.com/shokhbari/image/upload/v1713786954/Meat_Fish_Seafood2_zhaeln.jpg"
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
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1711172086/Meat-3_o4cosb.jpg"
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
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1711172085/Fish-1_kvs5ah.jpg"
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
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1711172084/Dry-Fish-4_ynsxje.jpg"
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
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1711172086/Sea-Food-2_b1rrdy.jpg"
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
                src="https://res.cloudinary.com/shokhbari/image/upload/v1713787017/Cooking_Ingredient3_zftppo.jpg"
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
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1711259205/Cooking-Oils-1_ydfrjr.jpg"
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
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1711259207/Spices-Condiments-4_vpo5gt.jpg"
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
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1711259205/Food-Additives-1_ej3kg1.jpg"
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
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1711259205/Herbs-1_kznqsu.jpg"
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
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1711259205/Sauces-5_nxycxt.jpg"
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
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1711259205/Instant-Mix-1_lugsms.jpg"
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
                src="https://res.cloudinary.com/shokhbari/image/upload/v1713950088/Breakfast_Tea_Coffee1_fh1hfk.jpg"
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
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1711259475/Breakfast-Food-4_rsamzz.jpg"
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
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1711259476/tea-_2_ppbvmd.jpg"
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
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1711259475/Coffee-_1_bm84fn.jpg"
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
                src="https://res.cloudinary.com/shokhbari/image/upload/v1713950169/Sweets_Dairy2_npddxt.jpg"
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
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1711259810/milk-1_wosx2h.jpg"
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
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1711259799/Butter-4_kvcaoc.jpg"
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
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1711259799/Cheese-1_joxutz.jpg"
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
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1711259812/Yougrat-1_y2w1xi.jpg"
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
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1711259809/Ice_Crem_2_rgpuaz.jpg"
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
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1711259811/Sweets-2_sjgxrq.jpg"
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
                src="https://res.cloudinary.com/shokhbari/image/upload/v1713950498/Bakery_Snacks1_c3fuhm.jpg"
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
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1711260146/Breads-_2_kyg5il.jpg"
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
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1711260146/Cookies-1_v0sofj.jpg"
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
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1711260146/Bakes_ntwotr.jpg"
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
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1711260149/Snacks-1_ivm8dc.jpg"
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
                src="https://res.cloudinary.com/shokhbari/image/upload/v1713950892/Forzen_Item1_btkqih.jpg"
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
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1711260402/Ready-To-Cook-1_vljj1g.jpg"
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
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1711260401/Other-Frozen-Item-1_mktf2v.jpg"
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
                src="https://res.cloudinary.com/shokhbari/image/upload/v1713951023/Jarred_and_Canned_Food1_uhwbtn.jpg"
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
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1711513069/Jarred-Food-3_t3eujw.jpg"
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
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1711513069/Canned-Foods-2_o1ekok.jpg"
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
                src="https://res.cloudinary.com/shokhbari/image/upload/v1713951089/Beverage_Chocolate1_zhuo68.jpg"
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
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1711513200/Soft-Drinks-1_ii4qxk.jpg"
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
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1711513198/Juice-1_jueyoz.jpg"
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
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1711513201/Water-3_xau6ur.jpg"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Water
                  </figcaption>
                </Link>

                {/* <Link
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
                </Link> */}

                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Chocolate"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1711513197/Chocolate-3_ztxilp.jpg"
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
                src="https://res.cloudinary.com/shokhbari/image/upload/v1713951143/Soup_Noodles2_kwqgad.jpg"
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
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1711513400/Noodles-1_zubyva.jpg"
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
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1711513401/pasta-2_ttikd2.jpg"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Pasta
                  </figcaption>
                </Link>

                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Soup"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1711513403/Soup-1_hnuxes.jpg"
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
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1711513398/Instand_Noodles_rrvhh3.jpg"
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
                src="https://res.cloudinary.com/shokhbari/image/upload/v1713951189/Home_Essentials1_vckc9h.jpg"
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
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1711513564/Household-2_tdrkne.jpg"
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
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1711513566/Kitchen-_-Dining-1_aqyudx.jpg"
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
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1711513562/Bath-1_etbgi0.jpg"
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
                src="https://res.cloudinary.com/shokhbari/image/upload/v1713951258/Clearing_Needs1_pld7rc.jpg"
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
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1711513644/Household-2_zlralv.jpg"
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
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1711513642/Cleaning-Kitchen-_-Dining-2_xtsxyj.jpg"
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
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1711513640/bath-1_vmwfot.jpg"
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
