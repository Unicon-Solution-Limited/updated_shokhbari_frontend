import React from "react";
import { Link } from "react-router-dom";

const KidsSegment_M = () => {
  return (
    <>
      <li className="nav-item">
        <Link className="nav-link offcanvasLink" to="/">
          Kids Segment
        </Link>
        <ul
          className="submenu dropdown-menu mega_menu"
          id="SportsEntertainment_mega"
        >
          <div className="container">
            <h2 className="text-center py-3 headline">Kids Segment Worlds</h2>
            <div className="row">
              <div className="col-md-3">
                <p className="text-center subHeadline">Baby Clothing</p>
                <hr />
                <div className="row">
                  <div className="col">
                    <ul data-bs-dismiss="offcanvas">
                      <li className="megaMenu_li">
                        <Link
                          to={`/displayProduct/${"Infants_cloth"}`}
                          id="megaMenuLink"
                        >
                          Infants
                        </Link>
                      </li>

                      <li className="megaMenu_li">
                        <Link
                          to={`/displayProduct/${"Boy_cloth"}`}
                          id="megaMenuLink"
                        >
                          Boy
                        </Link>
                      </li>

                      <li className="megaMenu_li">
                        <Link
                          to={`/displayProduct/${"Girl_cloth"}`}
                          id="megaMenuLink"
                        >
                          Girl
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-md-3 subcategorySection">
                <p className="text-center subHeadline">Baby Footwaer</p>
                <hr />
                <ul data-bs-dismiss="offcanvas">
                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Infants_Footwaer"}`}
                      id="megaMenuLink"
                    >
                      Infants
                    </Link>
                  </li>

                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Boy_Footwaer"}`}
                      id="megaMenuLink"
                    >
                      Boy
                    </Link>
                  </li>

                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Girl_Footwaer"}`}
                      id="megaMenuLink"
                    >
                      Girl
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="col-md-3 subcategorySection">
                <p className="text-center subHeadline">Baby Care</p>
                <hr />
                <ul data-bs-dismiss="offcanvas">
                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Baby_body_care"}`}
                      id="megaMenuLink"
                    >
                      Body care
                    </Link>
                    <Link
                      to={`/displayProduct/${"Baby_PersonalCare"}`}
                      id="megaMenuLink"
                    >
                      Personal Care
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="col-md-3">
                <p className="text-center subHeadline">Baby Accessories</p>
                <hr />
                <div className="row">
                  <div className="col">
                    <ul data-bs-dismiss="offcanvas">
                      <li className="megaMenu_li">
                        <Link
                          to={`/displayProduct/${"Infants_Accessories"}`}
                          id="megaMenuLink"
                        >
                          Infants
                        </Link>
                      </li>

                      <li className="megaMenu_li">
                        <Link
                          to={`/displayProduct/${"Boy_Accessories"}`}
                          id="megaMenuLink"
                        >
                          Boy
                        </Link>
                      </li>

                      <li className="megaMenu_li">
                        <Link
                          to={`/displayProduct/${"Girl_Accessories"}`}
                          id="megaMenuLink"
                        >
                          Girl
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* break */}
              <hr />
              <div className="row">
                <div className="col-md-3">
                  <p className="text-center subHeadline">
                    Baby Feeding Nursery
                  </p>
                  <hr />
                  <div className="row">
                    <div className="col">
                      <ul data-bs-dismiss="offcanvas">
                        <li className="megaMenu_li">
                          <Link
                            to={`/displayProduct/${"BabyFeedingNursery"}`}
                            id="megaMenuLink"
                          >
                            Feeding & Nursery
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <hr />
                  <p className="text-center subHeadline mt-3">
                    Baby Sports Outdoor
                  </p>
                  <hr />
                  <ul data-bs-dismiss="offcanvas">
                    <li className="megaMenu_li">
                      <Link
                        to={`/displayProduct/${"BabySportsOutdoor"}`}
                        id="megaMenuLink"
                      >
                        Sports Outdoor
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="col-md-3 subcategorySection">
                  <p className="text-center subHeadline">Baby Toys & Games</p>
                  <hr />
                  <ul data-bs-dismiss="offcanvas">
                    <li className="megaMenu_li">
                      <Link
                        to={`/displayProduct/${"BabyToysGames"}`}
                        id="megaMenuLink"
                      >
                        Toys & Games
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="col-md-3 subcategorySection">
                  <p className="text-center subHeadline">Baby Education</p>
                  <hr />
                  <ul data-bs-dismiss="offcanvas">
                    <li className="megaMenu_li">
                      <Link
                        to={`/displayProduct/${"BabyEducation"}`}
                        id="megaMenuLink"
                      >
                        Education
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </ul>
      </li>
    </>
  );
};

export default KidsSegment_M;
