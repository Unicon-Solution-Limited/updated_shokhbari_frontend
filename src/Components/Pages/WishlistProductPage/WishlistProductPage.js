import React, { useState, useContext, useEffect } from "react";
import { WishlistProvider } from "../../AllContextApi/WishlistContext";
import "../../Home/Home.css";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Pagination from "../pagination/pagination";
import AllHeader from "../../Shared/Header/AllHeader";
import AllFooter from "../../Shared/Footer/AllFooter";

const loader =
  "https://res.cloudinary.com/shokh-bari/image/upload/v1664797828/Home_page/loading_o96w1d.gif";

const WishlistProductPage = () => {
  const [Wishlist, setWishlist] = useContext(WishlistProvider);
  const [loading, setLoading] = useState([]);

  // (releted product)sending the specific product child Categories to the localStroage for color varient to the single product page by context api
  const handleSecectedProductCode = (productChildCategories) => {
    localStorage.setItem("subChild", productChildCategories);
  };

  //delete the wishlist product form state and localstroage
  const deleteWishlistItem = (id) => {
    //get localstroage data
    const getLocalData = JSON.parse(localStorage.getItem("wishlist")) || [];
    //perames ar idr sathe product ar id na mila product ghula nisi
    let newData = getLocalData.filter((item) => item._id != id);

    //set new data to the state and localstroage
    localStorage.setItem("wishlist", JSON.stringify(newData || []));
    setWishlist(newData);
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
        {Wishlist.length === 0 && (
          <section className="text-center">
            <h2 className="text-danger">Your Wishlist is Empty</h2>
            <br />
            <Link to="/" className="btn myBtn">
              Back to Home
            </Link>
          </section>
        )}
        {Wishlist.length > 0 && (
          <>
            <section className="popularItemsHeader">
              <span className="popularItemsTitle">Wishlist product</span>
              <hr className="popularItemsTitleHr" />
            </section>
            <section className="row popularItemsBody mx-2">
              {Wishlist?.slice(pagination.start, pagination.end)?.map(
                (popularProduct) => (
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
                      <div className="card-body popularItemsPageCardBody">
                        <p className="ProductName">
                          {popularProduct?.name.slice(0, 30)}
                          ...
                        </p>
                        {/* <p className="ProductPrice">
                          Tk. {popularProduct?.currentPrice}/-
                        </p>
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
                        </span> */}
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
                        <p className="wishlist">
                          <span
                            className="wishlistLink cursor-pointer"
                            onClick={() =>
                              deleteWishlistItem(popularProduct?._id)
                            }
                          >
                            <i
                              className="bi bi-heart-fill"
                              style={{ color: "red" }}
                            ></i>{" "}
                            Remove
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                )
              )}
            </section>
          </>
        )}

        {/* this is pagination component */}
        {Wishlist.length === 0 ? (
          ""
        ) : (
          <Pagination
            showPerPage={showPerPage}
            onPaginationChange={onPaginationChange}
            total={Wishlist?.length}
          />
        )}
      </main>
      <AllFooter />
    </>
  );
};

export default WishlistProductPage;
