import React, { createContext, useEffect, useState } from "react";

export const CartProvider = createContext();

// get cart-data from localStorage
const getLocalStorageCartData = () => {
  let cartData;
  if (typeof window !== "undefined") {
    const localData = JSON.parse(localStorage.getItem("cart")) || [];
    cartData = localData;
  }
  return cartData;
};

// get cart-total from localStorage
const getLocalStorageCartTotal = () => {
  let cartTotal;
  if (typeof window !== "undefined") {
    const localData = JSON.parse(localStorage.getItem("cartTotal")) || [];
    cartTotal = localData;
  }
  return cartTotal;
};

const CartContext = ({ children }) => {
  const [cartData, setCartData] = useState(getLocalStorageCartData());
  const [cartTotal, setCartTotal] = useState(getLocalStorageCartTotal());
  const [orderData, setOrderData] = useState([]);
  //coupon releted state
  const [couponTk, setCouponTk] = useState(0);
  const [couponMessage, setCouponMessage] = useState(false);

  // save cart-data to localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("cart", JSON.stringify(cartData || []));
    }
  }, [cartData]);

  // save cartTotal to localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("cartTotal", JSON.stringify(cartTotal || []));
    }
  }, [cartTotal]);
  return (
    <div>
      <CartProvider.Provider
        value={[
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
        ]}
      >
        {children}
      </CartProvider.Provider>
    </div>
  );
};

export default CartContext;
