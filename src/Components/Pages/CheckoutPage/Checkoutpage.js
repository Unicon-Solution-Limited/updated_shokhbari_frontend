import React, { useContext, useEffect, useRef, useState } from "react";
import AllHeader from "../../Shared/Header/AllHeader";
import "./Checkoutpage.css";
import AllFooter from "./../../Shared/Footer/AllFooter";
import { useAuth } from "../../Authentication/AuthContext/AuthContext";
import { CartProvider } from "../../AllContextApi/CartContext";
import { useHistory } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

const Checkoutpage = () => {
  // Animation on scroll
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  const { currentUser } = useAuth();
  const [
    cartData,
    setCartData,
    cartTotal,
    setCartTotal,
    orderData,
    setOrderData,
    couponTk,
  ] = useContext(CartProvider);
  let history = useHistory();
  const [subtotal, setSubtotal] = useState(0);
  const [distanceCalculationTotal, setDistanceCalculationTotal] = useState(0);
  const [weightCalculationTotal, setWeightCalculationTotal] = useState(0);
  const [paymnetLoading, setPaymentLoading] = useState(false);

  //sum of total distance and weight and setting it into the subtotal
  useEffect(() => {
    setSubtotal(distanceCalculationTotal + weightCalculationTotal - couponTk);
  }, [distanceCalculationTotal, weightCalculationTotal, couponTk]);

  const numberRef = useRef();
  const cityRef = useRef();
  const postRef = useRef();
  const addressRef = useRef();
  const extraInformationRef = useRef();
  const PaymentRef = useRef();

  const handleConfirmOrder = (e) => {
    e.preventDefault();

    //maping cart data to send singlly
    // cartData.map((singleCartData) => setOrderData(singleCartData));

    const confirmOderData = {
      total_amount: subtotal,
      orderedData: cartData,
      cus_name: currentUser?.displayName,
      cus_email: currentUser?.email,
      cus_phone: numberRef.current.value,
      cus_city: cityRef.current.value,
      cus_postcode: postRef.current.value,
      cus_add1: addressRef.current.value,
      extra_information: extraInformationRef.current.value,
      product_status: "Processing",
      payment_method: PaymentRef.current.value,
      delivery_charge:
        weightCalculationTotal + distanceCalculationTotal - cartTotal,
      discount: couponTk,
      orderTime: Date(),
    };

    if (confirmOderData.payment_method === "Online Payment") {
      fetch(
        `${process.env.REACT_APP_BACKEND_URL}/init?email=${currentUser?.email}`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${localStorage.getItem("shokhbari-token")}`,
          },
          body: JSON.stringify(confirmOderData),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          setPaymentLoading(true);
          window.location.replace(data);
        });
    } else {
      fetch(
        `${process.env.REACT_APP_BACKEND_URL}/cashonDelivery?email=${currentUser?.email}`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${localStorage.getItem("shokhbari-token")}`,
          },
          body: JSON.stringify(confirmOderData),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          setPaymentLoading(true);
          history.push("/cashPaymentSuccess");
        });
    }
  };

  // From District value accepting
  const [selectOptionDistrict, setSelectOptionDistrict] = useState("");
  const handleSelectOptionDistrict = (e) => {
    setSelectOptionDistrict(e.target.value);
  };

  // get total product weight from localStorage
  const getLocalStorageTotalWeight = () => {
    let totalWeights;
    if (typeof window !== "undefined") {
      const localData = JSON.parse(localStorage.getItem("totalWeight")) || [];
      totalWeights = localData;
    }
    return totalWeights;
  };
  const [totalWeight, setTotalWeight] = useState(getLocalStorageTotalWeight());

  //conditionally set the distance price in to the subtotal
  useEffect(() => {
    const totalExtraDeliveryCostSum = cartData?.reduce(
      (accumulator, currentValue) => {
        return accumulator + Number(currentValue.extraDeliveryCost);
      },
      0
    );
    if (selectOptionDistrict === "") {
      setDistanceCalculationTotal(0);
    } else if (selectOptionDistrict === "Dhaka") {
      setDistanceCalculationTotal(80 + totalExtraDeliveryCostSum);
    } else {
      setDistanceCalculationTotal(120 + totalExtraDeliveryCostSum);
    }
  }, [cartData, cartTotal, selectOptionDistrict]);

  //seeting the weight condition into the subtotal
  useEffect(() => {
    if (totalWeight <= 1000) {
      setWeightCalculationTotal(cartTotal + 0);
    } else if (totalWeight <= 2000) {
      setWeightCalculationTotal(cartTotal + 10);
    } else if (totalWeight <= 3000) {
      setWeightCalculationTotal(cartTotal + 25);
    } else if (totalWeight <= 4000) {
      setWeightCalculationTotal(cartTotal + 40);
    } else if (totalWeight <= 5000) {
      setWeightCalculationTotal(cartTotal + 55);
    } else if (totalWeight <= 6000) {
      setWeightCalculationTotal(cartTotal + 70);
    } else if (totalWeight <= 7000) {
      setWeightCalculationTotal(cartTotal + 85);
    } else if (totalWeight <= 8000) {
      setWeightCalculationTotal(cartTotal + 100);
    } else if (totalWeight <= 9000) {
      setWeightCalculationTotal(cartTotal + 115);
    } else if (totalWeight <= 10000) {
      setWeightCalculationTotal(cartTotal + 130);
    } else if (totalWeight <= 12000) {
      setWeightCalculationTotal(cartTotal + 160);
    } else if (totalWeight <= 15000) {
      setWeightCalculationTotal(cartTotal + 205);
    } else {
      alert("SORRY! WE ARE UNABLE TO CARRY OVER 15KG");
      setWeightCalculationTotal(cartTotal + 0);
    }
  }, [cartTotal, totalWeight]);

  return (
    <>
      <AllHeader />
      <section className="container CheckoutPage">
        <form className="row CheckoutPageBody" onSubmit={handleConfirmOrder}>
          <aside className="col-md-6 shippingForm">
            <p className="shippingInputFormTop">
              Enter your Shipping and Billing Information
            </p>
            <div className="shippingFormMain">
              <div className="mb-3">
                <label htmlFor="UserName">
                  <span>*</span> Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="UserName"
                  aria-describedby="nameHelp"
                  defaultValue={currentUser?.displayName}
                  readOnly
                />
              </div>
              <div className="mb-3">
                <label htmlFor="UserEmail">
                  <span>*</span> Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="UserEmail"
                  defaultValue={currentUser?.email}
                  readOnly
                />
              </div>
              <div className="mb-3">
                <label htmlFor="contactNumber">
                  <span>*</span> Contact Number
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="contactNumber"
                  placeholder="Contact Number *"
                  ref={numberRef}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="city">
                  <span>*</span> City
                </label>
                <select
                  className="form-select locationSelect"
                  aria-label="Default select example"
                  id="city"
                  ref={cityRef}
                  onChange={handleSelectOptionDistrict}
                  required
                >
                  <option value="">Select Your City *</option>
                  <option value="Dhaka">Dhaka</option>
                  <option value="Chattogram">Chattogram</option>
                  <option value="Barishal">Barishal</option>
                  <option value="Khulna">Khulna</option>
                  <option value="Mymensingh">Mymensingh</option>
                  <option value="Rajshahi">Rajshahi</option>
                  <option value="Rangpur">Rangpur</option>
                  <option value="Sylhet">Sylhet</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="codeArea">
                  <span>*</span> Postal Code / Area
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="codeArea"
                  placeholder="For Example: 1207 / Mohammadpur"
                  ref={postRef}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="Address">
                  <span>*</span> Full Address
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="Address"
                  placeholder="For Example: House# 123, Street# 123, ABC Road .... "
                  ref={addressRef}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="Info">Additional Information</label>
                <textarea
                  className="form-control"
                  id="Info"
                  name="Info"
                  rows="1"
                  cols="50"
                  placeholder="Additional Information"
                  ref={extraInformationRef}
                />
              </div>
            </div>
          </aside>
          <aside className="col-md-6 shippingInfo">
            <div className="shippingInfoHead">
              <span>Confirm your order Now</span>
            </div>
            <div className="shippingInfoMain">
              <div className="shippingInfoBack">
                <table className="table table-responsive">
                  <thead className="TableHead">
                    <tr>
                      <th scope="col"># Order Summary</th>
                      <th scope="col">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Total Product(s) price - </td>
                      <td>Tk. {cartTotal}</td>
                    </tr>

                    <tr>
                      <td>Discount Amount - </td>
                      <td>Tk. {couponTk}</td>
                    </tr>

                    <tr>
                      <td>Shipping Charge & Weight Charge - </td>
                      <td>
                        Tk.{" "}
                        {weightCalculationTotal +
                          distanceCalculationTotal -
                          cartTotal}
                      </td>
                    </tr>
                    <tr>
                      <td>VAT/TAX(if applicable) - </td>
                      <td>Tk. 00</td>
                    </tr>
                  </tbody>
                  <tfoot className="TotalAmount">
                    <tr>
                      <th>Total Payable Amount = </th>
                      <th>Tk. {subtotal}</th>
                    </tr>
                  </tfoot>
                </table>
                <aside className="my-3 text-danger">
                  <p>
                    Note: Please call to confirm your order at: (+88)
                    01841-477361
                  </p>
                </aside>
                <span className="orderMethods">
                  <div>
                    <label htmlFor="Payment" className="form-label">
                      CHOOSE YOUR PAYMENT METHOD
                    </label>
                  </div>
                  <div>
                    <select
                      id="Payment"
                      name="Payment"
                      className="input-group form-select payment"
                      ref={PaymentRef}
                      required
                    >
                      <option value="">Select</option>
                      <option value="Online Payment">Online Payment</option>
                      <option value="Cash On Delivery">Cash On Delivery</option>
                    </select>
                  </div>
                </span>
              </div>
            </div>
            {/* <input
              className="btn myBtn confirmOrder"
              type="submit"
              value="Confirm Order"
            /> */}
            <button className="btn myBtn confirmOrder" type="submit">
              {paymnetLoading ? (
                <div className="d-flex justify-content-center">
                  <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
              ) : (
                "Confirm Order"
              )}
            </button>
          </aside>
        </form>
      </section>
      <AllFooter />
    </>
  );
};

export default Checkoutpage;
