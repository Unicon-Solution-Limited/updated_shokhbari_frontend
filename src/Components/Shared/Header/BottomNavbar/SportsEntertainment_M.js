import React from "react";
import { Link } from "react-router-dom";

const SportsEntertainment = () => {
  return (
    <>
      <li className="nav-item">
        <Link className="nav-link offcanvasLink" to="/">
          Sports & Entertainment
        </Link>
        <ul
          className="submenu dropdown-menu mega_menu"
          id="SportsEntertainment_mega"
        >
          <div className="container">
            <h2 className="text-center py-3 headline">
              Sports & Entertainment Worlds
            </h2>
            <div className="row">
              <div className="col-md-4">
                <p
                  className="text-center subHeadline"
                  data-bs-dismiss="offcanvas"
                >
                  <Link
                    style={{ textDecoration: "none", color: "inherit" }}
                    to={`/displaySubCategories/${"Exercise&Fitness"}`}
                  >
                    Exercise And Fitness, Yoga
                  </Link>
                </p>
                <hr />
                <div className="row">
                  <div className="col">
                    <ul data-bs-dismiss="offcanvas">
                      <li className="megaMenu_li">
                        <Link
                          to={`/displayProduct/${"Exercise&Fitnes"}`}
                          id="megaMenuLink"
                        >
                          Exercise And Fitness, Yoga
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-md-4 subcategorySection">
                <p
                  className="text-center subHeadline"
                  data-bs-dismiss="offcanvas"
                >
                  <Link
                    style={{ textDecoration: "none", color: "inherit" }}
                    to={`/displaySubCategories/${"OutdoorRecreation"}`}
                  >
                    Outdoor Recreation
                  </Link>
                </p>
                <hr />
                <ul data-bs-dismiss="offcanvas">
                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"OutdoorRecreation"}`}
                      id="megaMenuLink"
                    >
                      Outdoor Recreation
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="col-md-4 subcategorySection">
                <p
                  className="text-center subHeadline"
                  data-bs-dismiss="offcanvas"
                >
                  <Link
                    style={{ textDecoration: "none", color: "inherit" }}
                    to={`/displaySubCategories/${"IndoorRecreation"}`}
                  >
                    Indoor Recreation
                  </Link>
                </p>
                <hr />
                <ul data-bs-dismiss="offcanvas">
                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"IndoorRecreation"}`}
                      id="megaMenuLink"
                    >
                      Indoor Recreation
                    </Link>
                  </li>
                </ul>
              </div>
              <hr />
              <div className="row">
                <div className="col-md-4 subcategorySection">
                  <p
                    className="text-center subHeadline"
                    data-bs-dismiss="offcanvas"
                  >
                    <Link
                      style={{ textDecoration: "none", color: "inherit" }}
                      to={`/displaySubCategories/${"Camping_Hiking"}`}
                    >
                      Camping Hiking
                    </Link>
                  </p>
                  <hr />
                  <ul data-bs-dismiss="offcanvas">
                    <li className="megaMenu_li">
                      <Link
                        to={`/displayProduct/${"Camping_Hiking"}`}
                        id="megaMenuLink"
                      >
                        Camping Hiking
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

export default SportsEntertainment;
