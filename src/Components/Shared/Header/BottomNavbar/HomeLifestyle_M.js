import React from "react";
import { Link } from "react-router-dom";

const HomeLifestyle_M = () => {
  return (
    <>
      <li className="nav-item" data-bs-dismiss="offcanvas">
        <Link
          className="nav-link offcanvasLink"
          to="/category/home-and-lifestyle"
        >
          <span data-bs-dismiss="offcanvas">Home And Lifestyle</span>
        </Link>
        <ul className="submenu dropdown-menu mega_menu" id="homeLifeStyle_mega">
          <div className="container">
            <h2 className="text-center py-3 headline">
              Home And Lifestyle Worlds
            </h2>
            <div className="row">
              <div className="col-md-4">
                <div className="row">
                  <div className="col">
                    <ul data-bs-dismiss="offcanvas">
                      <li className="megaMenu_li">
                        <Link
                          to={`/HomeAndLifestyleItem/DinnerWare`}
                          id="megaMenuLink"
                        >
                          Dinnerware
                        </Link>
                      </li>
                      <li className="megaMenu_li">
                        <Link
                          to={`/displayProduct/${"Home_Textile"}`}
                          id="megaMenuLink"
                        >
                          Home Textile
                        </Link>
                      </li>
                      <li className="megaMenu_li">
                        <Link
                          to={`/HomeAndLifestyleItem/Kitchen Accessories`}
                          id="megaMenuLink"
                        >
                          Kitchen Accessories
                        </Link>
                      </li>
                      <li className="megaMenu_li">
                        <Link
                          to={`/HomeAndLifestyleItem/Decor`}
                          id="megaMenuLink"
                        >
                          Decor
                        </Link>
                      </li>

                      <li className="megaMenu_li">
                        <Link
                          to={`/HomeAndLifestyleItem/Wallart`}
                          id="megaMenuLink"
                        >
                          Wallart
                        </Link>
                      </li>
                      <li className="megaMenu_li">
                        <Link
                          to={`/HomeAndLifestyleItem/Tools_Diy_outdoor`}
                          id="megaMenuLink"
                        >
                          Tools Diy and_outdoor
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="col">
                    <ul data-bs-dismiss="offcanvas">
                      <li className="megaMenu_li">
                        <Link
                          to={`/HomeAndLifestyleItem/Event_Party_Supplies`}
                          id="megaMenuLink"
                        >
                          Event Party Supplies
                        </Link>
                      </li>
                      <li className="megaMenu_li">
                        <Link
                          to={`/displayProduct/${"Gardening"}`}
                          id="megaMenuLink"
                        >
                          Gardening
                        </Link>
                      </li>
                      <li className="megaMenu_li">
                        <Link
                          to={`/HomeAndLifestyleItem/Pet`}
                          id="megaMenuLink"
                        >
                          Pet
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6 subcategorySection">
                <p
                  className="text-center subHeadline"
                  data-bs-dismiss="offcanvas"
                >
                  <Link
                    style={{ textDecoration: "none", color: "inherit" }}
                    to={`/HomeAndLifestyleItem/Furniture`}
                  >
                    Furniture
                  </Link>
                </p>
                <hr />
                <div className="row">
                  <div className="col">
                    <ul data-bs-dismiss="offcanvas">
                      <li className="megaMenu_li">
                        <Link
                          to={`/displayProduct/${"Living_Room"}`}
                          id="megaMenuLink"
                        >
                          Living Room
                        </Link>
                      </li>
                      <li className="megaMenu_li">
                        <Link
                          to={`/displayProduct/${"Dining"}`}
                          id="megaMenuLink"
                        >
                          Dining
                        </Link>
                      </li>
                      <li className="megaMenu_li">
                        <Link
                          to={`/displayProduct/${"Bedroom"}`}
                          id="megaMenuLink"
                        >
                          Bedroom
                        </Link>
                      </li>
                      <li className="megaMenu_li">
                        <Link
                          to={`/displayProduct/${"Kitchen"}`}
                          id="megaMenuLink"
                        >
                          Kitchen
                        </Link>
                      </li>
                      <li className="megaMenu_li">
                        <Link
                          to={`/displayProduct/${"Kid's_Room"}`}
                          id="megaMenuLink"
                        >
                          Kid's Room
                        </Link>
                      </li>
                      <li className="megaMenu_li">
                        <Link
                          to={`/displayProduct/${"Institutional"}`}
                          id="megaMenuLink"
                        >
                          Institutional
                        </Link>
                      </li>
                      <li className="megaMenu_li">
                        <Link
                          to={`/displayProduct/${"Office"}`}
                          id="megaMenuLink"
                        >
                          Office
                        </Link>
                      </li>

                      <li className="megaMenu_li">
                        <Link
                          to={`/displayProduct/${"Door"}`}
                          id="megaMenuLink"
                        >
                          Door
                        </Link>
                      </li>

                      <li className="megaMenu_li">
                        <Link
                          to={`/displayProduct/${"Storage_Organization"}`}
                          id="megaMenuLink"
                        >
                          Storage & Organization
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ul>
      </li>
    </>
  );
};

export default HomeLifestyle_M;
