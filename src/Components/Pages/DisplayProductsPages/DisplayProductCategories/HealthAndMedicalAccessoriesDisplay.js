import React, { useState, useEffect } from "react";
import AllHeader from "../../../Shared/Header/AllHeader";
import AllFooter from "../../../Shared/Footer/AllFooter";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "./CategoryDisplay.css";
import loader from "../../../Image/loder.gif";

const BeautyAndPersonalCareDisplay = () => {
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
            <span>Health And Medical Accessories</span>
          </section>
          <button
            className="nav-link active categoryButton"
            id="Personal_Care-tab"
            data-bs-toggle="pill"
            data-bs-target="#Personal_Care"
            type="button"
            role="tab"
            aria-controls="Personal_Care"
            aria-selected="true"
          >
            Personal Care & Safety
          </button>

          <button
            className="nav-link categoryButton"
            id="Medical_Supplies-tab"
            data-bs-toggle="pill"
            data-bs-target="#Medical_Supplies"
            type="button"
            role="tab"
            aria-controls="Medical_Supplies"
            aria-selected="false"
          >
            Medical Supplies
          </button>

          <button
            className="nav-link categoryButton"
            id="Food_Supplement-tab"
            data-bs-toggle="pill"
            data-bs-target="#Food_Supplement"
            type="button"
            role="tab"
            aria-controls="Food_Supplement"
            aria-selected="false"
          >
            Food Supplement's
          </button>

          <button
            className="nav-link categoryButton"
            id="Sexual_Wellness-tab"
            data-bs-toggle="pill"
            data-bs-target="#Sexual_Wellness"
            type="button"
            role="tab"
            aria-controls="Sexual_Wellness"
            aria-selected="false"
          >
            Sexual Wellness
          </button>
        </aside>
        {/* Sidebar end */}

        {/* Categories start */}
        <aside
          className="tab-content me-2 categoryContentDisplay"
          id="v-pills-tabContent"
        >
          {/* Personal Care And Safety */}
          <div
            className="tab-pane fade show active"
            id="Personal_Care"
            role="tabpanel"
            aria-labelledby="Personal_Care-tab"
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
                to={`/displayProduct/${"PersonalCareSafety"}`}
              >
                <LazyLoadImage
                  src=""
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Personal Care & Safety
                </figcaption>
              </Link>
            </section>
          </div>

          {/*  Medical Supplies */}
          <div
            className="tab-pane fade"
            id="Medical_Supplies"
            role="tabpanel"
            aria-labelledby="Medical_Supplies-tab"
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
                to={`/displayProduct/${"Kurtis"}`}
              >
                <LazyLoadImage
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1686203672/shokhbari_apparel/kurti_wcmdkl.webp"
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">Kurtis</figcaption>
              </Link>
            </section>
          </div>

          {/* Food Supplements */}
          <div
            className="tab-pane fade"
            id="Food_Supplement"
            role="tabpanel"
            aria-labelledby="Food_Supplement-tab"
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
                to={`/displayProduct/${"M-Shirts"}`}
              >
                <LazyLoadImage
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1686136779/shokhbari_apparel/shirt_k99kte.webp"
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  testing
                </figcaption>
              </Link>
            </section>
          </div>

          {/* Sexual Wellness */}
          <div
            className="tab-pane fade"
            id="Sexual_Wellness"
            role="tabpanel"
            aria-labelledby="Sexual_Wellness-tab"
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
                to={`/displayProduct/${"M-Shirts"}`}
              >
                <LazyLoadImage
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1686136779/shokhbari_apparel/shirt_k99kte.webp"
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">Shirts</figcaption>
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

export default BeautyAndPersonalCareDisplay;
