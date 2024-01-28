import React, { useEffect, useState } from "react";
import { useAuth } from "../../../Authentication/AuthContext/AuthContext";
import { Link } from "react-router-dom";
import PopupMerchantEditProduct from "./PopupMerchantEditProduct";
import PopupMerchantCampain from "./PopupMerchantCampain";

const MerchantManageProduct = () => {
  const { currentUser } = useAuth();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState();
  const [deleteMessage, setDeleteMessage] = useState("");
  const [removeId, setRemoveId] = useState(0);
  const [singleProduct, setSingleProduct] = useState({});

  //get add all the active product
  useEffect(() => {
    const fetchFood = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_BACKEND_URL}/marchantManageProduct?merchantEmail=` +
            currentUser?.email
        );
        const data = await response.json();
        setProduct(data);
        setLoading(false);
      } catch (error) {
        console.log("err", error);
      }
    };
    fetchFood();
  }, [currentUser, removeId]);

  //get single merchant product for edit(same api used)
  const fetchSingleProduct = async (singleProductId) => {
    try {
      setLoading(true);
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/singleProduct/${singleProductId}`
      );
      const data = await response.json();
      setSingleProduct(data);
    } catch (error) {
      console.log("err", error);
    }
    setLoading(false);
  };

  //Deleteing the product form product list(same api)
  const handleMerchantProductDelete = async (productId) => {
    try {
      const url = `${process.env.REACT_APP_BACKEND_URL}/deleteProduct/${productId}?email=${currentUser?.email}`;
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
          setRemoveId(productId);
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

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Stock</th>
            <th scope="col">Category</th>
            <th scope="col">Product Code</th>
            <th scope="col">Image</th>
            <th scope="col">Old Price</th>
            <th scope="col">Current Price</th>
            <th scope="col">Edit</th>
            <th scope="col">Campaign</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {product.map((data, i) => (
            <tr key={i}>
              <th scope="row">{i + 1}</th>
              <td>{data.name}</td>
              <td>{data.stock}</td>
              <td>{data.categories}</td>
              <td>{data.code}</td>
              <td>
                <img
                  className="merchant-product-img"
                  src={data?.variantItems?.[0]?.variants?.[0]?.image}
                  alt=""
                />
              </td>
              <td>{data.oldPrice}</td>
              <td>{data.currentPrice}</td>
              <td>
                <button
                  type="button"
                  className="btn btn-warning"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  onClick={() => fetchSingleProduct(data?._id)}
                >
                  Edit Product
                </button>
                {/* popup edit component */}
                <PopupMerchantEditProduct data={singleProduct} />
              </td>

              <td>
                <button
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#campain"
                  onClick={() => fetchSingleProduct(data?._id)}
                >
                  Campaign
                </button>
              </td>
              <PopupMerchantCampain data={singleProduct} />

              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleMerchantProductDelete(data?._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MerchantManageProduct;
