import React, { useEffect, useState } from "react";
import "./AddProductPage.css";
import DashboardHeader from "../../Dashboard/DashboardShared/DashboardHeader";
import Apparel from "./AllAddproductPage/Apparel";
import AutomobilesMotorbike from "./AllAddproductPage/AutomobilesMotorbike";
import BeautyPersonalCare from "./AllAddproductPage/BeautyPersonalCare";
import FashionAccessories from "./AllAddproductPage/FashionAccessories";
import GiftsCraft from "./AllAddproductPage/GiftsCraft";
import OfficeSupplies from "./AllAddproductPage/OfficeSupplies";
import HomeAppliances from "./AllAddproductPage/HomeAppliances";
import ElectronicDevicesAccessories from "./AllAddproductPage/ElectronicDevicesAccessories";
import HomeLifestyle from "./AllAddproductPage/HomeLifestyle";
import SportsEntertainments from "./AllAddproductPage/SportsEntertainments";
import FoodBeverageGroceries from "./AllAddproductPage/FoodBeverageGroceries";
import HealthMedical from "./AllAddproductPage/HealthMedical";
import { useHistory } from "react-router-dom";
import MatrimonialCollection from "./AllAddproductPage/MatrimonialCollection";
import TourTrips from "./AllAddproductPage/TourTrips";
import Kids from "./AllAddproductPage/Kids";

const AddProductPage = () => {
  const history = useHistory();
  const [activeTab, setActiveTab] = useState("");

  useEffect(() => {
    const storedTab = localStorage.getItem("activeTab");
    setActiveTab(storedTab || "#Apparel");
  }, []);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    localStorage.setItem("activeTab", tab);
    history.push(tab); // Update the URL to reflect the active tab
  };
  return (
    <>
      <DashboardHeader />
      {/* Add Product pages side bar */}
      <div className="container-fluid">
        <div
          className="row d-flex align-items-start addProductPage"
          activeKey={activeTab}
          onClick={() => handleTabChange}
        >
          <ul
            className="nav flex-column nav-pills sidebar col-md-3"
            id="myTabs"
            role="tablist"
          >
            <li className="nav-item">
              <a
                className={`nav-link ${
                  activeTab === "#Apparel" ? "active" : ""
                }`}
                onClick={() => handleTabChange("#Apparel")}
                href="#/"
                data-bs-toggle="tab"
                id="apparel-tab"
                role="tab"
                aria-controls="apparel"
                aria-selected="true"
              >
                Apparel
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${
                  activeTab === "#FashionAccessories" ? "active" : ""
                }`}
                onClick={() => handleTabChange("#FashionAccessories")}
                href="#/"
                data-bs-toggle="tab"
                id="fashion-tab"
                role="tab"
                aria-controls="fashion"
                aria-selected="true"
              >
                Fashion Accessories
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${
                  activeTab === "#BeautyPersonalCare" ? "active" : ""
                }`}
                onClick={() => handleTabChange("#BeautyPersonalCare")}
                data-bs-toggle="tab"
                href="#/"
                id="BeautyPersonalCare-tab"
                role="tab"
                aria-controls="BeautyPersonalCare"
                aria-selected="true"
              >
                Beauty & Personal Care
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${
                  activeTab === "#GiftsCraft" ? "active" : ""
                }`}
                onClick={() => handleTabChange("#GiftsCraft")}
                data-bs-toggle="tab"
                href="#/"
                id="GiftsCraft-tab"
                role="tab"
                aria-controls="GiftsCraft"
                aria-selected="true"
              >
                Gifts & Craft
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${
                  activeTab === "#OfficeSupplies" ? "active" : ""
                }`}
                onClick={() => handleTabChange("#OfficeSupplies")}
                data-bs-toggle="tab"
                href="#/"
                id="OfficeSupplies-tab"
                role="tab"
                aria-controls="OfficeSupplies"
                aria-selected="true"
              >
                Office Supplies
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${
                  activeTab === "#HomeAppliances" ? "active" : ""
                }`}
                onClick={() => handleTabChange("#HomeAppliances")}
                data-bs-toggle="tab"
                href="#/"
                id="HomeAppliances-tab"
                role="tab"
                aria-controls="HomeAppliances"
                aria-selected="true"
              >
                Home Appliances
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${
                  activeTab === "#ElectronicDevicesAccessories" ? "active" : ""
                }`}
                onClick={() => handleTabChange("#ElectronicDevicesAccessories")}
                data-bs-toggle="tab"
                href="#/"
                id="ElectronicDevicesAccessories-tab"
                role="tab"
                aria-controls="ElectronicDevicesAccessories"
                aria-selected="true"
              >
                Electronic Devices & Accessories
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${
                  activeTab === "#HomeLifestyle" ? "active" : ""
                }`}
                onClick={() => handleTabChange("#HomeLifestyle")}
                data-bs-toggle="tab"
                href="#/"
                id="HomeLifestyle-tab"
                role="tab"
                aria-controls="HomeLifestyle"
                aria-selected="true"
              >
                Home & Lifestyle
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${
                  activeTab === "#SportsEntertainments" ? "active" : ""
                }`}
                onClick={() => handleTabChange("#SportsEntertainments")}
                data-bs-toggle="tab"
                href="#/"
                id="SportsEntertainments-tab"
                role="tab"
                aria-controls="SportsEntertainments"
                aria-selected="true"
              >
                Sports & Entertainments
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${
                  activeTab === "#FoodBeverage" ? "active" : ""
                }`}
                onClick={() => handleTabChange("#FoodBeverage")}
                data-bs-toggle="tab"
                href="#/"
                id="FoodBeverage-tab"
                role="tab"
                aria-controls="FoodBeverage"
                aria-selected="true"
              >
                Food and Beverage / Groceries
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${
                  activeTab === "#Automobiles" ? "active" : ""
                }`}
                onClick={() => handleTabChange("#Automobiles")}
                data-bs-toggle="tab"
                href="#/"
                id="Automobiles-tab"
                role="tab"
                aria-controls="Automobiles"
                aria-selected="true"
              >
                Automobiles & Motorbike
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${
                  activeTab === "#HealthMedical" ? "active" : ""
                }`}
                onClick={() => handleTabChange("#HealthMedical")}
                data-bs-toggle="tab"
                href="#/"
                id="HealthMedical-tab"
                role="tab"
                aria-controls="HealthMedical"
                aria-selected="true"
              >
                Health & Medical
              </a>
            </li>

            <li className="nav-item">
              <a
                className={`nav-link ${
                  activeTab === "#Matrimonial" ? "active" : ""
                }`}
                onClick={() => handleTabChange("#Matrimonial")}
                data-bs-toggle="tab"
                href="#/"
                id="Matrimonial-tab"
                role="tab"
                aria-controls="Matrimonial"
                aria-selected="true"
              >
                Matrimonial Collection
              </a>
            </li>

            <li className="nav-item">
              <a
                className={`nav-link ${
                  activeTab === "#TourTrips" ? "active" : ""
                }`}
                onClick={() => handleTabChange("#TourTrips")}
                data-bs-toggle="tab"
                href="#/"
                id="TourTrips-tab"
                role="tab"
                aria-controls="TourTrips"
                aria-selected="true"
              >
                Tour & Trips
              </a>
            </li>

            <li className="nav-item">
              <a
                className={`nav-link ${activeTab === "#Kids" ? "active" : ""}`}
                onClick={() => handleTabChange("#Kids")}
                data-bs-toggle="tab"
                href="#/"
                id="Kids-tab"
                role="tab"
                aria-controls="Kids"
                aria-selected="true"
              >
                Kids
              </a>
            </li>
          </ul>
          {/* Add Product pages */}
          <div className="tab-content col-md-9" id="v-pills-tabContent">
            <div
              className={`tab-pane fade ${
                activeTab === "#Apparel" ? "show active" : ""
              }`}
              id="Apparel"
              role="tabpanel"
              aria-labelledby="apparel-tab"
            >
              <Apparel />
            </div>
            <div
              className={`tab-pane fade ${
                activeTab === "#FashionAccessories" ? "show active" : ""
              }`}
              id="FashionAccessories"
              role="tabpanel"
              aria-labelledby="fashion-tab"
            >
              <FashionAccessories />
            </div>
            <div
              className={`tab-pane fade ${
                activeTab === "#BeautyPersonalCare" ? "show active" : ""
              }`}
              id="BeautyPersonalCare"
              role="tabpanel"
              aria-labelledby="BeautyPersonalCare-tab"
            >
              <BeautyPersonalCare />
            </div>
            <div
              className={`tab-pane fade ${
                activeTab === "#GiftsCraft" ? "show active" : ""
              }`}
              id="GiftsCraft"
              role="tabpanel"
              aria-labelledby="GiftsCraft-tab"
            >
              <GiftsCraft />
            </div>
            <div
              className={`tab-pane fade ${
                activeTab === "#OfficeSupplies" ? "show active" : ""
              }`}
              id="OfficeSupplies"
              role="tabpanel"
              aria-labelledby="OfficeSupplies-tab"
            >
              <OfficeSupplies />
            </div>
            <div
              className={`tab-pane fade ${
                activeTab === "#HomeAppliances" ? "show active" : ""
              }`}
              id="HomeAppliances"
              role="tabpanel"
              aria-labelledby="HomeAppliances-tab"
            >
              <HomeAppliances />
            </div>
            <div
              className={`tab-pane fade ${
                activeTab === "#ElectronicDevicesAccessories"
                  ? "show active"
                  : ""
              }`}
              id="ElectronicDevicesAccessories"
              role="tabpanel"
              aria-labelledby="ElectronicDevicesAccessories-tab"
            >
              <ElectronicDevicesAccessories />
            </div>
            <div
              className={`tab-pane fade ${
                activeTab === "#HomeLifestyle" ? "show active" : ""
              }`}
              id="HomeLifestyle"
              role="tabpanel"
              aria-labelledby="HomeLifestyle-tab"
            >
              <HomeLifestyle />
            </div>
            <div
              className={`tab-pane fade ${
                activeTab === "#SportsEntertainments" ? "show active" : ""
              }`}
              id="SportsEntertainments"
              role="tabpanel"
              aria-labelledby="SportsEntertainments-tab"
            >
              <SportsEntertainments />
            </div>
            <div
              className={`tab-pane fade ${
                activeTab === "#FoodBeverage" ? "show active" : ""
              }`}
              id="FoodBeverage"
              role="tabpanel"
              aria-labelledby="FoodBeverage-tab"
            >
              <FoodBeverageGroceries />
            </div>

            <div
              className={`tab-pane fade ${
                activeTab === "#Automobiles" ? "show active" : ""
              }`}
              id="Automobiles"
              role="tabpanel"
              aria-labelledby="Automobiles-tab"
            >
              <AutomobilesMotorbike />
            </div>
            <div
              className={`tab-pane fade ${
                activeTab === "#HealthMedical" ? "show active" : ""
              }`}
              id="HealthMedical"
              role="tabpanel"
              aria-labelledby="HealthMedical-tab"
            >
              <HealthMedical />
            </div>

            <div
              className={`tab-pane fade ${
                activeTab === "#Matrimonial" ? "show active" : ""
              }`}
              id="Matrimonial"
              role="tabpanel"
              aria-labelledby="Matrimonial-tab"
            >
              <MatrimonialCollection />
            </div>

            <div
              className={`tab-pane fade ${
                activeTab === "#TourTrips" ? "show active" : ""
              }`}
              id="TourTrips"
              role="tabpanel"
              aria-labelledby="TourTrips-tab"
            >
              <TourTrips />
            </div>

            <div
              className={`tab-pane fade ${
                activeTab === "#Kids" ? "show active" : ""
              }`}
              id="Kids"
              role="tabpanel"
              aria-labelledby="Kids-tab"
            >
              <Kids />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProductPage;
