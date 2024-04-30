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
          {/* Personal Care And Safety */}
          {itemName === "Personal_Care_Safety" && (
            <div id="Personal_Care">
              <LazyLoadImage
                src="https://res.cloudinary.com/shokhbari/image/upload/v1714469659/Personal_Care_Safety1_ljs22w.jpg"
                alt=""
                className="img-fluid subCateBanner mb-5"
                effect="blur"
              />
              <section className="row tab-content-body container-fluid m-0 justify-content-center">
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"PersonalCareSafety"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1711003563/Personal-Care-_-Safety-1_hmbu7n.jpg"
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
          )}

          {/*  Medical Supplies */}
          {itemName === "Medical_Supplies" && (
            <div id="Medical_Supplies">
              <LazyLoadImage
                src="https://res.cloudinary.com/shokhbari/image/upload/v1714469707/Medical_Supplies1_cutxdn.jpg"
                alt=""
                className="img-fluid subCateBanner mb-5"
                effect="blur"
              />
              <section className="row tab-content-body container-fluid m-0 justify-content-center">
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Medical_Supplies"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1711003561/Medical-Supplies-4_ffnfbr.jpg"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Medical Supplies
                  </figcaption>
                </Link>
              </section>
            </div>
          )}

          {/* Food Supplements */}
          {itemName === "Food_Supplement's" && (
            <div id="Food_Supplement">
              <LazyLoadImage
                src="https://res.cloudinary.com/shokhbari/image/upload/v1714469751/Food_Supplement_s1_xuzbbb.jpg"
                alt=""
                className="img-fluid subCateBanner mb-5"
                effect="blur"
              />
              <section className="row tab-content-body container-fluid m-0 justify-content-center">
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Food_Supplements"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1711003561/Food-Supplement_s-2_qj2vd8.jpg"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Food Supplements
                  </figcaption>
                </Link>
              </section>
            </div>
          )}

          {/* Sexual Wellness */}
          {itemName === "Sexual_Wellness" && (
            <div id="Sexual_Wellness">
              <LazyLoadImage
                src="https://res.cloudinary.com/shokhbari/image/upload/v1714472874/Sexual_Wellness2_t1dala.jpg"
                alt=""
                className="img-fluid subCateBanner mb-5"
                effect="blur"
              />
              <section className="row tab-content-body container-fluid m-0 justify-content-center">
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Sexual_Wellness"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1711004069/Sexual-Wellness-1_new_io2ztx.jpg"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Sexual Wellness
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
