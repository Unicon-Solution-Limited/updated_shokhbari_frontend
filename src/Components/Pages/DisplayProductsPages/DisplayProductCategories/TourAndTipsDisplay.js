import React, { useState, useEffect } from "react";
import AllHeader from "../../../Shared/Header/AllHeader";
import AllFooter from "../../../Shared/Footer/AllFooter";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "./CategoryDisplay.css";
import loader from "../../../Image/loder.gif";

const TourAndTipsDisplay = () => {
  const [tourTipsActiveTab, setTourTipsActiveTab] = useState("");

  useEffect(() => {
    const storedTab = localStorage.getItem("tourTipsActiveTab");
    setTourTipsActiveTab(storedTab || "#Travel-tab"); // Setting default active tab
  }, []);

  const handleTabChange = (tab) => {
    setTourTipsActiveTab(tab);
    localStorage.setItem("tourTipsActiveTab", tab);
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
            <span>Tour And Tips</span>
          </section>
          <button
            id="Travel-tab"
            data-bs-toggle="pill"
            data-bs-target="#Travel"
            type="button"
            role="tab"
            aria-controls="Travel"
            aria-selected={
              tourTipsActiveTab === "#Travel-tab" ? "true" : "false"
            }
            className={`nav-link categoryButton ${
              tourTipsActiveTab === "#Travel-tab" ? "active" : ""
            }`}
            onClick={() => handleTabChange("#Travel-tab")}
          >
            Travel
          </button>

          <button
            id="Stay-tab"
            data-bs-toggle="pill"
            data-bs-target="#Stay"
            type="button"
            role="tab"
            aria-controls="Stay"
            aria-selected={tourTipsActiveTab === "#Stay-tab" ? "true" : "false"}
            className={`nav-link categoryButton ${
              tourTipsActiveTab === "#Stay-tab" ? "active" : ""
            }`}
            onClick={() => handleTabChange("#Stay-tab")}
          >
            Stay
          </button>

          <button
            id="Tour_Guide-tab"
            data-bs-toggle="pill"
            data-bs-target="#Tour_Guide"
            type="button"
            role="tab"
            aria-controls="Tour_Guide"
            aria-selected={
              tourTipsActiveTab === "#Tour_Guide-tab" ? "true" : "false"
            }
            className={`nav-link categoryButton ${
              tourTipsActiveTab === "#Tour_Guide-tab" ? "active" : ""
            }`}
            onClick={() => handleTabChange("#Tour_Guide-tab")}
          >
            Tour Guide
          </button>

          <button
            id="Package_Tour-tab"
            data-bs-toggle="pill"
            data-bs-target="#Package_Tour"
            type="button"
            role="tab"
            aria-controls="Package_Tour"
            aria-selected={
              tourTipsActiveTab === "#Package_Tour-tab" ? "true" : "false"
            }
            className={`nav-link categoryButton ${
              tourTipsActiveTab === "#Package_Tour-tab" ? "active" : ""
            }`}
            onClick={() => handleTabChange("#Package_Tour-tab")}
          >
            Package Tour
          </button>
        </aside>
        {/* Sidebar end */}

        {/* Categories start */}
        <aside
          className="tab-content me-2 categoryContentDisplay"
          id="v-pills-tabContent"
        >
          {/* Travel */}
          <div
            id="Travel"
            role="tabpanel"
            aria-labelledby="Travel-tab"
            className={`tab-pane fade ${
              tourTipsActiveTab === "#Travel-tab" ? "show active" : ""
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
                to={`/displaySubChildProduct/${"Bus_Ticket"}`}
              >
                <LazyLoadImage
                  src=""
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Bus Ticket
                </figcaption>
              </Link>

              <Link
                className="col-12 col-lg-2 col-md-2 categoryContentBody"
                to={`/displaySubChildProduct/${"Train Ticket"}`}
              >
                <LazyLoadImage
                  src=""
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Train Ticket
                </figcaption>
              </Link>

              <Link
                className="col-12 col-lg-2 col-md-2 categoryContentBody"
                to={`/displaySubChildProduct/${"Air_Ticket"}`}
              >
                <LazyLoadImage
                  src=""
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Air Ticket
                </figcaption>
              </Link>

              <Link
                className="col-12 col-lg-2 col-md-2 categoryContentBody"
                to={`/displaySubChildProduct/${"Car_Rent"}`}
              >
                <LazyLoadImage
                  src=""
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Car Rent
                </figcaption>
              </Link>

              <Link
                className="col-12 col-lg-2 col-md-2 categoryContentBody"
                to={`/displaySubChildProduct/${"Bus_Rent"}`}
              >
                <LazyLoadImage
                  src=""
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Bus Rent
                </figcaption>
              </Link>

              <Link
                className="col-12 col-lg-2 col-md-2 categoryContentBody"
                to={`/displaySubChildProduct/${"Booking"}`}
              >
                <LazyLoadImage
                  src=""
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Booking
                </figcaption>
              </Link>
            </section>
          </div>

          {/* Stay */}
          <div
            id="Stay"
            role="tabpanel"
            aria-labelledby="Stay-tab"
            className={`tab-pane fade ${
              tourTipsActiveTab === "#Stay-tab" ? "show active" : ""
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
                to={`/displayProduct/${"Stay"}`}
              >
                <LazyLoadImage
                  src=""
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">Stay</figcaption>
              </Link>
            </section>
          </div>

          {/* Tour_Guide */}
          <div
            id="Tour_Guide"
            role="tabpanel"
            aria-labelledby="Tour_Guide-tab"
            className={`tab-pane fade ${
              tourTipsActiveTab === "#Tour_Guide-tab" ? "show active" : ""
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
                to={`/displayProduct/${"Tour_Guide"}`}
              >
                <LazyLoadImage
                  src=""
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Tour Guide
                </figcaption>
              </Link>
            </section>
          </div>

          {/* Package_Tour */}
          <div
            id="Package_Tour"
            role="tabpanel"
            aria-labelledby="Package_Tour-tab"
            className={`tab-pane fade ${
              tourTipsActiveTab === "#Package_Tour-tab" ? "show active" : ""
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
                to={`/displayProduct/${"Package_Tour"}`}
              >
                <LazyLoadImage
                  src=""
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Package Tour
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

export default TourAndTipsDisplay;
