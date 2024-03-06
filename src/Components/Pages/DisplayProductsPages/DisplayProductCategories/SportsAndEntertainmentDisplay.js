import React, { useState, useEffect } from "react";
import AllHeader from "../../../Shared/Header/AllHeader";
import AllFooter from "../../../Shared/Footer/AllFooter";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "./CategoryDisplay.css";
import loader from "../../../Image/loder.gif";

const SportsAndEntertainmentDisplay = () => {
  const [sportsActiveTab, setSportsActiveTab] = useState("");

  useEffect(() => {
    const storedTab = localStorage.getItem("sportsActiveTab");
    setSportsActiveTab(storedTab || "#Exercise&Fitness-tab"); // Setting default active tab
  }, []);

  const handleTabChange = (tab) => {
    setSportsActiveTab(tab);
    localStorage.setItem("sportsActiveTab", tab);
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
            <span>Sports And Entertainment</span>
          </section>
          <button
            id="Exercise&Fitness-tab"
            data-bs-toggle="pill"
            data-bs-target="#Exercise&Fitness"
            type="button"
            role="tab"
            aria-controls="Exercise&Fitness"
            aria-selected={
              sportsActiveTab === "#Exercise&Fitness-tab" ? "true" : "false"
            }
            className={`nav-link categoryButton ${
              sportsActiveTab === "#Exercise&Fitness-tab" ? "active" : ""
            }`}
            onClick={() => handleTabChange("#Exercise&Fitness-tab")}
          >
            Exercise & Fitness, Yoga
          </button>

          <button
            id="OutdoorRecreation-tab"
            data-bs-toggle="pill"
            data-bs-target="#OutdoorRecreation"
            type="button"
            role="tab"
            aria-controls="OutdoorRecreation"
            aria-selected={
              sportsActiveTab === "#OutdoorRecreation-tab" ? "true" : "false"
            }
            className={`nav-link categoryButton ${
              sportsActiveTab === "#OutdoorRecreation-tab" ? "active" : ""
            }`}
            onClick={() => handleTabChange("#OutdoorRecreation-tab")}
          >
            Outdoor Recreation
          </button>

          <button
            id="IndoorRecreation-tab"
            data-bs-toggle="pill"
            data-bs-target="#IndoorRecreation"
            type="button"
            role="tab"
            aria-controls="IndoorRecreation"
            aria-selected={
              sportsActiveTab === "#IndoorRecreation-tab" ? "true" : "false"
            }
            className={`nav-link categoryButton ${
              sportsActiveTab === "#IndoorRecreation-tab" ? "active" : ""
            }`}
            onClick={() => handleTabChange("#IndoorRecreation-tab")}
          >
            Indoor Recreation
          </button>

          <button
            id="Camping_Hiking-tab"
            data-bs-toggle="pill"
            data-bs-target="#Camping_Hiking"
            type="button"
            role="tab"
            aria-controls="Camping_Hiking"
            aria-selected={
              sportsActiveTab === "#Camping_Hiking-tab" ? "true" : "false"
            }
            className={`nav-link categoryButton ${
              sportsActiveTab === "#Camping_Hiking-tab" ? "active" : ""
            }`}
            onClick={() => handleTabChange("#Camping_Hiking-tab")}
          >
            Camping Hiking
          </button>
        </aside>
        {/* Sidebar end */}

        {/* Categories start */}
        <aside
          className="tab-content me-2 categoryContentDisplay"
          id="v-pills-tabContent"
        >
          {/* Exercise&Fitness */}
          <div
            id="Exercise&Fitness"
            role="tabpanel"
            aria-labelledby="Exercise&Fitness-tab"
            className={`tab-pane fade ${
              sportsActiveTab === "#Exercise&Fitness-tab" ? "show active" : ""
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
                to={`/displayProduct/${"Exercise&Fitness"}`}
              >
                <LazyLoadImage
                  src=""
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Exercise & Fitness, Yoga
                </figcaption>
              </Link>
            </section>
          </div>

          {/* OutdoorRecreation */}
          <div
            id="OutdoorRecreation"
            role="tabpanel"
            aria-labelledby="OutdoorRecreation-tab"
            className={`tab-pane fade ${
              sportsActiveTab === "#OutdoorRecreation-tab" ? "show active" : ""
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
                to={`/displayProduct/${"OutdoorRecreation"}`}
              >
                <LazyLoadImage
                  src=""
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Outdoor Recreation
                </figcaption>
              </Link>
            </section>
          </div>
          {/* IndoorRecreation */}
          <div
            id="IndoorRecreation"
            role="tabpanel"
            aria-labelledby="IndoorRecreation-tab"
            className={`tab-pane fade ${
              sportsActiveTab === "#IndoorRecreation-tab" ? "show active" : ""
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
                to={`/displayProduct/${"IndoorRecreation"}`}
              >
                <LazyLoadImage
                  src=""
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Indoor Recreation
                </figcaption>
              </Link>
            </section>
          </div>
          {/* Camping_Hiking */}
          <div
            id="Camping_Hiking"
            role="tabpanel"
            aria-labelledby="Camping_Hiking-tab"
            className={`tab-pane fade ${
              sportsActiveTab === "#Camping_Hiking-tab" ? "show active" : ""
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
                to={`/displayProduct/${"Camping_Hiking"}`}
              >
                <LazyLoadImage
                  src=""
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Camping Hiking
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

export default SportsAndEntertainmentDisplay;
