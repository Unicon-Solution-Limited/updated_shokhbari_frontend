import React, { useState, useEffect } from "react";
import AllHeader from "../../../Shared/Header/AllHeader";
import AllFooter from "../../../Shared/Footer/AllFooter";
import { Link, useParams } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "./CategoryDisplay.css";
import loader from "../../../Image/loder.gif";

const BeautyAndPersonalCareDisplay = () => {
  const { itemName } = useParams();
  return (
    <>
      <AllHeader />
      <div className="d-flex align-items-start">
        {/* Categories start */}
        <aside>
          {/* Bath_body */}
          {itemName === "Bath_Body" && (
            <div>
              <LazyLoadImage
                src="https://res.cloudinary.com/shokhbari/image/upload/v1705230011/01_Bath_Body_kkuokk.jpg"
                alt=""
                className="img-fluid subCateBanner mb-5"
                effect="blur"
              />
              <section className="row tab-content-body m-0">
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
          )}

          {/* Beauty tools */}
          {itemName === "Beauty_Tools" && (
            <div>
              <LazyLoadImage
                src="https://res.cloudinary.com/shokhbari/image/upload/v1705230012/02_Beauty_Tools_pfoksa.jpg"
                alt=""
                className="img-fluid subCateBanner mb-5"
                effect="blur"
              />
              <section className="row tab-content-body justify-content-center m-0">
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
          )}

          {/* Fragrances Care */}
          {itemName === "Fragrances" && (
            <div>
              <LazyLoadImage
                src="https://res.cloudinary.com/shokhbari/image/upload/v1705230011/03_Fragraneces_Men_Women_rg9nv8.jpg"
                alt=""
                className="img-fluid subCateBanner mb-5"
                effect="blur"
              />
              <section className="row tab-content-body justify-content-center m-0">
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
          )}

          {/* Hair Care */}

          {itemName === "Hair_Care" && (
            <div>
              <LazyLoadImage
                src="https://res.cloudinary.com/shokhbari/image/upload/v1705230011/04_Hair_Care_cgm6d3.jpg"
                alt=""
                className="img-fluid subCateBanner mb-5"
                effect="blur"
              />
              <section className="row tab-content-body container-fluid m-0">
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
          )}

          {/* Skin care  */}
          {itemName === "Skin_Care" && (
            <div>
              <LazyLoadImage
                src="https://res.cloudinary.com/shokhbari/image/upload/v1705230011/05_Skin_Care_t1wx3a.jpg"
                alt=""
                className="img-fluid subCateBanner mb-5"
                effect="blur"
              />
              <section className="row tab-content-body m-0 container-fluid">
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
                    Facial Clear
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
          )}

          {/* Make up */}
          {itemName === "Make_up" && (
            <div>
              <LazyLoadImage
                src="https://res.cloudinary.com/shokhbari/image/upload/v1705230011/06_MakeUp_d11nfa.jpg"
                alt=""
                className="img-fluid subCateBanner mb-5"
                effect="blur"
              />
              <section className="row tab-content-body m-0 container-fluid">
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
                  <figcaption className="categoryImageCaption">
                    Nails
                  </figcaption>
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
          )}

          {/* Oral Care */}
          {itemName === "Oral_Care" && (
            <div>
              <LazyLoadImage
                src="https://res.cloudinary.com/shokhbari/image/upload/v1705230011/07_Oral_Care_jouacy.jpg"
                alt=""
                className="img-fluid subCateBanner mb-5"
                effect="blur"
              />
              <section className="row tab-content-body m-0 justify-content-center">
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
          )}

          {/* Feminine Care */}
          {itemName === "Feminine_Care" && (
            <div>
              <LazyLoadImage
                src="https://res.cloudinary.com/shokhbari/image/upload/v1705233307/Feminine-care_pptwkw.jpg"
                alt=""
                className="img-fluid subCateBanner mb-5"
                effect="blur"
              />
              <section className="row tab-content-body m-0 container-fluid justify-content-center">
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
          )}
        </aside>
        {/* Categories end */}
      </div>
      <AllFooter />
    </>
  );
};

export default BeautyAndPersonalCareDisplay;
