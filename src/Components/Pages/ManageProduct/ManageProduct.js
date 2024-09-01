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
import axios from "axios";
import { FixedSizeList as List } from "react-window";

const ManageProduct = () => {
  const { currentUser } = useAuth();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  // this setState for reloading page
  const [removeId, setRemoveId] = useState(0);
  const [deleteMessage, setDeleteMessage] = useState("");
  const [signleProduct, setSingleProduct] = useState([]);

  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [code, setCode] = useState(""); // For code search
  const [categories, setCategories] = useState(""); // For category search
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(10); // Default items per page (initially set to 10)
  const [totalProducts, setTotalProducts] = useState(0);

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
    fetchProducts();
  }, [page, size, searchTerm, code, categories, removeId]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/productsForPagination`,
        {
          params: {
            page,
            size,
            name: searchTerm,
            code: code,
            childCategories: categories,
          },
        }
      );
      setProducts(response.data.products);
      setTotalProducts(response.data.count);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleSearchTermChange = (e) => {
    setSearchTerm(e.target.value);
    setPage(0); // Reset to the first page when searching
  };

  const handleCodeChange = (e) => {
    setCode(e.target.value);
    setPage(0); // Reset to the first page when searching
  };

  const handleCategoryChange = (e) => {
    setCategories(e.target.value);
    setPage(0); // Reset to the first page when searching
  };

  const handlePageSizeChange = (e) => {
    const newSize = parseInt(e.target.value);
    setSize(newSize);
    setPage(0); // Reset to the first page when page size changes
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  const totalPages = Math.ceil(totalProducts / size);

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

  const Row = ({ index, style }) => {
    const data = products[index];

    return (
      <div style={style} className="d-flex">
        <tr key={index} className="d-flex w-100">
          <td className="table1stCol col">{index + 1}</td>
          <td className="col">
            <LazyLoadImage
              style={{ width: "50px", height: "50px" }}
              src={data?.variantItems?.[0]?.variants?.[0]?.image}
              alt=""
              placeholderSrc={loader}
            />
          </td>
          <td className="col">{data?.code}</td>
          {/* <td className="col">{data?.name}</td> */}
          <td className="col">{data?.currentPrice}</td>
          <td className="col">{data?.oldPrice}</td>
          <td className="col">{data?.extraDeliveryCost}</td>
          <td className="col">{data?.campain}</td>
          <td className="col">{data?.popularItems}</td>
          <td className="col">{data?.flashSale}</td>
          <td className="productAction col">
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
          </td>
        </tr>
      </div>
    );
  };

  return (
    <>
      <div className="row productListHeader mb-3">
        <div className="col-md-4">
          <h2>Total Product: {product.length}</h2>
        </div>

        <div className="col-md-8">
          <div className="d-flex gap-1 mb-3">
            <DebounceInput
              type="text"
              placeholder="Search by name..."
              value={searchTerm}
              onChange={handleSearchTermChange}
              className="form-control"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              minLength={2}
              debounceTimeout={300}
            />

            <DebounceInput
              type="text"
              placeholder="Search by category..."
              value={categories}
              onChange={handleCategoryChange}
              className="form-control"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              minLength={2}
              debounceTimeout={300}
            />

            <DebounceInput
              type="text"
              placeholder="Search by code..."
              value={code}
              onChange={handleCodeChange}
              className="form-control"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              minLength={2}
              debounceTimeout={300}
            />
            <div className="input-group-append">
              {/* <button className="btn btn-outline-secondary" type="button">
                <i className="bi bi-search"></i>
              </button> */}
              <select
                id="pageSize"
                value={size}
                onChange={handlePageSizeChange}
              >
                <option value={10}>10</option>
                <option value={20}>20</option>
                <option value={50}>50</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="table-responsive">
        <table className="table table-hover ProductTable">
          <thead>
            <tr className="d-flex w-100">
              <th className="table1stCol col">SL.</th>
              <th className="col">Image</th>
              <th className="col">Product Code</th>
              {/* <th className="col">Product Name</th> */}
              <th className="col">Current Price</th>
              <th className="col">Old Price</th>
              <th className="col">extra Delivery Cost</th>
              <th className="col">campain</th>
              <th className="col">Popular</th>
              <th className="col">Flash</th>
              <th className="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <List
              height={400} // Adjust height as needed
              itemCount={products.length}
              itemSize={50} // Adjust row height as needed
              width="100%"
              outerElementType="div"
              innerElementType="tbody"
            >
              {Row}
            </List>
            <EditMangeProduct signleProduct={signleProduct} />
          </tbody>
        </table>
      </div>

      {/* this is pagination */}
      {/* <div>
        {[...Array(pageCount).keys()].map((number) => (
          <button
            className={number === page ? "selected" : ""}
            key={number}
            onClick={() => setPage(number)}
          >
            {number + 1}
          </button>
        ))}
      </div> */}
      <div className="pagination">
        <button
          onClick={() => handlePageChange(page - 1)}
          disabled={page === 0}
        >
          Previous
        </button>
        <span>
          Page {page + 1} of {totalPages}
        </span>
        <button
          onClick={() => handlePageChange(page + 1)}
          disabled={page + 1 >= totalPages}
        >
          Next
        </button>
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
