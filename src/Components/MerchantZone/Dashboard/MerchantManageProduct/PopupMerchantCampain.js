import React, { useRef, useState } from "react";
import { useAuth } from "../../../Authentication/AuthContext/AuthContext";

const PopupMerchantCampain = ({ data }) => {
  const { _id, currentPrice } = data;
  const campainRef = useRef();
  const { currentUser } = useAuth();
  const [errorMessage, setErrorMessage] = useState(""); // State for error message
  const [inputPrice, setInputPrice] = useState(0);

  //conditionally currentPrice update
  const handleInputChange = (e) => {
    const inputPrice = e.target.value;
    setInputPrice(inputPrice);

    // Calculate the percentage difference
    const percentageDifference =
      ((currentPrice - inputPrice) / currentPrice) * 100;

    // Check if the percentage difference is within the allowed range (5% to 20%)
    if (percentageDifference < 5 || percentageDifference > 20) {
      setErrorMessage(
        `Please enter a price that is at least 5% and at most 20% less than the CurrentPrice=${currentPrice}Tk`
      );
    } else {
      setErrorMessage("");
    }
  };

  //campain submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const editProduct = {
      campain: campainRef.current.value,
      currentPrice: inputPrice,
    };
    fetch(
      `${process.env.REACT_APP_BACKEND_URL}/updateCampainAndPrice/${_id}?email=${currentUser?.email}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${localStorage.getItem("shokhbari-token")}`,
        },
        body: JSON.stringify(editProduct),
      }
    )
      .then((res) => res.json())
      .then((result) => {
        if (result.modifiedCount > 0) {
          //   setMessage("Your Product Update Successfully");
          window.location.reload();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div
      className="modal fade"
      id="campain"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="staticBackdropLabel">
              {data.campain === "no"
                ? "Your product is not in the campain"
                : "Already product added in the campain"}
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              {/* Current price */}
              <div>
                <label htmlFor="currentPrice" className="form-label mt-2">
                  Current price Update should be{" "}
                  {currentPrice - currentPrice * 0.2}Tk to{" "}
                  {currentPrice - currentPrice * 0.05}Tk For adding Campaign
                </label>
              </div>
              <div>
                <input
                  onChange={handleInputChange}
                  type="number"
                  name="currentPrice"
                  placeholder={data.currentPrice}
                  className="input-group form-control"
                  required
                />
              </div>
              {errorMessage && (
                <div style={{ color: "red" }}>{errorMessage}</div>
              )}

              {/* campain */}
              <div>
                <label htmlFor="stock" className="form-label mt-2 mb-2">
                  Change Campain status
                </label>
              </div>
              <div>
                <select
                  name="stock"
                  className="input-group form-select"
                  ref={campainRef}
                  required
                >
                  <option value="">Choose</option>
                  <option value="no">No</option>
                  <option value="yes">Yes</option>
                </select>
              </div>

              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={errorMessage !== ""}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupMerchantCampain;
