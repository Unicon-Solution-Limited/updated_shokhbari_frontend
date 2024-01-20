import React, { createContext, useEffect, useState } from "react";

export const OrderProvider = createContext();

const OrderContextAdmin = ({ children }) => {
  const [cusOrders, setCusOrders] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `${process.env.REACT_APP_BACKEND_URL}/allOrders`
        );
        const data = await response.json();
        setCusOrders(data);
      } catch (error) {
        console.log("err", error);
      }
      setLoading(false);
    };
    fetchOrders();
  }, []);
  return (
    <div>
      <OrderProvider.Provider
        value={[cusOrders, setCusOrders, loading, setLoading]}
      >
        {children}
      </OrderProvider.Provider>
    </div>
  );
};

export default OrderContextAdmin;
