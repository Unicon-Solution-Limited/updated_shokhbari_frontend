import React, { useContext, useEffect, useState } from "react";
import { WishlistProvider } from "../../../AllContextApi/WishlistContext";
import Pagination from "../../../Pages/pagination/pagination";
import AllFooter from "../../../Shared/Footer/AllFooter";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import AllHeader from "../../../Shared/Header/AllHeader";
import loader from "../../../Image/loder.gif";

const CampaignsData = () => {
  const [campainsProducts, setCampainsProducts] = useState([]);
  const [loading, setLoading] = useState([]);

  // getting only popular product
  // const campainPds = products?.filter(
  //   (product) => product?.popularItems === "yes"
  // );
  useEffect(() => {
    const fetchServices = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `${process.env.REACT_APP_BACKEND_URL}/campaings`
        );
        const data = await response.json();
        setCampainsProducts(data);
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
      <section className="popularItemsHeader">
        <img
          src="https://res.cloudinary.com/shokh-bari/image/upload/v1702195346/Home_page/Campaign-banner_ybxbhk.webp"
          alt=""
          style={{ width: "100%", height: "100%" }}
          className="img-fluid"
        />
      </section>
      <main className="container-fluid PopularItemsPage">
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
            {campainsProducts
              ?.slice(pagination.start, pagination.end)
              ?.map((campainPd) => (
                <div
                  className="col-6 col-md-2 popularItemsPageCard_main mt-3"
                  key={campainPd?._id}
                >
                  <div className="card popularItemsPageCard">
                    <Link
                      to={"/singleProduct/" + campainPd?._id}
                      className="decorationLink linkImg"
                      onClick={() =>
                        handleSecectedProductCode(campainPd?.childCategories)
                      }
                    >
                      <LazyLoadImage
                        src={campainPd?.variantItems?.[0]?.variants?.[0]?.image}
                        className="card-img-top img-fluid productPageImg"
                        alt="ProductImage"
                        placeholderSrc={loader}
                      />
                    </Link>
                    <div className="popularItemsPageCardBody mt-3">
                      <p className="ProductName">
                        {campainPd?.name.slice(0, 30)}
                        ...
                      </p>
                      <p className="ProductPrice">
                        Tk. {campainPd?.currentPrice}/-
                      </p>
                      {campainPd?.oldPrice !== "" &&
                        campainPd?.oldPrice !== 0 && (
                          <div>
                            <span className="ProductOldPrice">
                              Tk. {campainPd?.oldPrice}/-
                            </span>
                            <span className="discountRate">
                              {(
                                100 -
                                (campainPd?.currentPrice /
                                  campainPd?.oldPrice) *
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
                                .includes(campainPd?._id) && "wishlistColor"
                            } bi bi-heart-fill`}
                            onClick={() => handleWishlist(campainPd)}
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
          total={campainsProducts.length}
        />
      </main>
      <AllFooter />
    </>
  );
};

export default CampaignsData;
