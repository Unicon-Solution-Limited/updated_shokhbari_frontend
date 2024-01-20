import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../Home.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BrandDatas from "./BrandData";

const Brands = () => {
  const [brandData, setBrandData] = useState(BrandDatas);
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 6000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <>
      <section className="container-fluid overflow-hidden">
        <div className="sectionHeader">
          <span className="sectionHeader_title">Shokh Brand's</span>
          <span>
            <Link to="/brands" className="btn ViewMore">
              <span>View More</span>
              {/* When it Click then go to-> BrandsPage.js */}
            </Link>
          </span>
        </div>
      </section>
      <section className="shokhBrands">
        <div className="container-fluid">
          <div className="row">
            <Slider {...settings}>
              {brandData.map((data) => (
                <div className="col-4 col-md-2" key={data?.id}>
                  <div className="brandCard">
                    <img
                      src={data?.brandsImg}
                      className="brandImage"
                      alt="..."
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};

export default Brands;
