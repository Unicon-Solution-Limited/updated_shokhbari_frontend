import React, { useState, useContext, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { ProductProvider } from "../../AllContextApi/ProductsContext";
import { Link } from "react-router-dom";
import AllHeader from "./../../Shared/Header/AllHeader";
import AllFooter from "./../../Shared/Footer/AllFooter";
import "./AllProductsDisplay.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Pagination from "./../pagination/pagination";
import { WishlistProvider } from "./../../AllContextApi/WishlistContext";
import loader from "../../Image/loder.gif";

const DisplayProduct = () => {
  const [allproducts, setAllProducts] = useState();
  const { childCatvalue } = useParams();
  const [filterdArray, setFilteredArray] = useState([]);
  const [newFilteredArray, setNewFilteredArray] = useState([]);
  // const [products] = useContext(ProductProvider);
  const { search } = useLocation();
  const searchParems = new URLSearchParams(search);
  const [filteredPrice, setFilteredPrice] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  //getting the all product from backend
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `${process.env.REACT_APP_BACKEND_URL}/allProduct`
        );
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.log("err", error);
      }
      setLoading(false);
    };
    fetchProduct();
  }, []);

  const min_price =
    searchParems.get("min_price") === null ? "" : searchParems.get("min_price");
  const max_price =
    searchParems.get("max_price") === null ? "" : searchParems.get("max_price");

  // (releted product)sending the specific product child Categories to the localStroage for color varient to the single product page by context api
  const handleSecectedProductCode = (productChildCategories) => {
    localStorage.setItem("subChild", productChildCategories);
  };

  //matichg the childCatValue form parems with products
  useEffect(() => {
    setAllProducts(products);
    let response = products.filter(
      (pd) => pd?.childCategories == childCatvalue
    );
    setFilteredArray(response);
    setNewFilteredArray(response);
  }, [childCatvalue, products]);

  useEffect(() => {
    filterProducts();
  }, [products, allproducts]);

  //filter price and set it to the new Filter arrary state
  const filterProducts = () => {
    // check minimum one entry occur
    if (min_price.length || max_price.length) {
      const min = parseFloat(min_price);
      const max = parseFloat(max_price);

      // filter products with these conditions
      const filtered = filterdArray.filter((product) => {
        // if min price > product price get product
        if (Number(min) > 0 && Number(min) > Number(product?.currentPrice)) {
          return false;
        }

        // max price max price < product price get product
        if (Number(max) > 0 && Number(max) < Number(product?.currentPrice)) {
          return false;
        }

        return true;
      });
      // set products
      setNewFilteredArray(filtered);
      setFilteredPrice(filtered);
    }
  };

  //filter the color item form filterdArray state and else ta filterdPrice mani price filter krer pore
  const handleColor = (colorValue) => {
    if (filteredPrice?.length === 0) {
      const result = filterdArray?.filter((currentData) => {
        return currentData?.variantItems?.some((variantItem) =>
          variantItem?.variants?.some(
            (variant) => variant?.color === colorValue.toString()
          )
        );
      });
      setNewFilteredArray(result);
    } else {
      const result = filteredPrice?.filter((currentData) => {
        return currentData?.variantItems?.some((variantItem) =>
          variantItem?.variants?.some(
            (variant) => variant.color === colorValue.toString()
          )
        );
      });
      setNewFilteredArray(result);
    }
  };

  //SIZE filtering item form filterdArray state and else ta filterdPrice mani price filter krer pore
  const handleSize = (sizeValue) => {
    if (filteredPrice?.length === 0) {
      const result = filterdArray?.filter((currentData) => {
        return currentData?.size == sizeValue.toString();
      });
      setNewFilteredArray(result);
    } else {
      const result = filteredPrice?.filter((currentData) => {
        return currentData?.size == sizeValue.toString();
      });
      setNewFilteredArray(result);
    }
  };

  //filter the brand item form filterdArray state and else ta filterdPrice mani price filter krer pore
  const handleBrand = (brandValue) => {
    if (filteredPrice?.length === 0) {
      const result = filterdArray.filter((currentData) => {
        return currentData?.marchent == brandValue.toString();
      });
      setNewFilteredArray(result);
    } else {
      const result = filteredPrice.filter((currentData) => {
        return currentData?.marchent == brandValue.toString();
      });
      setNewFilteredArray(result);
    }
  };

  //filtering brand to remove the same name/remove duplicate item
  const getAllColors = () => {
    const allColors = [];
    const uniqueColors = [];
    filterdArray?.forEach((product) => {
      product.variantItems.forEach((variantItem) => {
        variantItem.variants.forEach((variant) => {
          allColors.push(variant.color);
          if (!uniqueColors.includes(variant.color)) {
            uniqueColors.push(variant.color);
          }
        });
      });
    });
    return { allColors, uniqueColors };
  };
  const { uniqueColors } = getAllColors();

  //filtering size to remove the same name/remove duplicate item
  const uniqueSize = filterdArray?.reduce((finalArray, current) => {
    let obj = finalArray.find((item) => item?.size === current?.size);
    if (obj) {
      return finalArray;
    }
    return finalArray.concat([current]);
  }, []);

  //filtering brand to remove the same name/remove duplicate item
  const uniqueMarchent = filterdArray?.reduce((finalArray, current) => {
    let obj = finalArray.find((item) => item?.marchent === current?.marchent);
    if (obj) {
      return finalArray;
    }
    return finalArray.concat([current]);
  }, []);

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
      <main className="row displayProduct">
        {/* Sidebar - This is the filtering color, size, price, and Brand */}
        <section className="mobile_offcanvas_filter">
          <p>
            Filter Product <i className="bi bi-chevron-double-right"></i>
          </p>{" "}
          <i
            className="bi bi-filter-right filter_icon"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasRight"
            aria-controls="offcanvasRight"
          ></i>
        </section>
        {/* off canvas */}
        <div
          className="offcanvas offcanvas-end offcanvas_for_mobile"
          tabindex="-1"
          id="offcanvasRight"
          aria-labelledby="offcanvasRightLabel"
        >
          <div className="offcanvas-header">
            <button
              type="button"
              className="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <section className="col-md-2 actionButtonDisplay">
              {/* product price filter*/}
              <b>
                Price
                <hr className="filterHead" />
              </b>
              <form method="GET" className="d-flex">
                <input
                  defaultValue={min_price}
                  name="min_price"
                  placeholder="Min"
                  type="number"
                  className="price-input"
                />
                &nbsp;
                <input
                  defaultValue={max_price}
                  name="max_price"
                  placeholder="Max"
                  type="number"
                  className="price-input"
                />
                &nbsp;
                <button type="submit" className="btn go">
                  Go
                </button>
              </form>
              <br />

              {/* filtering the unique color */}
              <div className="colorAction">
                <b className="text-bold">
                  Color <hr className="filterHead" />
                </b>
                {uniqueColors?.map((filterColor) => (
                  <div
                    key={filterColor?._id}
                    onClick={() => handleColor(`${filterColor}`)}
                    className="colorCheckbox"
                  >
                    <input
                      type="radio"
                      id={filterColor}
                      name="color"
                      className="radio"
                    />{" "}
                    <label htmlFor={filterColor}>{filterColor}</label>
                  </div>
                ))}
              </div>
              <br />
              {/* filtering the unique size */}
              <div className="colorAction">
                <b className="text-bold">
                  Size <hr className="filterHead" />
                </b>

                {uniqueSize?.map((filterSize) => (
                  <div
                    key={filterSize?._id}
                    onClick={() => handleSize(`${filterSize?.size}`)}
                    className="colorCheckbox"
                  >
                    <input
                      type="radio"
                      id={filterSize?.size}
                      name="size"
                      className="radio"
                    />{" "}
                    <label htmlFor={filterSize?.size}>{filterSize?.size}</label>
                  </div>
                ))}
              </div>
              <br />
              {/* filtering the unique brand/marchent */}
              <div className="brandAction">
                <b>
                  Brand <hr className="filterHead" />
                </b>

                {uniqueMarchent?.map((filterBrand) => (
                  <div
                    key={filterBrand?._id}
                    onClick={() => handleBrand(`${filterBrand?.marchent}`)}
                    className="colorCheckbox"
                  >
                    <input
                      type="radio"
                      id={filterBrand?.marchent}
                      name="brand"
                      className="radio"
                    />{" "}
                    <label htmlFor={filterBrand?.marchent}>
                      {filterBrand?.marchent}
                    </label>
                  </div>
                ))}
              </div>
              <br />
            </section>
          </div>
        </div>

        {/* this is for pc filtering */}
        <section className="col-md-2 actionButtonDisplay_for_PC">
          {/* product price filter*/}
          <b>
            Price
            <hr className="filterHead" />
          </b>
          <form method="GET" className="d-flex">
            <input
              defaultValue={min_price}
              name="min_price"
              placeholder="Min"
              type="number"
              className="price-input"
            />
            &nbsp;
            <input
              defaultValue={max_price}
              name="max_price"
              placeholder="Max"
              type="number"
              className="price-input"
            />
            &nbsp;
            <button type="submit" className="btn go">
              Go
            </button>
          </form>

          <br />

          {/* filtering the unique color */}
          <div className="colorAction">
            <b className="text-bold">
              Color <hr className="filterHead" />
            </b>
            {uniqueColors?.map((filterColor, i) => (
              <div
                key={i}
                onClick={() => handleColor(`${filterColor}`)}
                className="colorCheckbox"
              >
                <input
                  type="radio"
                  id={filterColor + "a"}
                  name="color"
                  className="radio"
                />{" "}
                <label htmlFor={filterColor + "a"}>{filterColor}</label>
              </div>
            ))}
          </div>
          <br />
          {/* filtering the unique size */}
          <div className="colorAction">
            <b className="text-bold">
              Size <hr className="filterHead" />
            </b>

            {uniqueSize?.map((filterSize) => (
              <div
                key={filterSize?._id}
                onClick={() => handleSize(`${filterSize?.size}`)}
                className="colorCheckbox"
              >
                <input
                  type="radio"
                  id={filterSize?.size + "a"}
                  name="size"
                  className="radio"
                />{" "}
                <label htmlFor={filterSize?.size + "a"}>
                  {filterSize?.size}
                </label>
              </div>
            ))}
          </div>
          <br />
          {/* filtering the unique brand/merchant */}
          <div className="brandAction">
            <b>
              Brand <hr className="filterHead" />
            </b>

            {uniqueMarchent?.map((filterBrand) => (
              <div
                key={filterBrand?._id}
                onClick={() => handleBrand(`${filterBrand?.marchent}`)}
                className="colorCheckbox"
              >
                <input
                  type="radio"
                  id={filterBrand?.marchent + "a"}
                  name="brand"
                  className="radio"
                />{" "}
                <label htmlFor={filterBrand?.marchent + "a"}>
                  {filterBrand?.marchent}
                </label>
              </div>
            ))}
          </div>
          <br />
        </section>

        {/* Products */}
        <section className="col-md-10 productContentDisplay">
          {newFilteredArray && newFilteredArray.length === 0 ? (
            <div className="d-flex justify-content-center mt-3">
              <div role="status">
                <h3>No Product Found...</h3>
              </div>
            </div>
          ) : (
            <aside className="row">
              {newFilteredArray
                ?.slice(pagination.start, pagination.end)
                ?.map((value) => (
                  <div
                    className="col-6 col-md-2 product_display_card_main my-2"
                    key={value?._id}
                  >
                    <div className="card productDisplayCard">
                      <Link
                        to={"/singleProduct/" + value?._id}
                        className="decorationLink linkImg"
                        onClick={() =>
                          handleSecectedProductCode(value?.childCategories)
                        }
                      >
                        <LazyLoadImage
                          src={value?.variantItems?.[0]?.variants?.[0]?.image}
                          className="card-img-top img-fluid productPageImg"
                          alt="ProductImage"
                          placeholderSrc={loader}
                        />
                      </Link>
                      <div className="productDisplayCardBody mt-3">
                        <p className="ProductName">
                          {value?.name.slice(0, 30)}....
                        </p>
                        <p className="ProductPrice">
                          Tk. {value?.currentPrice}/-
                        </p>
                        {value?.oldPrice !== "" && value?.oldPrice !== 0 && (
                          <div>
                            <span className="ProductOldPrice">
                              Tk. {value?.oldPrice}/-
                            </span>
                            <span className="discountRate">
                              {(
                                100 -
                                (value?.currentPrice / value?.oldPrice) * 100
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
                                  .includes(value?._id) && "wishlistColor"
                              } bi bi-heart-fill`}
                              onClick={() => handleWishlist(value)}
                            ></i>
                            Wishlist
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              <Pagination
                showPerPage={showPerPage}
                onPaginationChange={onPaginationChange}
                total={newFilteredArray?.length}
              />
            </aside>
          )}
        </section>
      </main>
      <AllFooter />
    </>
  );
};

export default DisplayProduct;
