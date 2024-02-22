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
                <p
                  className="text-center subHeadline"
                  data-bs-dismiss="offcanvas"
                >
                  <Link
                    style={{ textDecoration: "none", color: "inherit" }}
                    to={`/displaySubCategories/${"BabyClothing"}`}
                  >
                    Baby Clothing
                  </Link>
                </p>
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
                <p
                  className="text-center subHeadline"
                  data-bs-dismiss="offcanvas"
                >
                  <Link
                    style={{ textDecoration: "none", color: "inherit" }}
                    to={`/displaySubCategories/${"BabyFootwaer"}`}
                  >
                    Baby Footwaer
                  </Link>
                </p>
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
                <p
                  className="text-center subHeadline"
                  data-bs-dismiss="offcanvas"
                >
                  <Link
                    style={{ textDecoration: "none", color: "inherit" }}
                    to={`/displaySubCategories/${"BabyCare"}`}
                  >
                    Baby Care
                  </Link>
                </p>
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
                <p
                  className="text-center subHeadline"
                  data-bs-dismiss="offcanvas"
                >
                  <Link
                    style={{ textDecoration: "none", color: "inherit" }}
                    to={`/displaySubCategories/${"BabyAccessories"}`}
                  >
                    Baby Accessories
                  </Link>
                </p>
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
                  <p
                    className="text-center subHeadline"
                    data-bs-dismiss="offcanvas"
                  >
                    <Link
                      style={{ textDecoration: "none", color: "inherit" }}
                      to={`/displaySubCategories/${"BabyFeedingNursery"}`}
                    >
                      Baby Feeding Nursery
                    </Link>
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

                  <p
                    className="text-center subHeadline"
                    data-bs-dismiss="offcanvas"
                  >
                    <Link
                      style={{ textDecoration: "none", color: "inherit" }}
                      to={`/displaySubCategories/${"BabySportsOutdoor"}`}
                    >
                      Baby Sports Outdoor
                    </Link>
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
                  <p
                    className="text-center subHeadline"
                    data-bs-dismiss="offcanvas"
                  >
                    <Link
                      style={{ textDecoration: "none", color: "inherit" }}
                      to={`/displaySubCategories/${"BabyToysGames"}`}
                    >
                      Baby Toys Games
                    </Link>
                  </p>
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
                  <p
                    className="text-center subHeadline"
                    data-bs-dismiss="offcanvas"
                  >
                    <Link
                      style={{ textDecoration: "none", color: "inherit" }}
                      to={`/displaySubCategories/${"BabyEducation"}`}
                    >
                      Baby Education
                    </Link>
                  </p>
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
