import React, { useEffect, useRef } from "react";
import Carousel from "./HomeSections/Carousel/Carousel";
import Campaigns from "./HomeSections/Campaigns/Campaigns";
import Brands from "./HomeSections/Brands/Brands";
import PopularItems from "./HomeSections/PopularItems/PopularItems";
import FlashSale from "./HomeSections/FlashSale/FlashSale";
import AllHeader from "../Shared/Header/AllHeader";
import AllFooter from "./../Shared/Footer/AllFooter";

const Home = () => {
  const popupRef = useRef(null);
  const blurRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target) &&
        blurRef.current &&
        !blurRef.current.contains(event.target)
      ) {
        handleClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if (popupRef.current && blurRef.current) {
        popupRef.current.style.display = "block";
        blurRef.current.classList.add("active");
      }
    }, 2000);
  }, []);

  const handleClose = () => {
    if (popupRef.current && blurRef.current) {
      popupRef.current.style.display = "none";
      blurRef.current.classList.remove("active");
    }
  };

  return (
    <span>
      <div className="homepage" id="blur" ref={blurRef}>
        <AllHeader />
        <Carousel />
        <PopularItems />
        <Brands />
        <FlashSale />
        <Campaigns />
        <AllFooter />
      </div>

      {/* campaign popup */}
      <div className="adsPopup" ref={popupRef}>
        <button id="close" onClick={handleClose}>
          &times;
        </button>
        <img
          src="https://res.cloudinary.com/shokhbari/image/upload/v1725176722/shokhbari-popup-89kb_mhpc60.jpg"
          alt="15% Discount"
        />
      </div>
    </span>
  );
};

export default Home;
