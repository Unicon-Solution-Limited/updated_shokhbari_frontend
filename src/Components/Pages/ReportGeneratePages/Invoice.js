// This page for Generate Invoice after Order Confirm

import React, { useContext } from "react";
import "./ReportGeneratePages.css";
import { useParams } from "react-router-dom";
import { OrderProvider } from "./../../AllContextApi/OrderContextAdmin";
import { useState } from "react";
import { useEffect } from "react";

const Invoice = () => {
  const [cusOrders] = useContext(OrderProvider);
  const { invoiceId } = useParams();
  const invoiceProduct = cusOrders.find((iP) => invoiceId == iP?._id);

  //converting invoice to array to do map
  const invoiceProductArray = Object.assign([], invoiceProduct);

  // Sum
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    let subTotal = 0;
    let total = 0;
    invoiceProductArray?.orderedData?.map((product) => {
      total = product.currentPrice * product.quantity;
      subTotal = subTotal + total;
      setTotalPrice(subTotal);
    });
  }, [invoiceProductArray?.orderedData]);

  // gatting the remark from localStorage
  const localDataRemark = JSON.parse(localStorage.getItem("remark")) || [];
  const localSelectedColor =
    JSON.parse(localStorage.getItem("selectedColor")) || [];

  return (
    <>
      <section className="invoice">
        <section className="invoiceHead">
          <img
            src="https://i.ibb.co/pyYkvnX/Invoice.png"
            alt=""
            className="invoiceLogo"
          />
        </section>
        <section className="container">
          <section className="invoiceBody">
            <span
              className="invoiceBodyHeadline"
              onClick={() => window.print()}
            >
              Invoice/Bill
            </span>

            <div className="d-flex justify-content-between mt-3">
              <span>
                Invoice No. : INV–shokh-{new Date().getFullYear()}-
                {new Date().getMonth() + 1}-{invoiceProduct?._id.slice(20, 24)}
              </span>
              <span>Date : {invoiceProduct?.orderTime.slice(4, 15)}</span>
            </div>
            <div className="customerInfo my-3">
              <span>
                <b>Sold To:</b> {invoiceProduct?.cus_name}
              </span>
              <span>
                <b>Address: </b> {invoiceProduct?.cus_add1} <br />{" "}
                {invoiceProduct?.cus_city}-{invoiceProduct?.cus_postcode}.
              </span>
              <span>
                <b>Cell: </b> {invoiceProduct?.cus_phone}
              </span>
              <span>
                <b>Email: </b> {invoiceProduct?.cus_email}
              </span>
              <span>
                <b>Payment Method: </b> {invoiceProduct?.payment_method}
              </span>

              <span>
                <b>Size: </b>{" "}
                {invoiceProduct?.orderedData?.map((dt) => dt?.selectedSize)}
              </span>
              <span>
                <b>Color: </b> {localSelectedColor} <br />
                <b>Remark: </b> {localDataRemark}
              </span>
            </div>
            <div className="table-responsive productInfo">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th scope="col">SL.</th>
                    <th scope="col">Description of Items</th>
                    <th scope="col">Model</th>
                    <th scope="col">Unit Price (In Taka)</th>
                    <th scope="col">Qty</th>
                    <th scope="col">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {invoiceProductArray?.orderedData?.map((orderProduct, i) => (
                    <tr key={orderProduct?._id}>
                      <th scope="row">{i + 1}</th>
                      <td>{orderProduct?.name}</td>
                      <td>{orderProduct?.code}</td>
                      <td>{orderProduct?.currentPrice}</td>
                      <td>{orderProduct?.quantity}</td>
                      <td>
                        {orderProduct?.quantity * orderProduct?.currentPrice}
                      </td>
                    </tr>
                  ))}
                  <tr>
                    <td colSpan="5">
                      <b>Sub Total =</b>
                    </td>
                    <td>{totalPrice}</td>
                  </tr>
                  <tr>
                    <td colSpan="5">
                      <b>Discount Amount</b>
                    </td>
                    <td>Tk. {invoiceProduct?.discount} /-</td>
                  </tr>
                  <tr>
                    <td colSpan="5">
                      <b>
                        Delivery Charge<sup>[1]</sup>{" "}
                      </b>
                    </td>
                    <td>Tk. {invoiceProduct?.delivery_charge} /-</td>
                  </tr>
                  <tr>
                    <td colSpan="5">
                      <b>Total Payable Amount =</b>
                    </td>
                    <td>Tk. {invoiceProduct?.total_amount}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="d-flex justify-content-between my-5 signature">
              <span>Received with good condition by</span>
              <span>Authorized Signature</span>
            </div>
          </section>
          <section className="invoiceTC">
            <span>Notes:_______</span>
            <span>
              1. Product Weight charge and Others charges is added with your
              Delivery Charge.
            </span>
          </section>
          <section className="invoiceFooter text-center mt-3">
            <div className="d-flex justify-content-around">
              <span>
                <i className="bi bi-telephone-fill"></i> 01841477361
              </span>
              <span>
                <i className="bi bi-envelope-fill"></i> shokhbari@gmail.com
              </span>
              <span>
                <i className="bi bi-facebook"></i> facebook.com/ShokhBari
              </span>
            </div>
            <span>
              238, dewan mansion 5th floor, beside petrol pump , new elephant
              road dhaka 1205 (SHOKH BARI)
            </span>
          </section>
        </section>
      </section>
    </>
  );
};

export default Invoice;
