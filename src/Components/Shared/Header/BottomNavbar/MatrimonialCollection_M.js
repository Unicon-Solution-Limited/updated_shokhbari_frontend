import React from "react";
import { Link } from "react-router-dom";

const MatrimonialCollection_M = () => {
  return (
    <>
      <li className="nav-item" data-bs-dismiss="offcanvas">
        <Link className="nav-link offcanvasLink" to="/category/matrimonial">
          <span data-bs-dismiss="offcanvas">Matrimonial Collection</span>
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
                        to={`/MatrimonialItem/Wedding_Planner`}
                        id="megaMenuLink"
                      >
                        Wedding Planner
                      </Link>
                    </li>
                    <li className="megaMenu_li">
                      <Link
                        to={`/MatrimonialItem/Wedding_Dress`}
                        id="megaMenuLink"
                      >
                        Wedding Dress Collection
                      </Link>
                    </li>
                    <li className="megaMenu_li">
                      <Link
                        to={`/MatrimonialItem/Wedding_Jewelry`}
                        id="megaMenuLink"
                      >
                        Wedding Jewelry Collection
                      </Link>
                    </li>
                    <li className="megaMenu_li">
                      <Link
                        to={`/MatrimonialItem/Wedding_Footwear`}
                        id="megaMenuLink"
                      >
                        Wedding Footwear
                      </Link>
                    </li>

                    <li className="megaMenu_li">
                      <Link
                        to={`/MatrimonialItem/Wedding_Accessories`}
                        id="megaMenuLink"
                      >
                        Wedding Accessories
                      </Link>
                    </li>
                    <li className="megaMenu_li">
                      <Link
                        to={`/MatrimonialItem/Beauty_Park`}
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
                          to={`/MatrimonialItem/Wedding_Vehicle`}
                          id="megaMenuLink"
                        >
                          Wedding Vehicle
                        </Link>
                      </li>
                      <li className="megaMenu_li">
                        <Link
                          to={`/MatrimonialItem/Cinemafogrophy_Photography`}
                          id="megaMenuLink"
                        >
                          Cinemafogrophy Photography
                        </Link>
                      </li>
                      <li className="megaMenu_li">
                        <Link
                          to={`/MatrimonialItem/Wedding_Venue`}
                          id="megaMenuLink"
                        >
                          Wedding Venue
                        </Link>
                      </li>

                      <li className="megaMenu_li">
                        <Link
                          to={`/MatrimonialItem/Catering_Service`}
                          id="megaMenuLink"
                        >
                          Catering Service
                        </Link>
                      </li>

                      <li className="megaMenu_li">
                        <Link
                          to={`/MatrimonialItem/Sound_System`}
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
