import React, { useEffect, useRef, useState } from "react";
import "./ManageProduct.css";
import { useAuth } from "../../Authentication/AuthContext/AuthContext";
import JoditEditor from "jodit-react";
import axios from "axios";

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
    marchent,
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
  const marchentRef = useRef();

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
          // window.location.reload();
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
      name: nameRef?.current?.value,
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
  //marchent edit
  const handleProductMarchentEdit = (even) => {
    even.preventDefault();
    const editProduct = {
      marchent: marchentRef?.current?.value,
    };
    fetch(
      `${process.env.REACT_APP_BACKEND_URL}/productMarchentEdit/${_id}?email=${currentUser?.email}`,
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
          setTimeout(() => {
            window.location.reload();
          }, 1000);
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
          setTimeout(() => {
            window.location.reload();
          }, 1000);
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

  //update image with color and size
  const [commonVarientId, setCommonVarientId] = useState("");

  //input color edit
  const [inputColorValue, setInputColorValue] = useState("");
  const handleColorInputChange = (e) => {
    setInputColorValue(e.target.value);
  };
  const handleInputColorSubmit = (e) => {
    e.preventDefault();

    if (commonVarientId) {
      fetch(
        `${process.env.REACT_APP_BACKEND_URL}/productInputColorUpdate/${commonVarientId}?email=${currentUser?.email}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${localStorage.getItem("shokhbari-token")}`,
          },
          body: JSON.stringify({ inputColorValue }),
        }
      )
        .then((res) => res.json())
        .then((result) => {
          console.log(result, "Update result"); // Log the result for debugging

          // Check for success message and update the state or reload as needed
          if (result.message === "Color input updated successfully") {
            setMessage("Your Product Update Successfully");

            // Optionally reload, though it’s better to update state instead of reloading the whole page
            window.location.reload();
          } else {
            // Handle errors or unexpected results here
            setMessage("Product Update Failed. Please try again.");
          }
        })
        .catch((error) => {
          console.error("Error updating color:", error);
          setMessage("An error occurred. Please try again.");
        });
    }
  };

  //color edit
  const [colorValue, setColorValue] = useState("");
  const handleColorChange = (e) => {
    setColorValue(e.target.value);
  };
  const handleColorSubmit = (e) => {
    e.preventDefault();

    if (commonVarientId) {
      fetch(
        `${process.env.REACT_APP_BACKEND_URL}/productColorUpdate/${commonVarientId}?email=${currentUser?.email}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${localStorage.getItem("shokhbari-token")}`,
          },
          body: JSON.stringify({ colorValue }),
        }
      )
        .then((res) => res.json())
        .then((result) => {
          if (result.message === "Color updated successfully") {
            setMessage("Your Product Update Successfully");
            window.location.reload(); // Trigger page reload
          } else {
            console.error("Failed to update the color:", result);
          }
        })
        .catch((error) => {
          console.error("Error updating color:", error);
        });
    }
  };

  //image update
  const [PdImageUpdate, setPdImageUpdate] = useState("");
  const [isUploading, setIsUploading] = useState(false); // Store the loading state

  const imageUploadHandler = (event) => {
    setIsUploading(true); // Start loading when the upload begins
    const imageData = new FormData();
    imageData.append("upload_preset", "shokh_img");
    imageData.append("file", event.target.files[0]);

    axios
      .post("https://api.cloudinary.com/v1_1/shokh-bari/upload", imageData)
      .then((response) => {
        setPdImageUpdate(response?.data?.url); // Set the uploaded image URL

        setIsUploading(false); // Stop loading after upload completes
      })
      .catch((error) => {
        console.log(error);

        setIsUploading(false); // Stop loading if there's an error
      });
  };

  // //image submit
  const [imgIsLoading, setImgIsLoading] = useState("");
  const handleImageSubmit = (e) => {
    e.preventDefault();

    // Check if image has been updated
    if (PdImageUpdate) {
      setImgIsLoading(true); // Start loading

      fetch(
        `${process.env.REACT_APP_BACKEND_URL}/mngEidtImageUpdate/${commonVarientId}?email=${currentUser?.email}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${localStorage.getItem("shokhbari-token")}`,
          },
          body: JSON.stringify({ PdImageUpdate }),
        }
      )
        .then((res) => res.json())
        .then((result) => {
          setImgIsLoading(false); // Stop loading

          if (result.modifiedCount > 0) {
            setMessage("Your Product Update Successfully");

            // Reload after a short delay to allow the message to display
            setTimeout(() => {
              window.location.reload();
            }, 500);
          } else {
            setMessage("No changes were made to the product.");
          }
        })
        .catch((error) => {
          console.log(error);
          setImgIsLoading(false); // Stop loading in case of error
          setMessage("Failed to update product.");
        });
    } else {
      setMessage("Please upload an image before submitting.");
    }
  };

  //size and stock
  const [newSize, setNewSize] = useState("");
  const [newStock, setNewStock] = useState("");

  const handleSizeAndStock = (e) => {
    e.preventDefault();

    setImgIsLoading(true); // Start loading

    fetch(
      `${process.env.REACT_APP_BACKEND_URL}/mngStockSizeUpdate/${commonVarientId}?email=${currentUser?.email}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${localStorage.getItem("shokhbari-token")}`,
        },
        body: JSON.stringify({ size: newSize, stock: newStock }),
      }
    )
      .then((res) => res.json())
      .then((result) => {
        setImgIsLoading(false); // Stop loading

        if (result.message === "Size and stock updated successfully") {
          setMessage("Your Product Update Successfully");

          // Reload after a short delay to allow the message to display
          setTimeout(() => {
            window.location.reload();
          }, 500);
        } else {
          setMessage("Failed to update product.");
        }
      })
      .catch((error) => {
        console.log(error);
        setImgIsLoading(false); // Stop loading in case of error
        setMessage("Failed to update product.");
      });
  };

  //delete size and sotck
  const [deleteMessage, setDeleteMessage] = useState("");
  const sizeStockDelete = async (commonVarientId) => {
    try {
      const url = `${process.env.REACT_APP_BACKEND_URL}/mngStockSizeDelete/${commonVarientId}?email=${currentUser?.email}`;
      const response = await fetch(url, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          authorization: `Bearer ${localStorage.getItem("shokhbari-token")}`,
        },
      });

      if (response.ok) {
        const data = await response.json();

        if (data) {
          setDeleteMessage("Product deleted successfully");
          // setRemoveId(productId);
          setTimeout(() => {
            setDeleteMessage("");
            window.location.reload();
          }, 6000);
        }
      } else {
        console.log("Request failed with status:", response.status);
      }
    } catch (error) {
      console.log("Error:", error);
    }
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
        <div className="modal-dialog modal-xl">
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
              {/* Product Variants */}
              <div>
                {signleProduct?.variantItems?.map((variantItem, index) => (
                  <div key={index} className="mb-4">
                    {variantItem.variants.map((variant) => (
                      <div
                        key={variant.variantId}
                        className="border border-5 border-primary p-3 rounded mb-3"
                      >
                        {/* Color Input Update */}
                        <form
                          onSubmit={handleInputColorSubmit}
                          className="mb-3"
                        >
                          <div className="mb-3">
                            <label htmlFor="colorInput" className="form-label">
                              Choose Color
                            </label>
                            <input
                              type="color"
                              id="colorInputForUpdate"
                              className="form-control"
                              name="colorInput"
                              value={variant?.colorInput}
                              onChange={handleColorInputChange}
                              required
                            />
                          </div>
                          <button
                            type="submit"
                            className="btn btn-primary"
                            onClick={() =>
                              setCommonVarientId(variant?.variantId)
                            }
                          >
                            Submit Color
                          </button>
                        </form>

                        {/* Image Upload */}
                        <form onSubmit={handleImageSubmit} className="mb-3">
                          <div className="mb-3">
                            <label className="form-label">
                              Image:{" "}
                              <img
                                src={variant.image}
                                alt={variant.color}
                                width="50"
                                className="img-thumbnail mb-2"
                              />
                            </label>
                            <input
                              type="file"
                              className="form-control"
                              accept="image/*"
                              onChange={(e) => imageUploadHandler(e)}
                            />
                          </div>
                          {isUploading && (
                            <p className="text-warning">
                              Uploading image, please wait...
                            </p>
                          )}
                          {imgIsLoading ? (
                            <p className="text-warning">
                              Updating, please wait...
                            </p>
                          ) : (
                            <p>{message}</p>
                          )}
                          <button
                            type="submit"
                            className="btn btn-primary"
                            onClick={() =>
                              setCommonVarientId(variant.variantId)
                            }
                          >
                            Submit Image
                          </button>
                        </form>

                        {/* Color Update */}
                        <form onSubmit={handleColorSubmit} className="mb-3">
                          <div className="mb-3">
                            <label htmlFor="colorInput" className="form-label">
                              Choose Color
                            </label>
                            <input
                              type="text"
                              id="colorForUpdate"
                              className="form-control"
                              name="color"
                              placeholder={variant.color}
                              onChange={handleColorChange}
                              required
                            />
                          </div>
                          <button
                            type="submit"
                            className="btn btn-primary"
                            onClick={() =>
                              setCommonVarientId(variant.variantId)
                            }
                          >
                            Submit Color
                          </button>
                        </form>

                        {variant.sizes.map((size) => (
                          <div key={size.variantItemId} className="mt-2">
                            {/* <td className="small">{size.size}</td>
                                <td className="small">{size.stock}</td> */}
                            <form onSubmit={handleSizeAndStock}>
                              Size:
                              <input
                                type="text"
                                name="newSize"
                                placeholder={size.size}
                                onChange={(e) => setNewSize(e.target.value)}
                              />
                              Stock:
                              <input
                                type="text"
                                name="newStock"
                                placeholder={size.stock}
                                onChange={(e) => setNewStock(e.target.value)}
                              />
                              <button
                                type="submit"
                                className="btn btn-primary"
                                onClick={() =>
                                  setCommonVarientId(size?.variantItemId)
                                }
                              >
                                Update
                              </button>
                            </form>
                            <button
                              className="btn btn-danger"
                              onClick={() => {
                                sizeStockDelete(size?.variantItemId);
                              }}
                            >
                              Stock & Size delete
                            </button>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                ))}
              </div>

              {/* Main Product Edit Form */}
              <form onSubmit={handleEditProduct}>
                <div className="mb-3">
                  <label htmlFor="flashSale" className="form-label">
                    Flash Sale ({flashSale})
                  </label>
                  <select
                    name="flashSale"
                    className="form-select"
                    ref={flashRef}
                    required
                  >
                    <option value="">Choose</option>
                    <option value="no">No</option>
                    <option value="yes">Yes</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label htmlFor="PopularItems" className="form-label">
                    Popular Items ({popularItems})
                  </label>
                  <select
                    name="PopularItems"
                    className="form-select"
                    ref={popularItemsRef}
                    required
                  >
                    <option value="">Choose</option>
                    <option value="no">No</option>
                    <option value="yes">Yes</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label htmlFor="oldPrice" className="form-label">
                    Old Price
                  </label>
                  <input
                    ref={oldPriceRef}
                    type="number"
                    name="oldPrice"
                    placeholder={oldPrice}
                    className="form-control"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="currentPrice" className="form-label">
                    Current Price
                  </label>
                  <input
                    ref={currentPriceRef}
                    type="number"
                    name="currentPrice"
                    placeholder={currentPrice}
                    className="form-control"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="stock" className="form-label">
                    Stock ({stock})
                  </label>
                  <select
                    name="stock"
                    className="form-select"
                    ref={stockRef}
                    required
                  >
                    <option value="">Choose</option>
                    <option value="In Stock">In Stock</option>
                    <option value="Out of Stock">Out of Stock</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label htmlFor="campain" className="form-label">
                    Change Campaign Status ({campain})
                  </label>
                  <select
                    name="campain"
                    className="form-select"
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
                    style={{ width: "120px" }}
                  >
                    Close
                  </button>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    style={{ width: "120px" }}
                  >
                    Update
                  </button>
                </div>
              </form>

              {/* Edit Product Name */}
              <form onSubmit={handleProductNameEdit} className="mt-4">
                <h5>Product Name</h5>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    ref={nameRef}
                    className="form-control"
                    placeholder={name}
                    required
                  />
                  <button type="submit" className="btn btn-primary">
                    Submit Name
                  </button>
                </div>
              </form>

              {/* edit the poruct brand  */}
              <form onSubmit={handleProductMarchentEdit} className="mt-4">
                <h5>Product Brand</h5>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    ref={marchentRef}
                    className="form-control"
                    placeholder={marchent}
                    required
                  />
                  <button type="submit" className="btn btn-primary">
                    Submit brand
                  </button>
                </div>
              </form>

              {/* Edit Product Description */}
              <form
                onSubmit={handleProductDescriptionEdit}
                className="mt-5 mb-4"
              >
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">
                    Full Description
                  </label>
                  <JoditEditor
                    ref={editor}
                    value={showDescription}
                    config={config}
                    tabIndex={1}
                    onBlur={(newContent) => setShowDescription(newContent)}
                    onChange={(newContent) => {}}
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit Description
                </button>
              </form>

              {/* Extra Delivery Charge */}
              <h6>Extra Delivery Charge</h6>
              <form onSubmit={handleExtraDeliveryCharge} className="mb-4">
                <input
                  type="number"
                  name="deliveryCharge"
                  ref={extraDeliveryRef}
                  className="form-control"
                  placeholder={extraDeliveryCost}
                  required
                />
                <button type="submit" className="btn btn-primary mt-2">
                  Submit Extra Delivery Charge
                </button>
              </form>

              <h5 className="text-success">{message}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditMangeProduct;
