// This Component For Admin. Here is the Structure of All Order List.
import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./OrderListPage.css";
import { OrderProvider } from "./../../AllContextApi/OrderContextAdmin";
import { useRef } from "react";
import { useAuth } from "../../Authentication/AuthContext/AuthContext";

const AllOrderList = () => {
  const [cusOrders] = useContext(OrderProvider);
  const [statusMessage, setStatusMessage] = useState(false);
  // this setState for reloading page
  const [deleteMessage, setDeleteMessage] = useState("");
  const { currentUser } = useAuth();

  // update status done/progress
  const handleStatusChange = async (e, orderId) => {
    const value = e.target.value;
    try {
      const url = `${process.env.REACT_APP_BACKEND_URL}/updateStatus/${orderId}?email=${currentUser.email}`;
      const option = {
        method: "PATCH",
        body: JSON.stringify({ value }),
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${localStorage.getItem("shokhbari-token")}`,
        },
      };
      await fetch(url, option);
    } catch (error) {
      console.log(error);
    }
    setStatusMessage(true);
  };

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

  const [remark, setRemark] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [remarkMsg, setRemarkMsg] = useState("");

  //remark
  const handleRemark = (e) => {
    e.preventDefault();
    // setRemark(remarkRef.current.value);
    setRemarkMsg("Remark Successfully added");
    localStorage.setItem("remark", JSON.stringify(remark || []));
    setTimeout(() => {
      setRemarkMsg("");
    }, 2000);
  };

  //selected color
  const handleSelectedColor = (e) => {
    e.preventDefault();
    setRemarkMsg("Color Successfully added");
    localStorage.setItem("selectedColor", JSON.stringify(selectedColor || []));
    setTimeout(() => {
      setRemarkMsg("");
    }, 2000);
  };

  return (
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

      {/* status message */}
      {statusMessage && (
        <div role="alert" className="alert">
          Order Status successfully updated..!
        </div>
      )}

      {cusOrders?.map((item, index) =>
        item?.payment_method == "Cash On Delivery" ||
        (item?.payment_method == "Online Payment" && item?.val_id) ? (
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
                      {/* <span>
                        <b>Color : </b>
                        {c?.mainColor}
                      </span> */}

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

                    <tr>
                      <td>Color: </td>
                      <td>
                        <div className="input-group">
                          <form onSubmit={handleSelectedColor}>
                            <div className="d-flex">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Color"
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                                onChange={(e) =>
                                  setSelectedColor(e.target.value)
                                }
                                required
                              />
                              <button
                                className="input-group-text btn myBtn"
                                type="submit"
                              >
                                Submit
                              </button>
                            </div>
                          </form>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td>Remark: </td>
                      <td>
                        <div className="input-group">
                          <form onSubmit={handleRemark}>
                            <div className="d-flex">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Remark"
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                                onChange={(e) => setRemark(e.target.value)}
                                required
                              />
                              <button
                                className="input-group-text btn myBtn"
                                type="submit"
                              >
                                Submit
                              </button>
                            </div>
                          </form>
                          {/* Remark Message  */}
                          {remarkMsg && (
                            <div role="alert" className="alert text-success">
                              successfully added..!
                            </div>
                          )}
                        </div>
                      </td>
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
              <span>
                <select
                  name="orderStatus"
                  id=""
                  className="form-select"
                  onChange={(e) => handleStatusChange(e, item._id)}
                  defaultValue={item?.product_status?.value}
                >
                  <option value="Processing">Processing</option>
                  <option value="Shipped">Shipped</option>
                  <option value="Delivered">Delivered</option>
                </select>
              </span>
            </div>
          </section>
        ) : (
          ""
        )
      )}
    </div>
  );
};

export default AllOrderList;
