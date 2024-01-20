import React from "react";
import { Link } from "react-router-dom";

const MatrimonialCollection_M = () => {
  return (
    <>
      <li className="nav-item">
        <Link className="nav-link offcanvasLink" to="/">
          Matrimonial Collection
        </Link>
        <ul className="submenu dropdown-menu mega_menu" id="Matrinonial_mega">
          <div className="container">
            <h2 className="text-center py-3 headline">
              Matrimonial Collection Worlds
            </h2>
            <div className="row">
              <div className="col-md-6">
                <div className="row">
                  <ul data-bs-dismiss="offcanvas">
                    <li className="megaMenu_li">
                      <Link
                        to={`/displayProduct/${"Wedding_Planner"}`}
                        id="megaMenuLink"
                      >
                        Wedding Planner
                      </Link>
                    </li>
                    <li className="megaMenu_li">
                      <Link
                        to={`/displayProduct/${"Wedding_Dress_Collection"}`}
                        id="megaMenuLink"
                      >
                        Wedding Dress Collection
                      </Link>
                    </li>
                    <li className="megaMenu_li">
                      <Link
                        to={`/displayProduct/${"Wedding_Jewelry_Collection"}`}
                        id="megaMenuLink"
                      >
                        Wedding Jewelry Collection
                      </Link>
                    </li>
                    <li className="megaMenu_li">
                      <Link
                        to={`/displayProduct/${"Wedding_Footwear"}`}
                        id="megaMenuLink"
                      >
                        Wedding Footwear
                      </Link>
                    </li>

                    <li className="megaMenu_li">
                      <Link
                        to={`/displayProduct/${"Wedding_Accessories"}`}
                        id="megaMenuLink"
                      >
                        Wedding Accessories
                      </Link>
                    </li>
                    <li className="megaMenu_li">
                      <Link
                        to={`/displayProduct/${"Beauty_Park"}`}
                        id="megaMenuLink"
                      >
                        Beauty Park
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 subcategorySection">
                <div className="row">
                  <div className="col">
                    <ul data-bs-dismiss="offcanvas">
                      <li className="megaMenu_li">
                        <Link
                          to={`/displayProduct/${"Wedding_Vehicle"}`}
                          id="megaMenuLink"
                        >
                          Wedding Vehicle
                        </Link>
                      </li>
                      <li className="megaMenu_li">
                        <Link
                          to={`/displayProduct/${"Cinemafogrophy_Photography"}`}
                          id="megaMenuLink"
                        >
                          Cinemafogrophy Photography
                        </Link>
                      </li>
                      <li className="megaMenu_li">
                        <Link
                          to={`/displayProduct/${"Wedding_Venue"}`}
                          id="megaMenuLink"
                        >
                          Wedding Venue
                        </Link>
                      </li>

                      <li className="megaMenu_li">
                        <Link
                          to={`/displayProduct/${"Catering_Service"}`}
                          id="megaMenuLink"
                        >
                          Catering Service
                        </Link>
                      </li>

                      <li className="megaMenu_li">
                        <Link
                          to={`/displayProduct/${"Sound_System"}`}
                          id="megaMenuLink"
                        >
                          Sound System
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

export default MatrimonialCollection_M;
