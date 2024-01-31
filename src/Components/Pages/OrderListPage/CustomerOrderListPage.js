// This page for Customer Order List. Which show specific order of specific customer.

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../Authentication/AuthContext/AuthContext";
import "./OrderListPage.css";

const CustomerOrderListPage = () => {
  const { currentUser } = useAuth();
  const [cusOrders, setcusOrders] = useState([]);
  const [loading, setLoading] = useState(false);

  // this setState for reloading page
  const [removeId, setRemoveId] = useState(0);
  const [deleteMessage, setDeleteMessage] = useState("");

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `${process.env.REACT_APP_BACKEND_URL}/customerOrders?email=${currentUser.email}`
        );
        const data = await response.json();
        setcusOrders(data);
      } catch (error) {
        console.log("err", error);
      }
      setLoading(false);
    };
    fetchOrders();
  }, [currentUser.email, setLoading, removeId]);

  //Deleteing the product form product list
  const orderDelete = async (orederId) => {
    try {
      setDeleteMessage("");
      const url = `${process.env.REACT_APP_BACKEND_URL}/deleteOrder/${orederId}?email=${currentUser.email}`;
      const option = {
        method: "DELETE",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          authorization: `Bearer ${localStorage.getItem("shokhbari-token")}`,
        },
      };
      const response = await fetch(url, option);
      const data = await response.json();
      if (data) {
        setDeleteMessage("Order deleted successfully");
        // this setState for reloading page
        setRemoveId(orederId);
        setTimeout(() => {
          setDeleteMessage("");
        }, 6000);
      }
    } catch (error) {
      console.log("err", error);
    }
  };

  return (
    <>
      <div>
        {!cusOrders.length && (
          <div className="mt-5">
            <h1 className="text-center">You Have No Orders......!</h1>
          </div>
        )}
      </div>

      {cusOrders?.map((item, index) =>
        item?.payment_method == "Cash On Delivery" ||
        (item?.payment_method == "Online Payment" && item?.val_id) ? (
          <div key={index}>
            <section className="customerOrderList my-3">
              <div className="customerOrderListHead d-flex justify-content-between mb-3">
                <span className="customerOrderHeadText">
                  Order ID: <b>{item?.tran_id}</b>
                </span>
                <span className="customerOrderHeadText">
                  Placed on - Date: <b> {item?.orderTime.slice(4, 15)} </b>
                  Time: <b>{item?.orderTime.slice(16, 21)}</b>
                </span>
                <span className="customerOrderHeadText">
                  Estimated Delivery Next 5-7 Days
                </span>
              </div>

              {/* this is status bar */}
              <section className="statusMainSection mb-3">
                {item?.product_status === "Processing" ||
                item?.product_status?.value === "Processing" ? (
                  <>
                    <div className="statusbtnActive">
                      Processing
                      <span className="hoverText">
                        Your Order is Processing....
                      </span>
                    </div>
                    <span className="statusHr"></span>
                    <span className="statusbtn">Shipped</span>
                  </>
                ) : (
                  <>
                    <span className="statusbtnActive">Processing</span>
                    <span className="statusHrActive"></span>
                  </>
                )}
                {item?.product_status?.value === "Shipped" ? (
                  <>
                    <span className="statusHrActive"></span>
                    <div className="statusbtnActive">
                      Shipped
                      <span className="hoverText">
                        Your order is on the way.
                      </span>
                    </div>
                    <span className="statusHr"></span>
                  </>
                ) : (
                  <></>
                )}
                {item?.product_status?.value === "Delivered" ? (
                  <>
                    <span className="statusbtnActive">Shipped</span>
                    <span className="statusHrActive"></span>
                    <div className="statusbtnActive">
                      Delivered
                      <span className="hoverText">
                        Your order is successfully delivered.
                      </span>
                    </div>
                  </>
                ) : (
                  <>
                    <span className="statusHr"></span>
                    <span className="statusbtn">Delivered</span>
                  </>
                )}
              </section>

              <div className="row customerOrderListBody">
                {item.orderedData?.map((c, i) => (
                  <div className="col-md-4" key={i}>
                    <div className="customerOrdersProducts">
                      <img
                        src={c.imageAsSelectedColor}
                        alt="ProductImage"
                        className="customerOrdersProductsImg"
                      />
                      <aside className="detailsOfProduct">
                        <span>{c?.name}</span>
                        <span>SKU : {c?.code}</span>
                        {/* <span>Color : {c?.mainColor}</span> */}
                        <span className="d-flex align-items-center">
                          Selected Color:
                          <div
                            style={{
                              marginLeft: "5px",
                              height: "15px",
                              width: "40px",
                              borderRadius: "5px",
                              backgroundColor: `${c?.selectedColor}`,
                              border: "1px solid black",
                            }}
                          ></div>
                        </span>
                        <span>Size : {c?.selectedSize}</span>
                        <span>Price : {c?.currentPrice}</span>
                      </aside>
                      <span>Quantity : {c?.quantity}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="customerOrderListFooter d-flex justify-content-between mt-3">
                <span>
                  Total Payment Amount: tk. <b> {item?.total_amount}/-</b>
                </span>

                <span>
                  Payment Method: <b> {item?.payment_method}</b>
                </span>
                <span>
                  {item?.product_status === "Processing" ||
                  item?.product_status?.value === "Processing" ? (
                    <>
                      <button
                        className="orderCancel"
                        onClick={() => orderDelete(item?._id)}
                      >
                        Cancel Order
                      </button>
                    </>
                  ) : (
                    <>
                      <button className="orderCancelDisabled">
                        Cancel Order
                      </button>
                    </>
                  )}
                </span>
              </div>
            </section>
            {/* delete message for order */}
            <h5 className="orderCancleMsg">{deleteMessage}</h5>
          </div>
        ) : (
          ""
        )
      )}
      {/*Data Loading Message*/}
      {loading && (
        <div className="d-flex justify-content-center mt-5">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
    </>
  );
};

export default CustomerOrderListPage;
