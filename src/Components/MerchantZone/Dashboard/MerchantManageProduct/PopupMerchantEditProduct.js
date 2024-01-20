import React, { useRef, useState } from "react";
import { useAuth } from "../../../Authentication/AuthContext/AuthContext";

const PopupMerchantEditProduct = ({ data }) => {
  const { currentUser } = useAuth();
  const { _id } = data;
  const currentPriceRef = useRef();
  const oldPriceRef = useRef();
  const stockRef = useRef();
  const [message, setMessage] = useState("");

  const handleEditProduct = (e) => {
    e.preventDefault();
    const editProduct = {
      oldPrice: oldPriceRef.current.value,
      currentPrice: currentPriceRef.current.value,
      stock: stockRef.current.value,
    };
    fetch(
      `${process.env.REACT_APP_BACKEND_URL}/updateMerchantProduct/${_id}?email=${currentUser?.email}`,
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
          setMessage("Your Product Update Successfully");
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
      id="exampleModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Edit Your Product
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleEditProduct}>
              <div>
                <label htmlFor="oldPrice" className="form-label mt-2">
                  Old price
                </label>
              </div>
              <div>
                <input
                  ref={oldPriceRef}
                  type="number"
                  name="oldPrice"
                  placeholder="Product Previous Price"
                  className="input-group form-control"
                />
              </div>
              {/* Current price */}
              <div>
                <label htmlFor="currentPrice" className="form-label mt-2">
                  Current price
                </label>
              </div>
              <div>
                <input
                  ref={currentPriceRef}
                  type="number"
                  name="currentPrice"
                  placeholder="Product discount Price"
                  className="input-group form-control"
                  required
                />
              </div>

              {/* product stock */}
              <div>
                <label htmlFor="stock" className="form-label mt-2 mb-2">
                  Stock
                </label>
              </div>
              <div>
                <select
                  name="stock"
                  className="input-group form-select"
                  ref={stockRef}
                  required
                >
                  <option value="">Choose</option>
                  <option value="In Stock">In Stock</option>
                  <option value="Out of Stock">Out of Stock</option>
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
                <button type="submit" className="btn btn-primary">
                  Save changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupMerchantEditProduct;
