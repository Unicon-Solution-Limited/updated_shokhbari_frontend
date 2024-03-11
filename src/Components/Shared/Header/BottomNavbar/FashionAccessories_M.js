import React from "react";
import { Link } from "react-router-dom";

const FashionAccessories_M = () => {
  return (
    <>
      <li className="nav-item">
        <Link
          className="nav-link offcanvasLink"
          to="/category/FashionAccessories"
        >
          <span data-bs-dismiss="offcanvas">Fashion Accessories</span>
        </Link>
        <ul className="submenu dropdown-menu mega_menu" id="fashion_mega">
          <div className="container">
            <h2 className="text-center py-3 headline">
              Fashion Accessories World
            </h2>
            <div className="row">
              <div className="col-2">
                <p
                  className="text-center subHeadline"
                  data-bs-dismiss="offcanvas"
                >
                  <Link
                    style={{ textDecoration: "none", color: "inherit" }}
                    to={`/FashionAccessoriesItem/Hair%20Accessories`}
                  >
                    Hair Accessories
                  </Link>
                </p>

                <hr />
                <ul className="text-center" data-bs-dismiss="offcanvas">
                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Hair Band"}`}
                      id="megaMenuLink"
                    >
                      Hair Band
                    </Link>
                  </li>
                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Hair Clip"}`}
                      id="megaMenuLink"
                    >
                      Hair Clip
                    </Link>
                  </li>
                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Crown and Tiklies"}`}
                      id="megaMenuLink"
                    >
                      Crown and Tiklies
                    </Link>
                  </li>
                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Hair Accessories-Others"}`}
                      id="megaMenuLink"
                    >
                      Hair Accessories-Others
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
                    to={`/FashionAccessoriesItem/Jewelry`}
                  >
                    Jewelry
                  </Link>
                </p>
                <hr />
                <ul className="text-center" data-bs-dismiss="offcanvas">
                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Jewelry set"}`}
                      id="megaMenuLink"
                    >
                      Jewelry set
                    </Link>
                  </li>
                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Ear Ornaments"}`}
                      id="megaMenuLink"
                    >
                      Ear Ornaments
                    </Link>
                  </li>
                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Neck Ornaments"}`}
                      id="megaMenuLink"
                    >
                      Neck Ornaments
                    </Link>
                  </li>
                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Hand Ornaments"}`}
                      id="megaMenuLink"
                    >
                      Hand Ornaments
                    </Link>
                  </li>
                  <li className="megaMenu_li">
                    <Link to={`/displayProduct/${"Brooch"}`} id="megaMenuLink">
                      Brooch
                    </Link>
                  </li>
                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Leg Ornaments"}`}
                      id="megaMenuLink"
                    >
                      Leg Ornaments
                    </Link>
                  </li>
                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Nose Ornament"}`}
                      id="megaMenuLink"
                    >
                      Nose Ornament
                    </Link>
                  </li>
                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Others-Jewelry"}`}
                      id="megaMenuLink"
                    >
                      Others-Jewelry
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
                    to={`/displayProduct/${"Gents Bag"}`}
                  >
                    Bag for Man's
                  </Link>
                </p>
                <hr />
                <ul className="text-center" data-bs-dismiss="offcanvas">
                  <li className="megaMenu_li">
                    <Link
                      to={`/displaySubChildProduct/${"Corporate Bags"}`}
                      id="megaMenuLink"
                    >
                      Corporate Bags
                    </Link>
                  </li>
                  <li className="megaMenu_li">
                    <Link
                      to={`/displaySubChildProduct/${"Crossbody Bags"}`}
                      id="megaMenuLink"
                    >
                      Crossbody Bags
                    </Link>
                  </li>
                  <li className="megaMenu_li">
                    <Link
                      to={`/displaySubChildProduct/${"Back Pack"}`}
                      id="megaMenuLink"
                    >
                      Back Pack
                    </Link>
                  </li>
                  <li className="megaMenu_li">
                    <Link
                      to={`/displaySubChildProduct/${"Laptop Bag"}`}
                      id="megaMenuLink"
                    >
                      Laptop Bag
                    </Link>
                  </li>
                  <li className="megaMenu_li">
                    <Link
                      to={`/displaySubChildProduct/${"Messenger Bag"}`}
                      id="megaMenuLink"
                    >
                      Messenger Bag
                    </Link>
                  </li>
                  <li className="megaMenu_li">
                    <Link
                      to={`/displaySubChildProduct/${"Wallet and long parse"}`}
                      id="megaMenuLink"
                    >
                      Wallet and long parse
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
                    to={`/displayProduct/${"Ladies Bag"}`}
                  >
                    Bag for Women
                  </Link>
                </p>

                <hr />
                <div className="row">
                  <div className="col">
                    <ul className="text-center" data-bs-dismiss="offcanvas">
                      <li className="megaMenu_li">
                        <Link
                          to={`/displaySubChildProduct/${"Purse and Clutches"}`}
                          id="megaMenuLink"
                        >
                          Purse and Clutches
                        </Link>
                      </li>
                      <li className="megaMenu_li">
                        <Link
                          to={`/displayProduct/${"Top-Handbags"}`}
                          id="megaMenuLink"
                        >
                          Top-Handbags
                        </Link>
                      </li>
                      <li className="megaMenu_li">
                        <Link
                          to={`/displaySubChildProduct/${"Crossbody and Shoulder Bags"}`}
                          id="megaMenuLink"
                        >
                          Crossbody and Shoulder Bags
                        </Link>
                      </li>
                      <li className="megaMenu_li">
                        <Link
                          to={`/displaySubChildProduct/${"Parts Bags"}`}
                          id="megaMenuLink"
                        >
                          Parts Bags
                        </Link>
                      </li>
                      <li className="megaMenu_li">
                        <Link
                          to={`/displaySubChildProduct/${"Pouches and Coin Purse"}`}
                          id="megaMenuLink"
                        >
                          Pouches and Coin Purse
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="col">
                    <ul className="text-center" data-bs-dismiss="offcanvas">
                      <li className="megaMenu_li">
                        <Link
                          to={`/displaySubChildProduct/${"W-Corporate Bags"}`}
                          id="megaMenuLink"
                        >
                          Corporate Bags
                        </Link>
                      </li>
                      <li className="megaMenu_li">
                        <Link
                          to={`/displayProduct/${"W-Back Packs"}`}
                          id="megaMenuLink"
                        >
                          Back Packs
                        </Link>
                      </li>
                      <li className="megaMenu_li">
                        <Link
                          to={`/displaySubChildProduct/${"W-Laptop Bags"}`}
                          id="megaMenuLink"
                        >
                          Laptop Bags
                        </Link>
                      </li>
                      <li className="megaMenu_li">
                        <Link
                          to={`/displaySubChildProduct/${"W-Messenger Bags"}`}
                          id="megaMenuLink"
                        >
                          Messenger Bags
                        </Link>
                      </li>
                      <li className="megaMenu_li">
                        <Link
                          to={`/displaySubChildProduct/${"W-Wallet and Long parse"}`}
                          id="megaMenuLink"
                        >
                          Wallet and Long parse
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
                    to={`/displayProduct/${"Unisex Bag"}`}
                  >
                    Unisex Bag
                  </Link>
                </p>

                <hr />
                <ul className="text-center" data-bs-dismiss="offcanvas">
                  <li className="megaMenu_li">
                    <Link
                      to={`/displaySubChildProduct/${"Mobile and Tab Covers"}`}
                      id="megaMenuLink"
                    >
                      Mobile and Tab Covers
                    </Link>
                  </li>
                  <li className="megaMenu_li">
                    <Link
                      to={`/displaySubChildProduct/${"Coin purse"}`}
                      id="megaMenuLink"
                    >
                      Coin purse
                    </Link>
                  </li>
                  <li className="megaMenu_li">
                    <Link
                      to={`/displaySubChildProduct/${"Card Holder"}`}
                      id="megaMenuLink"
                    >
                      Card Holder
                    </Link>
                  </li>
                  <li className="megaMenu_li">
                    <Link
                      to={`/displaySubChildProduct/${"Weekender Bags"}`}
                      id="megaMenuLink"
                    >
                      Weekender Bags
                    </Link>
                  </li>
                  <li className="megaMenu_li">
                    <Link
                      to={`/displaySubChildProduct/${"Suitcase and Trolley Bags"}`}
                      id="megaMenuLink"
                    >
                      Suitcase and Trolley Bags
                    </Link>
                  </li>
                  <li className="megaMenu_li">
                    <Link
                      to={`/displaySubChildProduct/${"Travel Bags"}`}
                      id="megaMenuLink"
                    >
                      Travel Bags
                    </Link>
                  </li>
                  <li className="megaMenu_li">
                    <Link
                      to={`/displaySubChildProduct/${"Others-Bag"}`}
                      id="megaMenuLink"
                    >
                      Others-Bag
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-4">
                <p
                  className="text-center subHeadline"
                  data-bs-dismiss="offcanvas"
                >
                  <Link
                    style={{ textDecoration: "none", color: "inherit" }}
                    to={`/FashionAccessoriesItem/Footwear`}
                  >
                    Footwear
                  </Link>
                </p>
                <hr />
                <div className="row">
                  <div className="col-md-5">
                    <ul className="text-center" data-bs-dismiss="offcanvas">
                      <p className="text-center" data-bs-dismiss="offcanvas">
                        <Link
                          style={{ textDecoration: "none", color: "inherit" }}
                          to={`/displayProduct/${"Gents Footwear"}`}
                        >
                          Men
                        </Link>
                      </p>
                      <hr />
                      <li className="megaMenu_li">
                        <Link
                          to={`/displaySubChildProduct/${"M-Sneakers and Converses"}`}
                          id="megaMenuLink"
                        >
                          Sneakers and Converses
                        </Link>
                      </li>
                      <li className="megaMenu_li">
                        <Link
                          to={`/displaySubChildProduct/${"M-Sandals"}`}
                          id="megaMenuLink"
                        >
                          Sandals
                        </Link>
                      </li>
                      <li className="megaMenu_li">
                        <Link
                          to={`/displaySubChildProduct/${"M-Shoes"}`}
                          id="megaMenuLink"
                        >
                          Shoes
                        </Link>
                      </li>
                      <li className="megaMenu_li">
                        <Link
                          to={`/displaySubChildProduct/${"M-Loafers"}`}
                          id="megaMenuLink"
                        >
                          Loafers
                        </Link>
                      </li>
                      <li className="megaMenu_li">
                        <Link
                          to={`/displaySubChildProduct/${"M-Flip Flops"}`}
                          id="megaMenuLink"
                        >
                          Flip Flops
                        </Link>
                      </li>
                      <li className="megaMenu_li">
                        <Link
                          to={`/displaySubChildProduct/${"M-Slippers"}`}
                          id="megaMenuLink"
                        >
                          Slippers
                        </Link>
                      </li>
                      <li className="megaMenu_li">
                        <Link
                          to={`/displaySubChildProduct/${"M-Boots"}`}
                          id="megaMenuLink"
                        >
                          Boots
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-7">
                    <ul className="text-center" data-bs-dismiss="offcanvas">
                      <p className="text-center" data-bs-dismiss="offcanvas">
                        <Link
                          style={{ textDecoration: "none", color: "inherit" }}
                          to={`/displayProduct/${"Ladies Footwear"}`}
                        >
                          Women
                        </Link>
                      </p>
                      <hr />
                      <li className="megaMenu_li">
                        <Link
                          to={`/displaySubChildProduct/${"W-Sneakers and Converses"}`}
                          id="megaMenuLink"
                        >
                          Sneakers and Converses
                        </Link>
                      </li>
                      <li className="megaMenu_li">
                        <Link
                          to={`/displaySubChildProduct/${"W-Sandals"}`}
                          id="megaMenuLink"
                        >
                          Sandals
                        </Link>
                      </li>
                      <li className="megaMenu_li">
                        <Link
                          to={`/displaySubChildProduct/${"W-Shoes"}`}
                          id="megaMenuLink"
                        >
                          Shoes
                        </Link>
                      </li>
                      <li className="megaMenu_li">
                        <Link
                          to={`/displaySubChildProduct/${"W-Loafers"}`}
                          id="megaMenuLink"
                        >
                          Loafers
                        </Link>
                      </li>
                      <li className="megaMenu_li">
                        <Link
                          to={`/displaySubChildProduct/${"W-Flip Flops"}`}
                          id="megaMenuLink"
                        >
                          Flip Flops
                        </Link>
                      </li>
                      <li className="megaMenu_li">
                        <Link
                          to={`/displaySubChildProduct/${"W-Slippers"}`}
                          id="megaMenuLink"
                        >
                          Slippers
                        </Link>
                      </li>
                      <li className="megaMenu_li">
                        <Link
                          to={`/displaySubChildProduct/${"W-Boots"}`}
                          id="megaMenuLink"
                        >
                          Boots
                        </Link>
                      </li>
                      <li className="megaMenu_li">
                        <Link
                          to={`/displaySubChildProduct/${"Heals"}`}
                          id="megaMenuLink"
                        >
                          Heals
                        </Link>
                      </li>
                      <li className="megaMenu_li">
                        <Link
                          to={`/displaySubChildProduct/${"Wedges"}`}
                          id="megaMenuLink"
                        >
                          Wedges
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-3 subcategorySection">
                <ul className="text-center" data-bs-dismiss="offcanvas">
                  <p
                    className="text-center subHeadline"
                    data-bs-dismiss="offcanvas"
                  >
                    <Link
                      style={{ textDecoration: "none", color: "inherit" }}
                      to={`/FashionAccessoriesItem/Sunglass`}
                    >
                      Sunglass
                    </Link>
                  </p>
                  <hr />
                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Gents Sunglass"}`}
                      id="megaMenuLink"
                    >
                      Gents Sunglass
                    </Link>
                  </li>
                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Ladies Sunglass"}`}
                      id="megaMenuLink"
                    >
                      Ladies Sunglass
                    </Link>
                  </li>
                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Unisex Sunglass"}`}
                      id="megaMenuLink"
                    >
                      Unisex Sunglass
                    </Link>
                  </li>
                </ul>
                <ul className="text-center mt-3" data-bs-dismiss="offcanvas">
                  <Link
                    to="/FashionAccessoriesItem/Belt"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <p className="text-center subHeadline">Belt</p>
                  </Link>
                  <hr />
                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Gents Belt"}`}
                      id="megaMenuLink"
                    >
                      Gents Belt
                    </Link>
                  </li>
                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Ladies Belt"}`}
                      id="megaMenuLink"
                    >
                      Ladies Belt
                    </Link>
                  </li>
                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Unisex Belt"}`}
                      id="megaMenuLink"
                    >
                      Unisex Belt
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
                      to={`/FashionAccessoriesItem/Watch`}
                    >
                      Watch
                    </Link>
                  </p>
                  <hr />
                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Gents Watch"}`}
                      id="megaMenuLink"
                    >
                      Gents Watch
                    </Link>
                  </li>
                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Ladies Watch"}`}
                      id="megaMenuLink"
                    >
                      Ladies Watch
                    </Link>
                  </li>
                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Unisex Watch"}`}
                      id="megaMenuLink"
                    >
                      Unisex Watch
                    </Link>
                  </li>
                </ul>
                <ul className="text-center mt-3" data-bs-dismiss="offcanvas">
                  <p
                    className="text-center subHeadline"
                    data-bs-dismiss="offcanvas"
                  >
                    <Link
                      style={{ textDecoration: "none", color: "inherit" }}
                      to={`/FashionAccessoriesItem/Face Mask`}
                    >
                      Face Mask
                    </Link>
                  </p>
                  <hr />
                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Gents Face Mask"}`}
                      id="megaMenuLink"
                    >
                      Gents Face Mask
                    </Link>
                  </li>
                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Ladies Face Mask"}`}
                      id="megaMenuLink"
                    >
                      Ladies Face Mask
                    </Link>
                  </li>
                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Kids Face Mask"}`}
                      id="megaMenuLink"
                    >
                      Kids Face Mask
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-1 subcategorySection">
                <ul className="text-center" data-bs-dismiss="offcanvas">
                  <p
                    className="text-center subHeadline"
                    data-bs-dismiss="offcanvas"
                  >
                    <Link
                      style={{ textDecoration: "none", color: "inherit" }}
                      to={`/FashionAccessoriesItem/Ties & Accessoires`}
                    >
                      Ties
                    </Link>
                  </p>
                  <hr />
                  <li className="megaMenu_li">
                    <Link to={`/displayProduct/${"Ties"}`} id="megaMenuLink">
                      Ties
                    </Link>
                  </li>
                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Tie Accessories"}`}
                      id="megaMenuLink"
                    >
                      Tie Accessories
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-2">
                <ul className="text-center" data-bs-dismiss="offcanvas">
                  <p
                    className="text-center subHeadline"
                    data-bs-dismiss="offcanvas"
                  >
                    <Link
                      style={{ textDecoration: "none", color: "inherit" }}
                      to={`/FashionAccessoriesItem/Umbrellas`}
                    >
                      Umbrellas
                    </Link>
                  </p>
                  <hr />
                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Gents Umbrellas"}`}
                      id="megaMenuLink"
                    >
                      Gents Umbrellas
                    </Link>
                  </li>
                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Ladies Umbrellas"}`}
                      id="megaMenuLink"
                    >
                      Ladies Umbrellas
                    </Link>
                  </li>
                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Unisex Umbrellas"}`}
                      id="megaMenuLink"
                    >
                      Unisex Umbrellas
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

export default FashionAccessories_M;
