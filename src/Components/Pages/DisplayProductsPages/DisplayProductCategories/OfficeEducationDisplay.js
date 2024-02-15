import React, { useState, useEffect } from "react";
import AllHeader from "../../../Shared/Header/AllHeader";
import AllFooter from "../../../Shared/Footer/AllFooter";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "./CategoryDisplay.css";
import loader from "../../../Image/loder.gif";

const OfficeEducationDisplay = () => {
  const [officeEducationActiveTab, setOfficeEducationActiveTab] = useState("");

  useEffect(() => {
    const storedTab = localStorage.getItem("officeEducationActiveTab");
    setOfficeEducationActiveTab(storedTab || "#Paper_Products-tab"); // Setting default active tab
  }, []);

  const handleTabChange = (tab) => {
    setOfficeEducationActiveTab(tab);
    localStorage.setItem("officeEducationActiveTab", tab);
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
            id="Paper_Products-tab"
            data-bs-toggle="pill"
            data-bs-target="#Paper_Products"
            type="button"
            role="tab"
            aria-controls="Paper_Products"
            aria-selected={
              officeEducationActiveTab === "#Paper_Products-tab"
                ? "true"
                : "false"
            }
            className={`nav-link categoryButton ${
              officeEducationActiveTab === "#Paper_Products-tab" ? "active" : ""
            }`}
            onClick={() => handleTabChange("#Paper_Products-tab")}
          >
            Paper Products
          </button>

          <button
            id="Writing_Correction-tab"
            data-bs-toggle="pill"
            data-bs-target="#Writing_Correction-tab"
            type="button"
            role="tab"
            aria-controls="Writing_Correction"
            aria-selected={
              officeEducationActiveTab === "#Writing_Correction-tab"
                ? "true"
                : "false"
            }
            className={`nav-link categoryButton ${
              officeEducationActiveTab === "#Writing_Correction-tab"
                ? "active"
                : ""
            }`}
            onClick={() => handleTabChange("#Writing_Correction-tab")}
          >
            Writing and Correction
          </button>

          <button
            id="Files_Folders-tab"
            data-bs-toggle="pill"
            data-bs-target="#Files_Folders"
            type="button"
            role="tab"
            aria-controls="Files_Folders"
            aria-selected={
              officeEducationActiveTab === "#Files_Folders-tab"
                ? "true"
                : "false"
            }
            className={`nav-link categoryButton ${
              officeEducationActiveTab === "#Files_Folders-tab" ? "active" : ""
            }`}
            onClick={() => handleTabChange("#Files_Folders-tab")}
          >
            Files and Folders
          </button>

          <button
            id="Desk_Accessories-tab"
            data-bs-toggle="pill"
            data-bs-target="#Desk_Accessories"
            type="button"
            role="tab"
            aria-controls="Desk_Accessories"
            aria-selected={
              officeEducationActiveTab === "#Desk_Accessories-tab"
                ? "true"
                : "false"
            }
            className={`nav-link categoryButton ${
              officeEducationActiveTab === "#Desk_Accessories-tab"
                ? "active"
                : ""
            }`}
            onClick={() => handleTabChange("#Desk_Accessories-tab")}
          >
            Desk Accessories
          </button>

          <button
            id="Books-tab"
            data-bs-toggle="pill"
            data-bs-target="#Books"
            type="button"
            role="tab"
            aria-controls="Books"
            aria-selected={
              officeEducationActiveTab === "#Books-tab" ? "true" : "false"
            }
            className={`nav-link categoryButton ${
              officeEducationActiveTab === "#Books-tab" ? "active" : ""
            }`}
            onClick={() => handleTabChange("#Books-tab")}
          >
            Books
          </button>

          <button
            id="Others_Stationeries-tab"
            data-bs-toggle="pill"
            data-bs-target="#Others_Stationeries"
            type="button"
            role="tab"
            aria-controls="Others_Stationeries"
            aria-selected={
              officeEducationActiveTab === "#Others_Stationeries-tab"
                ? "true"
                : "false"
            }
            className={`nav-link categoryButton ${
              officeEducationActiveTab === "#Others_Stationeries-tab"
                ? "active"
                : ""
            }`}
            onClick={() => handleTabChange("#Others_Stationeries-tab")}
          >
            Others Stationeries
          </button>
        </aside>
        {/* Sidebar end */}

        {/* Categories start */}
        <aside
          className="tab-content me-2 categoryContentDisplay"
          id="v-pills-tabContent"
        >
          {/* Paper Products */}
          <div
            id="Paper_Products"
            role="tabpanel"
            aria-labelledby="Paper_Products-tab"
            className={`tab-pane fade ${
              officeEducationActiveTab === "#Paper_Products-tab"
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
                to={`/displayProduct/${"Diary"}`}
              >
                <LazyLoadImage
                  src=""
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">Diary</figcaption>
              </Link>

              <Link
                className="col-12 col-lg-2 col-md-2 categoryContentBody"
                to={`/displayProduct/${"Notebooks and Pads"}`}
              >
                <LazyLoadImage
                  src=""
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Notebooks and Pads
                </figcaption>
              </Link>

              <Link
                className="col-12 col-lg-2 col-md-2 categoryContentBody"
                to={`/displayProduct/${"Writing and Printing Papers"}`}
              >
                <LazyLoadImage
                  src=""
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Writing and Printing Papers
                </figcaption>
              </Link>

              <Link
                className="col-12 col-lg-2 col-md-2 categoryContentBody"
                to={`/displayProduct/${"Envelops & Mailers"}`}
              >
                <LazyLoadImage
                  src=""
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Envelops & Mailers
                </figcaption>
              </Link>

              <Link
                className="col-12 col-lg-2 col-md-2 categoryContentBody"
                to={`/displayProduct/${"Calendars"}`}
              >
                <LazyLoadImage
                  src=""
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Calendars
                </figcaption>
              </Link>

              <Link
                className="col-12 col-lg-2 col-md-2 categoryContentBody"
                to={`/displayProduct/${"PaperProductsOthers"}`}
              >
                <LazyLoadImage
                  src=""
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  PaperProductsOthers
                </figcaption>
              </Link>
            </section>
          </div>

          {/* Writing & Correction */}
          <div
            id="Writing_Correction"
            role="tabpanel"
            aria-labelledby="Writing_Correction-tab"
            className={`tab-pane fade ${
              officeEducationActiveTab === "#Writing_Correction-tab"
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
                to={`/displayProduct/${"Writing and Correction"}`}
              >
                <LazyLoadImage
                  src=""
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Writing and Correction
                </figcaption>
              </Link>
            </section>
          </div>

          {/* Files and Folders */}
          <div
            id="Files_Folders"
            role="tabpanel"
            aria-labelledby="Files_Folders-tab"
            className={`tab-pane fade ${
              officeEducationActiveTab === "#Files_Folders-tab"
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
                to={`/displayProduct/${"Files and Folders"}`}
              >
                <LazyLoadImage
                  src=""
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Files and Folders
                </figcaption>
              </Link>
            </section>
          </div>

          {/* Desk Accessories */}
          <div
            id="Desk_Accessories"
            role="tabpanel"
            aria-labelledby="Desk_Accessories-tab"
            className={`tab-pane fade ${
              officeEducationActiveTab === "#Desk_Accessories-tab"
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
                to={`/displayProduct/${"Desk Accessories"}`}
              >
                <LazyLoadImage
                  src=""
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Desk Accessories
                </figcaption>
              </Link>
            </section>
          </div>

          {/* Books */}
          <div
            id="Books"
            role="tabpanel"
            aria-labelledby="Books-tab"
            className={`tab-pane fade ${
              officeEducationActiveTab === "#Books-tab" ? "show active" : ""
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
                to={`/displayProduct/${"Academic"}`}
              >
                <LazyLoadImage
                  src=""
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Academic
                </figcaption>
              </Link>

              <Link
                className="col-12 col-lg-2 col-md-2 categoryContentBody"
                to={`/displayProduct/${"Non-Academic"}`}
              >
                <LazyLoadImage
                  src=""
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Non-Academic
                </figcaption>
              </Link>
            </section>
          </div>

          {/* Other Sationeries */}
          <div
            id="Others_Stationeries"
            role="tabpanel"
            aria-labelledby="Others_Stationeries-tab"
            className={`tab-pane fade ${
              officeEducationActiveTab === "#Others_Stationeries-tab"
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
                to={`/displayProduct/${"Others Stationeries"}`}
              >
                <LazyLoadImage
                  src=""
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Others Stationeries
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

export default OfficeEducationDisplay;
