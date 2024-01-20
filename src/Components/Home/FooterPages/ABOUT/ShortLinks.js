import React from "react";
import AllFooter from "../../../Shared/Footer/AllFooter";
import AllHeader from "../../../Shared/Header/AllHeader";
import "../FooterPages.css";
import logo from "../../../Image/Logo/logo.png";
import { Link } from "react-router-dom";
import { useAuth } from "../../../Authentication/AuthContext/AuthContext";

const ShortLinks = () => {
  const { logout } = useAuth();
  return (
    <>
      <AllHeader />
      <main className="container-fluid">
        <section className="siteMap my-5">
          <Link to="/">
            <img src={logo} alt="" className="siteMapLogo" />
          </Link>
        </section>
        <span className="row siteMaplinksBody">
          <h3 className="siteMapLinksHeader">
            Short links
            <hr className="siteMapLinkHr" />
          </h3>

          <ul className="col-md-3">
            <li>
              <Link to="/dashboard" className="siteMapLinks db">
                {" "}
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/orderReview" className="siteMapLinks yci">
                Your Cart Items{" "}
              </Link>
            </li>
            <li>
              <Link to="/" className="siteMapLinks wl">
                Wishlist
              </Link>
            </li>
          </ul>
          <ul className="col-md-3">
            <li>
              <Link to="/popular" className="siteMapLinks">
                Popular Items
              </Link>
            </li>

            <li>
              <Link to="/flash-sale" className="siteMapLinks">
                Flash Sale
              </Link>
            </li>
            <li>
              <Link to="/faq" className="siteMapLinks">
                FAQ
              </Link>
            </li>
          </ul>
          <ul className="col-md-3">
            <li>
              <Link to="/" className="siteMapLinks">
                Merchant Zone
              </Link>
            </li>
            <li>
              <Link to="/" className="siteMapLinks">
                Merchant Policy
              </Link>
            </li>
            <li>
              <Link to="/" className="siteMapLinks">
                Merchant Login
              </Link>
            </li>
          </ul>
          <ul className="col-md-3">
            <li>
              <Link to="/signup" className="siteMapLinks">
                Sign Up
              </Link>
            </li>
            <li>
              <Link to="/login" onClick={logout} className="siteMapLinks">
                Logout
              </Link>
            </li>
            <li>
              <Link to="/login" className="siteMapLinks">
                Login
              </Link>
            </li>
          </ul>
        </span>
      </main>
      <AllFooter />
    </>
  );
};

export default ShortLinks;
