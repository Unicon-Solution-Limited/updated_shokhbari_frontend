import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      {/* <!-- Footer --> */}
      <footer className="bg-light text-center" id="myFooter">
        {/* <!-- link container --> */}
        <div className="hr p-4">
          {/* <!-- Section: Links --> */}
          <section className="TopFooter">
            {/* <!--Grid row--> */}
            <div className="row">
              {/* <!--Grid column--> */}
              <div className="col-lg-3 col-6 FooterMenuSection">
                <h5 className="text-uppercase mb-4">Help</h5>
                <ul className="list-unstyled mb-0" id="menuItems">
                  <li>
                    <Link to="/payment-note" className="footLink">
                      Payment
                    </Link>
                  </li>
                  <li>
                    <Link to="/shipping-note" className="footLink">
                      Shipping
                    </Link>
                  </li>
                  <li>
                    <Link to="/cancellation-note" className="footLink">
                      Cancellation
                    </Link>
                  </li>
                  <li>
                    <Link to="/faq" className="footLink">
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link to="/how-to-buy" className="footLink">
                      How to Buy
                    </Link>
                  </li>
                </ul>
              </div>
              {/* <!--Grid column--> */}

              {/* <!--Grid column--> */}
              <div className="col-lg-3 col-6 FooterMenuSection">
                <h5 className="text-uppercase mb-4">Policy</h5>

                <ul className="list-unstyled mb-0">
                  <li>
                    <Link to="/privacy-policies" className="footLink">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link to="/return-policies" className="footLink">
                      Return Policy
                    </Link>
                  </li>

                  <li>
                    <Link to="/t-and-c" className="footLink">
                      Terms & Conditions
                    </Link>
                  </li>
                  <li>
                    <Link to="/merchant-policies" className="footLink">
                      Merchant Policy
                    </Link>
                  </li>
                </ul>
              </div>
              {/* <!--Grid column--> */}

              {/* <!--Grid column--> */}
              <div className="col-lg-3 col-4 FooterMenuSection" id="Fvhr">
                <h5 className="text-uppercase mb-4">About</h5>

                <ul className="list-unstyled mb-0">
                  <li>
                    <Link to="/about-us" className="footLink">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact-us" className="footLink">
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link to="/career" className="footLink">
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link to="/short-links" className="footLink">
                      Short Links
                    </Link>
                  </li>
                  <li>
                    <Link to="/our-partners" className="footLink">
                      Our Partners
                    </Link>
                  </li>
                </ul>
              </div>
              {/* <!--Grid column--> */}

              {/* <!--Grid column--> */}
              <div className="col-lg-3 col-8 FooterMenuSection" id="Fvhr1">
                <h5 className="text-uppercase mb-4 responsive-text">
                  Contact Us
                </h5>

                <table className="footer_contactUs">
                  <tr>
                    <td>
                      <i className="bi bi-geo-alt-fill"></i>
                    </td>
                    <td>
                      <span>
                        5th floor, 238, Elephant Road, Dhaka-1205, Bangladesh.
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <i className="bi bi-headset"></i>
                    </td>
                    <td>
                      <span>(+88) 01841-477361.</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <i className="bi bi-envelope-fill"></i>
                    </td>
                    <td>
                      <span>info@shokhbari.com</span>
                    </td>
                  </tr>
                </table>
              </div>
              {/* <!--Grid column--> */}
            </div>
            {/* <!--Grid row--> */}
          </section>
          {/* <!-- Section: Links --> */}
        </div>
        {/* <!-- Link container --> */}
        <div className="hr p-4">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <h5 className="text-uppercase mb-4">Payment Methods</h5>
              <div id="paymentImg">
                <img
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1686820763/Footer-img/AmericanExpress_seoyii.webp"
                  alt="American Express"
                />
                <img
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1686820764/Footer-img/CashOnDelivery_yss1i2.webp"
                  alt="Cash on Delivery"
                />
                <img
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1686820763/Footer-img/MasterCard_tc0orv.webp"
                  alt="Master card"
                />
                <img
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1686820765/Footer-img/Rocket_urvxq1.webp"
                  alt="Rocket"
                />
                <img
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1686820764/Footer-img/Nagad_hgkudx.webp"
                  alt="Nagad"
                />
                <img
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1686820763/Footer-img/VISA_mmo1i1.webp"
                  alt="Visa"
                />
                <img
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1686820763/Footer-img/bKash_ekusjr.webp"
                  alt="Bkash"
                />
              </div>
            </div>
            <div className="col-lg-4 col-md-6 followUS">
              <h5 className="text-uppercase mb-4">Follow Us</h5>
              <div id="socialMedia">
                <a
                  href="https://www.facebook.com/ShokhBari"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-facebook"></i>
                </a>
                <a
                  href="https://www.youtube.com/channel/UCmuAH1UPrPJS1othktSD12Q"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-youtube"></i>
                </a>
                <a
                  href="https://www.instagram.com/shokhbari/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-instagram"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 securedBy">
              <h5 className="text-uppercase mb-2">Secured by</h5>
              <a
                href="https://www.escanav.com/"
                target="_blank"
                rel="noreferrer"
                id="Secure"
              >
                <img
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1687428399/shokhbari_home_imgae/eScan_ur0os9.webp"
                  alt="eScan"
                  className="secure_img"
                />
              </a>
            </div>
          </div>
        </div>
        {/* MESSANGER */}
        

        {/* <!-- Copyright --> */}
        <div className="text-center p-3 copyRight">
          Copyright @ {new Date().getFullYear()} |
          <span className="mx-2 BrName">SHOKHBARI</span>
          <span>
            | All right reserved |{" "}
            <a
              href="https://www.uniconbd.com/"
              target="_blank"
              rel="noreferrer"
              className="BrName text-uppercase"
            >
              Unicon Solution Limited
            </a>
          </span>
        </div>
        {/* <!-- Copyright --> */}
      </footer>
    </>
  );
};

export default Footer;
