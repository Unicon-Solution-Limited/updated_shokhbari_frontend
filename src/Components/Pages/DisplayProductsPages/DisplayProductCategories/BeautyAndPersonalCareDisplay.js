import React, { useState, useEffect } from "react";
import AllHeader from "../../../Shared/Header/AllHeader";
import AllFooter from "../../../Shared/Footer/AllFooter";
import { Link, useHistory } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "./CategoryDisplay.css";
import loader from "../../../Image/loder.gif";

const BeautyAndPersonalCareDisplay = () => {
  const history = useHistory();
  const [beautyPersonalActiveTab, setBeautyPersonalbeautyPersonalActiveTab] =
    useState("");

  useEffect(() => {
    const storedTab = localStorage.getItem("beautyPersonalActiveTab");
    setBeautyPersonalbeautyPersonalActiveTab(storedTab || "#Bath_Body"); // Setting default active tab
  }, []);

  const handleTabChange = (tab) => {
    setBeautyPersonalbeautyPersonalActiveTab(tab);
    localStorage.setItem("beautyPersonalActiveTab", tab);
  };
  return (
    <>
      <AllHeader />
      <div className="d-flex align-items-start">
        {/* Sidebar start */}
        <aside
          className="nav flex-column nav-pills me-2 categoryButtonBody"
          role="tablist"
          aria-orientation="vertical"
        >
          <section className="categoryButtonHeader">
            <span>Beauty And Personal Care</span>
          </section>
          <button
            id="Bath_Body-tab"
            data-bs-toggle="pill"
            data-bs-target="#Bath_Body"
            type="button"
            role="tab"
            aria-controls="Bath_Body"
            aria-selected={
              beautyPersonalActiveTab === "#Bath_Body" ? "true" : "false"
            }
            className={`nav-link categoryButton ${
              beautyPersonalActiveTab === "#Bath_Body" ? "active" : ""
            }`}
            onClick={() => handleTabChange("#Bath_Body")}
          >
            Bath & Body
          </button>

          <button
            id="Beauty_Tools-tab"
            data-bs-toggle="pill"
            data-bs-target="#Beauty_Tools"
            type="button"
            role="tab"
            aria-controls="Beauty_Tools"
            aria-selected={
              beautyPersonalActiveTab === "#Beauty_Tools" ? "true" : "false"
            }
            className={`nav-link categoryButton ${
              beautyPersonalActiveTab === "#Beauty_Tools" ? "active" : ""
            }`}
            onClick={() => handleTabChange("#Beauty_Tools")}
          >
            Beauty Tools
          </button>

          <button
            id="Fragrances-tab"
            data-bs-toggle="pill"
            data-bs-target="#Fragrances"
            type="button"
            role="tab"
            aria-controls="Fragrances"
            aria-selected={
              beautyPersonalActiveTab === "#Fragrances" ? "true" : "false"
            }
            className={`nav-link categoryButton ${
              beautyPersonalActiveTab === "#Fragrances" ? "active" : ""
            }`}
            onClick={() => handleTabChange("#Fragrances")}
          >
            Fragrances
          </button>

          <button
            id="Hair_Care-tab"
            data-bs-toggle="pill"
            data-bs-target="#Hair_Care"
            type="button"
            role="tab"
            aria-controls="Hair_Care"
            aria-selected={
              beautyPersonalActiveTab === "#Hair_Care" ? "true" : "false"
            }
            className={`nav-link categoryButton ${
              beautyPersonalActiveTab === "#Hair_Care" ? "active" : ""
            }`}
            onClick={() => handleTabChange("#Hair_Care")}
          >
            Hair Care
          </button>

          <button
            id="Skin_Care-tab"
            data-bs-toggle="pill"
            data-bs-target="#Skin_Care"
            type="button"
            role="tab"
            aria-controls="Skin_Care"
            aria-selected={
              beautyPersonalActiveTab === "#Skin_Care" ? "true" : "false"
            }
            className={`nav-link categoryButton ${
              beautyPersonalActiveTab === "#Skin_Care" ? "active" : ""
            }`}
            onClick={() => handleTabChange("#Skin_Care")}
          >
            Skin Care
          </button>

          <button
            id="Make_up-tab"
            data-bs-toggle="pill"
            data-bs-target="#Make_up"
            type="button"
            role="tab"
            aria-controls="Make_up"
            aria-selected={
              beautyPersonalActiveTab === "#Make_up" ? "true" : "false"
            }
            className={`nav-link categoryButton ${
              beautyPersonalActiveTab === "#Make_up" ? "active" : ""
            }`}
            onClick={() => handleTabChange("#Make_up")}
          >
            Make up
          </button>

          <button
            id="Oral_Care-tab"
            data-bs-toggle="pill"
            data-bs-target="#Oral_Care"
            type="button"
            role="tab"
            aria-controls="Oral_Care"
            aria-selected={
              beautyPersonalActiveTab === "#Oral_Care" ? "true" : "false"
            }
            className={`nav-link categoryButton ${
              beautyPersonalActiveTab === "#Oral_Care" ? "active" : ""
            }`}
            onClick={() => handleTabChange("#Oral_Care")}
          >
            Oral Care
          </button>

          <button
            id="Feminine_Care-tab"
            data-bs-toggle="pill"
            data-bs-target="#Feminine_Care"
            type="button"
            role="tab"
            aria-controls="Feminine_Care"
            aria-selected={
              beautyPersonalActiveTab === "#Feminine_Care" ? "true" : "false"
            }
            className={`nav-link categoryButton ${
              beautyPersonalActiveTab === "#Feminine_Care" ? "active" : ""
            }`}
            onClick={() => handleTabChange("#Feminine_Care")}
          >
            Feminine Care
          </button>
        </aside>
        {/* Sidebar end */}

        {/* Categories start */}
        <aside
          className="tab-content me-2 categoryContentDisplay"
          id="v-pills-tabContent"
        >
          {/* Bath_body */}
          <div
            id="Bath_Body"
            role="tabpanel"
            aria-labelledby="Bath_Body-tab"
            className={`tab-pane fade ${
              beautyPersonalActiveTab === "#Bath_Body" ? "show active" : ""
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
                to={`/displayProduct/${"Body Oils"}`}
              >
                <LazyLoadImage
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1705304166/Body-oils_iyw9ey.png"
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Body Oils
                </figcaption>
              </Link>

              <Link
                className="col-12 col-lg-2 col-md-2 categoryContentBody"
                to={`/displayProduct/${"Body Moisturizers"}`}
              >
                <LazyLoadImage
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1705304167/Body-moisturizers.png-1_yplyb1.png"
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Body Moisturizers
                </figcaption>
              </Link>

              <Link
                className="col-12 col-lg-2 col-md-2 categoryContentBody"
                to={`/displayProduct/${"Body Soaps and Shower Gels"}`}
              >
                <LazyLoadImage
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1705304166/Body-soaps-_-shower-gels_u2cpwb.png"
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Body Soaps and Shower Gels
                </figcaption>
              </Link>

              <Link
                className="col-12 col-lg-2 col-md-2 categoryContentBody"
                to={`/displayProduct/${"Body Sun Care"}`}
              >
                <LazyLoadImage
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1705304166/Body-sun-care_ucz87n.png"
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Body Sun Care
                </figcaption>
              </Link>

              <Link
                className="col-12 col-lg-2 col-md-2 categoryContentBody"
                to={`/displayProduct/${"Hand Care"}`}
              >
                <LazyLoadImage
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1705304167/hand-care.png-1_gme3zu.png"
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Hand Care
                </figcaption>
              </Link>

              <Link
                className="col-12 col-lg-2 col-md-2 categoryContentBody"
                to={`/displayProduct/${"Foot Care"}`}
              >
                <LazyLoadImage
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1705304167/foot-care_azjxyk.png"
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Foot Care
                </figcaption>
              </Link>

              <Link
                className="col-12 col-lg-2 col-md-2 categoryContentBody"
                to={`/displayProduct/${"Hair Removal"}`}
              >
                <LazyLoadImage
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1705304168/Hair-removal_qswua6.png"
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Hair Removal
                </figcaption>
              </Link>

              <Link
                className="col-12 col-lg-2 col-md-2 categoryContentBody"
                to={`/displayProduct/${"Bath and Body Accessories"}`}
              >
                <LazyLoadImage
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1705305258/bath-_-body-accessories_wvr1b3.png"
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Bath and Body Accessories
                </figcaption>
              </Link>
            </section>
          </div>

          {/* Beauty tools */}
          <div
            id="Beauty_Tools"
            role="tabpanel"
            aria-labelledby="Beauty_Tools-tab"
            className={`tab-pane fade ${
              beautyPersonalActiveTab === "#Beauty_Tools" ? "show active" : ""
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
                to={`/displayProduct/${"Hair Irons and Styles"}`}
              >
                <LazyLoadImage
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1705307991/Hair-irons-_-styles_xi4ckt.png"
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Hair Irons and Styles
                </figcaption>
              </Link>

              <Link
                className="col-12 col-lg-2 col-md-2 categoryContentBody"
                to={`/displayProduct/${"Hair Dryers"}`}
              >
                <LazyLoadImage
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1705307991/Hair-dryers_knnyfe.png"
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Hair Dryers
                </figcaption>
              </Link>

              <Link
                className="col-12 col-lg-2 col-md-2 categoryContentBody"
                to={`/displayProduct/${"Skins Care tools"}`}
              >
                <LazyLoadImage
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1705307993/skin-care-tools_wazywm.png"
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Skins Care tools
                </figcaption>
              </Link>

              <Link
                className="col-12 col-lg-2 col-md-2 categoryContentBody"
                to={`/displayProduct/${"Foot Relief Tools"}`}
              >
                <LazyLoadImage
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1705307992/foot-relief-tools_timkus.png"
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Foot Relief Tools
                </figcaption>
              </Link>

              <Link
                className="col-12 col-lg-2 col-md-2 categoryContentBody"
                to={`/displayProduct/${"Hair Removal Accessories"}`}
              >
                <LazyLoadImage
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1705307992/Hair-removal-accessories_sphsia.png"
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Hair Removal Accessories
                </figcaption>
              </Link>
            </section>
          </div>

          {/* Fragrances Care */}
          <div
            id="Fragrances"
            role="tabpanel"
            aria-labelledby="Fragrances-tab"
            className={`tab-pane fade ${
              beautyPersonalActiveTab === "#Fragrances" ? "show active" : ""
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
                to={`/displayProduct/${"Fragrances for Man"}`}
              >
                <LazyLoadImage
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1686136779/shokhbari_apparel/shirt_k99kte.webp"
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Fragrances for Man
                </figcaption>
              </Link>

              <Link
                className="col-12 col-lg-2 col-md-2 categoryContentBody"
                to={`/displayProduct/${"Fragrances for Woman"}`}
              >
                <LazyLoadImage
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1686136779/shokhbari_apparel/shirt_k99kte.webp"
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Fragrances for Woman
                </figcaption>
              </Link>

              <Link
                className="col-12 col-lg-2 col-md-2 categoryContentBody"
                to={`/displayProduct/${"Fragrances for Unisex"}`}
              >
                <LazyLoadImage
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1686136779/shokhbari_apparel/shirt_k99kte.webp"
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Fragrances for Unisex
                </figcaption>
              </Link>
            </section>
          </div>

          {/* Hair Care */}
          <div
            id="Hair_Care"
            role="tabpanel"
            aria-labelledby="Hair_Care-tab"
            className={`tab-pane fade ${
              beautyPersonalActiveTab === "#Hair_Care" ? "show active" : ""
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
                to={`/displayProduct/${"Shampoo"}`}
              >
                <LazyLoadImage
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1686136779/shokhbari_apparel/shirt_k99kte.webp"
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Shampoo
                </figcaption>
              </Link>

              <Link
                className="col-12 col-lg-2 col-md-2 categoryContentBody"
                to={`/displayProduct/${"Hair Conditioner"}`}
              >
                <LazyLoadImage
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1686136779/shokhbari_apparel/shirt_k99kte.webp"
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Hair Conditioner
                </figcaption>
              </Link>

              <Link
                className="col-12 col-lg-2 col-md-2 categoryContentBody"
                to={`/displayProduct/${"HairTeatmentMaskSpa"}`}
              >
                <LazyLoadImage
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1686136779/shokhbari_apparel/shirt_k99kte.webp"
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Hair Treatment, mask & spa
                </figcaption>
              </Link>

              <Link
                className="col-12 col-lg-2 col-md-2 categoryContentBody"
                to={`/displayProduct/${"Hair oil and Toner"}`}
              >
                <LazyLoadImage
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1686136779/shokhbari_apparel/shirt_k99kte.webp"
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Hair oil and Toner
                </figcaption>
              </Link>

              <Link
                className="col-12 col-lg-2 col-md-2 categoryContentBody"
                to={`/displayProduct/${"Hair Color"}`}
              >
                <LazyLoadImage
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1686136779/shokhbari_apparel/shirt_k99kte.webp"
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Hair Color
                </figcaption>
              </Link>

              <Link
                className="col-12 col-lg-2 col-md-2 categoryContentBody"
                to={`/displayProduct/${"Hair Gel and Styles"}`}
              >
                <LazyLoadImage
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1686136779/shokhbari_apparel/shirt_k99kte.webp"
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Hair Gel and Styles
                </figcaption>
              </Link>

              <Link
                className="col-12 col-lg-2 col-md-2 categoryContentBody"
                to={`/displayProduct/${"Hair Brushes and Combs"}`}
              >
                <LazyLoadImage
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1686136779/shokhbari_apparel/shirt_k99kte.webp"
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Hair Brushes and Combs
                </figcaption>
              </Link>

              <Link
                className="col-12 col-lg-2 col-md-2 categoryContentBody"
                to={`/displayProduct/${"Wigs-Hair Extension and Pads"}`}
              >
                <LazyLoadImage
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1686136779/shokhbari_apparel/shirt_k99kte.webp"
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Wigs-Hair Extension and Pads
                </figcaption>
              </Link>

              <Link
                className="col-12 col-lg-2 col-md-2 categoryContentBody"
                to={`/displayProduct/${"Hair Care Accessories"}`}
              >
                <LazyLoadImage
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1686136779/shokhbari_apparel/shirt_k99kte.webp"
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Hair Care Accessories
                </figcaption>
              </Link>
            </section>
          </div>

          {/* Skin care  */}
          <div
            id="Skin_Care"
            role="tabpanel"
            aria-labelledby="Skin_Care-tab"
            className={`tab-pane fade ${
              beautyPersonalActiveTab === "#Skin_Care" ? "show active" : ""
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
                to={`/displayProduct/${"Cream and Moisture"}`}
              >
                <LazyLoadImage
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1686136779/shokhbari_apparel/shirt_k99kte.webp"
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Cream and Moisture
                </figcaption>
              </Link>

              <Link
                className="col-12 col-lg-2 col-md-2 categoryContentBody"
                to={`/displayProduct/${"Serum and Essence"}`}
              >
                <LazyLoadImage
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1686136779/shokhbari_apparel/shirt_k99kte.webp"
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Serum and Essence
                </figcaption>
              </Link>

              <Link
                className="col-12 col-lg-2 col-md-2 categoryContentBody"
                to={`/displayProduct/${"Mask and Packs"}`}
              >
                <LazyLoadImage
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1686136779/shokhbari_apparel/shirt_k99kte.webp"
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Mask and Packs
                </figcaption>
              </Link>

              <Link
                className="col-12 col-lg-2 col-md-2 categoryContentBody"
                to={`/displayProduct/${"Scrubs and Exfoliator"}`}
              >
                <LazyLoadImage
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1686136779/shokhbari_apparel/shirt_k99kte.webp"
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Scrubs and Exfoliator
                </figcaption>
              </Link>

              <Link
                className="col-12 col-lg-2 col-md-2 categoryContentBody"
                to={`/displayProduct/${"Facial Clearance"}`}
              >
                <LazyLoadImage
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1686136779/shokhbari_apparel/shirt_k99kte.webp"
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Facial Clearance
                </figcaption>
              </Link>

              <Link
                className="col-12 col-lg-2 col-md-2 categoryContentBody"
                to={`/displayProduct/${"Toner and Mists"}`}
              >
                <LazyLoadImage
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1686136779/shokhbari_apparel/shirt_k99kte.webp"
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Toner and Mists
                </figcaption>
              </Link>

              <Link
                className="col-12 col-lg-2 col-md-2 categoryContentBody"
                to={`/displayProduct/${"Eye care Product"}`}
              >
                <LazyLoadImage
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1686136779/shokhbari_apparel/shirt_k99kte.webp"
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Eye care Product
                </figcaption>
              </Link>

              <Link
                className="col-12 col-lg-2 col-md-2 categoryContentBody"
                to={`/displayProduct/${"Shaving and Grooming"}`}
              >
                <LazyLoadImage
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1686136779/shokhbari_apparel/shirt_k99kte.webp"
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Shaving and Grooming
                </figcaption>
              </Link>

              <Link
                className="col-12 col-lg-2 col-md-2 categoryContentBody"
                to={`/displayProduct/${"Leap Balm and Treatments"}`}
              >
                <LazyLoadImage
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1686136779/shokhbari_apparel/shirt_k99kte.webp"
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Leap Balm and Treatments
                </figcaption>
              </Link>
            </section>
          </div>

          {/* Make up */}
          <div
            id="Make_up"
            role="tabpanel"
            aria-labelledby="Make_up-tab"
            className={`tab-pane fade ${
              beautyPersonalActiveTab === "#Make_up" ? "show active" : ""
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
                to={`/displayProduct/${"Face"}`}
              >
                <LazyLoadImage
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1686136779/shokhbari_apparel/shirt_k99kte.webp"
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">Face</figcaption>
              </Link>
              <Link
                className="col-12 col-lg-2 col-md-2 categoryContentBody"
                to={`/displayProduct/${"Lips"}`}
              >
                <LazyLoadImage
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1686136779/shokhbari_apparel/shirt_k99kte.webp"
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">Lips</figcaption>
              </Link>
              <Link
                className="col-12 col-lg-2 col-md-2 categoryContentBody"
                to={`/displayProduct/${"Eyes"}`}
              >
                <LazyLoadImage
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1686136779/shokhbari_apparel/shirt_k99kte.webp"
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">Eyes</figcaption>
              </Link>
              <Link
                className="col-12 col-lg-2 col-md-2 categoryContentBody"
                to={`/displayProduct/${"Nails"}`}
              >
                <LazyLoadImage
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1686136779/shokhbari_apparel/shirt_k99kte.webp"
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">Nails</figcaption>
              </Link>
              <Link
                className="col-12 col-lg-2 col-md-2 categoryContentBody"
                to={`/displayProduct/${"Palettes and Sets"}`}
              >
                <LazyLoadImage
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1686136779/shokhbari_apparel/shirt_k99kte.webp"
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Palettes and Sets
                </figcaption>
              </Link>
              <Link
                className="col-12 col-lg-2 col-md-2 categoryContentBody"
                to={`/displayProduct/${"Brushes and Sets"}`}
              >
                <LazyLoadImage
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1686136779/shokhbari_apparel/shirt_k99kte.webp"
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Brushes and Sets
                </figcaption>
              </Link>
              <Link
                className="col-12 col-lg-2 col-md-2 categoryContentBody"
                to={`/displayProduct/${"Makeup Accessories"}`}
              >
                <LazyLoadImage
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1686136779/shokhbari_apparel/shirt_k99kte.webp"
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Makeup Accessories
                </figcaption>
              </Link>
              <Link
                className="col-12 col-lg-2 col-md-2 categoryContentBody"
                to={`/displayProduct/${"Makeup Removers"}`}
              >
                <LazyLoadImage
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1686136779/shokhbari_apparel/shirt_k99kte.webp"
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Makeup Removers
                </figcaption>
              </Link>
            </section>
          </div>

          {/* Oral Care */}
          <div
            id="Oral_Care"
            role="tabpanel"
            aria-labelledby="Oral_Care-tab"
            className={`tab-pane fade ${
              beautyPersonalActiveTab === "#Oral_Care" ? "show active" : ""
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
                to={`/displayProduct/${"Tooth paste"}`}
              >
                <LazyLoadImage
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1686136779/shokhbari_apparel/shirt_k99kte.webp"
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Tooth paste
                </figcaption>
              </Link>

              <Link
                className="col-12 col-lg-2 col-md-2 categoryContentBody"
                to={`/displayProduct/${"Tooth Brush"}`}
              >
                <LazyLoadImage
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1686136779/shokhbari_apparel/shirt_k99kte.webp"
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Tooth Brush
                </figcaption>
              </Link>

              <Link
                className="col-12 col-lg-2 col-md-2 categoryContentBody"
                to={`/displayProduct/${"Mouth Fresheners"}`}
              >
                <LazyLoadImage
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1686136779/shokhbari_apparel/shirt_k99kte.webp"
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Mouth Fresheners
                </figcaption>
              </Link>

              <Link
                className="col-12 col-lg-2 col-md-2 categoryContentBody"
                to={`/displayProduct/${"Oral Care Accessories"}`}
              >
                <LazyLoadImage
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1686136779/shokhbari_apparel/shirt_k99kte.webp"
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Oral Care Accessories
                </figcaption>
              </Link>
            </section>
          </div>

          {/* Feminine Care */}
          <div
            id="Feminine_Care"
            role="tabpanel"
            aria-labelledby="Feminine_Care-tab"
            className={`tab-pane fade ${
              beautyPersonalActiveTab === "#Feminine_Care" ? "show active" : ""
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
                to={`/displayProduct/${"Fragrances for Man"}`}
              >
                <LazyLoadImage
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1686136779/shokhbari_apparel/shirt_k99kte.webp"
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Fragrances for Man
                </figcaption>
              </Link>

              <Link
                className="col-12 col-lg-2 col-md-2 categoryContentBody"
                to={`/displayProduct/${"Fragrances for Woman"}`}
              >
                <LazyLoadImage
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1686136779/shokhbari_apparel/shirt_k99kte.webp"
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Fragrances for Woman
                </figcaption>
              </Link>

              <Link
                className="col-12 col-lg-2 col-md-2 categoryContentBody"
                to={`/displayProduct/${"Fragrances for Unisex"}`}
              >
                <LazyLoadImage
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1686136779/shokhbari_apparel/shirt_k99kte.webp"
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Fragrances for Unisex
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

export default BeautyAndPersonalCareDisplay;
