import React from "react";
import "../../Home.css";
import { Link } from "react-router-dom";

export default function Campaign() {
  return (
    <>
      <section className="overflow-hidden">
        <div className="container-fluid">
          <div className="sectionHeader">
            <span className="sectionHeader_title">24/7 Campaigns</span>
            <span>
              <Link to="/campaigns" className="btn ViewMore">
                <span>View More</span>
                {/* When it Click then go to-> campaignsData.js */}
              </Link>
            </span>
          </div>
        </div>
        <img
          src="https://res.cloudinary.com/shokhbari/image/upload/v1686813228/Campaign_Banner_wktke2.webp"
          alt="Capmaign"
          className="campaignsStyle"
        ></img>
      </section>
      <section className="container-fluid overflow-hidden EndHome">
        <div className="row">
          <div className="col-6 col-md-2">
            <img
              src="https://res.cloudinary.com/shokhbari/image/upload/v1686126833/shokhbari_home_imgae/support_rre49m.webp"
              alt=""
              className="sectionImg"
            />
            <p>24/7 Customer Support</p>
          </div>
          <div className="col-6 col-md-2">
            <img
              src="https://res.cloudinary.com/shokhbari/image/upload/v1686126833/shokhbari_home_imgae/Track-your-package_zpowou.webp"
              alt=""
              className="sectionImg"
            />
            <p>Gift Voucher</p>
          </div>

          <div className="col-6 col-md-2">
            <img
              src="https://res.cloudinary.com/shokhbari/image/upload/v1686126833/shokhbari_home_imgae/secure-payment_eawzdx.webp"
              alt=""
              className="sectionImg"
            />
            <p>Secure Payment</p>
          </div>

          <div className="col-6 col-md-2">
            <img
              src="https://res.cloudinary.com/shokhbari/image/upload/v1686126833/shokhbari_home_imgae/star_onafja.webp"
              alt=""
              className="sectionImg"
            />
            <p>Our Partners</p>
          </div>

          <div className="col-6 col-md-2">
            <img
              src="https://res.cloudinary.com/shokhbari/image/upload/v1686126833/shokhbari_home_imgae/Track-your-package_zpowou.webp"
              alt=""
              className="sectionImg"
            />
            <p>Track your Order</p>
          </div>
          <div className="col-6 col-md-2">
            <img
              src="https://res.cloudinary.com/shokhbari/image/upload/v1686126833/shokhbari_home_imgae/Easy-Purchase_eqiae2.webp"
              alt=""
              className="sectionImg"
            />
            <p>Easy Purchase</p>
          </div>
        </div>
      </section>
    </>
  );
}
