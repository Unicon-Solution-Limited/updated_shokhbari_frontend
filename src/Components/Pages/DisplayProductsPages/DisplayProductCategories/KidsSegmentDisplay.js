import React, { useState, useEffect } from "react";
import AllHeader from "../../../Shared/Header/AllHeader";
import AllFooter from "../../../Shared/Footer/AllFooter";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "./CategoryDisplay.css";
import loader from "../../../Image/loder.gif";

const KidsSegmentDisplay = () => {
  const [kidsSegmentActiveTab, setKidsSegmentActiveTab] = useState("");

  useEffect(() => {
    const storedTab = localStorage.getItem("kidsSegmentActiveTab");
    setKidsSegmentActiveTab(storedTab || "#BabyClothing-tab-tab"); // Setting default active tab
  }, []);

  const handleTabChange = (tab) => {
    setKidsSegmentActiveTab(tab);
    localStorage.setItem("kidsSegmentActiveTab", tab);
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
            <span>Kids Segment</span>
          </section>
          <button
            id="BabyClothing-tab"
            data-bs-toggle="pill"
            data-bs-target="#BabyClothing"
            type="button"
            role="tab"
            aria-controls="BabyClothing"
            aria-selected={
              kidsSegmentActiveTab === "#BabyClothing-tab" ? "true" : "false"
            }
            className={`nav-link categoryButton ${
              kidsSegmentActiveTab === "#BabyClothing-tab" ? "active" : ""
            }`}
            onClick={() => handleTabChange("#BabyClothing-tab")}
          >
            Baby Clothing
          </button>

          <button
            id="BabyFootwaer-tab"
            data-bs-toggle="pill"
            data-bs-target="#BabyFootwaer"
            type="button"
            role="tab"
            aria-controls="BabyFootwaer"
            aria-selected={
              kidsSegmentActiveTab === "#BabyFootwaer-tab" ? "true" : "false"
            }
            className={`nav-link categoryButton ${
              kidsSegmentActiveTab === "#BabyFootwaer-tab" ? "active" : ""
            }`}
            onClick={() => handleTabChange("#BabyFootwaer-tab")}
          >
            Baby Footwaer
          </button>

          <button
            id="BabyCare-tab"
            data-bs-toggle="pill"
            data-bs-target="#BabyCare"
            type="button"
            role="tab"
            aria-controls="BabyCare"
            aria-selected={
              kidsSegmentActiveTab === "#BabyCare-tab" ? "true" : "false"
            }
            className={`nav-link categoryButton ${
              kidsSegmentActiveTab === "#BabyCare-tab" ? "active" : ""
            }`}
            onClick={() => handleTabChange("#BabyCare-tab")}
          >
            Baby Care
          </button>

          <button
            id="BabyAccessories-tab"
            data-bs-toggle="pill"
            data-bs-target="#BabyAccessories"
            type="button"
            role="tab"
            aria-controls="BabyAccessories"
            aria-selected={
              kidsSegmentActiveTab === "#BabyAccessories-tab" ? "true" : "false"
            }
            className={`nav-link categoryButton ${
              kidsSegmentActiveTab === "#BabyAccessories-tab" ? "active" : ""
            }`}
            onClick={() => handleTabChange("#BabyAccessories-tab")}
          >
            Baby Accessories
          </button>

          <button
            id="BabyFeedingNursery-tab"
            data-bs-toggle="pill"
            data-bs-target="#BabyFeedingNursery"
            type="button"
            role="tab"
            aria-controls="BabyFeedingNursery"
            aria-selected={
              kidsSegmentActiveTab === "#BabyFeedingNursery-tab"
                ? "true"
                : "false"
            }
            className={`nav-link categoryButton ${
              kidsSegmentActiveTab === "#BabyFeedingNursery-tab" ? "active" : ""
            }`}
            onClick={() => handleTabChange("#BabyFeedingNursery-tab")}
          >
            Baby Feeding Nursery
          </button>

          <button
            id="BabySportsOutdoor-tab"
            data-bs-toggle="pill"
            data-bs-target="#BabySportsOutdoor"
            type="button"
            role="tab"
            aria-controls="BabySportsOutdoor"
            aria-selected={
              kidsSegmentActiveTab === "#BabySportsOutdoor-tab"
                ? "true"
                : "false"
            }
            className={`nav-link categoryButton ${
              kidsSegmentActiveTab === "#BabySportsOutdoor-tab" ? "active" : ""
            }`}
            onClick={() => handleTabChange("#BabySportsOutdoor-tab")}
          >
            Baby Sports Outdoor
          </button>

          <button
            id="BabyToysGames-tab"
            data-bs-toggle="pill"
            data-bs-target="#BabyToysGames"
            type="button"
            role="tab"
            aria-controls=""
            aria-selected={kidsSegmentActiveTab === "#-tab" ? "true" : "false"}
            className={`nav-link categoryButton ${
              kidsSegmentActiveTab === "#BabyToysGames-tab" ? "active" : ""
            }`}
            onClick={() => handleTabChange("#BabyToysGames-tab")}
          >
            Baby Toys Games
          </button>

          <button
            id="BabyEducation-tab"
            data-bs-toggle="pill"
            data-bs-target="#BabyEducation"
            type="button"
            role="tab"
            aria-controls="BabyEducation"
            aria-selected={
              kidsSegmentActiveTab === "#BabyEducation-tab" ? "true" : "false"
            }
            className={`nav-link categoryButton ${
              kidsSegmentActiveTab === "#BabyEducation-tab" ? "active" : ""
            }`}
            onClick={() => handleTabChange("#BabyEducation-tab")}
          >
            Baby Education
          </button>
        </aside>
        {/* Sidebar end */}

        {/* Categories start */}
        <aside
          className="tab-content me-2 categoryContentDisplay"
          id="v-pills-tabContent"
        >
          {/* BabyClothing */}
          <div
            id="BabyClothing"
            role="tabpanel"
            aria-labelledby="BabyClothing-tab"
            className={`tab-pane fade ${
              kidsSegmentActiveTab === "#BabyClothing-tab" ? "show active" : ""
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
                to={`/displayProduct/${"Infants_cloth"}`}
              >
                <LazyLoadImage
                  src=""
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Infants Cloth
                </figcaption>
              </Link>

              <Link
                className="col-12 col-lg-2 col-md-2 categoryContentBody"
                to={`/displayProduct/${"Boy_cloth"}`}
              >
                <LazyLoadImage
                  src=""
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Boy Cloth
                </figcaption>
              </Link>

              <Link
                className="col-12 col-lg-2 col-md-2 categoryContentBody"
                to={`/displayProduct/${"Girl_cloth"}`}
              >
                <LazyLoadImage
                  src=""
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  GirlS Cloth
                </figcaption>
              </Link>
            </section>
          </div>

          {/* BabyCare */}
          <div
            id="BabyCare"
            role="tabpanel"
            aria-labelledby="BabyCare-tab"
            className={`tab-pane fade ${
              kidsSegmentActiveTab === "#BabyCare-tab" ? "show active" : ""
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
                to={`/displayProduct/${"Baby_body_care"}`}
              >
                <LazyLoadImage
                  src=""
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Baby Body Care
                </figcaption>
              </Link>

              <Link
                className="col-12 col-lg-2 col-md-2 categoryContentBody"
                to={`/displayProduct/${"Baby_PersonalCare"}`}
              >
                <LazyLoadImage
                  src=""
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Baby Personal Care
                </figcaption>
              </Link>
            </section>
          </div>
          {/* BabyFootwaer */}
          <div
            id="BabyFootwaer"
            role="tabpanel"
            aria-labelledby="BabyFootwaer-tab"
            className={`tab-pane fade ${
              kidsSegmentActiveTab === "#BabyFootwaer-tab" ? "show active" : ""
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
                to={`/displayProduct/${"Infants_Footwaer"}`}
              >
                <LazyLoadImage
                  src=""
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Infants Footwaer
                </figcaption>
              </Link>

              <Link
                className="col-12 col-lg-2 col-md-2 categoryContentBody"
                to={`/displayProduct/${"Boy_Footwaer"}`}
              >
                <LazyLoadImage
                  src=""
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Boy Footwaer
                </figcaption>
              </Link>

              <Link
                className="col-12 col-lg-2 col-md-2 categoryContentBody"
                to={`/displayProduct/${"Girl_Footwaer"}`}
              >
                <LazyLoadImage
                  src=""
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Girl Footwaer
                </figcaption>
              </Link>
            </section>
          </div>
          {/* BabyAccessories */}
          <div
            id="BabyAccessories"
            role="tabpanel"
            aria-labelledby="BabyAccessories-tab"
            className={`tab-pane fade ${
              kidsSegmentActiveTab === "#BabyAccessories-tab"
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
                to={`/displayProduct/${"Infants_Accessories"}`}
              >
                <LazyLoadImage
                  src=""
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Infants Accessories
                </figcaption>
              </Link>

              <Link
                className="col-12 col-lg-2 col-md-2 categoryContentBody"
                to={`/displayProduct/${"Boy_Accessories"}`}
              >
                <LazyLoadImage
                  src=""
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Boy Accessories
                </figcaption>
              </Link>

              <Link
                className="col-12 col-lg-2 col-md-2 categoryContentBody"
                to={`/displayProduct/${"Girl_Accessories"}`}
              >
                <LazyLoadImage
                  src=""
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Girl Accessories
                </figcaption>
              </Link>
            </section>
          </div>
          {/* BabyFeedingNursery */}
          <div
            id="BabyFeedingNursery"
            role="tabpanel"
            aria-labelledby="BabyFeedingNursery-tab"
            className={`tab-pane fade ${
              kidsSegmentActiveTab === "#BabyFeedingNursery-tab"
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
                to={`/displayProduct/${"BabyFeedingNursery"}`}
              >
                <LazyLoadImage
                  src=""
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Baby Feeding Nursery
                </figcaption>
              </Link>
            </section>
          </div>
          {/* BabySportsOutdoor */}
          <div
            id="BabySportsOutdoor"
            role="tabpanel"
            aria-labelledby="BabySportsOutdoor-tab"
            className={`tab-pane fade ${
              kidsSegmentActiveTab === "#BabySportsOutdoor-tab"
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
                to={`/displayProduct/${"BabySportsOutdoor"}`}
              >
                <LazyLoadImage
                  src=""
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Baby Sports Outdoor
                </figcaption>
              </Link>
            </section>
          </div>
          {/* BabyToysGames */}
          <div
            id="BabyToysGames"
            role="tabpanel"
            aria-labelledby="BabyToysGames-tab"
            className={`tab-pane fade ${
              kidsSegmentActiveTab === "#BabyToysGames-tab" ? "show active" : ""
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
                to={`/displayProduct/${"BabyToysGames"}`}
              >
                <LazyLoadImage
                  src=""
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Baby Toys Games
                </figcaption>
              </Link>
            </section>
          </div>
          {/* BabyEducation */}
          <div
            id="BabyEducation"
            role="tabpanel"
            aria-labelledby="BabyEducation-tab"
            className={`tab-pane fade ${
              kidsSegmentActiveTab === "#BabyEducation-tab" ? "show active" : ""
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
                to={`/displayProduct/${"BabyEducation"}`}
              >
                <LazyLoadImage
                  src=""
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Baby Education
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

export default KidsSegmentDisplay;
