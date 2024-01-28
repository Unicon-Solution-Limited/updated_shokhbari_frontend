// This page is displayed when click "View More" button at "Popular Products" section in home page.
import React, { useContext, useEffect } from "react";
import "../../Home.css";
import AllHeader from "./../../../Shared/Header/AllHeader";
import AllFooter from "./../../../Shared/Footer/AllFooter";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useState } from "react";
import Pagination from "../../../Pages/pagination/pagination";
import { WishlistProvider } from "./../../../AllContextApi/WishlistContext";
import loader from "../../../Image/loder.gif";

export default function PopularItemsPage() {
  const [popularProducts, setPopularProducts] = useState([]);
  const [loading, setLoading] = useState([]);

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

  // (releted product)sending the specific product child Categories to the localStroage for color varient to the single product page by context api
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

  //this is for pagination
  const [showPerPage, setShowPerPage] = useState(12);
  const [pagination, setPagination] = useState({
    start: 0,
    end: showPerPage,
  });

  const onPaginationChange = (start, end) => {
    setPagination({ start: start, end: end });
  };

  return (
    <>
      <AllHeader />
      <main className="container-fluid PopularItemsPage">
        <section className="popularItemsHeader">
          <span className="popularItemsTitle">Popular Products</span>
          <hr className="popularItemsTitleHr" />
        </section>
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
          <section className="row popularItemsBody mx-2">
            {popularProducts
              ?.slice(pagination.start, pagination.end)
              ?.map((popularProduct) => (
                <div
                  className="col-6 col-md-2 popularItemsPageCard_main mt-3"
                  key={popularProduct?._id}
                >
                  <div className="card popularItemsPageCard">
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
                        alt="ProductImage"
                        placeholderSrc={loader}
                      />
                    </Link>
                    <div className="popularItemsPageCardBody mt-3">
                      <p className="ProductName">
                        {popularProduct?.name.slice(0, 30)}
                        ...
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
                          ></i>
                          Wishlist
                        </button>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
          </section>
        )}
        {/* this is pagination component */}
        <Pagination
          showPerPage={showPerPage}
          onPaginationChange={onPaginationChange}
          total={popularProducts.length}
        />
      </main>
      <AllFooter />
    </>
  );
}
