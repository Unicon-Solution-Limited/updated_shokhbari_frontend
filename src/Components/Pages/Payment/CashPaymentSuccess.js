import { useContext, useEffect, useState } from "react";
import { CartProvider } from "../../AllContextApi/CartContext";
import "./PaymentSuccess.css";

const CashPaymentSuccess = () => {
  const [
    cartData,
    setCartData,
    cartTotal,
    setCartTotal,
    orderData,
    setOrderData,
  ] = useContext(CartProvider);
  useEffect(() => {
    setCartData([]);
    setCartTotal(0);
    setOrderData([]);
  }, [setCartData, setCartTotal, setOrderData]);

  return (
    <div className="successPageBody">
      <div className="successMessageBody">
        <h1>Your Order has been received.</h1>
        <h2>Please Call to confirm your order at: (+88) 01841-477361</h2>
        <br />
        <img src="https://i.ibb.co/q9nzqmV/success.gif" alt="OK" />
        <br />
        <br />
        <h3>Thank You for Purchase!</h3>
        <h6>Payment Method: Cash On Delivery</h6>
        <h6>
          You Will receive an order confirmation email with details of your
          order.
        </h6>
        <br />
        <div className="successBodyButtons">
          <a className="btn myBtn" href="/">
            Continue Shopping
          </a>
          <a className="btn myBtn" href="/dashboard">
            Your Orders
          </a>
        </div>
      </div>
    </div>
  );
};

export default CashPaymentSuccess;
