import React, { useState, useEffect } from "react";
import AllHeader from "../../../Shared/Header/AllHeader";
import AllFooter from "../../../Shared/Footer/AllFooter";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "./CategoryDisplay.css";
import loader from "../../../Image/loder.gif";

const AutomobileAndMotorBikeDisplay = () => {
  const [autoMobileActiveTab, setAutoMobileActiveTab] = useState("");

  useEffect(() => {
    const storedTab = localStorage.getItem("autoMobileActiveTab");
    setAutoMobileActiveTab(storedTab || "#Automobile-tab"); // Setting default active tab
  }, []);

  const handleTabChange = (tab) => {
    setAutoMobileActiveTab(tab);
    localStorage.setItem("autoMobileActiveTab", tab);
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
            <span>Office And Education</span>
          </section>
          <button
            id="Automobile-tab"
            data-bs-toggle="pill"
            data-bs-target="#Automobile"
            type="button"
            role="tab"
            aria-controls="Automobile"
            aria-selected={
              autoMobileActiveTab === "#Automobile-tab" ? "true" : "false"
            }
            className={`nav-link categoryButton ${
              autoMobileActiveTab === "#Automobile-tab" ? "active" : ""
            }`}
            onClick={() => handleTabChange("#Automobile-tab")}
          >
            Automobile
          </button>

          <button
            id="Automobile_Parts-tab"
            data-bs-toggle="pill"
            data-bs-target="#Automobile_Parts"
            type="button"
            role="tab"
            aria-controls="Automobile_Parts"
            aria-selected={
              autoMobileActiveTab === "#Automobile_Parts-tab" ? "true" : "false"
            }
            className={`nav-link categoryButton ${
              autoMobileActiveTab === "#Automobile_Parts-tab" ? "active" : ""
            }`}
            onClick={() => handleTabChange("#Automobile_Parts-tab")}
          >
            Automobile Parts
          </button>

          <button
            id="Interior_Accessories_care-tab"
            data-bs-toggle="pill"
            data-bs-target="#Interior_Accessories_care"
            type="button"
            role="tab"
            aria-controls="Interior_Accessories_care"
            aria-selected={
              autoMobileActiveTab === "#Interior_Accessories_care-tab"
                ? "true"
                : "false"
            }
            className={`nav-link categoryButton ${
              autoMobileActiveTab === "#Interior_Accessories_care-tab"
                ? "active"
                : ""
            }`}
            onClick={() => handleTabChange("#Interior_Accessories_care-tab")}
          >
            Interior Accessories Care
          </button>

          <button
            id="Exterior_Accessories_care-tab"
            data-bs-toggle="pill"
            data-bs-target="#Exterior_Accessories_care"
            type="button"
            role="tab"
            aria-controls="Exterior_Accessories_care"
            aria-selected={
              autoMobileActiveTab === "#Exterior_Accessories_care-tab"
                ? "true"
                : "false"
            }
            className={`nav-link categoryButton ${
              autoMobileActiveTab === "#Exterior_Accessories_care-tab"
                ? "active"
                : ""
            }`}
            onClick={() => handleTabChange("#Exterior_Accessories_care-tab")}
          >
            Exterior Accessories Care
          </button>

          <button
            id="Bike-tab"
            data-bs-toggle="pill"
            data-bs-target="#Bike"
            type="button"
            role="tab"
            aria-controls="Bike"
            aria-selected={
              autoMobileActiveTab === "#Bike-tab" ? "true" : "false"
            }
            className={`nav-link categoryButton ${
              autoMobileActiveTab === "#Bike-tab" ? "active" : ""
            }`}
            onClick={() => handleTabChange("#Bike-tab")}
          >
            Bike
          </button>

          <button
            id="Bike_Parts_Accessories-tab"
            data-bs-toggle="pill"
            data-bs-target="#Bike_Parts_Accessories"
            type="button"
            role="tab"
            aria-controls="Bike_Parts_Accessories"
            aria-selected={
              autoMobileActiveTab === "#Bike_Parts_Accessories-tab"
                ? "true"
                : "false"
            }
            className={`nav-link categoryButton ${
              autoMobileActiveTab === "#Bike_Parts_Accessories-tab"
                ? "active"
                : ""
            }`}
            onClick={() => handleTabChange("#Bike_Parts_Accessories-tab")}
          >
            Bike Parts Accessories
          </button>

          <button
            id="Oil_Fluids-tab"
            data-bs-toggle="pill"
            data-bs-target="#Oil_Fluids"
            type="button"
            role="tab"
            aria-controls="Oil_Fluids"
            aria-selected={
              autoMobileActiveTab === "#Oil_Fluids-tab" ? "true" : "false"
            }
            className={`nav-link categoryButton ${
              autoMobileActiveTab === "#Oil_Fluids-tab" ? "active" : ""
            }`}
            onClick={() => handleTabChange("#Oil_Fluids-tab")}
          >
            Oil Fluids
          </button>

          <button
            id="Riders_gear-tab"
            data-bs-toggle="pill"
            data-bs-target="#Riders_gear"
            type="button"
            role="tab"
            aria-controls="Riders_gear"
            aria-selected={
              autoMobileActiveTab === "#Riders_gear-tab" ? "true" : "false"
            }
            className={`nav-link categoryButton ${
              autoMobileActiveTab === "#Riders_gear-tab" ? "active" : ""
            }`}
            onClick={() => handleTabChange("#Riders_gear-tab")}
          >
            Riders Gear
          </button>
        </aside>
        {/* Sidebar end */}

        {/* Categories start */}
        <aside
          className="tab-content me-2 categoryContentDisplay"
          id="v-pills-tabContent"
        >
          {/* Automobile */}
          <div
            id="Automobile"
            role="tabpanel"
            aria-labelledby="Automobile-tab"
            className={`tab-pane fade ${
              autoMobileActiveTab === "#Automobile-tab" ? "show active" : ""
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
                to={`/displayProduct/${"Automobile"}`}
              >
                <LazyLoadImage
                  src=""
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Automobile
                </figcaption>
              </Link>
            </section>
          </div>

          {/* Automobile_Parts */}
          <div
            id="Automobile_Parts"
            role="tabpanel"
            aria-labelledby="Automobile_Parts-tab"
            className={`tab-pane fade ${
              autoMobileActiveTab === "#Automobile_Parts-tab"
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
                to={`/displayProduct/${"Automobile_Parts"}`}
              >
                <LazyLoadImage
                  src=""
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Automobile Parts
                </figcaption>
              </Link>
            </section>
          </div>
          {/* Interior_Accessories_care */}
          <div
            id="Interior_Accessories_care"
            role="tabpanel"
            aria-labelledby="Interior_Accessories_care-tab"
            className={`tab-pane fade ${
              autoMobileActiveTab === "#Interior_Accessories_care-tab"
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
                to={`/displayProduct/${"Interior_Accessories_care"}`}
              >
                <LazyLoadImage
                  src=""
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Interior Accessories
                </figcaption>
              </Link>
            </section>
          </div>
          {/* Exterior_Accessories_care */}
          <div
            id="Exterior_Accessories_care"
            role="tabpanel"
            aria-labelledby="Exterior_Accessories_care-tab"
            className={`tab-pane fade ${
              autoMobileActiveTab === "#Exterior_Accessories_care-tab"
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
                to={`/displayProduct/${"Exterior_Accessories_care"}`}
              >
                <LazyLoadImage
                  src=""
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Exterior Accessories
                </figcaption>
              </Link>
            </section>
          </div>
          {/* Bike */}
          <div
            id="Bike"
            role="tabpanel"
            aria-labelledby="-tab"
            className={`tab-pane fade ${
              autoMobileActiveTab === "#Bike-tab" ? "show active" : ""
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
                to={`/displayProduct/${"Bike"}`}
              >
                <LazyLoadImage
                  src=""
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">Bike</figcaption>
              </Link>
            </section>
          </div>
          {/* Bike_Parts_Accessories */}
          <div
            id="Bike_Parts_Accessories"
            role="tabpanel"
            aria-labelledby="Bike_Parts_Accessories-tab"
            className={`tab-pane fade ${
              autoMobileActiveTab === "#Bike_Parts_Accessories-tab"
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
                to={`/displayProduct/${"Bike_Parts_Accessories"}`}
              >
                <LazyLoadImage
                  src=""
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Bike Parts
                </figcaption>
              </Link>
            </section>
          </div>
          {/* Oil_Fluids */}
          <div
            id="Oil_Fluids"
            role="tabpanel"
            aria-labelledby="Oil_Fluids-tab"
            className={`tab-pane fade ${
              autoMobileActiveTab === "#Oil_Fluids-tab" ? "show active" : ""
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
                to={`/displayProduct/${"Oil_Fluids"}`}
              >
                <LazyLoadImage
                  src=""
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Oil Fluids
                </figcaption>
              </Link>
            </section>
          </div>
          {/* Riders_gear */}
          <div
            id="Riders_gear"
            role="tabpanel"
            aria-labelledby="Riders_gear-tab"
            className={`tab-pane fade ${
              autoMobileActiveTab === "#Riders_gear-tab" ? "show active" : ""
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
                to={`/displayProduct/${"Riders_gear"}`}
              >
                <LazyLoadImage
                  src=""
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Riders gear
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

export default AutomobileAndMotorBikeDisplay;
