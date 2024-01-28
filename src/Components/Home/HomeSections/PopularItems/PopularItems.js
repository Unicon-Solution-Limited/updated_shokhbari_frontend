import React, { useContext, useEffect, useState } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "../../Home.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { WishlistProvider } from "./../../../AllContextApi/WishlistContext";
import loader from "../../../Image/loder.gif";

export default function PopularItems() {
  const [popularProducts, setPopularProducts] = useState([]);
  const [loading, setLoading] = useState(false);

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

  // getting only popular product
  // const popularProducts = products?.filter(
  //   (product) => product?.popularItems === "yes"
  // );

  useEffect(() => {
    const fetchServices = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `${process.env.REACT_APP_BACKEND_URL}/popular`
        );
        const data = await response.json();
        setPopularProducts(data);
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
      <div className="product_section_top_banner">
        <img
          src="https://res.cloudinary.com/shokhbari/image/upload/v1687695197/shokhbari_home_imgae/Bar-Banner_cqyl7g.webp"
          alt=""
          className="img-fluid"
        />
      </div>
      <div className="container-fluid PopularItemsSection">
        <div className="sectionHeader">
          <span className="sectionHeader_title">Popular Products</span>
          <span>
            <Link to="/popular" className="btn ViewMore">
              <span>View More</span>
              {/* When it Click then go to-> PopularItemsPage.js */}
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
              {popularProducts?.length &&
                popularProducts?.slice(0, 20)?.map((popularProduct) => (
                  <div
                    className="col-md-2 popularItem"
                    key={popularProduct._id}
                  >
                    <div className="card popularProductCard">
                      <Link
                        to={"/singleProduct/" + popularProduct?._id}
                        className="decorationLink linkImg"
                        onClick={() =>
                          handleSecectedProductCode(
                            popularProduct?.childCategories
                          )
                        }
                      >
                        <LazyLoadImage
                          src={
                            popularProduct?.variantItems?.[0]?.variants?.[0]
                              ?.image
                          }
                          className="card-img-top img-fluid productPageImg"
                          alt="..."
                          placeholderSrc={loader}
                        />
                      </Link>
                      <div className="popularProductCardBody mt-3">
                        <p className="ProductTitle mb-4">
                          <span className="ProductName">
                            {popularProduct?.name.slice(0, 30)}
                            ...
                          </span>
                        </p>
                        <p className="ProductPrice">
                          Tk. {popularProduct?.currentPrice}/-
                        </p>
                        {popularProduct?.oldPrice !== "" &&
                          popularProduct?.oldPrice !== 0 && (
                            <div>
                              <span className="ProductOldPrice">
                                Tk. {popularProduct?.oldPrice}/-
                              </span>
                              <span className="discountRate">
                                {(
                                  100 -
                                  (popularProduct?.currentPrice /
                                    popularProduct?.oldPrice) *
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
                                  .includes(popularProduct?._id) &&
                                "wishlistColor"
                              } bi bi-heart-fill`}
                              onClick={() => handleWishlist(popularProduct)}
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
