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
    setHomeAppliancesActiveTab(storedTab || "#Home_Entertainment-tab"); // Setting default active tab
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
            <span>Home Appliance</span>
          </section>
          <button
            id="Home_Entertainment-tab"
            data-bs-toggle="pill"
            data-bs-target="#Home_Entertainment"
            type="button"
            role="tab"
            aria-controls="Home_Entertainment"
            aria-selected={
              homeAppliancesActiveTab === "#Home_Entertainment-tab"
                ? "true"
                : "false"
            }
            className={`nav-link categoryButton ${
              homeAppliancesActiveTab === "#Home_Entertainment-tab"
                ? "active"
                : ""
            }`}
            onClick={() => handleTabChange("#Home_Entertainment-tab")}
          >
            Home Entertainment
          </button>

          <button
            id="Refrigerator_Freezer-tab"
            data-bs-toggle="pill"
            data-bs-target="#Refrigerator_Freezer"
            type="button"
            role="tab"
            aria-controls="Refrigerator_Freezer"
            aria-selected={
              homeAppliancesActiveTab === "#Refrigerator_Freezer-tab"
                ? "true"
                : "false"
            }
            className={`nav-link categoryButton ${
              homeAppliancesActiveTab === "#Refrigerator_Freezer-tab"
                ? "active"
                : ""
            }`}
            onClick={() => handleTabChange("#Refrigerator_Freezer-tab")}
          >
            Refrigerator and Freezer
          </button>

          <button
            id="Cooling_Heating-tab"
            data-bs-toggle="pill"
            data-bs-target="#Cooling_Heating"
            type="button"
            role="tab"
            aria-controls="Cooling_Heating"
            aria-selected={
              homeAppliancesActiveTab === "#Cooling_Heating-tab"
                ? "true"
                : "false"
            }
            className={`nav-link categoryButton ${
              homeAppliancesActiveTab === "#Cooling_Heating-tab" ? "active" : ""
            }`}
            onClick={() => handleTabChange("#Cooling_Heating-tab")}
          >
            Cooling and Heating
          </button>

          <button
            id="Kitchen_Appliance-tab"
            data-bs-toggle="pill"
            data-bs-target="#Kitchen_Appliance"
            type="button"
            role="tab"
            aria-controls="Kitchen_Appliance"
            aria-selected={
              homeAppliancesActiveTab === "#Kitchen_Appliance-tab"
                ? "true"
                : "false"
            }
            className={`nav-link categoryButton ${
              homeAppliancesActiveTab === "#Kitchen_Appliance-tab"
                ? "active"
                : ""
            }`}
            onClick={() => handleTabChange("#Kitchen_Appliance-tab")}
          >
            Kitchen Appliance
          </button>

          <button
            id="Bath_Fixtures-tab"
            data-bs-toggle="pill"
            data-bs-target="#Bath_Fixtures"
            type="button"
            role="tab"
            aria-controls="Bath_Fixtures"
            aria-selected={
              homeAppliancesActiveTab === "#Bath_Fixtures-tab"
                ? "true"
                : "false"
            }
            className={`nav-link categoryButton ${
              homeAppliancesActiveTab === "#Bath_Fixtures-tab" ? "active" : ""
            }`}
            onClick={() => handleTabChange("#Bath_Fixtures-tab")}
          >
            Bath Fixtures
          </button>

          <button
            id="Washing_Machine-tab"
            data-bs-toggle="pill"
            data-bs-target="#Washing_Machine"
            type="button"
            role="tab"
            aria-controls="Washing_Machine"
            aria-selected={
              homeAppliancesActiveTab === "#Washing_Machine-tab"
                ? "true"
                : "false"
            }
            className={`nav-link categoryButton ${
              homeAppliancesActiveTab === "#Washing_Machine-tab" ? "active" : ""
            }`}
            onClick={() => handleTabChange("#Washing_Machine-tab")}
          >
            Washing Machine
          </button>

          <button
            id="Cleaning_Equipments-tab"
            data-bs-toggle="pill"
            data-bs-target="#Cleaning_Equipments"
            type="button"
            role="tab"
            aria-controls="Cleaning_Equipments"
            aria-selected={
              homeAppliancesActiveTab === "#Cleaning_Equipments-tab"
                ? "true"
                : "false"
            }
            className={`nav-link categoryButton ${
              homeAppliancesActiveTab === "#Cleaning_Equipments-tab"
                ? "active"
                : ""
            }`}
            onClick={() => handleTabChange("#Cleaning_Equipments-tab")}
          >
            Cleaning Equipments
          </button>

          <button
            id="Iron_Garment_steamers-tab"
            data-bs-toggle="pill"
            data-bs-target="#Iron_Garment_steamers"
            type="button"
            role="tab"
            aria-controls="Iron_Garment_steamers"
            aria-selected={
              homeAppliancesActiveTab === "#Iron_Garment_steamers-tab"
                ? "true"
                : "false"
            }
            className={`nav-link categoryButton ${
              homeAppliancesActiveTab === "#Iron_Garment_steamers-tab"
                ? "active"
                : ""
            }`}
            onClick={() => handleTabChange("#Iron_Garment_steamers-tab")}
          >
            Iron and Garment steamers
          </button>

          <button
            id="Home_lighting-tab"
            data-bs-toggle="pill"
            data-bs-target="#Home_lighting"
            type="button"
            role="tab"
            aria-controls="Home_lighting"
            aria-selected={
              homeAppliancesActiveTab === "#Home_lighting-tab"
                ? "true"
                : "false"
            }
            className={`nav-link categoryButton ${
              homeAppliancesActiveTab === "#Home_lighting-tab" ? "active" : ""
            }`}
            onClick={() => handleTabChange("#Home_lighting-tab")}
          >
            Home lighting
          </button>

          <button
            id="Others_Appliances-tab"
            data-bs-toggle="pill"
            data-bs-target="#Others_Appliances"
            type="button"
            role="tab"
            aria-controls="Others_Appliances"
            aria-selected={
              homeAppliancesActiveTab === "#Others_Appliances-tab"
                ? "true"
                : "false"
            }
            className={`nav-link categoryButton ${
              homeAppliancesActiveTab === "#Others_Appliances-tab"
                ? "active"
                : ""
            }`}
            onClick={() => handleTabChange("#Others_Appliances-tab")}
          >
            Others Appliances
          </button>
        </aside>
        {/* Sidebar end */}

        {/* Categories start */}
        <aside
          className="tab-content me-2 categoryContentDisplay"
          id="v-pills-tabContent"
        >
          {/* Home Entertainment */}
          <div
            id="Home_Entertainment"
            role="tabpanel"
            aria-labelledby="Home_Entertainment-tab"
            className={`tab-pane fade ${
              homeAppliancesActiveTab === "#Home_Entertainment-tab"
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
                to={`/displayProduct/${"Television"}`}
              >
                <LazyLoadImage
                  src=""
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Television
                </figcaption>
              </Link>

              <Link
                className="col-12 col-lg-2 col-md-2 categoryContentBody"
                to={`/displayProduct/${"Audio and Music Devices"}`}
              >
                <LazyLoadImage
                  src=""
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Audio and Music Devices
                </figcaption>
              </Link>

              <Link
                className="col-12 col-lg-2 col-md-2 categoryContentBody"
                to={`/displayProduct/${"VR and Glasses"}`}
              >
                <LazyLoadImage
                  src=""
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  VR and Glasses
                </figcaption>
              </Link>

              <Link
                className="col-12 col-lg-2 col-md-2 categoryContentBody"
                to={`/displayProduct/${"Android Box"}`}
              >
                <LazyLoadImage
                  src=""
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Android Box
                </figcaption>
              </Link>
            </section>
          </div>

          {/* Refrigerator and Freezer */}
          <div
            id="Refrigerator_Freezer"
            role="tabpanel"
            aria-labelledby="Refrigerator_Freezer-tab"
            className={`tab-pane fade ${
              homeAppliancesActiveTab === "#Refrigerator_Freezer-tab"
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
                to={`/displayProduct/${"Direct Cool refrigerator"}`}
              >
                <LazyLoadImage
                  src=""
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Direct Cool refrigerator
                </figcaption>
              </Link>

              <Link
                className="col-12 col-lg-2 col-md-2 categoryContentBody"
                to={`/displayProduct/${"Non-frost refrigerator"}`}
              >
                <LazyLoadImage
                  src=""
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Non-frost refrigerator
                </figcaption>
              </Link>

              <Link
                className="col-12 col-lg-2 col-md-2 categoryContentBody"
                to={`/displayProduct/${"Freezer"}`}
              >
                <LazyLoadImage
                  src=""
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Freezer
                </figcaption>
              </Link>
              <Link
                className="col-12 col-lg-2 col-md-2 categoryContentBody"
                to={`/displayProduct/${"Beverage Cooler"}`}
              >
                <LazyLoadImage
                  src=""
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Beverage Cooler
                </figcaption>
              </Link>
            </section>
          </div>

          {/* Cooling and Heating */}
          <div
            id="Cooling_Heating"
            role="tabpanel"
            aria-labelledby="Cooling_Heating-tab"
            className={`tab-pane fade ${
              homeAppliancesActiveTab === "#Cooling_Heating-tab"
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
                to={`/displayProduct/${"Air Conditioner"}`}
              >
                <LazyLoadImage
                  src=""
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Air Conditioner
                </figcaption>
              </Link>

              <Link
                className="col-12 col-lg-2 col-md-2 categoryContentBody"
                to={`/displayProduct/${"Air Cooler"}`}
              >
                <LazyLoadImage
                  src=""
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Air Cooler
                </figcaption>
              </Link>

              <Link
                className="col-12 col-lg-2 col-md-2 categoryContentBody"
                to={`/displayProduct/${"Fan"}`}
              >
                <LazyLoadImage
                  src=""
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">Fan</figcaption>
              </Link>

              <Link
                className="col-12 col-lg-2 col-md-2 categoryContentBody"
                to={`/displayProduct/${"Room Heater"}`}
              >
                <LazyLoadImage
                  src=""
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Room Heater
                </figcaption>
              </Link>

              <Link
                className="col-12 col-lg-2 col-md-2 categoryContentBody"
                to={`/displayProduct/${"Geyser"}`}
              >
                <LazyLoadImage
                  src=""
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">Geyser</figcaption>
              </Link>

              <Link
                className="col-12 col-lg-2 col-md-2 categoryContentBody"
                to={`/displayProduct/${"Air Purifier"}`}
              >
                <LazyLoadImage
                  src=""
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Air Purifier
                </figcaption>
              </Link>
            </section>
          </div>

          {/* Kitchen Appliance */}
          <div
            id="Kitchen_Appliance"
            role="tabpanel"
            aria-labelledby="Kitchen_Appliance-tab"
            className={`tab-pane fade ${
              homeAppliancesActiveTab === "#Kitchen_Appliance-tab"
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
                to={`/displayProduct/${"Water Purifier and Filter"}`}
              >
                <LazyLoadImage
                  src=""
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Water Purifier and Filter
                </figcaption>
              </Link>

              <Link
                className="col-12 col-lg-2 col-md-2 categoryContentBody"
                to={`/displayProduct/${"Kitchen Stove"}`}
              >
                <LazyLoadImage
                  src=""
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Kitchen Stove
                </figcaption>
              </Link>

              <Link
                className="col-12 col-lg-2 col-md-2 categoryContentBody"
                to={`/displayProduct/${"Kitchen Hood"}`}
              >
                <LazyLoadImage
                  src=""
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Kitchen Hood
                </figcaption>
              </Link>

              <Link
                className="col-12 col-lg-2 col-md-2 categoryContentBody"
                to={`/displayProduct/${"Microwave and Electric Oven"}`}
              >
                <LazyLoadImage
                  src=""
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Microwave and Electric Oven
                </figcaption>
              </Link>

              <Link
                className="col-12 col-lg-2 col-md-2 categoryContentBody"
                to={`/displayProduct/${"Cooker"}`}
              >
                <LazyLoadImage
                  src=""
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">Cooker</figcaption>
              </Link>

              <Link
                className="col-12 col-lg-2 col-md-2 categoryContentBody"
                to={`/displayProduct/${"Other electronic Appliance"}`}
              >
                <LazyLoadImage
                  src=""
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Other electronic Appliance
                </figcaption>
              </Link>
            </section>
          </div>

          {/* Bath Fixtures */}
          <div
            id="Bath_Fixtures"
            role="tabpanel"
            aria-labelledby="Bath_Fixtures-tab"
            className={`tab-pane fade ${
              homeAppliancesActiveTab === "#Bath_Fixtures-tab"
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
                to={`/displayProduct/${"Basin"}`}
              >
                <LazyLoadImage
                  src=""
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">Basin</figcaption>
              </Link>
              <Link
                className="col-12 col-lg-2 col-md-2 categoryContentBody"
                to={`/displayProduct/${"Commode"}`}
              >
                <LazyLoadImage
                  src=""
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Commode
                </figcaption>
              </Link>
              <Link
                className="col-12 col-lg-2 col-md-2 categoryContentBody"
                to={`/displayProduct/${"Bath tub"}`}
              >
                <LazyLoadImage
                  src=""
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Bath tub
                </figcaption>
              </Link>
              <Link
                className="col-12 col-lg-2 col-md-2 categoryContentBody"
                to={`/displayProduct/${"Bath fittings"}`}
              >
                <LazyLoadImage
                  src=""
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Bath fittings
                </figcaption>
              </Link>
            </section>
          </div>
          {/* Washing Machine */}
          <div
            id="Washing_Machine"
            role="tabpanel"
            aria-labelledby="Washing_Machine-tab"
            className={`tab-pane fade ${
              homeAppliancesActiveTab === "#Washing_Machine-tab"
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
                to={`/displayProduct/${"Automatic Front Load"}`}
              >
                <LazyLoadImage
                  src=""
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Automatic Front Load
                </figcaption>
              </Link>

              <Link
                className="col-12 col-lg-2 col-md-2 categoryContentBody"
                to={`/displayProduct/${"Semi-Automatic"}`}
              >
                <LazyLoadImage
                  src=""
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Semi-Automatic
                </figcaption>
              </Link>

              <Link
                className="col-12 col-lg-2 col-md-2 categoryContentBody"
                to={`/displayProduct/${"Semi-Automatic"}`}
              >
                <LazyLoadImage
                  src=""
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Semi-Automatic
                </figcaption>
              </Link>
            </section>
          </div>
          {/* Cleaning Equipments */}
          <div
            id="Cleaning_Equipments"
            role="tabpanel"
            aria-labelledby="Cleaning_Equipments-tab"
            className={`tab-pane fade ${
              homeAppliancesActiveTab === "#Cleaning_Equipments-tab"
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
                to={`/displayProduct/${"Vacuum Cleaner"}`}
              >
                <LazyLoadImage
                  src=""
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Vacuum Cleaner
                </figcaption>
              </Link>

              <Link
                className="col-12 col-lg-2 col-md-2 categoryContentBody"
                to={`/displayProduct/${"Others Cleaning Equipments"}`}
              >
                <LazyLoadImage
                  src=""
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Others Cleaning Equipments
                </figcaption>
              </Link>
            </section>
          </div>
          {/* Iron and Garment steamers */}
          <div
            id="Iron_Garment_steamers"
            role="tabpanel"
            aria-labelledby="Iron_Garment_steamers-tab"
            className={`tab-pane fade ${
              homeAppliancesActiveTab === "#Iron_Garment_steamers-tab"
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
                to={`/displayProduct/${"Lights"}`}
              >
                <LazyLoadImage
                  src=""
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">Lights</figcaption>
              </Link>

              <Link
                className="col-12 col-lg-2 col-md-2 categoryContentBody"
                to={`/displayProduct/${"Switch"}`}
              >
                <LazyLoadImage
                  src=""
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">Switch</figcaption>
              </Link>

              <Link
                className="col-12 col-lg-2 col-md-2 categoryContentBody"
                to={`/displayProduct/${"Plugs and Outlets"}`}
              >
                <LazyLoadImage
                  src=""
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Plugs and Outlets
                </figcaption>
              </Link>
            </section>
          </div>
          {/* Home lighting */}
          <div
            id="Home_lighting"
            role="tabpanel"
            aria-labelledby="Home_lighting-tab"
            className={`tab-pane fade ${
              homeAppliancesActiveTab === "#Home_lighting-tab"
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
          {/* Others Appliances */}
          <div
            id="Others_Appliances"
            role="tabpanel"
            aria-labelledby="Others_Appliances-tab"
            className={`tab-pane fade ${
              homeAppliancesActiveTab === "#Others_Appliances-tab"
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
                to={`/displayProduct/${"Others Appliances"}`}
              >
                <LazyLoadImage
                  src=""
                  alt="Trulli"
                  className="img-fluid categoryImage"
                  placeholderSrc={loader}
                />
                <figcaption className="categoryImageCaption">
                  Others Appliances
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
