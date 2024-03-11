import React from "react";
import { Link } from "react-router-dom";

const HealthMedical_M = () => {
  return (
    <>
      <li className="nav-item">
        <Link
          className="nav-link offcanvasLink"
          to="/category/health-and-medical"
        >
          <span data-bs-dismiss="offcanvas">Health & Medical</span>
        </Link>
        <ul className="submenu dropdown-menu mega_menu" id="Medical_mega">
          <div className="container">
            <h2 className="text-center py-3 headline">
              Health & Medical Worlds
            </h2>
            <div className="row">
              <div className="col-md-4">
                <p className="text-center subHeadline"></p>
                <p
                  className="text-center subHeadline"
                  data-bs-dismiss="offcanvas"
                >
                  <Link
                    style={{ textDecoration: "none", color: "inherit" }}
                    to={`/HealthItem/Personal_Care_Safety`}
                  >
                    Personal Care & Safety
                  </Link>
                </p>
                <hr />
                <div className="row">
                  <div className="col">
                    <ul data-bs-dismiss="offcanvas">
                      <li className="megaMenu_li">
                        <Link
                          to={`/displayProduct/${"PersonalCareSafety"}`}
                          id="megaMenuLink"
                        >
                          Personal Care & Safety
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
                    to={`/HealthItem/Medical_Supplies`}
                  >
                    Medical Supplies
                  </Link>
                </p>
                <hr />
                <ul data-bs-dismiss="offcanvas">
                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Medicines"}`}
                      id="megaMenuLink"
                    >
                      Medicines
                    </Link>
                  </li>

                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Ointment_Creams"}`}
                      id="megaMenuLink"
                    >
                      Ointment & creams
                    </Link>
                  </li>

                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Health_Monitors"}`}
                      id="megaMenuLink"
                    >
                      Health Monitors & Tests
                    </Link>
                  </li>

                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Health_Acessories"}`}
                      id="megaMenuLink"
                    >
                      Health Accessories
                    </Link>
                  </li>

                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"First_Aid_Supplies"}`}
                      id="megaMenuLink"
                    >
                      First Aid Supplies
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
                    to={`/HealthItem/Food_Supplement's`}
                  >
                    Food Supplements
                  </Link>
                </p>
                <hr />
                <ul data-bs-dismiss="offcanvas">
                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Beauty_Supplements"}`}
                      id="megaMenuLink"
                    >
                      Beauty Supplements
                    </Link>
                  </li>

                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Multivitamins"}`}
                      id="megaMenuLink"
                    >
                      Multivitamins
                    </Link>
                  </li>

                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Sports_Nutrition"}`}
                      id="megaMenuLink"
                    >
                      Sports Nutrition
                    </Link>
                  </li>

                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Well_Being"}`}
                      id="megaMenuLink"
                    >
                      Well Being
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
                      to={`/HealthItem/Sexual_Wellness`}
                    >
                      Sexual Wellness
                    </Link>
                  </p>
                  <hr />
                  <ul data-bs-dismiss="offcanvas">
                    <li className="megaMenu_li">
                      <Link
                        to={`/displayProduct/${"Sexual_Wellness"}`}
                        id="megaMenuLink"
                      >
                        Sexual Wellness
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

export default HealthMedical_M;
