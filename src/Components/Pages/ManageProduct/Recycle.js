// This Component For Admin. Here is the Structure of All Order List.
import React, { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../OrderListPage/OrderListPage.css";
import { OrderProvider } from "./../../AllContextApi/OrderContextAdmin";
import { useAuth } from "../../Authentication/AuthContext/AuthContext";

const Recycle = () => {
  const [cusOrders] = useContext(OrderProvider);
  const { currentUser } = useAuth();

  // this setState for reloading page
  const [deleteMessage, setDeleteMessage] = useState("");

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
        setTimeout(() => {
          setDeleteMessage("");
          window.location.reload();
        }, 1000);
      }
    } catch (error) {
      console.log("err", error);
    }
  };

  return (
    <div>
      <div>
        {/* delete message for order */}
        <h5 className="orderCancleMsg pt-3">{deleteMessage}</h5>
        {/* empty message */}
        <div>
          {!cusOrders.length && (
            <div className="mt-5">
              <h1 className="text-center">No Order In Stock......!</h1>
            </div>
          )}
        </div>

        {cusOrders?.map((item, index) =>
          item?.payment_method == "Online Payment" && !item?.val_id ? (
            <section className="customerOrderList mt-2" key={index}>
              <div className="customerOrderListHead d-flex justify-content-between mb-3">
                <span className="customerOrderHeadText">
                  Order ID: <b>{item?.tran_id}</b>
                </span>
                <span className="customerOrderHeadText mx-3">
                  Placed on - Date: <b> {item?.orderTime.slice(4, 15)} </b>
                  Time: <b>{item?.orderTime.slice(16, 21)}</b>
                </span>
                <button
                  className="btn orderDeleteButton"
                  onClick={() => orderDelete(item?._id)}
                >
                  <i className="bi bi-trash"></i>
                </button>
              </div>
              <div className="row customerOrderListBody">
                <div className="col-md-5">
                  <div className="customerOrdersProcess"></div>
                  {item?.orderedData?.map((c, i) => (
                    <div className="customerOrdersProducts" key={i}>
                      <img
                        src={c.imageAsSelectedColor}
                        alt="ProductImage"
                        className="customerOrdersProductsImg"
                      />
                      <aside className="detailsOfProduct">
                        <span>
                          <b>{c?.name}</b>
                        </span>
                        <span>
                          <b>SKU : </b>
                          {c?.code}
                        </span>
                        <span>
                          <b>Color : </b>
                          {c?.mainColor}
                        </span>
                        <span>
                          <b>Size : </b>
                          {c?.selectedSize}
                        </span>
                        <span>
                          <b>Price : </b>
                          {c?.currentPrice}
                        </span>
                      </aside>
                      <span>
                        <b>Quantity : </b> {c?.quantity}
                      </span>
                    </div>
                  ))}
                  <table className="table table-hover table-bordered">
                    <tbody>
                      <tr>
                        <td>Delivery Charge: </td>
                        <td>{item?.delivery_charge}</td>
                      </tr>
                      <tr>
                        <td>Discount Amount: </td>
                        <td>{item?.discount}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="col-md-7">
                  <div className="table-responsive customerDetails">
                    <h6 className="customerInfoHeader">Customer Info</h6>
                    <table className="table table-hover table-bordered">
                      <tbody>
                        <tr>
                          <td>Name:</td>
                          <td>{item?.cus_name}</td>
                        </tr>
                        <tr>
                          <td>Address</td>
                          <td>
                            {item?.cus_add1}, {item?.cus_city}-
                            {item?.cus_postcode}.
                          </td>
                        </tr>
                        <tr>
                          <td>Email</td>
                          <td>{item?.cus_email}</td>
                        </tr>
                        <tr>
                          <td>Phone</td>
                          <td>{item?.cus_phone}</td>
                        </tr>
                        <tr>
                          <td>Additional Info:</td>
                          <td>{item?.extra_information}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="customerOrderListFooter d-flex justify-content-between mt-3">
                <span>
                  Total Payment Amount: tk. <b> {item?.total_amount}/-</b>
                </span>
                <span>
                  Payment Method: <b>{item?.payment_method}</b>
                </span>
                <span>
                  <Link to={"/invoice/" + item?._id} target="_blank">
                    <button className="btn invoiceBtn">Invoice</button>
                  </Link>
                </span>
              </div>
            </section>
          ) : (
            ""
          )
        )}
      </div>

      {/* <table className="table">
        <thead className="thead-light">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Product Name</th>
            <th scope="col">Product Id</th>
            <th scope="col">Order Id</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>1587</td>
            <td>Delete</td>
          </tr>
        </tbody>
      </table> */}
    </div>
  );
};

export default Recycle;
