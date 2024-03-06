import React, { useState, useEffect } from "react";
import AllHeader from "../../../Shared/Header/AllHeader";
import AllFooter from "../../../Shared/Footer/AllFooter";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "./CategoryDisplay.css";
import loader from "../../../Image/loder.gif";

const MatrimonialDisplay = () => {
  const [matrimonialActiveTab, setMatrimonialActiveTab] = useState("");

  useEffect(() => {
    const storedTab = localStorage.getItem("matrimonialActiveTab");
    setMatrimonialActiveTab(storedTab || "#Wedding_Planner-tab-tab"); // Setting default active tab
  }, []);

  const handleTabChange = (tab) => {
    setMatrimonialActiveTab(tab);
    localStorage.setItem("matrimonialActiveTab", tab);
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
            <span>Matrimonial</span>
          </section>
          <button
            id="Wedding_Planner-tab"
            data-bs-toggle="pill"
            data-bs-target="#Wedding_Planner"
            type="button"
            role="tab"
            aria-controls="Wedding_Planner"
            aria-selected={
              matrimonialActiveTab === "#Wedding_Planner-tab" ? "true" : "false"
            }
            className={`nav-link categoryButton ${
              matrimonialActiveTab === "#Wedding_Planner-tab" ? "active" : ""
            }`}
            onClick={() => handleTabChange("#Wedding_Planner-tab")}
          >
            Wedding Planner
          </button>

          <button
            id="Wedding_Dress_Collection-tab"
            data-bs-toggle="pill"
            data-bs-target="#Wedding_Dress_Collection"
            type="button"
            role="tab"
            aria-controls=""
            aria-selected={matrimonialActiveTab === "#-tab" ? "true" : "false"}
            className={`nav-link categoryButton ${
              matrimonialActiveTab === "#Wedding_Dress_Collection-tab"
                ? "active"
                : ""
            }`}
            onClick={() => handleTabChange("#Wedding_Dress_Collection-tab")}
          >
            Wedding Dress Collection
          </button>

          <button
            id="Wedding_Jewelry_Collection-tab"
            data-bs-toggle="pill"
            data-bs-target="#Wedding_Jewelry_Collection"
            type="button"
            role="tab"
            aria-controls="Wedding_Jewelry_Collection"
            aria-selected={
              matrimonialActiveTab === "#Wedding_Jewelry_Collection-tab"
                ? "true"
                : "false"
            }
            className={`nav-link categoryButton ${
              matrimonialActiveTab === "#Wedding_Jewelry_Collection-tab"
                ? "active"
                : ""
            }`}
            onClick={() => handleTabChange("#Wedding_Jewelry_Collection-tab")}
          >
            Wedding Jewelry Collection
          </button>

          <button
            id="Wedding_Footwear-tab"
            data-bs-toggle="pill"
            data-bs-target="#Wedding_Footwear"
            type="button"
            role="tab"
            aria-controls="Wedding_Footwear"
            aria-selected={
              matrimonialActiveTab === "#Wedding_Footwear-tab"
                ? "true"
                : "false"
            }
            className={`nav-link categoryButton ${
              matrimonialActiveTab === "#Wedding_Footwear-tab" ? "active" : ""
            }`}
            onClick={() => handleTabChange("#Wedding_Footwear-tab")}
          >
            Wedding Footwear
          </button>

          <button
            id="Wedding_Accessories-tab"
            data-bs-toggle="pill"
            data-bs-target="#Wedding_Accessories"
            type="button"
            role="tab"
            aria-controls="Wedding_Accessories"
            aria-selected={
              matrimonialActiveTab === "#Wedding_Accessories-tab"
                ? "true"
                : "false"
            }
            className={`nav-link categoryButton ${
              matrimonialActiveTab === "#Wedding_Accessories-tab"
                ? "active"
                : ""
            }`}
            onClick={() => handleTabChange("#Wedding_Accessories-tab")}
          >
            Wedding Accessories
          </button>

          <button
            id="Beauty_Park-tab"
            data-bs-toggle="pill"
            data-bs-target="#Beauty_Park"
            type="button"
            role="tab"
            aria-controls="Beauty_Park"
            aria-selected={
              matrimonialActiveTab === "#Beauty_Park-tab" ? "true" : "false"
            }
            className={`nav-link categoryButton ${
              matrimonialActiveTab === "#Beauty_Park-tab" ? "active" : ""
            }`}
            onClick={() => handleTabChange("#Beauty_Park-tab")}
          >
            Beauty Park
          </button>

          <button
            id="Wedding_Vehicle-tab"
            data-bs-toggle="pill"
            data-bs-target="#Wedding_Vehicle"
            type="button"
            role="tab"
            aria-controls="Wedding_Vehicle"
            aria-selected={
              matrimonialActiveTab === "#Wedding_Vehicle-tab" ? "true" : "false"
            }
            className={`nav-link categoryButton ${
              matrimonialActiveTab === "#Wedding_Vehicle-tab" ? "active" : ""
            }`}
            onClick={() => handleTabChange("#Wedding_Vehicle-tab")}
          >
            Wedding Vehicle
          </button>

          <button
            id="Cinemafogrophy_Photography-tab"
            data-bs-toggle="pill"
            data-bs-target="#Cinemafogrophy_Photography"
            type="button"
            role="tab"
            aria-controls="Cinemafogrophy_Photography"
            aria-selected={
              matrimonialActiveTab === "#Cinemafogrophy_Photography-tab"
                ? "true"
                : "false"
            }
            className={`nav-link categoryButton ${
              matrimonialActiveTab === "#Cinemafogrophy_Photography-tab"
                ? "active"
                : ""
            }`}
            onClick={() => handleTabChange("#Cinemafogrophy_Photography-tab")}
          >
            Cinemafogrophy Photography
          </button>

          <button
            id="Wedding_Venue-tab"
            data-bs-toggle="pill"
            data-bs-target="#Wedding_Venue"
            type="button"
            role="tab"
            aria-controls="Wedding_Venue"
            aria-selected={
              matrimonialActiveTab === "#Wedding_Venue-tab" ? "true" : "false"
            }
            className={`nav-link categoryButton ${
              matrimonialActiveTab === "#Wedding_Venue-tab" ? "active" : ""
            }`}
            onClick={() => handleTabChange("#Wedding_Venue-tab")}
          >
            Wedding Venue
          </button>

          <button
            id="Catering_Service-tab"
            data-bs-toggle="pill"
            data-bs-target="#Catering_Service"
            type="button"
            role="tab"
            aria-controls="Catering_Service"
            aria-selected={
              matrimonialActiveTab === "#Catering_Service-tab"
                ? "true"
                : "false"
            }
            className={`nav-link categoryButton ${
              matrimonialActiveTab === "#Catering_Service-tab" ? "active" : ""
            }`}
            onClick={() => handleTabChange("#Catering_Service-tab")}
          >
            Catering Service
          </button>

          <button
            id="Sound_System-tab"
            data-bs-toggle="pill"
            data-bs-target="#Sound_System"
            type="button"
            role="tab"
            aria-controls="Sound_System"
            aria-selected={
              matrimonialActiveTab === "#Sound_System-tab" ? "true" : "false"
            }
            className={`nav-link categoryButton ${
              matrimonialActiveTab === "#Sound_System-tab" ? "active" : ""
            }`}
            onClick={() => handleTabChange("#Sound_System-tab")}
          >
            Sound System
          </button>
        </aside>
        {/* Sidebar end */}

        {/* Categories start */}
        <aside
          className="tab-content me-2 categoryContentDisplay"
          id="v-pills-tabContent"
        >
          {/* Wedding_Planner */}
          <div
            id="Wedding_Planner"
            role="tabpanel"
            aria-labelledby="Wedding_Planner-tab"
            className={`tab-pane fade ${
              matrimonialActiveTab === "#Wedding_Planner-tab"
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
                to={`/displayProduct/${"Wedding_Planner"}`}
              >
                <LazyLoadImage
                  src=""
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Wedding Planner
                </figcaption>
              </Link>
            </section>
          </div>

          {/* Wedding_Dress_Collection */}
          <div
            id="Wedding_Dress_Collection"
            role="tabpanel"
            aria-labelledby="Wedding_Dress_Collection-tab"
            className={`tab-pane fade ${
              matrimonialActiveTab === "#Wedding_Dress_Collection-tab"
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
                to={`/displayProduct/${"Wedding_Dress_Collection"}`}
              >
                <LazyLoadImage
                  src=""
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Wedding Dress Collection
                </figcaption>
              </Link>
            </section>
          </div>

          {/* Wedding_Jewelry_Collection */}
          <div
            id="Wedding_Jewelry_Collection"
            role="tabpanel"
            aria-labelledby="Wedding_Jewelry_Collection-tab"
            className={`tab-pane fade ${
              matrimonialActiveTab === "#Wedding_Jewelry_Collection-tab"
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
                to={`/displayProduct/${"Wedding_Jewelry_Collection"}`}
              >
                <LazyLoadImage
                  src=""
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Wedding Jewelry Collection
                </figcaption>
              </Link>
            </section>
          </div>

          {/* Wedding_Footwear */}
          <div
            id="Wedding_Footwear"
            role="tabpanel"
            aria-labelledby="Wedding_Footwear-tab"
            className={`tab-pane fade ${
              matrimonialActiveTab === "#Wedding_Footwear-tab"
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
                to={`/displayProduct/${"Wedding_Footwear"}`}
              >
                <LazyLoadImage
                  src=""
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Wedding Footwear
                </figcaption>
              </Link>
            </section>
          </div>

          {/* Wedding_Accessories */}
          <div
            id="Wedding_Accessories"
            role="tabpanel"
            aria-labelledby="Wedding_Accessories-tab"
            className={`tab-pane fade ${
              matrimonialActiveTab === "#Wedding_Accessories-tab"
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
                to={`/displayProduct/${"Wedding_Accessories"}`}
              >
                <LazyLoadImage
                  src=""
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Wedding Accessories
                </figcaption>
              </Link>
            </section>
          </div>

          {/* Beauty_Park */}
          <div
            id="Beauty_Park"
            role="tabpanel"
            aria-labelledby="Beauty_Park-tab"
            className={`tab-pane fade ${
              matrimonialActiveTab === "#Beauty_Park-tab" ? "show active" : ""
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
                to={`/displayProduct/${"Beauty_Park"}`}
              >
                <LazyLoadImage
                  src=""
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Beauty Park
                </figcaption>
              </Link>
            </section>
          </div>

          {/* Wedding_Vehicle */}
          <div
            id="Wedding_Vehicle"
            role="tabpanel"
            aria-labelledby="Wedding_Vehicle-tab"
            className={`tab-pane fade ${
              matrimonialActiveTab === "#Wedding_Vehicle-tab"
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
                to={`/displayProduct/${"Wedding_Vehicle"}`}
              >
                <LazyLoadImage
                  src=""
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Wedding Vehicle
                </figcaption>
              </Link>
            </section>
          </div>

          {/* Cinemafogrophy_Photography */}
          <div
            id="Cinemafogrophy_Photography"
            role="tabpanel"
            aria-labelledby="Cinemafogrophy_Photography-tab"
            className={`tab-pane fade ${
              matrimonialActiveTab === "#Cinemafogrophy_Photography-tab"
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
                to={`/displayProduct/${"Cinemafogrophy_Photography"}`}
              >
                <LazyLoadImage
                  src=""
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Cinemafogrophy Photography
                </figcaption>
              </Link>
            </section>
          </div>

          {/* Wedding_Venue */}
          <div
            id="Wedding_Venue"
            role="tabpanel"
            aria-labelledby="Wedding_Venue-tab"
            className={`tab-pane fade ${
              matrimonialActiveTab === "#Wedding_Venue-tab" ? "show active" : ""
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
                to={`/displayProduct/${"Wedding_Venue"}`}
              >
                <LazyLoadImage
                  src=""
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Wedding Venue
                </figcaption>
              </Link>
            </section>
          </div>

          {/* Catering_Service */}
          <div
            id="Catering_Service"
            role="tabpanel"
            aria-labelledby="Catering_Service-tab"
            className={`tab-pane fade ${
              matrimonialActiveTab === "#Catering_Service-tab"
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
                to={`/displayProduct/${"Catering_Service"}`}
              >
                <LazyLoadImage
                  src=""
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Catering Service
                </figcaption>
              </Link>
            </section>
          </div>

          {/* Sound_System */}
          <div
            id="Sound_System"
            role="tabpanel"
            aria-labelledby="Sound_System-tab"
            className={`tab-pane fade ${
              matrimonialActiveTab === "#Sound_System-tab" ? "show active" : ""
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
                to={`/displayProduct/${"Sound_System"}`}
              >
                <LazyLoadImage
                  src=""
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Sound System
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

export default MatrimonialDisplay;
