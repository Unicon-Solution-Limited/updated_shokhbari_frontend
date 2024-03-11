import React from "react";
import { Link } from "react-router-dom";

const GiftCrafts_M = () => {
  return (
    <>
      <li className="nav-item">
        <Link className="nav-link offcanvasLink" to="/">
          Gift And Craft
        </Link>
        <ul className="submenu dropdown-menu mega_menu" id="GiftCraft_mega">
          <div className="container">
            <h2 className="text-center py-3 headline">Gift And Craft Worlds</h2>
            <div className="row">
              <div className="col-md-4">
                <p
                  className="text-center subHeadline"
                  data-bs-dismiss="offcanvas"
                >
                  <Link
                    style={{ textDecoration: "none", color: "inherit" }}
                    to={`/GiftCraftItem/Novelty_Gifts`}
                  >
                    Novelty Gifts
                  </Link>
                </p>
                <hr />
                <div className="row">
                  <div className="col">
                    <ul data-bs-dismiss="offcanvas">
                      <li className="megaMenu_li">
                        <Link
                          to={`/displayProduct/${"Novelty Gifts"}`}
                          id="megaMenuLink"
                        >
                          Novelty Gifts
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
                    to={`/GiftCraftItem/Promotional_Items`}
                  >
                    Promotional Items
                  </Link>
                </p>
                <hr />
                <ul data-bs-dismiss="offcanvas">
                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Promotional Items"}`}
                      id="megaMenuLink"
                    >
                      Promotional Items
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
                    to={`/displaySubCategories/${"Crafting Accessories"}`}
                  >
                    Crafting Accessories
                  </Link>
                </p>
                <hr />
                <ul data-bs-dismiss="offcanvas">
                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Crafting Accessories"}`}
                      id="megaMenuLink"
                    >
                      Crafting Accessories
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
                      to={`/GiftCraftItem/Festival_Decoration`}
                    >
                      Festival Decoration
                    </Link>
                  </p>
                  <hr />
                  <ul data-bs-dismiss="offcanvas">
                    <li className="megaMenu_li">
                      <Link
                        to={`/displayProduct/${"Festival Decoration"}`}
                        id="megaMenuLink"
                      >
                        Festival Decoration
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
                      to={`/GiftCraftItem/Gift_Wrapping_Supplies`}
                    >
                      Gift Wrapping Supplies
                    </Link>
                  </p>
                  <hr />
                  <ul data-bs-dismiss="offcanvas">
                    <li className="megaMenu_li">
                      <Link
                        to={`/displayProduct/${"Gift Wrapping Supplies"}`}
                        id="megaMenuLink"
                      >
                        Gift Wrapping Supplies
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

export default GiftCrafts_M;
