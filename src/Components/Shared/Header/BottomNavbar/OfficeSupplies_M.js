import React from "react";
import { Link } from "react-router-dom";

const OfficeSupplies_M = () => {
  return (
    <>
      <li className="nav-item">
        <Link
          className="nav-link offcanvasLink"
          to="/category/office-and-education"
        >
          <span data-bs-dismiss="offcanvas">Office & Educational Supplies</span>
        </Link>
        {/* mega_menu - class added in ul */}
        <ul
          className="submenu dropdown-menu mega_menu"
          id="office-supplies-mega"
        >
          <div className="container">
            <h2 className="text-center py-3 headline">
              Office & Educational Supplies
            </h2>
            <div className="row">
              <div className="col-md-4">
                <p
                  className="text-center subHeadline"
                  data-bs-dismiss="offcanvas"
                >
                  <Link
                    style={{ textDecoration: "none", color: "inherit" }}
                    to={`/OfficeEducationItem/Paper_Products`}
                  >
                    Paper Products
                  </Link>
                </p>
                <hr />
                <ul data-bs-dismiss="offcanvas">
                  <li className="megaMenu_li">
                    <Link to={`/displayProduct/${"Diary"}`} id="megaMenuLink">
                      Diary
                    </Link>
                  </li>
                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Notebooks and Pads"}`}
                      id="megaMenuLink"
                    >
                      Notebooks & Pads
                    </Link>
                  </li>
                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Writing and Printing Papers"}`}
                      id="megaMenuLink"
                    >
                      Writing & Printing Papers
                    </Link>
                  </li>
                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Envelops and Mailers"}`}
                      id="megaMenuLink"
                    >
                      Envelops & Mailers
                    </Link>
                  </li>
                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Calendars"}`}
                      id="megaMenuLink"
                    >
                      Calendars
                    </Link>
                  </li>
                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"PaperProductsOthers"}`}
                      id="megaMenuLink"
                    >
                      Others
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
                    to={`/OfficeEducationItem/Books`}
                  >
                    Books
                  </Link>
                </p>
                <hr />
                <ul data-bs-dismiss="offcanvas">
                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Academic"}`}
                      id="megaMenuLink"
                    >
                      Academic
                    </Link>
                  </li>
                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Non-Academic"}`}
                      id="megaMenuLink"
                    >
                      Non-Academic
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-5 subcategorySection">
                <p
                  className="text-center subHeadline"
                  data-bs-dismiss="offcanvas"
                >
                  <Link
                    style={{ textDecoration: "none", color: "inherit" }}
                    to={`/OfficeEducationItem/Others_Stationeries`}
                  >
                    Others
                  </Link>
                </p>
                <hr />
                <ul data-bs-dismiss="offcanvas">
                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Paper Products"}`}
                      id="megaMenuLink"
                    >
                      Paper Products
                    </Link>
                  </li>
                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Writing and Correction"}`}
                      id="megaMenuLink"
                    >
                      Writing & Correction
                    </Link>
                  </li>
                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Files and Folders"}`}
                      id="megaMenuLink"
                    >
                      Files and Folders
                    </Link>
                  </li>
                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Desk Accessories"}`}
                      id="megaMenuLink"
                    >
                      Desk Accessories
                    </Link>
                  </li>
                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Others Stationeries"}`}
                      id="megaMenuLink"
                    >
                      Others Stationeries
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

export default OfficeSupplies_M;
