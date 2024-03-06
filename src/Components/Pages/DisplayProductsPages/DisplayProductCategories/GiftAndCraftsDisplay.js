import React, { useState, useEffect } from "react";
import AllHeader from "../../../Shared/Header/AllHeader";
import AllFooter from "../../../Shared/Footer/AllFooter";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "./CategoryDisplay.css";
import loader from "../../../Image/loder.gif";

const GiftAndCraftsDisplay = () => {
  const [giftCraftActiveTab, setGiftCraftgiftCraftActiveTab] = useState("");

  useEffect(() => {
    const storedTab = localStorage.getItem("giftCraftActiveTab");
    setGiftCraftgiftCraftActiveTab(storedTab || "#Novelty_Gifts-tab"); // Setting default active tab
  }, []);

  const handleTabChange = (tab) => {
    setGiftCraftgiftCraftActiveTab(tab);
    localStorage.setItem("giftCraftActiveTab", tab);
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
            <span>Gift And Craft</span>
          </section>
          <button
            id="Novelty_Gifts-tab"
            data-bs-toggle="pill"
            data-bs-target="#Novelty_Gifts"
            type="button"
            role="tab"
            aria-controls="Novelty_Gifts"
            aria-selected={
              giftCraftActiveTab === "#Novelty_Gifts-tab" ? "true" : "false"
            }
            className={`nav-link categoryButton ${
              giftCraftActiveTab === "#Novelty_Gifts-tab" ? "active" : ""
            }`}
            onClick={() => handleTabChange("#Novelty_Gifts-tab")}
          >
            Novelty Gifts
          </button>

          <button
            id="Promotional_Items-tab"
            data-bs-toggle="pill"
            data-bs-target="#Promotional_Items"
            type="button"
            role="tab"
            aria-controls="Promotional_Items"
            aria-selected={
              giftCraftActiveTab === "#Promotional_Items-tab" ? "true" : "false"
            }
            className={`nav-link categoryButton ${
              giftCraftActiveTab === "#Promotional_Items-tab" ? "active" : ""
            }`}
            onClick={() => handleTabChange("#Promotional_Items-tab")}
          >
            Promotional Items
          </button>

          <button
            id="Crafting_Accessories-tab"
            data-bs-toggle="pill"
            data-bs-target="#Crafting_Accessories"
            type="button"
            role="tab"
            aria-controls="Crafting_Accessories"
            aria-selected={
              giftCraftActiveTab === "#Crafting_Accessories-tab"
                ? "true"
                : "false"
            }
            className={`nav-link categoryButton ${
              giftCraftActiveTab === "#Crafting_Accessories-tab" ? "active" : ""
            }`}
            onClick={() => handleTabChange("#Crafting_Accessories-tab")}
          >
            Crafting Accessories
          </button>

          <button
            id="Festival_Decoration-tab"
            data-bs-toggle="pill"
            data-bs-target="#Festival_Decoration"
            type="button"
            role="tab"
            aria-controls="Festival_Decoration"
            aria-selected={
              giftCraftActiveTab === "#Festival_Decoration-tab"
                ? "true"
                : "false"
            }
            className={`nav-link categoryButton ${
              giftCraftActiveTab === "#Festival_Decoration-tab" ? "active" : ""
            }`}
            onClick={() => handleTabChange("#Festival_Decoration-tab")}
          >
            Festival Decoration
          </button>

          <button
            id="Gift_Wrapping_Supplies-tab"
            data-bs-toggle="pill"
            data-bs-target="#Gift_Wrapping_Supplies"
            type="button"
            role="tab"
            aria-controls="Gift_Wrapping_Supplies"
            aria-selected={
              giftCraftActiveTab === "#Gift_Wrapping_Supplies-tab"
                ? "true"
                : "false"
            }
            className={`nav-link categoryButton ${
              giftCraftActiveTab === "#Gift_Wrapping_Supplies-tab"
                ? "active"
                : ""
            }`}
            onClick={() => handleTabChange("#Gift_Wrapping_Supplies-tab")}
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
            id="Novelty_Gifts"
            role="tabpanel"
            aria-labelledby="Novelty_Gifts-tab"
            className={`tab-pane fade ${
              giftCraftActiveTab === "#Novelty_Gifts-tab" ? "show active" : ""
            }`}
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
            id="Promotional_Items"
            role="tabpanel"
            aria-labelledby="Promotional_Items-tab"
            className={`tab-pane fade ${
              giftCraftActiveTab === "#Promotional_Items-tab"
                ? "show active"
                : ""
            }`}
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
            id="Crafting_Accessories"
            role="tabpanel"
            aria-labelledby="Crafting_Accessories-tab"
            className={`tab-pane fade ${
              giftCraftActiveTab === "#Crafting_Accessories-tab"
                ? "show active"
                : ""
            }`}
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
            id="Festival_Decoration"
            role="tabpanel"
            aria-labelledby="Festival_Decoration-tab"
            className={`tab-pane fade ${
              giftCraftActiveTab === "#Festival_Decoration-tab"
                ? "show active"
                : ""
            }`}
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
            id="Gift_Wrapping_Supplies"
            role="tabpanel"
            aria-labelledby="Gift_Wrapping_Supplies-tab"
            className={`tab-pane fade ${
              giftCraftActiveTab === "#Gift_Wrapping_Supplies-tab"
                ? "show active"
                : ""
            }`}
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
