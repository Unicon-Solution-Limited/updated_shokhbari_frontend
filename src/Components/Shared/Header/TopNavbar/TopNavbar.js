import "./TopNavbar.css";
import headerLogo from "../../../Image/Logo/logo.png";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "./../../../Authentication/AuthContext/AuthContext";
import { CartProvider } from "../../../AllContextApi/CartContext";
import React, { useContext, useState, useEffect } from "react";
import { ProductProvider } from "../../../AllContextApi/ProductsContext";
import { WishlistProvider } from "./../../../AllContextApi/WishlistContext";

// get wishlist  from localStorage
const getLocalStorageWishlistData = () => {
  let wishlistData;
  if (typeof window !== "undefined") {
    const localData = JSON.parse(localStorage.getItem("wishlist")) || [];
    wishlistData = localData;
  }
  return wishlistData;
};

const TopNavbar = () => {
  const { currentUser } = useAuth();
  const [products, setProducts] = useContext(ProductProvider);
  const [searchValue, setSearchValue] = useState("");
  const history = useHistory();

  // For Cart Badge
  const [cartData, setCartData] = useContext(CartProvider);

  // For wishlist Badge
  const [Wishlist, setWishlist] = useContext(WishlistProvider);

  // sendign the daynamic  search value into the browser search bar and also redrict search component
  const handleSearch = (e) => {
    e.preventDefault();
    history.push(`/Search/${searchValue}`);
  };

  return (
    <div className="sticky-top TopHeaderMain">
      <div className="container">
        <div className="row TopHeader">
          {/* Home Logo */}
          <div className="col-2 HomeLogoBody">
            <Link to="/">
              <img src={headerLogo} alt="SHOKHBARI" className="HomeLogo" />
            </Link>
          </div>

          {/* Searchbar and Icons */}

          <div className="col-8 searchbarAndIcons">
            <form
              className="input-group productSearchBar"
              method="GET"
              onSubmit={handleSearch}
            >
              <input
                required
                type="text"
                className="form-control input-text productSearchBarInput"
                placeholder="Search products...."
                onChange={(e) => setSearchValue(e.target.value)}
              />
              <button
                className="btn btn-lg productSearchBarButton"
                type="submit"
              >
                <i className="bi bi-search"></i>
              </button>
            </form>

            {/* Cart, wishlist, User Icon */}

            <div className="TopHeaderIcons">
              <Link to="/wishlists" className="tooltipBody">
                {Wishlist.length > 0 ? (
                  <span>
                    <i
                      className="bi bi-heart-fill"
                      style={{ color: "red" }}
                    ></i>
                    <span className="position-absolute top-1 start-100 translate-middle badge rounded-circle bg-warning text-dark">
                      {Wishlist.length}
                    </span>
                  </span>
                ) : (
                  <span>
                    <i className="bi bi-heart-fill"></i>
                    <span className="position-absolute top-1 start-100 translate-middle badge rounded-circle bg-warning text-dark">
                      {Wishlist.length}
                    </span>
                  </span>
                )}
                <span className="tooltipText">Wishlist</span>
              </Link>

              {/* Avatar logic for user */}
              {!currentUser ? (
                <Link to="/dashboard" className="tooltipBody">
                  <i className="bi bi-person-circle"></i>
                  <span className="tooltipText">User</span>
                </Link>
              ) : (
                (currentUser?.photoURL && (
                  <Link to="/dashboard" className="tooltipBody">
                    <img
                      className="UserImage"
                      src={currentUser?.photoURL}
                      alt=""
                    />
                    <span className="tooltipText">Dashboard</span>
                  </Link>
                )) || (
                  <Link to="/dashboard" className="tooltipBody">
                    <span className="person-circle">
                      {currentUser?.displayName?.slice(0, 1)}
                    </span>
                    <span className="tooltipText">Dashboard</span>
                  </Link>
                )
              )}

              {/* Avatar logic for user */}

              <Link to="/orderReview" className="tooltipBody">
                <span className="position-relative">
                  <i className="bi bi-cart4"></i>
                  <span className="position-absolute top-1 start-100 translate-middle badge rounded-circle bg-warning text-dark">
                    {cartData.length}
                  </span>
                </span>
                <span className="tooltipText">Cart</span>
              </Link>
            </div>
          </div>

          {/* Telephone number and email */}
          <div className="col-2 TopHeaderContact">
            <ul className="my-auto">
              <li className="d-flex">
                <i className="bi bi-telephone-fill"></i>{" "}
                <span> +8801841477361</span>
              </li>
              <li className="d-flex align-items-center">
                <i className="bi bi-envelope-fill"></i>{" "}
                <span className="mx-2">shokhbari@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
