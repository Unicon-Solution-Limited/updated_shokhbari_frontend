import React, { useEffect, useRef, useState } from "react";
import "./ManageProduct.css";
import { useAuth } from "../../Authentication/AuthContext/AuthContext";
import JoditEditor from "jodit-react";

const EditMangeProduct = ({ signleProduct }) => {
  const { currentUser } = useAuth();
  const editor = useRef(null);
  const [showDescription, setShowDescription] = useState("");

  const config = {
    readonly: false,
    placeholder: "Start typing...",
    toolbarButtonSize: "small",
    buttons: [
      "bold",
      "italic",
      "underline",
      "strikethrough",
      "eraser",
      "ul",
      "ol",
      "outdent",
      "indent",
      "font",
      "fontsize",
      "brush",
      "paragraph",
      "align",
      "undo",
      "redo",
      "cut",
      "copy",
      "paste",
      "hr",
      "link",
      "unlink",
    ],
  };

  const {
    _id,
    popularItems,
    flashSale,
    currentPrice,
    oldPrice,
    stock,
    campain,
    name,
    extraDeliveryCost,
  } = signleProduct;
  const [message, setMessage] = useState("");
  const flashRef = useRef();
  const popularItemsRef = useRef();
  // const campaignsRef = useRef();
  const currentPriceRef = useRef();
  const oldPriceRef = useRef();
  const stockRef = useRef();
  const campainRef = useRef();
  const extraDeliveryRef = useRef();
  const nameRef = useRef();

  // update product and send to the database
  const handleEditProduct = (e) => {
    e.preventDefault();
    const editProduct = {
      flashSale: flashRef.current.value,
      popularItems: popularItemsRef.current.value,
      oldPrice: oldPriceRef.current.value,
      currentPrice: currentPriceRef.current.value,
      stock: stockRef.current.value,
      campain: campainRef.current.value,
    };
    fetch(
      `${process.env.REACT_APP_BACKEND_URL}/updateProduct/${_id}?email=${currentUser?.email}`,
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

  //name edit
  const handleProductNameEdit = (even) => {
    even.preventDefault();
    const editProduct = {
      name: nameRef?.current.value,
    };
    fetch(
      `${process.env.REACT_APP_BACKEND_URL}/productNameEdit/${_id}?email=${currentUser?.email}`,
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

  //description edit
  const handleProductDescriptionEdit = (even) => {
    even.preventDefault();
    const editProduct = {
      description: showDescription,
    };
    fetch(
      `${process.env.REACT_APP_BACKEND_URL}/pdDescriptionEdit/${_id}?email=${currentUser?.email}`,
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

  //extra delivery cost edit
  const handleExtraDeliveryCharge = (even) => {
    even.preventDefault();
    const editProduct = {
      extraDeliveryCost: extraDeliveryRef?.current.value,
    };
    fetch(
      `${process.env.REACT_APP_BACKEND_URL}/extraDeleveryChargeEdit/${_id}?email=${currentUser?.email}`,
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
    <div>
      <div
        className="modal fade"
        id="staticBackdrop001"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
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
                {/* flashSale */}
                <div>
                  <label htmlFor="flashSale" className="form-label">
                    Flash Sale ({flashSale})
                  </label>
                </div>
                <select
                  name="flashSale"
                  className="input-group form-select"
                  ref={flashRef}
                  required
                >
                  <option value="">Choose</option>
                  <option value="no">No</option>
                  <option value="yes">Yes</option>
                </select>

                {/* popular item */}
                <div>
                  <label htmlFor="PopularItems" className="form-label mt-2">
                    Popular Items ({popularItems})
                  </label>
                </div>
                <div>
                  <select
                    name="PopularItems"
                    className="input-group form-select"
                    ref={popularItemsRef}
                    required
                  >
                    <option value="">Choose</option>
                    <option value="no">No</option>
                    <option value="yes">Yes</option>
                  </select>
                </div>

                {/* old Price */}
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
                    placeholder={oldPrice}
                    className="input-group form-control"
                  />
                </div>

                {/* Discount price */}
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
                    placeholder={currentPrice}
                    className="input-group form-control"
                    required
                  />
                </div>

                {/* product stock */}
                <div>
                  <label htmlFor="stock" className="form-label mt-2 mb-2">
                    Stock ({stock})
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

                {/* campain */}
                <div>
                  <label htmlFor="stock" className="form-label mt-2 mb-2">
                    Change Campaign status ({campain})
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
                    className="popup-edit-save-btn"
                    data-bs-dismiss="modal"
                    style={{ width: "120px" }}
                  >
                    Close
                  </button>
                  <button
                    type="submit"
                    className="popup-edit-save-btn"
                    style={{ width: "120px" }}
                  >
                    Update
                  </button>
                </div>
              </form>

              {/* name */}
              <form onSubmit={handleProductNameEdit}>
                <div className="input-group mt-3 mb-3">
                  <input
                    type="text"
                    ref={extraDeliveryRef}
                    className="form-control"
                    placeholder={name}
                    required
                  />
                  <button
                    type="submit"
                    className="input-group-text popup-edit-save-btn"
                  >
                    Submit Name
                  </button>
                </div>
              </form>

              <form
                onSubmit={handleProductDescriptionEdit}
                className="mt-5 mb-4"
              >
                {/* product Full description */}
                <div>
                  <label htmlFor="description" className="form-label">
                    Full Description
                  </label>
                </div>
                <JoditEditor
                  ref={editor}
                  value={showDescription}
                  config={config}
                  tabIndex={1}
                  onBlur={(newContent) => setShowDescription(newContent)}
                  onChange={(newContent) => {}}
                />
                <button type="submit" className="popup-edit-save-btn">
                  Submit Description
                </button>
              </form>

              {/* edit product for the extra delevery charge  */}
              <h6>extra delivery charge</h6>
              <form onSubmit={handleExtraDeliveryCharge}>
                <input
                  type="number"
                  name="deleveryCharge"
                  ref={extraDeliveryRef}
                  className="input-group form-control"
                  placeholder={extraDeliveryCost}
                  required
                />
                <button type="submit" className="popup-edit-save-btn mt-2">
                  submit extra delivery charge
                </button>
              </form>
              <h5 style={{ color: "green" }}>{message}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditMangeProduct;
