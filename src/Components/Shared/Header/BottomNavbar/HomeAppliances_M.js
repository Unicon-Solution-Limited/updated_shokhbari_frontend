import React from "react";
import { Link } from "react-router-dom";

const HomeAppliances_M = () => {
  return (
    <>
      <li className="nav-item">
        <Link className="nav-link offcanvasLink" to="/">
          Home Appliances
        </Link>
        <ul className="submenu dropdown-menu mega_menu" id="Electronics_mega">
          <div className="container">
            <h2 className="text-center py-4 headline">Home Appliances World</h2>
            <div className="row">
              <div className="col-2">
                <p className="text-center subHeadline">Home Entertainment</p>
                <hr />
                <ul className="text-center" data-bs-dismiss="offcanvas">
                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Television"}`}
                      id="megaMenuLink"
                    >
                      Television
                    </Link>
                  </li>

                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Audio and Music Devices"}`}
                      id="megaMenuLink"
                    >
                      Audio and Music Devices
                    </Link>
                  </li>

                  <li className="megaMenu_li">
                    <Link to={`/displayProduct/${""}`} id="megaMenuLink"></Link>
                  </li>

                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"VR and Glasses"}`}
                      id="megaMenuLink"
                    >
                      VR and Glasses
                    </Link>
                  </li>

                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Android Box"}`}
                      id="megaMenuLink"
                    >
                      Android Box
                    </Link>
                  </li>
                </ul>
                <hr />
                <p className="text-center subHeadline border-bottom">
                  Refrigerator and Freezer
                </p>
                <ul className="text-center" data-bs-dismiss="offcanvas">
                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Direct Cool refrigerator"}`}
                      id="megaMenuLink"
                    >
                      Direct Cool refrigerator
                    </Link>
                  </li>

                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Non-frost refrigerator"}`}
                      id="megaMenuLink"
                    >
                      Non-frost refrigerator
                    </Link>
                  </li>

                  <li className="megaMenu_li">
                    <Link to={`/displayProduct/${"Freezer"}`} id="megaMenuLink">
                      Freezer
                    </Link>
                  </li>

                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Beverage Cooler"}`}
                      id="megaMenuLink"
                    >
                      Beverage Cooler
                    </Link>
                  </li>
                </ul>

                <p className="text-center subHeadline border-bottom mt-3">
                  Cooling & Heating
                </p>
                <ul className="text-center" data-bs-dismiss="offcanvas">
                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Air Conditioner"}`}
                      id="megaMenuLink"
                    >
                      Air Conditioner
                    </Link>
                  </li>

                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Air Cooler"}`}
                      id="megaMenuLink"
                    >
                      Air Cooler
                    </Link>
                  </li>

                  <li className="megaMenu_li">
                    <Link to={`/displayProduct/${"Fan"}`} id="megaMenuLink">
                      Fan
                    </Link>
                  </li>

                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Room Heater"}`}
                      id="megaMenuLink"
                    >
                      Room Heater
                    </Link>
                  </li>

                  <li className="megaMenu_li">
                    <Link to={`/displayProduct/${"Geyser"}`} id="megaMenuLink">
                      Geyser
                    </Link>
                  </li>

                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Air Purifier"}`}
                      id="megaMenuLink"
                    >
                      Air Purifier
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-2 subcategorySection">
                <p className="text-center subHeadline">Kitchen Appliance</p>
                <hr />
                <ul className="text-center" data-bs-dismiss="offcanvas">
                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Water Purifier and Filter"}`}
                      id="megaMenuLink"
                    >
                      Water Purifier and Filter
                    </Link>
                  </li>

                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Kitchen Stove"}`}
                      id="megaMenuLink"
                    >
                      Kitchen Stove
                    </Link>
                  </li>

                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Kitchen Hood"}`}
                      id="megaMenuLink"
                    >
                      Kitchen Hood
                    </Link>
                  </li>

                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Microwave and Electric Oven"}`}
                      id="megaMenuLink"
                    >
                      Microwave and Electric Oven
                    </Link>
                  </li>

                  <li className="megaMenu_li">
                    <Link to={`/displayProduct/${"Cooker"}`} id="megaMenuLink">
                      Cooker
                    </Link>
                  </li>

                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Other electronic Appliance"}`}
                      id="megaMenuLink"
                    >
                      Other electronic Appliance
                    </Link>
                  </li>
                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Microwave and Electric Oven"}`}
                      id="megaMenuLink"
                    >
                      Microwave and Electric Oven
                    </Link>
                  </li>

                  <li className="megaMenu_li">
                    <Link to={`/displayProduct/${"Cooker"}`} id="megaMenuLink">
                      Cooker
                    </Link>
                  </li>

                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Other electronic Appliance"}`}
                      id="megaMenuLink"
                    >
                      Other electronic Appliance
                    </Link>
                  </li>
                </ul>

                <p className="text-center subHeadline mt-3">Home lighting</p>
                <hr />
                <ul className="text-center" data-bs-dismiss="offcanvas">
                  <li className="megaMenu_li">
                    <Link to={`/displayProduct/${"Lights"}`} id="megaMenuLink">
                      Lights
                    </Link>
                  </li>

                  <li className="megaMenu_li">
                    <Link to={`/displayProduct/${"Switch"}`} id="megaMenuLink">
                      Switch
                    </Link>
                  </li>

                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Plugs and Outlets"}`}
                      id="megaMenuLink"
                    >
                      Plugs and Outlets
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-2 subcategorySection">
                <p className="text-center subHeadline">Bath Fixtures</p>
                <hr />
                <ul className="text-center" data-bs-dismiss="offcanvas">
                  <li className="megaMenu_li">
                    <Link to={`/displayProduct/${"Basin"}`} id="megaMenuLink">
                      Basin
                    </Link>
                  </li>

                  <li className="megaMenu_li">
                    <Link to={`/displayProduct/${"Commode"}`} id="megaMenuLink">
                      Commode
                    </Link>
                  </li>

                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Bath tub"}`}
                      id="megaMenuLink"
                    >
                      Bath tub
                    </Link>
                  </li>

                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Bath fittings"}`}
                      id="megaMenuLink"
                    >
                      Bath fittings
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-2 subcategorySection">
                <p className="text-center subHeadline">Washing Machine</p>
                <hr />
                <ul
                  className="text-center d-flex justify-content-around"
                  data-bs-dismiss="offcanvas"
                >
                  <div>
                    <li className="megaMenu_li">
                      <Link
                        to={`/displayProduct/${"Automatic Front Load"}`}
                        id="megaMenuLink"
                      >
                        Automatic Front Load
                      </Link>
                    </li>

                    <li className="megaMenu_li">
                      <Link
                        to={`/displayProduct/${"Automatic top load"}`}
                        id="megaMenuLink"
                      >
                        Automatic top load
                      </Link>
                    </li>

                    <li className="megaMenu_li">
                      <Link
                        to={`/displayProduct/${"Semi-Automatic"}`}
                        id="megaMenuLink"
                      >
                        Semi-Automatic
                      </Link>
                    </li>
                  </div>
                </ul>
              </div>
              <div className="col-md-2 subcategorySection">
                <p className="text-center subHeadline">Cleaning Equipments</p>
                <hr />
                <ul className="text-center" data-bs-dismiss="offcanvas">
                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Vacuum Cleaner"}`}
                      id="megaMenuLink"
                    >
                      Vacuum Cleaner
                    </Link>
                  </li>
                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Others Cleaning Equipments"}`}
                      id="megaMenuLink"
                    >
                      Others Cleaning Equipments
                    </Link>
                  </li>
                </ul>
                <hr />
              </div>
              <hr />
            </div>
          </div>
        </ul>
      </li>
    </>
  );
};

export default HomeAppliances_M;
