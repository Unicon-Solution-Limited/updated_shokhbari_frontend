import React from "react";
import { Link } from "react-router-dom";

const BeautyPersonalCare = () => {
  return (
    <>
      <li className="nav-item">
        <Link
          className="nav-link offcanvasLink"
          to="/category/beauty-and-personal-care"
        >
          <span data-bs-dismiss="offcanvas">Beauty & Personal Care</span>
        </Link>
        <ul
          className="submenu dropdown-menu mega_menu"
          id="beauty_personal_care_mega"
        >
          <div className="container">
            <h2 className="text-center py-3 headline">
              Beauty And Personal Care
            </h2>
            <div className="row">
              <div className="col-2">
                <p
                  className="text-center subHeadline"
                  data-bs-dismiss="offcanvas"
                >
                  <Link
                    style={{ textDecoration: "none", color: "inherit" }}
                    to={`/BeautyItem/Bath_Body`}
                  >
                    Bath and Body
                  </Link>
                </p>
                <hr />
                <ul className="text-center" data-bs-dismiss="offcanvas">
                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Body Oils"}`}
                      id="megaMenuLink"
                    >
                      Body Olis
                    </Link>
                  </li>
                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Body Moisturizers"}`}
                      id="megaMenuLink"
                    >
                      Body Moisturizers
                    </Link>
                  </li>
                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Body Soaps and Shower Gels"}`}
                      id="megaMenuLink"
                    >
                      Body Soaps & Shower Gels
                    </Link>
                  </li>
                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Body Sun Care"}`}
                      id="megaMenuLink"
                    >
                      Body sun care
                    </Link>
                  </li>
                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Hand Care"}`}
                      id="megaMenuLink"
                    >
                      Hand Care
                    </Link>
                  </li>
                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Foot Care"}`}
                      id="megaMenuLink"
                    >
                      Foot Care
                    </Link>
                  </li>
                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Hair Removal"}`}
                      id="megaMenuLink"
                    >
                      Hair Removal
                    </Link>
                  </li>
                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Bath and Body Accessories"}`}
                      id="megaMenuLink"
                    >
                      Bath & Body Accessories
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-2 subcategorySection">
                <p
                  className="text-center subHeadline"
                  data-bs-dismiss="offcanvas"
                >
                  <Link
                    style={{ textDecoration: "none", color: "inherit" }}
                    to={`/BeautyItem/Beauty_Tools`}
                  >
                    Beauty Tools
                  </Link>
                </p>
                <hr />
                <ul className="text-center" data-bs-dismiss="offcanvas">
                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Hair Irons and Styles"}`}
                      id="megaMenuLink"
                    >
                      Hair Iron & Styles
                    </Link>
                  </li>
                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Hair Dryers"}`}
                      id="megaMenuLink"
                    >
                      Hair Dryers
                    </Link>
                  </li>
                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Skins Care tools"}`}
                      id="megaMenuLink"
                    >
                      Skin Care Tools
                    </Link>
                  </li>
                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Foot Relief Tools"}`}
                      id="megaMenuLink"
                    >
                      Foot Relief Tools
                    </Link>
                  </li>
                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Hair Removal Accessories"}`}
                      id="megaMenuLink"
                    >
                      Hair Removal Accessories
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-4 subcategorySection">
                <p
                  className="text-center subHeadline"
                  data-bs-dismiss="offcanvas"
                >
                  <Link
                    style={{ textDecoration: "none", color: "inherit" }}
                    to={`/BeautyItem/Fragrances`}
                  >
                    Fragrances
                  </Link>
                </p>
                <hr />
                <div className="row">
                  <div className="col">
                    {/* <p className="text-center">Men Fragrances</p> */}
                    {/* <hr /> */}
                    <ul className="text-center" data-bs-dismiss="offcanvas">
                      <li className="megaMenu_li">
                        <Link
                          to={`/displayProduct/${"M-Perfume"}`}
                          id="megaMenuLink"
                        >
                          Men Perfume
                        </Link>
                      </li>

                      <li className="megaMenu_li">
                        <Link
                          to={`/displayProduct/${"M-Body Spray"}`}
                          id="megaMenuLink"
                        >
                          Men Body Spray
                        </Link>
                      </li>

                      <li className="megaMenu_li">
                        <Link
                          to={`/displayProduct/${"M-Body Mist"}`}
                          id="megaMenuLink"
                        >
                          Men Body Mist
                        </Link>
                      </li>

                      <li className="megaMenu_li">
                        <Link
                          to={`/displayProduct/${"M-Deodorant"}`}
                          id="megaMenuLink"
                        >
                          Men Deodorant
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="col">
                    {/* <p className="text-center">Women Fragrances</p> */}
                    {/* <hr /> */}
                    <ul className="text-center" data-bs-dismiss="offcanvas">
                      <li className="megaMenu_li">
                        <Link
                          to={`/displayProduct/${"W-Perfume"}`}
                          id="megaMenuLink"
                        >
                          Women Perfume
                        </Link>
                      </li>

                      <li className="megaMenu_li">
                        <Link
                          to={`/displayProduct/${"W-Body Spray"}`}
                          id="megaMenuLink"
                        >
                          Women Body Spray
                        </Link>
                      </li>

                      <li className="megaMenu_li">
                        <Link
                          to={`/displayProduct/${"W-Body Mist"}`}
                          id="megaMenuLink"
                        >
                          Women Body Mist
                        </Link>
                      </li>

                      <li className="megaMenu_li">
                        <Link
                          to={`/displayProduct/${"W-Deodorant"}`}
                          id="megaMenuLink"
                        >
                          Women Deodorant
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="col">
                    {/* <p className="text-center">Unisex Fragrances</p> */}
                    {/* <hr /> */}
                    <ul className="text-center" data-bs-dismiss="offcanvas">
                      <li className="megaMenu_li">
                        <Link
                          to={`/displayProduct/${"U-Perfume"}`}
                          id="megaMenuLink"
                        >
                          Unisex Perfume
                        </Link>
                      </li>

                      <li className="megaMenu_li">
                        <Link
                          to={`/displayProduct/${"U-Body Spray"}`}
                          id="megaMenuLink"
                        >
                          Unisex Body Spray
                        </Link>
                      </li>

                      <li className="megaMenu_li">
                        <Link
                          to={`/displayProduct/${"U-Body Mist"}`}
                          id="megaMenuLink"
                        >
                          Unisex Body Mist
                        </Link>
                      </li>

                      <li className="megaMenu_li">
                        <Link
                          to={`/displayProduct/${"U-Deodorant"}`}
                          id="megaMenuLink"
                        >
                          Unisex Deodorant
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-2 subcategorySection">
                <p
                  className="text-center subHeadline"
                  data-bs-dismiss="offcanvas"
                >
                  <Link
                    style={{ textDecoration: "none", color: "inherit" }}
                    to={`/BeautyItem/Hair_Care`}
                  >
                    Hair Care
                  </Link>
                </p>
                <hr />

                <ul className="text-center" data-bs-dismiss="offcanvas">
                  <li className="megaMenu_li">
                    <Link to={`/displayProduct/${"Shampoo"}`} id="megaMenuLink">
                      Shampoo
                    </Link>
                  </li>

                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Hair Conditioner"}`}
                      id="megaMenuLink"
                    >
                      Hair Conditioner
                    </Link>
                  </li>

                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"HairTeatmentMaskSpa"}`}
                      id="megaMenuLink"
                    >
                      Hair Treatment Mask Spa
                    </Link>
                  </li>

                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Hair oil and Toner"}`}
                      id="megaMenuLink"
                    >
                      Hair Oil & toner
                    </Link>
                  </li>

                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Hair Color"}`}
                      id="megaMenuLink"
                    >
                      Hair Colro
                    </Link>
                  </li>

                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Hair Gel and Styles"}`}
                      id="megaMenuLink"
                    >
                      Hair Gel & Style
                    </Link>
                  </li>

                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Hair Brushes and Combs"}`}
                      id="megaMenuLink"
                    >
                      Hair Brushes & Combos
                    </Link>
                  </li>

                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Wigs-Hair Extension and Pads"}`}
                      id="megaMenuLink"
                    >
                      Wigs, Hair Extension and Pads
                    </Link>
                  </li>

                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Hair Care Accessories"}`}
                      id="megaMenuLink"
                    >
                      Hair Care & Accessories
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-2 subcategorySection">
                <p
                  className="text-center subHeadline"
                  data-bs-dismiss="offcanvas"
                >
                  <Link
                    style={{ textDecoration: "none", color: "inherit" }}
                    to={`/BeautyItem/Skin_Care`}
                  >
                    Skin Care
                  </Link>
                </p>
                <hr />
                <ul className="text-center" data-bs-dismiss="offcanvas">
                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Cream and Moisture"}`}
                      id="megaMenuLink"
                    >
                      Creams & Moisturizers
                    </Link>
                  </li>
                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Serum and Essence"}`}
                      id="megaMenuLink"
                    >
                      Serum & Essence
                    </Link>
                  </li>
                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Mask and Packs"}`}
                      id="megaMenuLink"
                    >
                      Masks & Packs
                    </Link>
                  </li>
                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Scrubs and Exfoliator"}`}
                      id="megaMenuLink"
                    >
                      Scrubs & Exfoliators
                    </Link>
                  </li>
                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Facial Clearance"}`}
                      id="megaMenuLink"
                    >
                      Facial Clearance
                    </Link>
                  </li>
                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Toner and Mists"}`}
                      id="megaMenuLink"
                    >
                      Toner & Mists
                    </Link>
                  </li>
                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Eye care Product"}`}
                      id="megaMenuLink"
                    >
                      Eye Care Products
                    </Link>
                  </li>
                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Shaving and Grooming"}`}
                      id="megaMenuLink"
                    >
                      Shaving & Graooning
                    </Link>
                  </li>
                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Leap Balm and Treatments"}`}
                      id="megaMenuLink"
                    >
                      Lip Blam & Treatments
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-2">
                <p
                  className="text-center subHeadline"
                  data-bs-dismiss="offcanvas"
                >
                  <Link
                    style={{ textDecoration: "none", color: "inherit" }}
                    to={`/BeautyItem/Make_up`}
                  >
                    Makeup
                  </Link>
                </p>
                <hr />

                <ul className="text-center" data-bs-dismiss="offcanvas">
                  <li className="megaMenu_li">
                    <Link to={`/displayProduct/${"Face"}`} id="megaMenuLink">
                      Face
                    </Link>
                  </li>
                  <li className="megaMenu_li">
                    <Link to={`/displayProduct/${"Lips"}`} id="megaMenuLink">
                      Lips
                    </Link>
                  </li>
                  <li className="megaMenu_li">
                    <Link to={`/displayProduct/${"Eyes"}`} id="megaMenuLink">
                      Eyes
                    </Link>
                  </li>
                  <li className="megaMenu_li">
                    <Link to={`/displayProduct/${"Nails"}`} id="megaMenuLink">
                      Nails
                    </Link>
                  </li>
                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Palettes and Sets"}`}
                      id="megaMenuLink"
                    >
                      Pallettes and Sets
                    </Link>
                  </li>
                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Brushes and Sets"}`}
                      id="megaMenuLink"
                    >
                      Brushes and Sets
                    </Link>
                  </li>
                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Makeup Accessories"}`}
                      id="megaMenuLink"
                    >
                      Makeup Accessories
                    </Link>
                  </li>
                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Makeup Removers"}`}
                      id="megaMenuLink"
                    >
                      Makeup Removers
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="col-2 subcategorySection">
                <p
                  className="text-center subHeadline"
                  data-bs-dismiss="offcanvas"
                >
                  <Link
                    style={{ textDecoration: "none", color: "inherit" }}
                    to={`/BeautyItem/Oral_Care`}
                  >
                    Oral Care
                  </Link>
                </p>
                <hr />

                <ul className="text-center" data-bs-dismiss="offcanvas">
                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Tooth paste"}`}
                      id="megaMenuLink"
                    >
                      Tooth Paste
                    </Link>
                  </li>
                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Tooth Brush"}`}
                      id="megaMenuLink"
                    >
                      Tooth Brush
                    </Link>
                  </li>
                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Mouth Fresheners"}`}
                      id="megaMenuLink"
                    >
                      Mouth Fresheners
                    </Link>
                  </li>
                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Oral Care Accessories"}`}
                      id="megaMenuLink"
                    >
                      Oral Care Accessories
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="col-2 subcategorySection">
                <ul className="text-center" data-bs-dismiss="offcanvas">
                  <p
                    className="text-center subHeadline"
                    data-bs-dismiss="offcanvas"
                  >
                    <Link
                      style={{ textDecoration: "none", color: "inherit" }}
                      to={`/BeautyItem/Feminine_Care`}
                    >
                      Feminine Care
                    </Link>
                  </p>
                  <hr />
                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Feminine Care"}`}
                      id="megaMenuLink"
                    >
                      Feminine Care
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

export default BeautyPersonalCare;
