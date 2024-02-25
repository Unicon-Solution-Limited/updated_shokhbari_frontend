// This page contains Manage Product section In dashboard
import React, { useEffect, useState } from "react";
import EditMangeProduct from "./EditMangeProduct";
import "./ManageProduct.css";
import Pagination from "./../pagination/pagination";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { DebounceInput } from "react-debounce-input";
import loader from "../../Image/loder.gif";
import { useAuth } from "../../Authentication/AuthContext/AuthContext";

const ManageProduct = () => {
  const { currentUser } = useAuth();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  // this setState for reloading page
  const [removeId, setRemoveId] = useState(0);
  const [deleteMessage, setDeleteMessage] = useState("");
  const [signleProduct, setSingleProduct] = useState([]);

  const [page, setPage] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  // products to be rendered on the UI
  const [displayProducts, setDisplayProducts] = useState([]);
  //this is total product size
  const size = 80;

  //search product store
  // const [filteredProducts, setFilteredProducts] = useState([]);

  //for searching product
  // const handleSearch = (e) => {
  //   setSearch(e.target.value);
  // };

  // this is for searching product
  // useEffect(() => {
  //   const fetchProduct = async () => {
  //     try {
  //       const response = await fetch(
  //         `${process.env.REACT_APP_BACKEND_URL}/ManageProductSearch?search=` + search
  //       );
  //       const data = await response.json();
  //       setFilteredProducts(data);
  //     } catch (error) {
  //       console.log("err", error);
  //     }
  //   };
  //   fetchProduct();
  // }, [search, product]);

  //all product getting for searching
  useEffect(() => {
    const fetchProductData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `${process.env.REACT_APP_BACKEND_URL}/allProduct`
        );
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.log("err", error);
      }
      setLoading(false);
    };
    fetchProductData();
  }, [removeId]);

  //posting the page and size to the backend for pagination
  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_BACKEND_URL}/productsForPagination?page=${page}&&size=${size}`
    )
      .then((res) => res.json())
      .then((data) => {
        setDisplayProducts(data.products);
        const count = data.count;
        const pageNumber = Math.ceil(count / size);
        setPageCount(pageNumber);
      });
  }, [page, removeId]);

  //search handaling with condition for the reason of colse all searching product load
  const handleSearch = (event) => {
    const searchText = event.target.value;
    if (searchText.length) {
      const matchedProducts = product.filter((product) =>
        product?.name.toLowerCase().includes(searchText.toLowerCase())
      );
      setDisplayProducts(matchedProducts);
    } else if (searchText.length === 0) {
      setDisplayProducts(displayProducts);
    }
  };

  //Deleteing the product form product list
  const productDelete = async (productId) => {
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

  //single product get
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

  return (
    <>
      <div className="row productListHeader mb-3">
        <div className="col-md-8">
          <h2>Total Product: {product.length}</h2>
        </div>
        <div className="col-md-4">
          <div className="input-group mb-3">
            <DebounceInput
              onChange={handleSearch}
              type="text"
              className="form-control"
              placeholder="Search By Product Name"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              minLength={2}
              debounceTimeout={300}
            />
            <div className="input-group-append">
              <button className="btn btn-outline-secondary" type="button">
                <i className="bi bi-search"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      <table className="table table-hover ProductTable">
        <thead>
          <tr>
            <th className="table1stCol">SL.</th>
            <th>Image</th>
            {/* <th>Name</th> */}
            <th>Product Code</th>
            <th>Current Price</th>
            <th>Old Price</th>
            <th>extraDeliveryCost</th>
            <th>campain</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {displayProducts?.map((data, index) => (
            <tr key={index}>
              <td className="table1stCol">{index + 1}</td>
              <td>
                <LazyLoadImage
                  style={{ width: "50px", height: "50px" }}
                  src={data?.variantItems?.[0]?.variants?.[0]?.image}
                  alt=""
                  placeholderSrc={loader}
                />
              </td>

              {/* <td>{data?.name}</td> */}
              <td>{data?.code}</td>
              <td>{data?.currentPrice}</td>
              <td>{data?.oldPrice}</td>
              <td>{data?.extraDeliveryCost}</td>
              <td>{data?.campain}</td>
              <td className="productAction">
                <span>
                  <i
                    className="bi bi-x-square-fill"
                    onClick={() => productDelete(data?._id)}
                  ></i>
                </span>

                <span className="mx-3 editIcon">
                  <i
                    className="bi bi-pencil-square"
                    onClick={() => fetchSingleProduct(data?._id)}
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop001"
                  ></i>
                </span>

                {/*product edit popup component */}
                <EditMangeProduct signleProduct={signleProduct} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* this is pagination */}
      <div className="pagination">
        {[...Array(pageCount).keys()].map((number) => (
          <button
            className={number === page ? "selected" : ""}
            key={number}
            onClick={() => setPage(number)}
          >
            {number + 1}
          </button>
        ))}
      </div>

      <h5 className="deleteSuccessMessage alert-success">{deleteMessage}</h5>
      {/* Loading Message*/}
      {loading && (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
    </>
  );
};

export default ManageProduct;
