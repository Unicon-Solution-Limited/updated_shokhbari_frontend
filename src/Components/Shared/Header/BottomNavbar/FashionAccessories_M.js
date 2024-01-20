import React from "react";
import { Link } from "react-router-dom";

const FashionAccessories_M = () => {
  return (
    <>
      <li className="nav-item">
        <Link className="nav-link offcanvasLink" to="/">
          Fashion Accessories
        </Link>
        <ul className="submenu dropdown-menu mega_menu" id="fashion_mega">
          <div className="container">
            <h2 className="text-center py-3 headline">
              Fashion Accessories World
            </h2>
            <div className="row">
              <div className="col-2">
                <p className="text-center subHeadline">Hair Accessories</p>
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
                <p className="text-center subHeadline">Jewelry</p>
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
                <p className="text-center subHeadline">Bag for Man's</p>
                <hr />
                <ul className="text-center" data-bs-dismiss="offcanvas">
                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Corporate Bags"}`}
                      id="megaMenuLink"
                    >
                      Corporate Bags
                    </Link>
                  </li>
                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Crossbody Bags"}`}
                      id="megaMenuLink"
                    >
                      Crossbody Bags
                    </Link>
                  </li>
                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Back Pack"}`}
                      id="megaMenuLink"
                    >
                      Back Pack
                    </Link>
                  </li>
                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Laptop Bag"}`}
                      id="megaMenuLink"
                    >
                      Laptop Bag
                    </Link>
                  </li>
                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Messenger Bag"}`}
                      id="megaMenuLink"
                    >
                      Messenger Bag
                    </Link>
                  </li>
                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Wallet and long parse"}`}
                      id="megaMenuLink"
                    >
                      Wallet and long parse
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-4 subcategorySection">
                <p className="text-center subHeadline">Bag for Women</p>
                <hr />
                <div className="row">
                  <div className="col">
                    <ul className="text-center" data-bs-dismiss="offcanvas">
                      <li className="megaMenu_li">
                        <Link
                          to={`/displayProduct/${"Purse and Clutches"}`}
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
                          to={`/displayProduct/${"Crossbody and Shoulder Bags"}`}
                          id="megaMenuLink"
                        >
                          Crossbody and Shoulder Bags
                        </Link>
                      </li>
                      <li className="megaMenu_li">
                        <Link
                          to={`/displayProduct/${"Parts Bags"}`}
                          id="megaMenuLink"
                        >
                          Parts Bags
                        </Link>
                      </li>
                      <li className="megaMenu_li">
                        <Link
                          to={`/displayProduct/${"Pouches and Coin Purse"}`}
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
                          to={`/displayProduct/${"W-Corporate Bags"}`}
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
                          to={`/displayProduct/${"W-Laptop Bags"}`}
                          id="megaMenuLink"
                        >
                          Laptop Bags
                        </Link>
                      </li>
                      <li className="megaMenu_li">
                        <Link
                          to={`/displayProduct/${"W-Messenger Bags"}`}
                          id="megaMenuLink"
                        >
                          Messenger Bags
                        </Link>
                      </li>
                      <li className="megaMenu_li">
                        <Link
                          to={`/displayProduct/${"W-Wallet and Long parse"}`}
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
                <p className="text-center subHeadline">Unisex Bag</p>
                <hr />
                <ul className="text-center" data-bs-dismiss="offcanvas">
                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Mobile and Tab Covers"}`}
                      id="megaMenuLink"
                    >
                      Mobile and Tab Covers
                    </Link>
                  </li>
                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Coin purse"}`}
                      id="megaMenuLink"
                    >
                      Coin purse
                    </Link>
                  </li>
                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Card Holder"}`}
                      id="megaMenuLink"
                    >
                      Card Holder
                    </Link>
                  </li>
                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Weekender Bags"}`}
                      id="megaMenuLink"
                    >
                      Weekender Bags
                    </Link>
                  </li>
                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Suitcase and Trolley Bags"}`}
                      id="megaMenuLink"
                    >
                      Suitcase and Trolley Bags
                    </Link>
                  </li>
                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Travel Bags"}`}
                      id="megaMenuLink"
                    >
                      Travel Bags
                    </Link>
                  </li>
                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Others-Bag"}`}
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
                <p className="text-center subHeadline">Footwear</p>
                <hr />
                <div className="row">
                  <div className="col-md-5">
                    <ul className="text-center" data-bs-dismiss="offcanvas">
                      <p className="text-center">Men</p>
                      <hr />
                      <li className="megaMenu_li">
                        <Link
                          to={`/displayProduct/${"M-Sneakers and Converses"}`}
                          id="megaMenuLink"
                        >
                          Sneakers and Converses
                        </Link>
                      </li>
                      <li className="megaMenu_li">
                        <Link
                          to={`/displayProduct/${"M-Sandals"}`}
                          id="megaMenuLink"
                        >
                          Sandals
                        </Link>
                      </li>
                      <li className="megaMenu_li">
                        <Link
                          to={`/displayProduct/${"M-Shoes"}`}
                          id="megaMenuLink"
                        >
                          Shoes
                        </Link>
                      </li>
                      <li className="megaMenu_li">
                        <Link
                          to={`/displayProduct/${"M-Loafers"}`}
                          id="megaMenuLink"
                        >
                          Loafers
                        </Link>
                      </li>
                      <li className="megaMenu_li">
                        <Link
                          to={`/displayProduct/${"M-Flip Flops"}`}
                          id="megaMenuLink"
                        >
                          Flip Flops
                        </Link>
                      </li>
                      <li className="megaMenu_li">
                        <Link
                          to={`/displayProduct/${"M-Slippers"}`}
                          id="megaMenuLink"
                        >
                          Slippers
                        </Link>
                      </li>
                      <li className="megaMenu_li">
                        <Link
                          to={`/displayProduct/${"M-Boots"}`}
                          id="megaMenuLink"
                        >
                          Boots
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-7">
                    <ul className="text-center" data-bs-dismiss="offcanvas">
                      <p className="text-center">Women</p>
                      <hr />
                      <li className="megaMenu_li">
                        <Link
                          to={`/displayProduct/${"W-Sneakers and Converses"}`}
                          id="megaMenuLink"
                        >
                          Sneakers and Converses
                        </Link>
                      </li>
                      <li className="megaMenu_li">
                        <Link
                          to={`/displayProduct/${"W-Sandals"}`}
                          id="megaMenuLink"
                        >
                          Sandals
                        </Link>
                      </li>
                      <li className="megaMenu_li">
                        <Link
                          to={`/displayProduct/${"W-Shoes"}`}
                          id="megaMenuLink"
                        >
                          Shoes
                        </Link>
                      </li>
                      <li className="megaMenu_li">
                        <Link
                          to={`/displayProduct/${"W-Loafers"}`}
                          id="megaMenuLink"
                        >
                          Loafers
                        </Link>
                      </li>
                      <li className="megaMenu_li">
                        <Link
                          to={`/displayProduct/${"W-Flip Flops"}`}
                          id="megaMenuLink"
                        >
                          Flip Flops
                        </Link>
                      </li>
                      <li className="megaMenu_li">
                        <Link
                          to={`/displayProduct/${"W-Slippers"}`}
                          id="megaMenuLink"
                        >
                          Slippers
                        </Link>
                      </li>
                      <li className="megaMenu_li">
                        <Link
                          to={`/displayProduct/${"W-Boots"}`}
                          id="megaMenuLink"
                        >
                          Boots
                        </Link>
                      </li>
                      <li className="megaMenu_li">
                        <Link
                          to={`/displayProduct/${"Heals"}`}
                          id="megaMenuLink"
                        >
                          Heals
                        </Link>
                      </li>
                      <li className="megaMenu_li">
                        <Link
                          to={`/displayProduct/${"Wedges"}`}
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
                  <p className="text-center subHeadline">Sunglass</p>
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
                  <p className="text-center subHeadline">Belt</p>
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
                  <p className="text-center subHeadline">Watch</p>
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
                  <p className="text-center subHeadline">Face Mask</p>
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
                  <p className="text-center subHeadline">Ties</p>
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
                  <p className="text-center subHeadline">Umbrellas</p>
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
