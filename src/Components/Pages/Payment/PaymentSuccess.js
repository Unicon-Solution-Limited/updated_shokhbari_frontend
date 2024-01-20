import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CartProvider } from "../../AllContextApi/CartContext";
import "./PaymentSuccess.css";

const PaymentSuccess = () => {
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

  const { valId } = useParams();

  return (
    <div className="successPageBody">
      <div className="successMessageBody">
        <h1>Your Order has been received.</h1>
        <br />
        <img src="https://i.ibb.co/q9nzqmV/success.gif" alt="OK" />
        <br />
        <br />
        <h3>Thank You for Purchase!</h3>
        <h6>Your Product Id: {valId}</h6>
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

export default PaymentSuccess;
