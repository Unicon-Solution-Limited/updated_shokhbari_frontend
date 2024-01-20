import React from "react";
import { Link } from "react-router-dom";

const Apparel_M = () => {
  return (
    <>
      <li className="nav-item">
        <Link className="nav-link offcanvasLink" to="/">
          Apparel
        </Link>
        <ul className="submenu dropdown-menu mega_menu" id="apparel_mega">
          <div className="container">
            <h2 className="text-center py-3 headline">Apparel Worlds</h2>
            <div className="row">
              <div className="col-md-4">
                <p className="text-center subHeadline">Men’s Clothing</p>
                <hr />
                <div className="row">
                  <div className="col">
                    <ul data-bs-dismiss="offcanvas">
                      <li className="megaMenu_li">
                        <Link
                          to={`/displayProduct/${"M-Shirts"}`}
                          id="megaMenuLink"
                        >
                          Shirts
                        </Link>
                      </li>
                      <li className="megaMenu_li">
                        <Link
                          to={`/displayProduct/${"M-T-Shirts"}`}
                          id="megaMenuLink"
                        >
                          T-Shirts
                        </Link>
                      </li>
                      <li className="megaMenu_li">
                        <Link
                          to={`/displayProduct/${"Polo Shirts"}`}
                          id="megaMenuLink"
                        >
                          Polo Shirts
                        </Link>
                      </li>
                      <li className="megaMenu_li">
                        <Link
                          to={`/displayProduct/${"Mcoats-Jackets"}`}
                          id="megaMenuLink"
                        >
                          Coats AND Jackets
                        </Link>
                      </li>

                      <li className="megaMenu_li">
                        <Link
                          to={`/displayProduct/${"M-Hoodies and Sweaters"}`}
                          id="megaMenuLink"
                        >
                          Hoodies and Sweaters
                        </Link>
                      </li>
                      <li className="megaMenu_li">
                        <Link
                          to={`/displayProduct/${"M-Pant"}`}
                          id="megaMenuLink"
                        >
                          Pant
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="col">
                    <ul data-bs-dismiss="offcanvas">
                      <li className="megaMenu_li">
                        <Link
                          to={`/displayProduct/${"Panjabi"}`}
                          id="megaMenuLink"
                        >
                          Panjabi
                        </Link>
                      </li>
                      <li className="megaMenu_li">
                        <Link
                          to={`/displayProduct/${"M-Koti"}`}
                          id="megaMenuLink"
                        >
                          Koti
                        </Link>
                      </li>
                      <li className="megaMenu_li">
                        <Link
                          to={`/displayProduct/${"M-Shawls"}`}
                          id="megaMenuLink"
                        >
                          Shawls
                        </Link>
                      </li>
                      <li className="megaMenu_li">
                        <Link
                          to={`/displayProduct/${"M-lingerie"}`}
                          id="megaMenuLink"
                        >
                          lingerie
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6 subcategorySection">
                <p className="text-center subHeadline">Women’s Clothing</p>
                <hr />
                <div className="row">
                  <div className="col">
                    <ul data-bs-dismiss="offcanvas">
                      <li className="megaMenu_li">
                        <Link
                          to={`/displayProduct/${"Kurtis"}`}
                          id="megaMenuLink"
                        >
                          Kurtis
                        </Link>
                      </li>
                      <li className="megaMenu_li">
                        <Link
                          to={`/displayProduct/${"Tunic Fusion"}`}
                          id="megaMenuLink"
                        >
                          Tunic Fusion
                        </Link>
                      </li>
                      <li className="megaMenu_li">
                        <Link
                          to={`/displayProduct/${"Tops"}`}
                          id="megaMenuLink"
                        >
                          Tops
                        </Link>
                      </li>
                      <li className="megaMenu_li">
                        <Link
                          to={`/displayProduct/${"Western Attire"}`}
                          id="megaMenuLink"
                        >
                          Western Attire
                        </Link>
                      </li>
                      <li className="megaMenu_li">
                        <Link
                          to={`/displayProduct/${"W-Shirts"}`}
                          id="megaMenuLink"
                        >
                          Shirts
                        </Link>
                      </li>
                      <li className="megaMenu_li">
                        <Link
                          to={`/displayProduct/${"W-T-Shirts"}`}
                          id="megaMenuLink"
                        >
                          T-Shirts
                        </Link>
                      </li>
                      <li className="megaMenu_li">
                        <Link
                          to={`/displayProduct/${"Gown"}`}
                          id="megaMenuLink"
                        >
                          Gown
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="col">
                    <ul data-bs-dismiss="offcanvas">
                      <li className="megaMenu_li">
                        <Link
                          to={`/displayProduct/${"Lehenga"}`}
                          id="megaMenuLink"
                        >
                          Lehenga
                        </Link>
                      </li>
                      <li className="megaMenu_li">
                        <Link
                          to={`/displayProduct/${"Salwar-kameez"}`}
                          id="megaMenuLink"
                        >
                          Salwar-kameez
                        </Link>
                      </li>
                      <li className="megaMenu_li">
                        <Link
                          to={`/displayProduct/${"Unstitched dress"}`}
                          id="megaMenuLink"
                        >
                          Unstitched dress
                        </Link>
                      </li>
                      <li className="megaMenu_li">
                        <Link
                          to={`/displayProduct/${"Saree"}`}
                          id="megaMenuLink"
                        >
                          Saree
                        </Link>
                      </li>
                      <li className="megaMenu_li">
                        <Link
                          to={`/displayProduct/${"W-Pant"}`}
                          id="megaMenuLink"
                        >
                          Pant
                        </Link>
                      </li>
                      <li className="megaMenu_li">
                        <Link
                          to={`/displayProduct/${"W-Pajama"}`}
                          id="megaMenuLink"
                        >
                          Pajama
                        </Link>
                      </li>
                      <li className="megaMenu_li">
                        <Link
                          to={`/displayProduct/${"W-lingerie"}`}
                          id="megaMenuLink"
                        >
                          Lingerie
                        </Link>
                      </li>

                      <li className="megaMenu_li">
                        <Link
                          to={`/displayProduct/${"W-kaftan"}`}
                          id="megaMenuLink"
                        >
                          Kaftan
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="col">
                    <ul data-bs-dismiss="offcanvas">
                      <li className="megaMenu_li">
                        <Link
                          to={`/displayProduct/${"Scart"}`}
                          id="megaMenuLink"
                        >
                          Scart
                        </Link>
                      </li>
                      <li className="megaMenu_li">
                        <Link
                          to={`/displayProduct/${"Scarves"}`}
                          id="megaMenuLink"
                        >
                          Scarves
                        </Link>
                      </li>
                      <li className="megaMenu_li">
                        <Link
                          to={`/displayProduct/${"Dupatta"}`}
                          id="megaMenuLink"
                        >
                          Dupatta
                        </Link>
                      </li>
                      <li className="megaMenu_li">
                        <Link
                          to={`/displayProduct/${"Wshawl-poncho"}`}
                          id="megaMenuLink"
                        >
                          Shawl and poncho
                        </Link>
                      </li>
                      <li className="megaMenu_li">
                        <Link
                          to={`/displayProduct/${"Wcoats-Jackets"}`}
                          id="megaMenuLink"
                        >
                          Coat and Jacket
                        </Link>
                      </li>{" "}
                      <li className="megaMenu_li">
                        <Link
                          to={`/displayProduct/${"W-Hoodies and Sweater"}`}
                          id="megaMenuLink"
                        >
                          Hoodies and Sweater
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-2 subcategorySection">
                <p className="text-center subHeadline">Fabrics</p>
                <hr />
                <ul data-bs-dismiss="offcanvas">
                  <li className="megaMenu_li">
                    <Link to={`/displayProduct/${"F-Shirt"}`} id="megaMenuLink">
                      Shirt
                    </Link>
                  </li>
                  <li className="megaMenu_li">
                    <Link to={`/displayProduct/${"F-Pant"}`} id="megaMenuLink">
                      Pant
                    </Link>
                  </li>
                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"F-Panjabi"}`}
                      id="megaMenuLink"
                    >
                      Panjabi
                    </Link>
                  </li>
                  <li className="megaMenu_li">
                    <Link to={`/displayProduct/${"F-Kamiz"}`} id="megaMenuLink">
                      Kamiz
                    </Link>
                  </li>
                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"F-Salwar"}`}
                      id="megaMenuLink"
                    >
                      Salwar
                    </Link>
                  </li>{" "}
                  <li className="megaMenu_li">
                    <Link to={`/displayProduct/${"F-Orna"}`} id="megaMenuLink">
                      Orna
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

export default Apparel_M;
