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
  console.log(newStock, newSize, commonVarientId);

  // const handleSizeAndStock = (e) => {
  //   e.preventDefault();
  //   console.log(newSize, newStock, commonVarientId);

  //   setImgIsLoading(true); // Start loading
  //   console.log("hit");

  //   fetch(
  //     `${process.env.REACT_APP_BACKEND_URL}/mngStockSizeUpdate/${commonVarientId}?email=${currentUser?.email}`,
  //     {
  //       method: "PATCH",
  //       headers: {
  //         "Content-Type": "application/json",
  //         authorization: `Bearer ${localStorage.getItem("shokhbari-token")}`,
  //       },
  //       body: JSON.stringify({ size: newSize, stock: newStock }),
  //     }
  //   )
  //     .then((res) => res.json())
  //     .then((result) => {
  //       setImgIsLoading(false); // Stop loading

  //       if (result.modifiedCount > 0) {
  //         setMessage("Your Product Update Successfully");

  //         // Reload after a short delay to allow the message to display
  //         setTimeout(() => {
  //           window.location.reload();
  //         }, 500);
  //       }
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       setImgIsLoading(false); // Stop loading in case of error
  //       setMessage("Failed to update product.");
  //     });
  // };

  const handleSizeAndStock = (e) => {
    e.preventDefault();
    console.log(newSize, newStock, commonVarientId);

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

  return (
    // <div>
    //   <div
    //     className="modal fade"
    //     id="staticBackdrop001"
    //     data-bs-backdrop="static"
    //     data-bs-keyboard="false"
    //     tabIndex="-1"
    //     aria-labelledby="staticBackdropLabel"
    //     aria-hidden="true"
    //   >
    //     <div className="modal-dialog modal-xl">
    //       <div className="modal-content">
    //         <div className="modal-header">
    //           <h5 className="modal-title" id="staticBackdropLabel">
    //             Edit Your Product
    //           </h5>
    //           <button
    //             type="button"
    //             className="btn-close"
    //             data-bs-dismiss="modal"
    //             aria-label="Close"
    //           ></button>
    //         </div>
    //         <div className="modal-body">
    //           {/* image, size, color, stock  */}
    //           <div>
    //             {signleProduct?.variantItems?.map((variantItem, index) => (
    //               <div key={index} className="mb-2">
    //                 {variantItem.variants.map((variant) => (
    //                   <div
    //                     key={variant.variantId}
    //                     className="border p-1 rounded small-box"
    //                   >
    //                     {/* color input update */}
    //                     <form onSubmit={handleInputColorSubmit}>
    //                       <div className="mb-3">
    //                         <label htmlFor="colorInput" className="form-label">
    //                           Choose Color
    //                         </label>
    //                         <input
    //                           type="color"
    //                           id="colorInputForUpdate"
    //                           className="form-control"
    //                           name="colorInput"
    //                           placeholder={variant.colorInput}
    //                           onChange={handleColorInputChange}
    //                           required
    //                         />
    //                       </div>
    //                       <button
    //                         type="submit"
    //                         onClick={() =>
    //                           setCommonVarientId(variant.variantId)
    //                         }
    //                       >
    //                         submit Input color
    //                       </button>
    //                     </form>
    //                     <br />

    //                     <form onSubmit={handleImageSubmit}>
    //                       <div className="col-md-4">
    //                         <label className="form-label">Image:</label>
    //                         <input
    //                           type="file"
    //                           className="form-control"
    //                           accept="image/*"
    //                           onChange={(e) => imageUploadHandler(e)}
    //                         />
    //                       </div>
    //                       {isUploading && (
    //                         <p>Uploading image, please wait...</p>
    //                       )}
    //                       {imgIsLoading ? (
    //                         <p>Updating, please wait...</p>
    //                       ) : (
    //                         <p>{message}</p>
    //                       )}
    //                       <button
    //                         type="submit"
    //                         onClick={() =>
    //                           setCommonVarientId(variant.variantId)
    //                         }
    //                       >
    //                         image submit
    //                       </button>
    //                     </form>

    //                     <h6 className="mb-1 small">Color: {variant.color}</h6>
    //                     <form onSubmit={handleColorSubmit}>
    //                       <div className="mb-3">
    //                         <label htmlFor="colorInput" className="form-label">
    //                           Choose Color
    //                         </label>
    //                         <input
    //                           type="text"
    //                           id="colorForUpdate"
    //                           className="form-control"
    //                           name="color"
    //                           placeholder={variant.color}
    //                           onChange={handleColorChange}
    //                           required
    //                         />
    //                       </div>
    //                       <button
    //                         type="submit"
    //                         onClick={() =>
    //                           setCommonVarientId(variant.variantId)
    //                         }
    //                       >
    //                         submit Input color
    //                       </button>
    //                     </form>

    //                     <img
    //                       src={variant.image}
    //                       alt={variant.color}
    //                       width="50"
    //                       className="img-thumbnail mb-1"
    //                     />
    //                     <table className="table table-sm table-bordered mb-0">
    //                       <thead className="table-light">
    //                         <tr>
    //                           <th scope="col" className="small">
    //                             Size
    //                           </th>
    //                           <th scope="col" className="small">
    //                             Stock
    //                           </th>
    //                         </tr>
    //                       </thead>
    //                       <tbody>
    //                         {variant.sizes.map((size) => (
    //                           <tr key={size.variantItemId}>
    //                             <td className="small">{size.size}</td>
    //                             <td className="small">{size.stock}</td>
    //                           </tr>
    //                         ))}
    //                       </tbody>
    //                     </table>
    //                   </div>
    //                 ))}
    //               </div>
    //             ))}
    //           </div>

    //           <form onSubmit={handleEditProduct}>
    //             {/* flashSale */}
    //             <div>
    //               <label htmlFor="flashSale" className="form-label">
    //                 Flash Sale ({flashSale})
    //               </label>
    //             </div>
    //             <select
    //               name="flashSale"
    //               className="input-group form-select"
    //               ref={flashRef}
    //               required
    //             >
    //               <option value="">Choose</option>
    //               <option value="no">No</option>
    //               <option value="yes">Yes</option>
    //             </select>

    //             {/* popular item */}
    //             <div>
    //               <label htmlFor="PopularItems" className="form-label mt-2">
    //                 Popular Items ({popularItems})
    //               </label>
    //             </div>
    //             <div>
    //               <select
    //                 name="PopularItems"
    //                 className="input-group form-select"
    //                 ref={popularItemsRef}
    //                 required
    //               >
    //                 <option value="">Choose</option>
    //                 <option value="no">No</option>
    //                 <option value="yes">Yes</option>
    //               </select>
    //             </div>

    //             {/* old Price */}
    //             <div>
    //               <label htmlFor="oldPrice" className="form-label mt-2">
    //                 Old price
    //               </label>
    //             </div>
    //             <div>
    //               <input
    //                 ref={oldPriceRef}
    //                 type="number"
    //                 name="oldPrice"
    //                 placeholder={oldPrice}
    //                 className="input-group form-control"
    //               />
    //             </div>

    //             {/* Discount price */}
    //             <div>
    //               <label htmlFor="currentPrice" className="form-label mt-2">
    //                 Current price
    //               </label>
    //             </div>
    //             <div>
    //               <input
    //                 ref={currentPriceRef}
    //                 type="number"
    //                 name="currentPrice"
    //                 placeholder={currentPrice}
    //                 className="input-group form-control"
    //                 required
    //               />
    //             </div>

    //             {/* product stock */}
    //             <div>
    //               <label htmlFor="stock" className="form-label mt-2 mb-2">
    //                 Stock ({stock})
    //               </label>
    //             </div>
    //             <div>
    //               <select
    //                 name="stock"
    //                 className="input-group form-select"
    //                 ref={stockRef}
    //                 required
    //               >
    //                 <option value="">Choose</option>
    //                 <option value="In Stock">In Stock</option>
    //                 <option value="Out of Stock">Out of Stock</option>
    //               </select>
    //             </div>

    //             {/* campain */}
    //             <div>
    //               <label htmlFor="stock" className="form-label mt-2 mb-2">
    //                 Change Campaign status ({campain})
    //               </label>
    //             </div>
    //             <div>
    //               <select
    //                 name="stock"
    //                 className="input-group form-select"
    //                 ref={campainRef}
    //                 required
    //               >
    //                 <option value="">Choose</option>
    //                 <option value="no">No</option>
    //                 <option value="yes">Yes</option>
    //               </select>
    //             </div>

    //             <div className="modal-footer">
    //               <button
    //                 type="button"
    //                 className="popup-edit-save-btn"
    //                 data-bs-dismiss="modal"
    //                 style={{ width: "120px" }}
    //               >
    //                 Close
    //               </button>
    //               <button
    //                 type="submit"
    //                 className="popup-edit-save-btn"
    //                 style={{ width: "120px" }}
    //               >
    //                 Update
    //               </button>
    //             </div>
    //           </form>

    //           {/* name */}
    //           <form onSubmit={handleProductNameEdit}>
    //             <div className="input-group mt-3 mb-3">
    //               <input
    //                 type="text"
    //                 ref={nameRef}
    //                 className="form-control"
    //                 placeholder={name}
    //                 required
    //               />
    //               <button
    //                 type="submit"
    //                 className="input-group-text popup-edit-save-btn"
    //               >
    //                 Submit Name
    //               </button>
    //             </div>
    //           </form>

    //           <form
    //             onSubmit={handleProductDescriptionEdit}
    //             className="mt-5 mb-4"
    //           >
    //             {/* product Full description */}
    //             <div>
    //               <label htmlFor="description" className="form-label">
    //                 Full Description
    //               </label>
    //             </div>
    //             <JoditEditor
    //               ref={editor}
    //               value={showDescription}
    //               config={config}
    //               tabIndex={1}
    //               onBlur={(newContent) => setShowDescription(newContent)}
    //               onChange={(newContent) => {}}
    //             />
    //             <button type="submit" className="popup-edit-save-btn">
    //               Submit Description
    //             </button>
    //           </form>

    //           {/* edit product for the extra delevery charge  */}
    //           <h6>extra delivery charge</h6>
    //           <form onSubmit={handleExtraDeliveryCharge}>
    //             <input
    //               type="number"
    //               name="deleveryCharge"
    //               ref={extraDeliveryRef}
    //               className="input-group form-control"
    //               placeholder={extraDeliveryCost}
    //               required
    //             />
    //             <button type="submit" className="popup-edit-save-btn mt-2">
    //               submit extra delivery charge
    //             </button>
    //           </form>
    //           <h5 style={{ color: "green" }}>{message}</h5>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>

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
                          <div key={size.variantItemId}>
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
                                onClick={() =>
                                  setCommonVarientId(size?.variantItemId)
                                }
                              >
                                Update
                              </button>
                            </form>
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
