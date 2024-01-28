// This page Contain product/'s of particular merchant
import React, { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./MerchantDetails.css";
import ReactHtmlParser from "react-html-parser";
import { useAuth } from "../../Authentication/AuthContext/AuthContext";

const MerchantsProduct = () => {
  const { merchantEmail } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [singleMerchantProduct, setSingleMerchantProduct] = useState([]);
  const { currentUser } = useAuth();
  const [message, setMessage] = useState();
  const [deleteMessage, setDeleteMessage] = useState("");
  const [removeId, setRemoveId] = useState();
  const extraDeliveryRef = useRef();

  useEffect(() => {
    const fetchFood = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_BACKEND_URL}/marchantPendingProduct?merchantEmail=` +
            merchantEmail
        );
        const data = await response.json();
        setProduct(data);
        setLoading(false);
      } catch (error) {
        console.log("err", error);
      }
    };
    fetchFood();
  }, [merchantEmail, removeId]);

  //get the single merchant product which is pending
  const fetchSingleProduct = async (singleMerchantId) => {
    try {
      setLoading(true);
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/singleMerchantProduct/${singleMerchantId}`
      );
      const data = await response.json();
      setSingleMerchantProduct(data);
    } catch (error) {
      console.log("err", error);
    }
    setLoading(false);
  };

  //merchant product status
  const handleMerchantProductStatus = (value, id) => {
    fetch(
      `${process.env.REACT_APP_BACKEND_URL}/updateMarchantProductStatus/${id}?email=${currentUser?.email}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${localStorage.getItem("shokhbari-token")}`,
        },
        body: JSON.stringify({ merchantProudctStatus: value }),
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

  //delete the merchent pending product which is not good
  const merchantProductDelete = async (merchantPdId) => {
    try {
      const url = `${process.env.REACT_APP_BACKEND_URL}/deleteMerchantProduct/${merchantPdId}?email=${currentUser?.email}`;
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
          setRemoveId(merchantPdId);
          setTimeout(() => {
            setDeleteMessage("");
          }, 6000);
        }
      } else {
        console.log("Request failed with status:", response.status);
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  //extraDeliveryCharge
  const handleExtraDeliveryCharge = (even) => {
    even.preventDefault();
    const editProduct = {
      extraDeliveryCost: extraDeliveryRef?.current.value,
    };

    fetch(
      `${process.env.REACT_APP_BACKEND_URL}/updateMerchantExtraDeleveryCharge/${singleMerchantProduct._id}?email=${currentUser?.email}`,
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
    <main className="container-fluid my-5">
      <Link to="/dashboard" className="myBtn p-2 text-decoration-none">
        <i class="bi bi-skip-backward-fill"></i> Back to dashboard
      </Link>
      <h5 className="mt-3">Merchant/Seller: {product[0]?.marchent}</h5>
      <table class="table table-bordered align-middle">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Image</th>
            <th scope="col">Primary Name</th>
            <th scope="col">Primary Price</th>
            <th scope="col">Category</th>
            <th scope="col">Status</th>
            <th scope="col">Details</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {product.map((data, i) => (
            <tr key={i}>
              <th scope="row">{i + 1}</th>
              {console.log(data)}
              <td>
                <img
                  src={data?.variantItems?.[0]?.variants?.[0]?.image}
                  className="merchant-product-img"
                  alt=""
                />
              </td>
              <td>{data?.name}</td>
              <td>{data?.currentPrice}</td>
              <td>{data?.categories}</td>
              <td>{data?.merchantProudctStatus}</td>
              <td>
                <button
                  type="button"
                  className="btn btn-info"
                  data-bs-toggle="modal"
                  data-bs-target="#MerchantProductDetails"
                  onClick={() => fetchSingleProduct(data._id)}
                >
                  View
                </button>
              </td>
              <td className="d-flex gap-3 mt-3">
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={() =>
                    handleMerchantProductStatus("active", data?._id)
                  }
                >
                  Approved
                </button>

                <button
                  type="button"
                  className="btn btn-success"
                  onClick={() => merchantProductDelete(data?._id)}
                >
                  Rejected
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div
        className="modal fade"
        id="MerchantProductDetails"
        tabindex="-1"
        aria-labelledby="MerchantProductDetailsLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-scrollable modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="MerchantProductDetailsLabel">
                Product Details
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="business-info">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th scope="col">Video</th>
                      <th scope="col">Image/'s</th>
                      <th scope="col">Brand Name</th>
                      <th scope="col">extra delivery cost</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <div className="container mt-4">
                        {singleMerchantProduct?.variantItems?.map(
                          (variantItem) => (
                            <div key={variantItem.variants[0].variantId}>
                              {variantItem.variants.map((variant) => (
                                <div key={variant.variantId}>
                                  <img
                                    src={variant.image}
                                    alt={variant.color}
                                    className="merchant-product-img"
                                  />
                                  <p>{variant.color}</p>
                                  {variant.sizes.map((size) => (
                                    <div key={size.variantItemId}>
                                      <p>{`Size: ${size.size}, Stock: ${size.stock}`}</p>
                                    </div>
                                  ))}
                                </div>
                              ))}
                            </div>
                          )
                        )}
                      </div>
                      <td>{singleMerchantProduct?.marchent}</td>
                      <td>
                        <form onSubmit={handleExtraDeliveryCharge}>
                          <div className="input-group mb-3">
                            <input
                              type="number"
                              className="form-control"
                              placeholder={
                                singleMerchantProduct.extraDeliveryCost
                              }
                              aria-label="Recipient's username"
                              aria-describedby="button-addon2"
                              name="deleveryCharge"
                              ref={extraDeliveryRef}
                              required
                            />
                            <button
                              className="btn btn-outline-secondary popup-edit-save-btn"
                              id="button-addon2"
                              type="submit"
                            >
                              submit extra delivery charge
                            </button>
                          </div>
                        </form>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th scope="col">Warranty</th>
                      <th scope="col">Package Weight</th>
                      <th scope="col">subCategories</th>
                      <th scope="col">childCategories</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>N/A</td>
                      <td>{singleMerchantProduct?.weight}</td>
                      <td>{singleMerchantProduct?.subCategories}</td>
                      <td>{singleMerchantProduct?.childCategories}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="Bank-info mt-5">
                <h5>Product Short Description:</h5>
                <p>{singleMerchantProduct?.shortDescription}</p>
              </div>
              <div className="warehouse-info mt-5">
                <h5>Product Long Description/ details:</h5>
                <div>{ReactHtmlParser(singleMerchantProduct?.description)}</div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MerchantsProduct;
