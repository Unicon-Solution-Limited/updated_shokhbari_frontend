import React, { useState, useEffect } from "react";
import AllHeader from "../../../Shared/Header/AllHeader";
import AllFooter from "../../../Shared/Footer/AllFooter";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "./CategoryDisplay.css";
import loader from "../../../Image/loder.gif";

const HomeAndLifestyleDisplay = () => {
  const [homeLifeActiveTab, setHomeLifeActiveTab] = useState("");

  useEffect(() => {
    const storedTab = localStorage.getItem("homeLifeActiveTab");
    setHomeLifeActiveTab(storedTab || "#Furniture-tab"); // Setting default active tab
  }, []);

  const handleTabChange = (tab) => {
    setHomeLifeActiveTab(tab);
    localStorage.setItem("homeLifeActiveTab", tab);
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
            <span>Home And Lifestyle</span>
          </section>
          <button
            id="Furniture-tab"
            data-bs-toggle="pill"
            data-bs-target="#Furniture"
            type="button"
            role="tab"
            aria-controls="Furniture"
            aria-selected={
              homeLifeActiveTab === "#Furniture-tab" ? "true" : "false"
            }
            className={`nav-link categoryButton ${
              homeLifeActiveTab === "#Furniture-tab" ? "active" : ""
            }`}
            onClick={() => handleTabChange("#Furniture-tab")}
          >
            Furniture
          </button>

          <button
            id="Home_Textile-tab"
            data-bs-toggle="pill"
            data-bs-target="#Home_Textile"
            type="button"
            role="tab"
            aria-controls="Home_Textile"
            aria-selected={
              homeLifeActiveTab === "#Home_Textile-tab" ? "true" : "false"
            }
            className={`nav-link categoryButton ${
              homeLifeActiveTab === "#Home_Textile-tab" ? "active" : ""
            }`}
            onClick={() => handleTabChange("#Home_Textile-tab")}
          >
            Home Textile
          </button>

          <button
            id="DinnerWare-tab"
            data-bs-toggle="pill"
            data-bs-target="#DinnerWare"
            type="button"
            role="tab"
            aria-controls="DinnerWare"
            aria-selected={
              homeLifeActiveTab === "#DinnerWare-tab" ? "true" : "false"
            }
            className={`nav-link categoryButton ${
              homeLifeActiveTab === "#DinnerWare-tab" ? "active" : ""
            }`}
            onClick={() => handleTabChange("#DinnerWare-tab")}
          >
            DinnerWare
          </button>

          <button
            id="Kitchen_Accessories-tab"
            data-bs-toggle="pill"
            data-bs-target="#Kitchen_Accessories"
            type="button"
            role="tab"
            aria-controls="Kitchen_Accessories"
            aria-selected={
              homeLifeActiveTab === "#Kitchen_Accessories-tab"
                ? "true"
                : "false"
            }
            className={`nav-link categoryButton ${
              homeLifeActiveTab === "#Kitchen_Accessories-tab" ? "active" : ""
            }`}
            onClick={() => handleTabChange("#Kitchen_Accessories-tab")}
          >
            Kitchen Accessories
          </button>

          <button
            id="Decor-tab"
            data-bs-toggle="pill"
            data-bs-target="#Decor"
            type="button"
            role="tab"
            aria-controls="Decor"
            aria-selected={
              homeLifeActiveTab === "#Decor-tab" ? "true" : "false"
            }
            className={`nav-link categoryButton ${
              homeLifeActiveTab === "#Decor-tab" ? "active" : ""
            }`}
            onClick={() => handleTabChange("#Decor-tab")}
          >
            Decor
          </button>

          <button
            id="Wallart-tab"
            data-bs-toggle="pill"
            data-bs-target="#Wallart"
            type="button"
            role="tab"
            aria-controls="Wallart"
            aria-selected={
              homeLifeActiveTab === "#Wallart-tab" ? "true" : "false"
            }
            className={`nav-link categoryButton ${
              homeLifeActiveTab === "#Wallart-tab" ? "active" : ""
            }`}
            onClick={() => handleTabChange("#Wallart-tab")}
          >
            Wallart
          </button>

          <button
            id="Tools_Diy_and_outdoor-tab"
            data-bs-toggle="pill"
            data-bs-target="#Tools_Diy_and_outdoor"
            type="button"
            role="tab"
            aria-controls="Tools_Diy_and_outdoor"
            aria-selected={
              homeLifeActiveTab === "#Tools_Diy_and_outdoor-tab"
                ? "true"
                : "false"
            }
            className={`nav-link categoryButton ${
              homeLifeActiveTab === "#Tools_Diy_and_outdoor-tab" ? "active" : ""
            }`}
            onClick={() => handleTabChange("#Tools_Diy_and_outdoor-tab")}
          >
            Tools Diy and outdoor
          </button>

          <button
            id="EventPartySupplies-tab"
            data-bs-toggle="pill"
            data-bs-target="#EventPartySupplies"
            type="button"
            role="tab"
            aria-controls="EventPartySupplies"
            aria-selected={
              homeLifeActiveTab === "#EventPartySupplies-tab" ? "true" : "false"
            }
            className={`nav-link categoryButton ${
              homeLifeActiveTab === "#EventPartySupplies-tab" ? "active" : ""
            }`}
            onClick={() => handleTabChange("#EventPartySupplies-tab")}
          >
            Event & Party Supplies
          </button>

          <button
            id="Gardening-tab"
            data-bs-toggle="pill"
            data-bs-target="#Gardening"
            type="button"
            role="tab"
            aria-controls="Gardening"
            aria-selected={
              homeLifeActiveTab === "#Gardening-tab" ? "true" : "false"
            }
            className={`nav-link categoryButton ${
              homeLifeActiveTab === "#Gardening-tab" ? "active" : ""
            }`}
            onClick={() => handleTabChange("#Gardening-tab")}
          >
            Gardening
          </button>

          <button
            id="Pet-tab"
            data-bs-toggle="pill"
            data-bs-target="#Pet"
            type="button"
            role="tab"
            aria-controls="Pet"
            aria-selected={homeLifeActiveTab === "#Pet-tab" ? "true" : "false"}
            className={`nav-link categoryButton ${
              homeLifeActiveTab === "#Pet-tab" ? "active" : ""
            }`}
            onClick={() => handleTabChange("#Pet-tab")}
          >
            Pet
          </button>
        </aside>
        {/* Sidebar end */}

        {/* Categories start */}
        <aside
          className="tab-content me-2 categoryContentDisplay"
          id="v-pills-tabContent"
        >
          {/* Furniture */}
          <div
            id="Furniture"
            role="tabpanel"
            aria-labelledby="Furniture-tab"
            className={`tab-pane fade ${
              homeLifeActiveTab === "#Furniture-tab" ? "show active" : ""
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
                to={`/displayProduct/${"Living Room"}`}
              >
                <LazyLoadImage
                  src=""
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Living Room
                </figcaption>
              </Link>

              <Link
                className="col-12 col-lg-2 col-md-2 categoryContentBody"
                to={`/displayProduct/${"Dining"}`}
              >
                <LazyLoadImage
                  src=""
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">Dining</figcaption>
              </Link>

              <Link
                className="col-12 col-lg-2 col-md-2 categoryContentBody"
                to={`/displayProduct/${"Bedroom"}`}
              >
                <LazyLoadImage
                  src=""
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Bedroom
                </figcaption>
              </Link>

              <Link
                className="col-12 col-lg-2 col-md-2 categoryContentBody"
                to={`/displayProduct/${"Kitchen"}`}
              >
                <LazyLoadImage
                  src=""
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Kitchen
                </figcaption>
              </Link>

              <Link
                className="col-12 col-lg-2 col-md-2 categoryContentBody"
                to={`/displayProduct/${"Kid's_Room"}`}
              >
                <LazyLoadImage
                  src=""
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Kid's_Room
                </figcaption>
              </Link>

              <Link
                className="col-12 col-lg-2 col-md-2 categoryContentBody"
                to={`/displayProduct/${"Institutional"}`}
              >
                <LazyLoadImage
                  src=""
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Institutional
                </figcaption>
              </Link>

              <Link
                className="col-12 col-lg-2 col-md-2 categoryContentBody"
                to={`/displayProduct/${"Office"}`}
              >
                <LazyLoadImage
                  src=""
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">Office</figcaption>
              </Link>

              <Link
                className="col-12 col-lg-2 col-md-2 categoryContentBody"
                to={`/displayProduct/${"Door"}`}
              >
                <LazyLoadImage
                  src=""
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">Door</figcaption>
              </Link>

              <Link
                className="col-12 col-lg-2 col-md-2 categoryContentBody"
                to={`/displayProduct/${"Storage_Organization"}`}
              >
                <LazyLoadImage
                  src=""
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Storage Organization
                </figcaption>
              </Link>
            </section>
          </div>

          {/* Home_Textile */}
          <div
            id="Home_Textile"
            role="tabpanel"
            aria-labelledby="Home_Textile-tab"
            className={`tab-pane fade ${
              homeLifeActiveTab === "#Home_Textile-tab" ? "show active" : ""
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
                to={`/displayProduct/${"Home_Textile"}`}
              >
                <LazyLoadImage
                  src=""
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Home Textile
                </figcaption>
              </Link>
            </section>
          </div>

          {/* DinnerWare */}
          <div
            id="DinnerWare"
            role="tabpanel"
            aria-labelledby="DinnerWare-tab"
            className={`tab-pane fade ${
              homeLifeActiveTab === "#DinnerWare-tab" ? "show active" : ""
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
                to={`/displayProduct/${"DinnerWare"}`}
              >
                <LazyLoadImage
                  src=""
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  DinnerWare
                </figcaption>
              </Link>
            </section>
          </div>

          {/* Kitchen_Accessories */}
          <div
            id="Kitchen_Accessories"
            role="tabpanel"
            aria-labelledby="Kitchen_Accessories-tab"
            className={`tab-pane fade ${
              homeLifeActiveTab === "#Kitchen_Accessories-tab"
                ? "show active"
                : ""
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
                to={`/displayProduct/${"Kitchen_Accessories"}`}
              >
                <LazyLoadImage
                  src=""
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Kitchen Accessories
                </figcaption>
              </Link>
            </section>
          </div>

          {/* Decor */}
          <div
            id="Decor"
            role="tabpanel"
            aria-labelledby="Decor-tab"
            className={`tab-pane fade ${
              homeLifeActiveTab === "#Decor-tab" ? "show active" : ""
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
                to={`/displayProduct/${"Decor"}`}
              >
                <LazyLoadImage
                  src=""
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">Decor</figcaption>
              </Link>
            </section>
          </div>

          {/* Wallart */}
          <div
            id="Wallart"
            role="tabpanel"
            aria-labelledby="Wallart-tab"
            className={`tab-pane fade ${
              homeLifeActiveTab === "#Wallart-tab" ? "show active" : ""
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
                to={`/displayProduct/${"Wallart"}`}
              >
                <LazyLoadImage
                  src=""
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Wallart
                </figcaption>
              </Link>
            </section>
          </div>
          {/* Tools_Diy_and_outdoor */}
          <div
            id="Tools_Diy_and_outdoor"
            role="tabpanel"
            aria-labelledby="Tools_Diy_and_outdoor-tab"
            className={`tab-pane fade ${
              homeLifeActiveTab === "#Tools_Diy_and_outdoor-tab"
                ? "show active"
                : ""
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
                to={`/displayProduct/${"Tools_Diy_and_outdoor"}`}
              >
                <LazyLoadImage
                  src=""
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Tools Diy and outdoor
                </figcaption>
              </Link>
            </section>
          </div>
          {/* EventPartySupplies */}
          <div
            id="EventPartySupplies"
            role="tabpanel"
            aria-labelledby="EventPartySupplies-tab"
            className={`tab-pane fade ${
              homeLifeActiveTab === "#EventPartySupplies-tab"
                ? "show active"
                : ""
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
                to={`/displayProduct/${"EventPartySupplies"}`}
              >
                <LazyLoadImage
                  src=""
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Event Party Supplies
                </figcaption>
              </Link>
            </section>
          </div>
          {/* Categories end */}
          <div
            id="Gardening"
            role="tabpanel"
            aria-labelledby="Gardening-tab"
            className={`tab-pane fade ${
              homeLifeActiveTab === "#Gardening-tab" ? "show active" : ""
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
                to={`/displayProduct/${"Gardening"}`}
              >
                <LazyLoadImage
                  src=""
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Gardening
                </figcaption>
              </Link>
            </section>
          </div>

          {/* Pet */}
          <div
            id="Pet"
            role="tabpanel"
            aria-labelledby="Pet-tab"
            className={`tab-pane fade ${
              homeLifeActiveTab === "#Pet-tab" ? "show active" : ""
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
                to={`/displayProduct/${"Pet"}`}
              >
                <LazyLoadImage
                  src=""
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">Pet</figcaption>
              </Link>
            </section>
          </div>
        </aside>
      </div>
      <AllFooter />
    </>
  );
};

export default HomeAndLifestyleDisplay;
