import React, { useContext, useState, useEffect } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "../../Home.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { WishlistProvider } from "./../../../AllContextApi/WishlistContext";
import backgroundImg from "../../../Image/FlashSale.gif";
import loader from "../../../Image/loder.gif";

export default function FlashSale() {
  const [flashSales, setFlashSales] = useState([]);
  const [loading, setLoading] = useState([]);

  // For slick slider
  var settings = {
    infinite: true,
    speed: 500,
    autoplay: false,
    autoplaySpeed: 5000,
    slidesToShow: 6,
    slidesToScroll: 1,
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
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  // getting only flash product
  // const flashSales = products?.filter(
  //   (product) => product?.flashSale === "yes"
  // );
  useEffect(() => {
    const fetchServices = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `${process.env.REACT_APP_BACKEND_URL}/flash`
        );
        const data = await response.json();
        setFlashSales(data);
      } catch (error) {
        console.log("err", error);
      }
      setLoading(false);
    };
    fetchServices();
  }, []);

  // (releted product)sending the specific product child Categories value to the localstroage for color varient to the single product page
  const handleSecectedProductCode = (productChildCategories) => {
    localStorage.setItem("subChild", productChildCategories);
  };

  //wishlist data with context api
  const [wishlist, setWishlist] = useContext(WishlistProvider);

  const handleWishlist = (pd) => {
    //duplicate product out
    const isDuplicated = wishlist.find((dt) => dt?._id === pd?._id);

    if (isDuplicated?._id) {
      setWishlist(wishlist);
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
    } else {
      setWishlist([...wishlist, pd]);
      localStorage.setItem("wishlist", JSON.stringify([...wishlist, pd]));
    }
  };

  return (
    <>
      <section className="d-flex justify-content-center">
        <img src={backgroundImg} alt="Banner" className="img-fluid" />
      </section>
      <div className="container-fluid flashSale">
        <div className="sectionHeader">
          <span className="sectionHeader_title">Flash Sale !</span>
          <span>
            <Link to="/flash-sale" className="btn ViewMore">
              <span>View More</span>
              {/* When it Click then go to-> flashSalePage.js */}
            </Link>
          </span>
        </div>

        {loading && (
          <div>
            <section className="d-flex justify-content-center">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </section>
          </div>
        )}

        {!loading && (
          <div className="row slider_items">
            <Slider {...settings}>
              {flashSales?.length &&
                flashSales?.slice(0, 20)?.map((flashSale) => (
                  <div className="col-md-2 popularItem" key={flashSale._id}>
                    <div className="card popularProductCard">
                      <Link
                        to={"/singleProduct/" + flashSale?._id}
                        className="decorationLink linkImg"
                        onClick={() =>
                          handleSecectedProductCode(flashSale?.childCategories)
                        }
                      >
                        <LazyLoadImage
                          src={
                            flashSale?.variantItems?.[0]?.variants?.[0]?.image
                          }
                          className="card-img-top img-fluid productPageImg"
                          alt="..."
                          placeholderSrc={loader}
                        />
                      </Link>
                      <div className="popularProductCardBody mt-3">
                        <p className="ProductTitle mb-4">
                          <span className="ProductName">
                            {flashSale?.name.slice(0, 30)}....
                          </span>
                        </p>
                        <p className="ProductPrice">
                          Tk. {flashSale?.currentPrice}
                        </p>
                        {flashSale?.oldPrice !== "" &&
                          flashSale?.oldPrice !== 0 && (
                            <div>
                              <span className="ProductOldPrice">
                                Tk. {flashSale?.oldPrice}/-
                              </span>
                              <span className="discountRate">
                                {(
                                  100 -
                                  (flashSale?.currentPrice /
                                    flashSale?.oldPrice) *
                                    100
                                ).toFixed(1)}
                                %
                              </span>
                            </div>
                          )}

                        <p className="wishlist mt-2">
                          <button className="wishlistLink">
                            <i
                              className={`${
                                wishlist
                                  .map((dt) => dt?._id)
                                  .includes(flashSale?._id) && "wishlistColor"
                              } bi bi-heart-fill`}
                              onClick={() => handleWishlist(flashSale)}
                            >
                              Wishlist
                            </i>
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
            </Slider>
          </div>
        )}
      </div>
    </>
  );
}
