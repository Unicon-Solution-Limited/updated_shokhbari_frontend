import React, { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./SingleProductPage.css";
import AllHeader from "./../../Shared/Header/AllHeader";
import AllFooter from "./../../Shared/Footer/AllFooter";
import { useParams } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import Pagination from "./../pagination/pagination";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { WishlistProvider } from "./../../AllContextApi/WishlistContext";
import { CartProvider } from "../../AllContextApi/CartContext";
import { useAuth } from "../../Authentication/AuthContext/AuthContext";
import { Rating } from "react-simple-star-rating";
import { LazyLoadImage } from "react-lazy-load-image-component";
import loader from "../../Image/loder.gif";

const SingleProductPsize = () => {
  const { currentUser } = useAuth();

  // Animation on scroll
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);
  // context  state
  const [products, setProducts] = useState([]);
  const [subChildValue, setSubChildValue] = useState("");
  const [cartData, setCartData] = useContext(CartProvider);
  const [merchantDetails, setMerchantDetails] = useState([]);

  //(related product) getting the sub child value form localstroage
  useEffect(() => {
    const localSubChild = localStorage.getItem("subChild");
    setSubChildValue(localSubChild);
  }, [setSubChildValue]);

  //all product getting
  const fetchProduct = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/allProduct`
      );
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.log("err", error);
    }
  };
  //call all product function
  useEffect(() => {
    fetchProduct();
  }, []);

  const { ProductId } = useParams();
  // Filtering selected product for details
  const [productDetails, setProductDetails] = useState([]);
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_BACKEND_URL}/getSingleProductAcId?singleProduct=${ProductId}`
        );
        const data = await response.json();
        setProductDetails(data);
      } catch (error) {
        console.log("err", error);
      }
    };

    fetchOrders();
  }, [ProductId]);

  //filtering product for varient beside the product details(more releted product)
  const [selectedChildCategories, setSelectedChildCategories] = useState([]);

  useEffect(() => {
    const fetchFilteredMoreProducts = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_BACKEND_URL}/getMoreReletedProduct?childCategories=${subChildValue}`
        );
        const data = await response.json();
        setSelectedChildCategories(data);
      } catch (error) {
        console.log("err", error);
      }
    };
    fetchFilteredMoreProducts();
  }, [products, subChildValue]);

  //productDetails state makeing array to multiple size selecting
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [allSizeWithSelectedColor, setAllSizeWithSelectedColor] = useState([]);
  const [imageAsSelectedColor, setImageAsSelectedColor] = useState([]);
  const sizeRef = useRef();
  const [selectedSameId, setSelectedSameId] = useState("");

  // Function to handle color selection
  const handleColorProduct = (colorInput, sameVariantIdClicked) => {
    setSelectedColor(colorInput);
    setSelectedSameId(sameVariantIdClicked);
    // If the selected color doesn't have the selected size, reset the size
    const singleColorProduct = productDetails?.variantItems?.map((data) =>
      data.variants.find((v) => v?.sameVariantId === sameVariantIdClicked)
    );
    //here all kind of size according to the color
    setAllSizeWithSelectedColor(singleColorProduct[0]?.sizes);

    //here single image according to the color
    setImageAsSelectedColor(singleColorProduct[0]?.image);
  };

  const handleSizeSubmit = (e) => {
    e.preventDefault();
    setSelectedSize(sizeRef.current.value);
  };

  // alert condition
  const [alertmsg, setAlertMsg] = useState(false);

  const handleBuy = (pd) => {
    // setCartData([pd]);
    let isAdded = false;

    if (cartData.length === 0) {
      pd = {
        ...pd,
        quantity: 1,
        selectedSize,
        selectedColor,
        imageAsSelectedColor,
      };
      setCartData([...cartData, pd]);
    }

    cartData.map((item) => {
      if (item.imageAsSelectedColor === imageAsSelectedColor) {
        isAdded = true;
      }
    });

    if (!isAdded) {
      pd = {
        ...pd,
        quantity: 1,
        selectedSize,
        selectedColor,
        imageAsSelectedColor,
      };
      setCartData([...cartData, pd]);
    }

    setAlertMsg(true);
    setTimeout(() => {
      setAlertMsg(false);
    }, 3000);
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

  //comment and review and start rating
  const commentId = useRef();
  const commentName = useRef();
  const commentText = useRef();
  const [commentMessage, setCommentMessage] = useState("");
  const [commentsLoading, setCommentLoading] = useState([]);
  const [commentsData, setCommentsData] = useState([]);
  const [rating, setRating] = useState(0);

  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate);
    // other logic
  };

  //handaling the comment
  const handleComment = async (e) => {
    e.preventDefault();
    const commentData = {
      commentId: commentId.current.value,
      commentName: commentName.current.value,
      commentText: commentText.current.value,
      rating: rating,
    };

    // add product info at mongodb
    try {
      setCommentMessage("");
      const url = `${process.env.REACT_APP_BACKEND_URL}/addComments?email=${currentUser.email}`;
      const option = {
        method: "POST",
        body: JSON.stringify(commentData),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          authorization: `Bearer ${localStorage.getItem("shokhbari-token")}`,
        },
      };
      const response = await fetch(url, option);
      const data = await response.json();
      if (data) {
        setCommentMessage("Your product added into database successfully.");
        commentId.current.value = "";
        commentName.current.value = "";
        commentText.current.value = "";

        window.location.reload();
      }
    } catch (error) {
      console.log("err", error);
    }
  };

  //get comments according to the product id
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        setCommentLoading(true);
        const response = await fetch(
          `${process.env.REACT_APP_BACKEND_URL}/getComment?commentId=${productDetails._id}`
        );
        const data = await response.json();
        setCommentsData(data);
      } catch (error) {
        console.log("err", error);
      }
      setCommentLoading(false);
    };
    if (productDetails) {
      fetchOrders();
    }
  }, [productDetails]);

  //get merchant/seller detials according to the product

  useEffect(() => {
    const fetchFood = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_BACKEND_URL}/marchantDtlsProduct?MproductEmail=` +
            productDetails?.MproductEmail
        );
        const data = await response.json();
        setMerchantDetails(data);
      } catch (error) {
        console.log("err", error);
      }
    };
    fetchFood();
  }, [productDetails]);

  return (
    <>
      <AllHeader />
      <main className="container-fluid singleProduct">
        {products?.length === 0 || productDetails?.length === 0 ? (
          <div
            className="d-flex justify-content-center"
            style={{ padding: "5% 0" }}
          >
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <section className="top-section" data-aos="zoom-in">
            <div className="row">
              <div className="col-md-6 col-12">
                <div className="row productsImagesSection">
                  <div className="col-md-2 col-4 left_1">
                    {productDetails?.variantItems?.map((data, dataIndex) =>
                      data?.variants?.map((variant, variantIndex) => (
                        <span
                          className="img_wrap"
                          onClick={() =>
                            handleColorProduct(
                              variant.colorInput,
                              variant.sameVariantId
                            )
                          }
                          key={`${variantIndex}`}
                        >
                          <LazyLoadImage
                            src={variant?.image}
                            alt=""
                            className="thumbsImg"
                            placeholderSrc={loader}
                            style={{ cursor: "pointer" }}
                          />
                        </span>
                      ))
                    )}
                  </div>
                  <div className="col-md-10 col-8 left_2">
                    {imageAsSelectedColor == "" ? (
                      <LazyLoadImage
                        src={
                          productDetails?.variantItems[0]?.variants[0]?.image
                        }
                        alt="productImage"
                        className="largeThumbs"
                        placeholderSrc={loader}
                      />
                    ) : (
                      <LazyLoadImage
                        src={imageAsSelectedColor}
                        alt="productImage"
                        className="largeThumbs"
                        placeholderSrc={loader}
                      />
                    )}
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-12 productDetails">
                <form
                  onSubmit={handleSizeSubmit}
                  className="productDetailsMain"
                >
                  <span className="productName">{productDetails?.name}</span>
                  <span className="singleProductHr"></span>

                  <aside className="d-flex justify-content-between">
                    <span>
                      Model:<b> {productDetails?.code}</b>
                    </span>
                    <span>
                      Brand - <b>{productDetails?.marchent}</b>
                    </span>
                  </aside>

                  <aside className="productPrice">
                    <p className="productCurrentPrice">
                      Tk. {productDetails?.currentPrice}
                    </p>
                    {productDetails?.oldPrice !== "" &&
                      productDetails?.oldPrice !== 0 && (
                        <div>
                          <s className="oldPrice">
                            Tk. {productDetails?.oldPrice}
                          </s>
                          <span className="discountPercentsize">
                            {(
                              100 -
                              (productDetails?.currentPrice /
                                productDetails?.oldPrice) *
                                100
                            ).toFixed(1)}
                            {"%  off"}
                          </span>
                        </div>
                      )}
                  </aside>
                  <span className="singleProductHr"></span>

                  {productDetails?.stock == "In Stock" ? (
                    <aside className="productAvailability">
                      Availability:
                      <b> {productDetails?.stock}</b>
                    </aside>
                  ) : (
                    <span className="outOfStock">Product is Out Of Stock</span>
                  )}

                  {productDetails?.stock == "In Stock" && (
                    <>
                      <aside className="productColor mt-3">
                        Color Family:
                        {/* color varient */}
                        <div className="radioFullBtn mt-2">
                          <span>
                            {productDetails?.variantItems?.map(
                              (data, dataIndex) =>
                                data?.variants?.map((variant, variantIndex) => (
                                  <span key={`${dataIndex}-${variantIndex}`}>
                                    <input
                                      type="radio"
                                      id={variant?.sameVariantId}
                                      // name={variant[0]}
                                      name={`color-${dataIndex}`}
                                      value={variant?.sameVariantId}
                                      className="radioPoint"
                                      checked={
                                        selectedSameId ===
                                        variant?.sameVariantId
                                      }
                                      onChange={() => {
                                        setSelectedColor(variant.colorInput);
                                      }}
                                      onClick={() =>
                                        handleColorProduct(
                                          variant.colorInput,
                                          variant.sameVariantId
                                        )
                                      }
                                      required
                                    />
                                    <label
                                      htmlFor={variant.sameVariantId}
                                      className="radioBackground"
                                      style={{
                                        backgroundColor: `${variant?.colorInput}`,
                                        border:
                                          selectedSameId ===
                                          variant.sameVariantId
                                            ? "2px solid black"
                                            : "none",
                                      }}
                                    ></label>
                                  </span>
                                ))
                            )}
                          </span>
                        </div>
                      </aside>
                      <div className="customerInputButtons">
                        <aside className="productSizes">
                          <span className="productSizeBody">
                            {selectedColor && (
                              <select
                                id="Campaigns"
                                name="Campaigns"
                                className="input-group form-select sizeOutput"
                                ref={sizeRef}
                                required
                              >
                                <option value="">Select</option>

                                {allSizeWithSelectedColor?.map((data, i) => (
                                  <option key={i} value={data?.size}>
                                    {data?.size}
                                  </option>
                                ))}
                              </select>
                            )}

                            <button type="submit" className="btn submitSize">
                              Confirm Size & Color
                            </button>
                          </span>
                        </aside>
                        <aside className="productAction">
                          <div className="addToCartAndBuyNow">
                            {/* buy now button */}
                            {selectedSize && selectedColor ? (
                              <Link
                                to="/orderReview"
                                className="btn addToCart"
                                onClick={() => handleBuy(productDetails)}
                              >
                                Buy Now
                              </Link>
                            ) : (
                              <button className="btn addToCart d-none">
                                Buy Now
                              </button>
                            )}

                            {/* add to cart button */}
                            {selectedSize && selectedColor ? (
                              <button
                                className="btn addToCart"
                                onClick={() => handleBuy(productDetails)}
                              >
                                Add to Cart
                              </button>
                            ) : (
                              <button className="btn addToCart d-none">
                                Add to Cart
                              </button>
                            )}
                          </div>
                        </aside>
                      </div>
                    </>
                  )}
                </form>
              </div>
            </div>
            <div className="description_section">
              <section className="container-fluid productDescriptionReview">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active descriptionTabs"
                      id="Description-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#Description"
                      type="button"
                      role="tab"
                      aria-controls="Description"
                      aria-selected="false"
                    >
                      <i className="bi bi-card-list"></i> Product Description
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link descriptionTabs"
                      id="review-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#Review"
                      type="button"
                      role="tab"
                      aria-controls="review"
                      aria-selected="false"
                    >
                      <i className="bi bi-pencil-square"></i> Reviews
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link descriptionTabs"
                      id="extraInfo-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#extraInfo"
                      type="button"
                      role="tab"
                      aria-controls="extraInfo"
                      aria-selected="false"
                    >
                      <i className="bi bi-info-circle-fill"></i> Additional info
                    </button>
                  </li>
                </ul>
                <div
                  className="tab-content descriptionTabContent"
                  id="myTabContent"
                >
                  <div
                    className="tab-pane fade show active"
                    id="Description"
                    role="tabpanel"
                    aria-labelledby="Description-tab"
                  >
                    {productDetails?.shortDescription}
                    <br />
                    <br />

                    <div
                      dangerouslySetInnerHTML={{
                        __html: productDetails?.description,
                      }}
                    />

                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginTop: "50px",
                      }}
                    >
                      <img
                        src={merchantDetails[0]?.merchantBusinessLogo}
                        alt=""
                        className="rounded img-fluid"
                        style={{ height: "50px", marginRight: "10px" }}
                      />
                      <span>{merchantDetails[0]?.merchantBusiness}</span>
                    </div>
                  </div>

                  {/* comment section */}
                  <section
                    className="tab-pane fade reviewFormMain"
                    id="Review"
                    role="tabpanel"
                    aria-labelledby="profile-tab"
                  >
                    <div className="product-comments-section">
                      <div className="comments">
                        <span>
                          <b>Comments</b>
                        </span>
                        {commentsData.map((data) => (
                          <div className="singlePerson my-3" key={data?._id}>
                            <span className="commentsName">
                              <i className="bi bi-person-fill"></i>{" "}
                              {data?.commentName}
                            </span>
                            <span className="mx-3">
                              <Rating
                                ratingValue={data?.rating}
                                readonly={true}
                                size={20}
                              />
                            </span>
                            <p>{data?.commentText}</p>
                          </div>
                        ))}
                      </div>

                      {currentUser?.email && (
                        <form className="reviewForm" onSubmit={handleComment}>
                          <div className="mb-3">
                            <Rating
                              onClick={handleRating}
                              ratingValue={rating}
                            />
                          </div>

                          <div className="mb-3">
                            <label htmlFor="id" className="form-label">
                              Id
                            </label>
                            <input
                              type="id"
                              className="form-control"
                              id="id"
                              aria-describedby="idHelp"
                              value={productDetails?._id}
                              readOnly
                              required
                              ref={commentId}
                            />
                          </div>

                          <div className="mb-3">
                            <label htmlFor="email" className="form-label">
                              Your Name
                            </label>
                            <input
                              type="email"
                              className="form-control"
                              id="email"
                              aria-describedby="emailHelp"
                              value={currentUser.displayName}
                              readOnly
                              required
                              ref={commentName}
                            />
                          </div>
                          <div className="mb-3">
                            <label htmlFor="review" className="form-label">
                              Review
                            </label>
                            <textarea
                              type="text"
                              className="form-control"
                              id="review"
                              placeholder="Write your appropriate comments"
                              required
                              ref={commentText}
                            />
                          </div>
                          <button type="submit" className="btn myBtn mb-3">
                            Submit
                          </button>
                        </form>
                      )}
                    </div>
                  </section>
                  <section
                    className="tab-pane fade"
                    id="extraInfo"
                    role="tabpanel"
                    aria-labelledby="extraInfo-tab"
                  >
                    <div className="row">
                      <span className="col-md-6 col-12">
                        <table className="table">
                          <thead>
                            <tr style={{ borderBottom: "2px solid #ffaa00" }}>
                              <td>
                                <b>Delivery</b>
                              </td>
                              <td>
                                <i className="bi bi-info-circle"></i>
                              </td>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <i className="bi bi-truck"></i> Standard
                                delivery (3-7 Days)
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <i className="bi bi-geo"></i> Inside Dhaka (80
                                Tk.)
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <i className="bi bi-geo"></i> Outside Dhaka (120
                                Tk.)
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <i className="bi bi-cash-coin"></i> Cash on
                                delivery available
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <i className="bi bi-tablet"></i> Online payment
                                available. (Card/Mobile banking/Bank)
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </span>
                      <span className="col-12 col-md-6">
                        <table className="table">
                          <thead>
                            <tr style={{ borderBottom: "2px solid #ffaa00" }}>
                              <td>
                                <b>Services</b>
                              </td>
                              <td>
                                <i className="bi bi-gear-wide-connected"></i>
                              </td>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <i className="bi bi-7-circle"></i> 7 Days Happy
                                Return
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <i className="bi bi-shield-slash"></i> Warranty
                                Not Available
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </span>
                    </div>
                  </section>
                </div>
              </section>
            </div>
          </section>
        )}
        <section className="bottom-section">
          <div className="row container-fluid my-5">
            <h1 className="mt-5 mb-2">More Related Products: </h1>
            <hr />
            {selectedChildCategories
              ?.slice(pagination.start, pagination.end)
              ?.map((data) => (
                <div className="col-md-2 mt-3" key={data._id}>
                  <div
                    style={{ height: "360px" }}
                    className="card popularProductCard"
                    onClick={() => setImageAsSelectedColor("")}
                  >
                    <Link
                      to={"/singleProduct/" + data?._id}
                      className="decorationLink"
                    >
                      <LazyLoadImage
                        src={data?.variantItems?.[0]?.variants?.[0]?.image}
                        className="card-img-top img-fluid HomeProductImsize"
                        alt="..."
                      />
                    </Link>
                    <div className="popularProductCardBody mt-3">
                      <p className="ProductTitle mb-4">
                        <span className="ProductName">
                          {data?.name.slice(0, 30)}...
                        </span>
                      </p>
                      <p className="ProductPrice">Tk. {data?.currentPrice}</p>
                      {data?.oldPrice !== "" && data?.oldPrice !== 0 && (
                        <div>
                          <span className="ProductOldPrice">
                            Tk. {data?.oldPrice}/-
                          </span>
                          <span className="discountRate">
                            {(
                              100 -
                              (data?.currentPrice / data?.oldPrice) * 100
                            ).toFixed(1)}
                            %
                          </span>
                        </div>
                      )}
                      <p
                        className="wishlist"
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <span className="wishlistLink">
                          <button className="wishlistLink">
                            <i
                              className={`${
                                wishlist
                                  .map((dt) => dt?._id)
                                  .includes(data?._id) && "wishlistColor"
                              } bi bi-heart-fill`}
                              onClick={() => handleWishlist(data)}
                            ></i>
                            Wishlist
                          </button>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            {/* this is pagination  */}
            <Pagination
              showPerPage={showPerPage}
              onPaginationChange={onPaginationChange}
              total={selectedChildCategories?.length}
            />
          </div>
        </section>

        {alertmsg && (
          <div role="alert" className="alert_addToCart">
            Product Added To Cart..!
          </div>
        )}
      </main>

      <AllFooter />
    </>
  );
};

export default SingleProductPsize;
