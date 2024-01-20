import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useAuth } from "./../../Authentication/AuthContext/AuthContext";
import "./MerchantDetails.css";

const ManageMerchant = () => {
  const [merchant, setmerchant] = useState([]);
  const [loadinhg, setLoading] = useState();
  const [message, setMessage] = useState();
  const [deleteMessage, setDeleteMessage] = useState();
  const [removeId, setRemoveId] = useState();
  const [singleMerchant, setSingleMerchant] = useState([]);
  const { currentUser } = useAuth();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/getAllMerchant`
        );
        setmerchant(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [removeId]);

  // update product and send to the database
  const handleMerchantEdit = (value, id) => {
    fetch(
      `${process.env.REACT_APP_BACKEND_URL}/updateMarchantStatus/${id}?email=${currentUser?.email}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${localStorage.getItem("shokhbari-token")}`,
        },
        body: JSON.stringify({ merchantStatus: value }),
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

  //Deleteing the product form product list
  const merchantDelete = async (merchantId) => {
    try {
      const url = `${process.env.REACT_APP_BACKEND_URL}/deleteMerchant/${merchantId}?email=${currentUser?.email}`;
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
          setRemoveId(merchantId);
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

  //get the single merchant
  const fetchSingleProduct = async (singleMerchantId) => {
    try {
      setLoading(true);
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/singleMerchant/${singleMerchantId}`
      );
      const data = await response.json();
      setSingleMerchant(data);
    } catch (error) {
      console.log("err", error);
    }
    setLoading(false);
  };

  return (
    <>
      <h6>Manage Merchant</h6>
      <table className="table align-middle table-bordered">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Business Name</th>
            <th scope="col">Logo</th>
            <th scope="col">Email</th>
            <th scope="col">Phone Number</th>
            <th scope="col">Status</th>
            <th scope="col">Action</th>
            <th scope="col">Details</th>
          </tr>
        </thead>
        <tbody>
          {merchant.map((data, k) => (
            <tr key={k}>
              <th scope="row">{k + 1}</th>
              <td>{data?.merchantAccountName}</td>
              <td>{data?.merchantBusiness}</td>
              <td>
                <img
                  src={data?.merchantBusinessLogo}
                  alt=""
                  className="merchantLogo"
                />
              </td>
              <td>{data?.merchantEmail}</td>
              <td>{data?.merchantNumber}</td>
              <td>{data?.merchantStatus}</td>
              <td>
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={() => handleMerchantEdit("active", data?._id)}
                >
                  Confirm
                </button>

                <button
                  type="button"
                  className="btn btn-success m-1"
                  onClick={() => handleMerchantEdit("pending", data?._id)}
                >
                  Pending
                </button>

                <button
                  type="button"
                  className="btn btn-danger m-1"
                  onClick={() => merchantDelete(data._id)}
                >
                  Delete
                </button>
              </td>
              <td>
                <button
                  type="button"
                  className="btn btn-info m-1"
                  data-bs-toggle="modal"
                  data-bs-target="#MerchantDetailsModals"
                  onClick={() => fetchSingleProduct(data._id)}
                >
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div
        className="modal fade"
        id="MerchantDetailsModals"
        tabindex="-1"
        aria-labelledby="MerchantDetailsModalsLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-scrollable modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="MerchantDetailsModalsLabel">
                Merchant Details
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
                <h5>Business Information:</h5>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th scope="col">Business Owner name</th>
                      <th scope="col">Legal Form</th>
                      <th scope="col">Address</th>
                      <th scope="col">Registration Number</th>
                      <th scope="col">Business Document</th>
                      <th scope="col">Seller TIN</th>
                      <th scope="col">Logo</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{singleMerchant?.merchantAccountName}</td>
                      <td>{singleMerchant?.merchantLegalForam}</td>
                      <td>
                        {singleMerchant?.merchantAdress}
                        <br />
                        Thana: {singleMerchant?.merchantThana}
                        <br />
                        city: {singleMerchant?.merchantCity}
                      </td>
                      <td>{singleMerchant?.merchantBusinessRegNumber}</td>
                      <td>
                        <a
                          href={singleMerchant?.merchantTredLicenseImg}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Tread License image
                        </a>
                      </td>
                      <td>{singleMerchant?.merchantTinNumber}</td>
                      <td>
                        <a
                          href={singleMerchant?.merchantBusinessLogo}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Business logo image
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="Bank-info mt-5">
                <h5>Bank Information:</h5>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th scope="col">Account Title/Name</th>
                      <th scope="col">Account Number</th>
                      <th scope="col">Bank Name or MFS</th>
                      <th scope="col">Branch Name</th>
                      <th scope="col">Routing Number</th>
                      <th scope="col">Cheque Copy</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{singleMerchant?.merchantBankNameRef}</td>
                      <td>{singleMerchant?.merchantAccountNumber}</td>
                      <td>{singleMerchant?.merchantBankNameRef}</td>
                      <td>{singleMerchant?.merchantBranchName}</td>
                      <td>{singleMerchant?.merchantRoutingNumber}</td>
                      <td>
                        <a
                          href={singleMerchant?.merchantCheckImg}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Check Image
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="warehouse-info mt-5">
                <h5>Warehouse Address:</h5>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th scope="col">Address</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{singleMerchant?.warehouseAdress}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="modal-footer">
              <Link
                // to="/merchants-product"
                to={`/merchants-product/${singleMerchant?.merchantEmail}`}
                className="text-decoration-none btn-info"
              >
                <button className="btn btn-info" data-bs-dismiss="modal">
                  {" "}
                  View Products
                </button>
              </Link>
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
    </>
  );
};

export default ManageMerchant;
