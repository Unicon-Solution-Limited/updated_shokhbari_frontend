import React, { useContext, useState } from "react";
import "./MobileFooter.css";
import logo from "../../../Image/Logo/logo.png";
import { Link } from "react-router-dom";
import { useAuth } from "../../../Authentication/AuthContext/AuthContext";
import { CartProvider } from "./../../../AllContextApi/CartContext";
import { WishlistProvider } from "./../../../AllContextApi/WishlistContext";
import { DataCategories } from "../../../Home/HomeSections/Carousel/CarouselData";

// get wishlist  from localStorage
const getLocalStorageWishlistData = () => {
  let wishlistData;
  if (typeof window !== "undefined") {
    const localData = JSON.parse(localStorage.getItem("wishlist")) || [];
    wishlistData = localData;
  }
  return wishlistData;
};

const MobileFooter = () => {
  const { currentUser } = useAuth();

  const [category, setCategory] = useState(DataCategories);

  // For Cart Badge
  const [cartData, setCartData] = useContext(CartProvider);

  // For wishlist Badge
  const [Wishlist, setWishlist] = useContext(WishlistProvider);
  return (
    <div className="container">
      <div className="MobileFooter">
        <div className="MFMain px-2">
          <div>
            <Link
              className="Micon hamB"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasBottom"
              to="/"
            >
              <i className="bi bi-list"></i>
            </Link>
          </div>
          <div>
            <Link to="/wishlists" className="Micon">
              {Wishlist.length > 0 ? (
                <span className="position-relative">
                  <i className="bi bi-heart-fill" style={{ color: "red" }}></i>
                  <span className="position-absolute top-1 start-100 translate-middle badge rounded-circle bg-warning text-dark">
                    {Wishlist.length}
                  </span>
                </span>
              ) : (
                <span className="position-relative">
                  <i className="bi bi-heart-fill"></i>
                  <span className="position-absolute top-1 start-100 translate-middle badge rounded-circle bg-warning text-dark">
                    {Wishlist.length}
                  </span>
                </span>
              )}
            </Link>
          </div>
          <div>
            <Link to="/" className="Mlogo">
              <img src={logo} alt="shokhbari" className="text-center" />
            </Link>
          </div>
          <div>
            {/* Avatar logic for user */}
            {!currentUser ? (
              <Link to="/dashboard" className="tooltipBody Micon">
                <i className="bi bi-person-circle"></i>
                <span className="tooltipText">User</span>
              </Link>
            ) : (
              (currentUser?.photoURL && (
                <Link to="/dashboard" className="tooltipBody">
                  <img
                    className="UserImageMobile"
                    src={currentUser?.photoURL}
                    alt=""
                  />
                  <span className="tooltipText">Dashboard</span>
                </Link>
              )) || (
                <Link to="/dashboard" className="tooltipBody Micon">
                  <span className="person-circle">
                    {currentUser?.displayName?.slice(0, 1)}
                  </span>
                  <span className="tooltipText">Dashboard</span>
                </Link>
              )
            )}
          </div>
          <div>
            <Link to="/orderReview" className="Micon">
              <span className="position-relative">
                <i className="bi bi-cart4"></i>
                <span className="position-absolute top-1 start-100 translate-middle badge rounded-circle bg-warning text-dark">
                  {cartData.length}
                </span>
              </span>
            </Link>
          </div>
        </div>
      </div>
      {/* Offcanvas Items */}
      <div
        className="offcanvas offcanvas-bottom"
        id="offcanvasBottom"
        aria-labelledby="offcanvasBottomLabel"
      >
        <div className="offcanvas-header MobileBottonOffcanvasHeader">
          <h5 className="offcanvas-title" id="offcanvasBottomLabel">
            SHOKHBARI
          </h5>
          <button
            type="button"
            className="btn text-reset"
            data-bs-dismiss="offcanvas"
          >
            &#10007;
          </button>
        </div>
        <div className="offcanvasbodyMobile">
          <ul>
            {category.map((categoryItems, i) => (
              <span key={i}>
                <li key={categoryItems?.id} data-bs-dismiss="offcanvas">
                  <Link
                    to={categoryItems?.pageLink}
                    className="MobileBottomOffcanvasLinks"
                  >
                    {categoryItems?.cateName}
                  </Link>
                </li>
              </span>
            ))}
          </ul>
        </div>
      </div>
      {/* Offcanvas Items end*/}
    </div>
  );
};

export default MobileFooter;
