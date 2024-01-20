import React, { useState, useEffect } from "react";
import AllHeader from "../../../Shared/Header/AllHeader";
import AllFooter from "../../../Shared/Footer/AllFooter";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "./CategoryDisplay.css";
import loader from "../../../Image/loder.gif";

const GiftAndCraftsDisplay = () => {
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
            <span>Gift And Craft</span>
          </section>
          <button
            className="nav-link active categoryButton"
            id="Novelty_Gifts-tab"
            data-bs-toggle="pill"
            data-bs-target="#Novelty_Gifts"
            type="button"
            role="tab"
            aria-controls="Novelty_Gifts"
            aria-selected="true"
          >
            Novelty Gifts
          </button>

          <button
            className="nav-link categoryButton"
            id="Promotional_Items-tab"
            data-bs-toggle="pill"
            data-bs-target="#Promotional_Items"
            type="button"
            role="tab"
            aria-controls="Promotional_Items"
            aria-selected="false"
          >
            Promotional Items
          </button>

          <button
            className="nav-link categoryButton"
            id="Crafting_Accessories-tab"
            data-bs-toggle="pill"
            data-bs-target="#Crafting_Accessories"
            type="button"
            role="tab"
            aria-controls="Crafting_Accessories"
            aria-selected="false"
          >
            Crafting Accessories
          </button>

          <button
            className="nav-link categoryButton"
            id="Festival_Decoration-tab"
            data-bs-toggle="pill"
            data-bs-target="#Festival_Decoration"
            type="button"
            role="tab"
            aria-controls="Festival_Decoration"
            aria-selected="false"
          >
            Festival Decoration
          </button>

          <button
            className="nav-link categoryButton"
            id="Gift_Wrapping_Supplies-tab"
            data-bs-toggle="pill"
            data-bs-target="#Gift_Wrapping_Supplies"
            type="button"
            role="tab"
            aria-controls="Gift_Wrapping_Supplies"
            aria-selected="false"
          >
            Gift Wrapping Supplies
          </button>
        </aside>
        {/* Sidebar end */}

        {/* Categories start */}
        <aside
          className="tab-content me-2 categoryContentDisplay"
          id="v-pills-tabContent"
        >
          {/* Novelty */}
          <div
            className="tab-pane fade show active"
            id="Novelty_Gifts"
            role="tabpanel"
            aria-labelledby="Novelty_Gifts-tab"
          >
            <section className="row tab-content-body">
              <section className="d-flex justify-content-center my-3 tab-content-head">
                <LazyLoadImage
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1705565985/01-Novelty-Gifts_hnrm3w.png"
                  alt=""
                  className="img-fluid subCateBanner"
                  effect="blur"
                />
              </section>
              <Link
                className="col-12 col-lg-2 col-md-2 categoryContentBody"
                to={`/displayProduct/${"Novelty Gifts"}`}
              >
                <LazyLoadImage
                  src=""
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Novelty Gifts
                </figcaption>
              </Link>
            </section>
          </div>

          {/* Promotional Item */}
          <div
            className="tab-pane fade"
            id="Promotional_Items"
            role="tabpanel"
            aria-labelledby="Promotional_Items-tab"
          >
            <section className="row tab-content-body">
              <section className="img-fluid d-flex justify-content-center my-3 tab-content-head">
                <LazyLoadImage
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1705565985/02-Promotional-Items_jsk7cr.png"
                  alt=""
                  className="img-fluid subCateBanner"
                  effect="blur"
                />
              </section>
              <Link
                className="col-12 col-lg-2 col-md-2 categoryContentBody"
                to={`/displayProduct/${"Promotional Items"}`}
              >
                <LazyLoadImage
                  src=""
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Promotional Items
                </figcaption>
              </Link>
            </section>
          </div>

          {/* Crafting Accessories */}
          <div
            className="tab-pane fade"
            id="Crafting_Accessories"
            role="tabpanel"
            aria-labelledby="Crafting_Accessories-tab"
          >
            <section className="row tab-content-body">
              <section className="d-flex justify-content-center my-3 tab-content-head">
                <LazyLoadImage
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1705565986/03-Crafting-Accessories_zco3qt.png"
                  alt=""
                  className="img-fluid subCateBanner"
                  effect="blur"
                />
              </section>
              <Link
                className="col-12 col-lg-2 col-md-2 categoryContentBody"
                to={`/displayProduct/${"Promotional Items"}`}
              >
                <LazyLoadImage
                  src=""
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Promotional Items
                </figcaption>
              </Link>
            </section>
          </div>

          {/* Festival Decoration */}
          <div
            className="tab-pane fade"
            id="Festival_Decoration"
            role="tabpanel"
            aria-labelledby="Festival_Decoration-tab"
          >
            <section className="row tab-content-body">
              <section className="d-flex justify-content-center my-3 tab-content-head">
                <LazyLoadImage
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1705565985/04-Festival-Decoration_othl7m.png"
                  alt=""
                  className="img-fluid subCateBanner"
                  effect="blur"
                />
              </section>
              <Link
                className="col-12 col-lg-2 col-md-2 categoryContentBody"
                to={`/displayProduct/${"Festival Decoration"}`}
              >
                <LazyLoadImage
                  src=""
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Festival Decoration
                </figcaption>
              </Link>
            </section>
          </div>

          {/* Gift Wrapping Supplies */}
          <div
            className="tab-pane fade"
            id="Gift_Wrapping_Supplies"
            role="tabpanel"
            aria-labelledby="Gift_Wrapping_Supplies-tab"
          >
            <section className="row tab-content-body">
              <section className="d-flex justify-content-center my-3 tab-content-head">
                <LazyLoadImage
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1705565985/05-Gift-Wrapping-Supplies_mffzvw.png"
                  alt=""
                  className="img-fluid subCateBanner"
                  effect="blur"
                />
              </section>
              <Link
                className="col-12 col-lg-2 col-md-2 categoryContentBody"
                to={`/displayProduct/${"Gift Wrapping Supplies"}`}
              >
                <LazyLoadImage
                  src=""
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Gift Wrapping Supplies
                </figcaption>
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

export default GiftAndCraftsDisplay;
