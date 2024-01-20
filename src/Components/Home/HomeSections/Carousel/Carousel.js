import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "../../Home.css";
import { CarouselForHomeBanner, DataCategories } from "./CarouselData";

export default function Carousel() {
  // for Banner carousel
  const [banner, setBanner] = useState(CarouselForHomeBanner);

  // for Category Carousel
  const [category, setCategory] = useState(DataCategories);

  // For slick slider
  var settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 10,
    slidesToScroll: 1,
    dots: true,
    initialSlide: 0,
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
    <div className="overflow-hidden">
      {/* <!-- Carousel Section --> */}
      <div
        id="carouselExampleControls"
        className="carousel slide myCarousal"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {banner.map((caroselBanner) => (
            <div
              className={`carousel-item ${caroselBanner?.class}`}
              key={caroselBanner.id}
              data-bs-interval="3000"
            >
              <img
                src={caroselBanner?.bannerImg}
                className="d-block bannerImg"
                alt="Offer..."
              />
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* <!-- /Carousel Section --> */}

      {/* <!-- Middle Categories Menus --> */}
      <section className="MidNavMain">
        <div className="MidNav">
          <div className="sectionHeader">
            <span>Categories</span>
            <span className="line"></span>
          </div>
          <section className="MidNavRow">
            <Slider {...settings}>
              {category.map((categoryItems) => (
                <Link
                  to={categoryItems?.pageLink}
                  className="Link midNavBody"
                  key={categoryItems?.id}
                >
                  <figure>
                    <img
                      src={categoryItems?.cateImg}
                      alt="Shokhbari Category"
                      className="midnavImg img-fluid"
                    />
                    <figcaption className="midNavLink">
                      {categoryItems?.cateName}
                    </figcaption>
                  </figure>
                </Link>
              ))}
            </Slider>
          </section>
        </div>
      </section>
      {/* <!-- /Middle Categories Menus --> */}
    </div>
  );
}
