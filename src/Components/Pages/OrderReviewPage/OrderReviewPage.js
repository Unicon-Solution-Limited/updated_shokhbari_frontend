import React, { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { CartProvider } from "../../AllContextApi/CartContext";
import AllHeader from "../../Shared/Header/AllHeader";
import OrderReviewsDetails from "./OrderReviewsDetails";
import "./OrderReviewPage.css";
import AllFooter from "./../../Shared/Footer/AllFooter";
import Aos from "aos";
import "aos/dist/aos.css";

const OrderReviewPage = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  const [
    cartData,
    setCartData,
    cartTotal,
    setCartTotal,
    orderData,
    setOrderData,
    couponTk,
    setCouponTk,
    couponMessage,
    setCouponMessage,
  ] = useContext(CartProvider);
  const [cartProduct, setcartProduct] = useState(cartData);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isCartEmpty, setIsCartEmpty] = useState(false);
  // setCartTotal(totalPrice);

  //setting the total price into cartTotal context
  useEffect(() => {
    setCartTotal(totalPrice);
  }, [cartTotal, totalPrice]);

  //calling the sumOfPrice function
  useEffect(() => {
    sumOfPrice();
  }, [cartData]);

  //  Product price calculation
  const sumOfPrice = () => {
    let total = 0;
    let subTotal = 0;
    if (!cartData.length) {
      setTotalPrice(0);
      setIsCartEmpty(true);
    }
    cartData.map((product) => {
      total = product.currentPrice * product.quantity;
      subTotal = subTotal + total;
      setTotalPrice(subTotal);
    });
  };

  //setting the total weight into the local stroage
  const [totalWeight, setTotalWeight] = useState(0);
  // save TOTAL WEIGHT to the localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("totalWeight", JSON.stringify(totalWeight || []));
    }
  }, [totalWeight, cartTotal, cartData]);

  //calling the sumOfPrice function
  useEffect(() => {
    sumOfWeight();
  }, [totalWeight, cartTotal, cartData]);

  //sumOf weight calculation
  const sumOfWeight = () => {
    let totalWeight = 0;
    let subTotalWeight = 0;
    if (!cartData.length) {
      setTotalWeight(0);
      setIsCartEmpty(true);
    }
    cartData.map((product) => {
      totalWeight = parseInt(product?.weight) * parseInt(product?.quantity);
      subTotalWeight = subTotalWeight + totalWeight;
      setTotalWeight(subTotalWeight);
    });
  };

  // Handle Cart Items quantity with plus minus icon
  const handlePlusMinus = (imageAsSelected, quantity) => {
    let newCart;
    cartData.map((item) => {
      if (imageAsSelected === item.imageAsSelectedColor) {
        newCart = { ...item, quantity: quantity };
      }
    });
    let newData = cartData.filter(
      (item) => item.imageAsSelectedColor != imageAsSelected
    );
    newData = [...newData, newCart];
    setCartData(newData);
  };

  // Delete items from cart
  const deleteItem = (selectedimage) => {
    let newData = cartData.filter(
      (item) => item.imageAsSelectedColor != selectedimage
    );
    setCartData(newData);
    setcartProduct(newData);
    window.location.reload();
  };

  //handle coupon code
  const [coupon1, setcoupon1] = useState("less10");
  const couponRef = useRef();

  useEffect(() => {
    setCouponTk(0);
    setCouponMessage("");
  }, [setCouponMessage, setCouponTk, coupon1]);

  const handleCouponSubmit = (e) => {
    e.preventDefault();
    if (coupon1 === couponRef.current.value) {
      // let price = couponTk - 100;
      // setcouponTk(Math.round(price));
      setCouponTk(100);
      setCouponMessage(true);
    } else {
      setCouponTk(0);
      setCouponMessage(false);
    }
  };

  return (
    <>
      <AllHeader />
      {!isCartEmpty && (
        <main className="container-fluid">
          <div className="row orderReviewBody">
            <div className="col-md-8">
              <div className="orderReviewCartBody">
                <h5 className="orderReviewCartBodyHeading">Your Cart Items</h5>
                <div className="orderReviewCartBodyMain">
                  <div className="cartProducts">
                    {cartProduct.map((cartProductData) => (
                      <OrderReviewsDetails
                        key={cartProductData._id}
                        cartProductData={cartProductData}
                        handlePlusMinus={handlePlusMinus}
                        deleteItem={deleteItem}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 orderReviewSubtotalBody">
              <section className="subtotalBody" data-aos="zoom-in">
                <aside>
                  <span className="text">Product(s) Total Price = </span>
                  <span>Tk. {totalPrice}</span>
                </aside>
              </section>

              <section className="couponForm mt-3" data-aos="zoom-in">
                {!couponMessage && (
                  <>
                    <form onSubmit={handleCouponSubmit}>
                      <div className="CouponCode d-flex">
                        <input
                          type="text"
                          className="form-control couponCodeInput"
                          id="coupon"
                          size="40"
                          ref={couponRef}
                          placeholder="Enter Coupon/Voucher code for Discount"
                        />
                        <button type="submit" className="btn myBtn">
                          Apply
                        </button>
                      </div>
                    </form>
                  </>
                )}
                {couponMessage && (
                  <div className="CouponCode">
                    <span style={{ color: "green" }}>
                      Your Coupon Successfully applied.
                    </span>
                    <aside
                      className="subtotalBody mt-2 afterCouponApplied"
                      data-aos="zoom-in"
                    >
                      <s>Tk. {totalPrice}</s>
                      <span>Tk. {totalPrice - couponTk}</span>
                    </aside>
                  </div>
                )}
              </section>
              <section className="subtotalBody mt-3" data-aos="zoom-in">
                <aside>
                  <span className="text">Product Total Weight =</span>
                  <span>
                    {" "}
                    {totalWeight / 1000}kg ({totalWeight} gm.)
                  </span>
                  <br />
                </aside>
              </section>

              <section className="subtotalBody subtotalQuotation">
                <i className="bi bi-info-circle-fill"></i> Charge Will applied
                to product Weight more than 1kg(1000gm.)
              </section>

              {/* total Weight warning */}
              {totalWeight > 15000 && (
                <section className="subtotalBody weightWarning mt-3">
                  <i className="bi bi-exclamation-triangle-fill"></i>{" "}
                  Sorry......! We are unable to carry over 15kg in a single
                  order. You can make another order to purchase your remaining
                  products.
                </section>
              )}
              <Link to="/checkout">
                <button
                  className={`btn myBtn checkoutButton ${
                    totalWeight > 15000 && "d-none"
                  }`}
                >
                  proceed to checkout
                </button>
              </Link>
            </div>
          </div>
        </main>
      )}

      {isCartEmpty && (
        <section className="text-center my-4">
          <h2 className="text-danger">Your Cart is Empty</h2>
          <br />
          <Link to="/" className="btn myBtn">
            Back to Home
          </Link>
        </section>
      )}
      <AllFooter />
    </>
  );
};

export default OrderReviewPage;
