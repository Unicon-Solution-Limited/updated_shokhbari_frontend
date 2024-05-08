import React from "react";
import "./BottomNavbar.css";
import category from "../../../Image/Logo/category.png";
import { Link } from "react-router-dom";
// import mega menu Components
import Apparel from "./Apparel_M";
import FashionAccessories_M from "./FashionAccessories_M";
import BeautyPersonalCare from "./BeautyPersonalCare_M";
import GiftCrafts_M from "./GiftCrafts_M";
import OfficeSupplies_M from "./OfficeSupplies_M";
import HomeAppliances_M from "./HomeAppliances_M";
import ElectronicDevicesAccessories_M from "./ElectronicDevicesAccessories_M";
import HomeLifestyle_M from "./HomeLifestyle_M";
import SportsEntertainment from "./SportsEntertainment_M";
import FoodBeverage_M from "./FoodBeverage_M";
import Automobile_M from "./Automobile_M";
import HealthMedical_M from "./HealthMedical_M";
import MatrimonialCollection_M from "./MatrimonialCollection_M";
import KidsSegment_M from "./KidsSegment_M";
import TripTours_M from "./TripTours_M";

const BottomNavbar = () => {
  return (
    <>
      <div className="BottomNavbar">
        <div className="container">
          <div className="row">
            <div className="col-2"></div>
            <div className="col-10 bottomNavBody">
              <ul className="bottomNavMenus">
                <li>
                  <Link
                    to="#offcanvas"
                    data-bs-toggle="offcanvas"
                    role="button"
                  >
                    <img src={category} alt="Categories" className="catLogo" />
                  </Link>
                </li>
                <li>
                  <Link to="/flash-sale" className="bottomNavMenuLink">
                    Flash Sale
                  </Link>
                </li>
                <li>
                  <Link to="/popular" className="bottomNavMenuLink">
                    Popular Items
                  </Link>
                </li>
                <li>
                  <Link to="/campaigns" className="bottomNavMenuLink">
                    Campaigns
                  </Link>
                </li>
                <li>
                  <Link to="/merchant" className="bottomNavMenuLink">
                    Merchant Zone
                  </Link>
                </li>
                <li>
                  <Link to="/contact-us" className="bottomNavMenuLink">
                    Help
                  </Link>
                </li>
                <li>
                  <Link to="/" className="bottomNavMenuLink">
                    App
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* //mobile tab */}
      {/* <nav className="navbar navbar-expand-lg mobile_sub_menu">
        <div className="container-fluid d-flex ">
          <ul className="navbar-nav bottomNavMenus">
            <li>
              <Link to="#offcanvas" data-bs-toggle="offcanvas" role="button">
                <img src={category} alt="Categories" className="catLogo" />
              </Link>
            </li>

            <li>
              <Link to="/flash-sale" className="bottomNavMenuLink">
                Flash Sale
              </Link>
            </li>
            <li>
              <Link to="/popular" className="bottomNavMenuLink">
                Popular Items
              </Link>
            </li>
            <li>
              <Link to="/campaigns" className="bottomNavMenuLink">
                Campaigns
              </Link>
            </li>
            <li>
              <Link to="/merchant" className="bottomNavMenuLink">
                Merchant Zone
              </Link>
            </li>
          </ul>
        </div>
      </nav> */}

      <section className="mobile_menu_main_section">
        <Link to="/flash-sale" className="mobile_menu_item">
          Flash Sale
        </Link>

        <Link to="/popular" className="mobile_menu_item">
          Popular Item
        </Link>

        <Link to="/campaigns" className="mobile_menu_item">
          Campaigns
        </Link>

        <Link to="/merchant" className="mobile_menu_item">
          Merchant
        </Link>
      </section>

      {/* offcanvas */}
      <div className="offcanvas offcanvas-start" id="offcanvas">
        <div className="offcanvasHeader pb-2">
          <p className="offcanvas-title skbOffcanvasTitle">SHOKHBARI.COM</p>
          <button
            type="button"
            className="btn text-reset"
            data-bs-dismiss="offcanvas"
          >
            &#10007;
          </button>
        </div>
        <div className="offcanvas-body navBar_offcanvas_body">
          <nav className="sidebar mb-4">
            <ul className="nav">
              {/*Electronic Devices & Accessories Section */}
              <ElectronicDevicesAccessories_M />

              {/* Apparel section */}
              <Apparel />

              {/* start fashion Accessories section */}
              <FashionAccessories_M />

              {/* Beauty & Personal Care section */}
              <BeautyPersonalCare />

              {/* Gift and Craft section */}
              <GiftCrafts_M />

              {/* Office Supplies section */}
              <OfficeSupplies_M />

              {/* Home & Lifestyle Section */}
              <HomeLifestyle_M />

              {/* Home Appliances Section */}
              <HomeAppliances_M />

              {/* Sports & Entertainment Section */}
              <SportsEntertainment />

              {/* Food & Beverage / Groceries Section */}
              <FoodBeverage_M />

              {/* Automobile & Motor Bike Section */}
              <Automobile_M />

              {/* Health & Medical Section */}
              <HealthMedical_M />

              {/* Matrimonial collection Section */}
              <MatrimonialCollection_M />

              {/* Kids segment Section */}
              <KidsSegment_M />

              {/* Trip and Tours Section */}
              <TripTours_M />
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default BottomNavbar;
