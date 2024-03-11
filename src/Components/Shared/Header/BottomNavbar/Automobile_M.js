import React from "react";
import { Link } from "react-router-dom";

const Automobile_M = () => {
  return (
    <>
      <li className="nav-item">
        <Link
          className="nav-link offcanvasLink"
          to="/category/automobile-items"
        >
          <span data-bs-dismiss="offcanvas"> Automobile & Motor Bike </span>
        </Link>
        <ul
          className="submenu dropdown-menu mega_menu"
          id="autoMobilesMotorBike_mega"
        >
          <div className="container">
            <h2 className="text-center py-3 headline">
              Automobile & Motor Bike Worlds
            </h2>
            <div className="row">
              <div className="col-md-4">
                <div className="row">
                  <div className="col">
                    <ul data-bs-dismiss="offcanvas">
                      <li className="megaMenu_li">
                        <Link
                          to={`/AutomobileItem/Automobile`}
                          id="megaMenuLink"
                        >
                          Automobile
                        </Link>
                      </li>
                      <li className="megaMenu_li">
                        <Link
                          to={`/AutomobileItem/Automobile_Parts`}
                          id="megaMenuLink"
                        >
                          Automobile Parts
                        </Link>
                      </li>
                      <li className="megaMenu_li">
                        <Link
                          to={`/AutomobileItem/Interior_Accessories_Care`}
                          id="megaMenuLink"
                        >
                          Interior Accessories care
                        </Link>
                      </li>
                      <li className="megaMenu_li">
                        <Link
                          to={`/AutomobileItem/Exterior_Accessories_Care`}
                          id="megaMenuLink"
                        >
                          Exterior Accessories care
                        </Link>
                      </li>

                      <li className="megaMenu_li">
                        <Link
                          to={`/AutomobileItem/Oil_Fluids`}
                          id="megaMenuLink"
                        >
                          Oil Fluids
                        </Link>
                      </li>
                      <li className="megaMenu_li">
                        <Link
                          to={`/AutomobileItem/Riders Gear`}
                          id="megaMenuLink"
                        >
                          Riders Gear
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-3 subcategorySection">
                <p
                  className="text-center subHeadline"
                  data-bs-dismiss="offcanvas"
                >
                  <Link
                    style={{ textDecoration: "none", color: "inherit" }}
                    to={`/category/automobile-items`}
                  >
                    Bike
                  </Link>
                </p>
                <hr />
                <div className="row">
                  <div className="col">
                    <ul data-bs-dismiss="offcanvas">
                      <li className="megaMenu_li">
                        <Link
                          to={`/displayProduct/${"Motorbike"}`}
                          id="megaMenuLink"
                        >
                          Motorbike
                        </Link>
                      </li>
                      <li className="megaMenu_li">
                        <Link
                          to={`/displayProduct/${"Bycycle"}`}
                          id="megaMenuLink"
                        >
                          Bycycle
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-5 subcategorySection">
                <p
                  className="text-center subHeadline"
                  data-bs-dismiss="offcanvas"
                >
                  <Link
                    style={{ textDecoration: "none", color: "inherit" }}
                    to={`/AutomobileItem/Bike_Parts_Accessories`}
                  >
                    Bike Parts & Accessories
                  </Link>
                </p>
                <hr />
                <ul data-bs-dismiss="offcanvas">
                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Bike_Parts_Motorbike"}`}
                      id="megaMenuLink"
                    >
                      Bike Parts Motorbike
                    </Link>
                  </li>
                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Bike_Parts_Bicycle"}`}
                      id="megaMenuLink"
                    >
                      Bike Parts Bicycle
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </ul>
      </li>
    </>
  );
};

export default Automobile_M;
