import React, { useState, useEffect } from "react";
import AllHeader from "../../../Shared/Header/AllHeader";
import AllFooter from "../../../Shared/Footer/AllFooter";
import { Link, useParams } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "./CategoryDisplay.css";
import loader from "../../../Image/loder.gif";

const GiftAndCraftsDisplay = () => {
  const { itemName } = useParams();
  return (
    <>
      <AllHeader />
      <div className="d-flex align-items-start">
        {/* Categories start */}
        <aside>
          {/* Novelty */}

          {itemName === "Novelty_Gifts" && (
            <div>
              <LazyLoadImage
                src="https://res.cloudinary.com/shokhbari/image/upload/v1705565985/01-Novelty-Gifts_hnrm3w.png"
                alt=""
                className="img-fluid subCateBanner mb-5"
                effect="blur"
              />
              <section className="row tab-content-body container-fluid m-0 justify-content-center">
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
          )}

          {/* Promotional Item */}
          {itemName === "Promotional_Items" && (
            <div>
              <LazyLoadImage
                src="https://res.cloudinary.com/shokhbari/image/upload/v1705565985/02-Promotional-Items_jsk7cr.png"
                alt=""
                className="img-fluid subCateBanner mb-5"
                effect="blur"
              />
              <section className="row tab-content-body container-fluid m-0 justify-content-center">
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
          )}

          {/* Crafting Accessories */}
          {itemName === "Crafting_Accessories" && (
            <div>
              <LazyLoadImage
                src="https://res.cloudinary.com/shokhbari/image/upload/v1705565986/03-Crafting-Accessories_zco3qt.png"
                alt=""
                className="img-fluid subCateBanner mb-5"
                effect="blur"
              />
              <section className="row tab-content-body container-fluid m-0 justify-content-center">
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Crafting Accessories"}`}
                >
                  <LazyLoadImage
                    src=""
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Crafting Accessories
                  </figcaption>
                </Link>
              </section>
            </div>
          )}

          {/* Festival Decoration */}
          {itemName === "Festival_Decoration" && (
            <div>
              <LazyLoadImage
                src="https://res.cloudinary.com/shokhbari/image/upload/v1705565985/04-Festival-Decoration_othl7m.png"
                alt=""
                className="img-fluid subCateBanner mb-5"
                effect="blur"
              />
              <section className="row tab-content-body container-fluid m-0 justify-content-center">
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
          )}

          {/* Gift Wrapping Supplies */}
          {itemName === "Gift_Wrapping_Supplies" && (
            <div>
              <LazyLoadImage
                src="https://res.cloudinary.com/shokhbari/image/upload/v1705565985/05-Gift-Wrapping-Supplies_mffzvw.png"
                alt=""
                className="img-fluid subCateBanner mb-5"
                effect="blur"
              />
              <section className="row tab-content-body container-fluid m-0 justify-content-center">
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
          )}
        </aside>
        {/* Categories end */}
      </div>
      <AllFooter />
    </>
  );
};

export default GiftAndCraftsDisplay;
