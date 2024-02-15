import React, { useState, useEffect } from "react";
import AllHeader from "../../../Shared/Header/AllHeader";
import AllFooter from "../../../Shared/Footer/AllFooter";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "./CategoryDisplay.css";
import loader from "../../../Image/loder.gif";

const HomeAppliancesDisplay = () => {
  const [homeAppliancesActiveTab, setHomeAppliancesActiveTab] = useState("");

  useEffect(() => {
    const storedTab = localStorage.getItem("homeAppliancesActiveTab");
    setHomeAppliancesActiveTab(storedTab || "#-tab"); // Setting default active tab
  }, []);

  const handleTabChange = (tab) => {
    setHomeAppliancesActiveTab(tab);
    localStorage.setItem("homeAppliancesActiveTab", tab);
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
            id="-tab"
            data-bs-toggle="pill"
            data-bs-target="#"
            type="button"
            role="tab"
            aria-controls=""
            aria-selected={
              homeAppliancesActiveTab === "#-tab" ? "true" : "false"
            }
            className={`nav-link categoryButton ${
              homeAppliancesActiveTab === "#-tab" ? "active" : ""
            }`}
            onClick={() => handleTabChange("#-tab")}
          >
            Novelty Gifts
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
            id=""
            role="tabpanel"
            aria-labelledby="-tab"
            className={`tab-pane fade ${
              homeAppliancesActiveTab === "#-tab" ? "show active" : ""
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
                to={`/displayProduct/${""}`}
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
        </aside>
        {/* Categories end */}
      </div>
      <AllFooter />
    </>
  );
};

export default HomeAppliancesDisplay;
