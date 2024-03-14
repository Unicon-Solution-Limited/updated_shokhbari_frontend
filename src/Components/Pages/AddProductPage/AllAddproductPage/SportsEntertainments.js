import axios from "axios";
import React, { useRef, useState } from "react";
import ReactQuill from "react-quill";
import "../AddProductPage.css";
import "react-quill/dist/quill.snow.css";
import { useAuth } from "./../../../Authentication/AuthContext/AuthContext";
import { v4 as uuidv4 } from "uuid";

const SportsEntertainments = () => {
  const { currentUser } = useAuth();
  const [message, setMessage] = useState("");

  //Conditionally set category in select options
  const [selectOption, setSelectOption] = useState("");
  const [selectChildCategory, setSelectChildCategory] = useState("");
  const [showDescription, setShowDescription] = useState("");

  const handleSelectOption = (e) => {
    setSelectOption(e.target.value);
  };

  const handleChildSelectOption = (e) => {
    setSelectChildCategory(e.target.value);
  };

  // catch input value by using useRef hook
  const nameRef = useRef();
  const productCodeRef = useRef();
  const shortDescriptionRef = useRef();
  const weightRef = useRef();
  const flashRef = useRef();
  const PopularItemsRef = useRef();
  // const campainRef = useRef();
  const marchentRef = useRef();
  const categoriesRef = useRef();
  const subCategoriesRef = useRef();
  const childCategoriesRef = useRef();
  const subChildCategoriesRef = useRef();
  const stockRef = useRef();
  const currentPriceRef = useRef();
  const oldPriceRef = useRef();
  const extraDeliveryCostRef = useRef();

  // handle add product and save at the database
  const handleAddProduct = async (e) => {
    e.preventDefault();

    //this poroduct sotoreing all input value like object and properties
    const product = {
      variantItems: productVariants,
      name: nameRef.current.value,
      code: productCodeRef.current.value,
      description: showDescription,
      shortDescription: shortDescriptionRef.current.value,
      weight: weightRef.current.value,
      flashSale: flashRef.current.value,
      popularItems: PopularItemsRef.current.value,
      campain: "no",
      marchent: marchentRef.current.value.toLowerCase(),
      categories: categoriesRef.current.value,
      subCategories: subCategoriesRef.current.value,
      childCategories: childCategoriesRef.current.value,
      subChildCategories: subChildCategoriesRef.current.value,
      stock: stockRef.current.value,
      currentPrice: currentPriceRef.current.value,
      oldPrice: oldPriceRef.current.value,
      extraDeliveryCost: extraDeliveryCostRef.current.value,
      merchantProudctStatus: "active",
    };

    // add product info at mongodb
    try {
      setMessage("");
      const url = `${process.env.REACT_APP_BACKEND_URL}/addProduct?email=${currentUser?.email}`;
      const option = {
        method: "POST",
        body: JSON.stringify(product),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          authorization: `Bearer ${localStorage.getItem("shokhbari-token")}`,
        },
      };
      const response = await fetch(url, option);
      const data = await response.json();
      if (data) {
        setMessage("Your product added into database successfully.");
        nameRef.current.value = "";
        productCodeRef.current.value = "";
        shortDescriptionRef.current.value = "";
        weightRef.current.value = "";
        flashRef.current.value = "";
        PopularItemsRef.current.value = "";
        // campainRef.current.value = "";
        marchentRef.current.value = "";
        categoriesRef.current.value = "";
        subCategoriesRef.current.value = "";
        childCategoriesRef.current.value = "";
        subChildCategoriesRef.current.value = "";
        stockRef.current.value = "";
        currentPriceRef.current.value = "";
        oldPriceRef.current.value = "";
        extraDeliveryCostRef.current.value = "";
        window.location.reload();
      }
    } catch (error) {
      console.log("err", error);
    }
  };

  // varient system
  const [productVariants, setProductVariants] = useState([]);
  const [newProduct, setNewProduct] = useState({
    variants: [],
  });

  const handleInputChange = (e, variantIndex, sizeIndex) => {
    const { name, value } = e.target;
    const updatedProduct = { ...newProduct };

    if (sizeIndex !== undefined) {
      updatedProduct.variants[variantIndex].sizes[sizeIndex][name] = value;
    } else if (variantIndex !== undefined) {
      updatedProduct.variants[variantIndex][name] = value;
    } else {
      updatedProduct[name] = value;
    }

    setNewProduct(updatedProduct);
  };

  const addVariant = () => {
    setNewProduct({
      ...newProduct,
      variants: [
        ...newProduct.variants,
        {
          variantId: uuidv4(),
          sameVariantId: uuidv4(),
          color: "",
          colorInput: "",
          image: "",
          sizes: [],
        },
      ],
    });
  };

  const addSize = (variantIndex) => {
    const updatedVariants = [...newProduct.variants];
    updatedVariants[variantIndex].sizes = [
      ...updatedVariants[variantIndex].sizes,
      {
        variantItemId: uuidv4(),
        sameVariantItemId: updatedVariants[variantIndex]?.sameVariantId,
        size: "",
        stock: 0,
        price: 0,
      },
    ];
    setNewProduct({
      ...newProduct,
      variants: updatedVariants,
    });
  };

  // const addProduct = () => {
  //   setProductVariants([...productVariants, newProduct]);
  //   setNewProduct({
  //     variants: [],
  //   });
  // };
  const addProduct = () => {
    // Check if there are any variants added
    if (newProduct?.variants?.length === 0) {
      alert("Please add at least one variant.");
      return;
    }

    // Check if any variant is missing size or stock information
    const isVariantsValid = newProduct?.variants?.every((variant) => {
      return (
        variant?.sizes?.length > 0 &&
        variant.sizes.every((size) => size.size && size.stock)
      );
    });

    // Check if any variant is missing color or image
    const isVariantsInfoValid = newProduct?.variants?.every((variant) => {
      return variant.color && variant.colorInput && variant.image;
    });

    if (!isVariantsValid || !isVariantsInfoValid) {
      alert(
        "Please provide size, stock, color, color input, and image for all variants."
      );
      return;
    }

    setProductVariants([...productVariants, newProduct]);
    setNewProduct({
      variants: [],
    });
  };

  // Handle Image Upload (image upload by API to Cloudinary)
  const imageUploadHandler = (event, variantIndex) => {
    const imageData = new FormData();
    imageData.append("upload_preset", "shokh_img");
    imageData.append("file", event.target.files[0]);

    axios
      .post("https://api.cloudinary.com/v1_1/shokh-bari/upload", imageData)
      .then(function (response) {
        const updatedProduct = { ...newProduct };
        updatedProduct.variants[variantIndex].image = response?.data?.url;
        setNewProduct(updatedProduct);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  //remove varient by click
  const handleVarientDlete = () => {
    setProductVariants([""]);
    window.location.reload();
  };

  return (
    <div className="addProductBody my-2">
      <div className="headline">
        <h3 className="d-flex justify-content-center">
          Add Sports & Entertainment Products
        </h3>
        <h5
          className="d-flex justify-content-center"
          style={{ color: "green" }}
        >
          {message}
        </h5>
        <div className="d-flex justify-content-between">
          <span>
            <a
              className="btn compress"
              href="https://tinypng.com/"
              target="_blank"
              rel="noreferrer"
            >
              Compress your Image here
            </a>
          </span>
          <span>
            <a
              className="btn compress"
              href="https://www.freeconvert.com/webp-converter"
              target="_blank"
              rel="noreferrer"
            >
              Convert your Image in .webp formate
            </a>
          </span>
        </div>
      </div>
      <form onSubmit={handleAddProduct}>
        <div className="container my-4">
          {/* varient start */}
          {newProduct.variants.map((variant, variantIndex) => (
            <div key={variantIndex} className="row mb-4">
              {/* product Image */}
              <div className="col-md-4">
                <label
                  htmlFor={`variantImage${variantIndex}`}
                  className="form-label"
                >
                  Image:
                </label>
                <input
                  type="file"
                  className="form-control"
                  id={`variantImage${variantIndex}`}
                  accept="image/*"
                  onChange={(e) => imageUploadHandler(e, variantIndex)}
                />
              </div>

              {/* variant color */}
              <div className="col-md-4">
                <label
                  htmlFor={`variantColor${variantIndex}`}
                  className="form-label"
                >
                  Variant Color
                </label>
                <input
                  type="text"
                  className="form-control"
                  id={`variantColor${variantIndex}`}
                  name="color"
                  value={variant.color}
                  onChange={(e) => handleInputChange(e, variantIndex)}
                />
              </div>

              {/* variant color input */}
              <div className="col-md-4">
                <label
                  htmlFor={`variantColorInput${variantIndex}`}
                  className="form-label"
                >
                  Variant Color Input
                </label>
                <input
                  type="color"
                  className="form-control"
                  id={`variantColorInput${variantIndex}`}
                  name="colorInput"
                  value={variant.colorInput}
                  onChange={(e) => handleInputChange(e, variantIndex)}
                />
              </div>

              {/* size and stock */}
              <b className="mt-5">Sizes/Stock:</b>
              {variant.sizes.map((size, sizeIndex) => (
                <div key={sizeIndex} className="col-md-4 mt-2">
                  {/* product size */}
                  <label
                    htmlFor={`variantSize${variantIndex}_${sizeIndex}`}
                    className="form-label"
                  >
                    Size:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id={`variantSize${variantIndex}_${sizeIndex}`}
                    name="size"
                    value={size.size}
                    onChange={(e) =>
                      handleInputChange(e, variantIndex, sizeIndex)
                    }
                  />

                  {/* product stock */}
                  <label
                    htmlFor={`variantStock${variantIndex}_${sizeIndex}`}
                    className="form-label"
                  >
                    Stock:
                    <input
                      type="number"
                      className="form-control"
                      id={`variantStock${variantIndex}_${sizeIndex}`}
                      name="stock"
                      value={size.stock}
                      onChange={(e) =>
                        handleInputChange(e, variantIndex, sizeIndex)
                      }
                    />
                  </label>
                </div>
              ))}

              <button
                type="button"
                className="btn btn-secondary mt-2"
                onClick={() => addSize(variantIndex)}
              >
                Add Size/Stock
              </button>
            </div>
          ))}

          {/* button */}

          <div className="d-flex justify-content-center align-items-center">
            <button
              type="button"
              className="btn myBtn mr-2"
              onClick={addVariant}
            >
              Add New Color Variant
            </button>
            <button
              type="button"
              className="btn myBtn mx-2"
              onClick={addProduct}
            >
              Submit Variant Product
            </button>
            <i
              onClick={() => handleVarientDlete()}
              className="bi bi-trash"
              style={{ fontSize: "25px", cursor: "pointer" }}
            ></i>
          </div>
        </div>

        {/* diplay variant  */}
        {productVariants.map((product, productIndex) => (
          <div key={productIndex} className="mb-4">
            <h3>{product.productName}</h3>
            <div className="row row-cols-1 row-cols-md-3 g-4">
              {product.variants.map((variant, variantIndex) => (
                <div key={variantIndex} className="col">
                  <div className="card">
                    <div className="card-body">
                      <img
                        style={{
                          height: "50px",
                          width: "50px",
                          borderRadius: "100%",
                        }}
                        className="card-img-top"
                        src={variant.image}
                        alt=""
                      />
                      <br />
                      <b>Variant Color: {variant.color}</b>
                      {/* <h4>Sizes/Stock:</h4> */}
                      {variant.sizes.map((size, sizeIndex) => (
                        <div key={sizeIndex} className="card mb-3">
                          <div className="card-body">
                            <p className="card-text">Size: {size.size}</p>
                            <p className="card-text">Stock: {size.stock}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
        {/* varient end */}

        <div className="row my-4">
          <div className="col-md-8">
            {/* product name */}
            <div>
              <label htmlFor="fname" className="form-label">
                Product Name
              </label>
            </div>
            <div>
              <input
                ref={nameRef}
                type="text"
                id="fname"
                name="productName"
                placeholder="Your product name.."
                className="form-control"
                required
              />
            </div>
          </div>
          <div className="col-md-4">
            <div>
              <label htmlFor="lname" className="form-label">
                Product code
              </label>
            </div>
            <div>
              <input
                ref={productCodeRef}
                type="text"
                id="lname"
                name="productCode"
                placeholder="your productCode.."
                className="form-control"
                required
              />
            </div>
          </div>
        </div>

        {/* product Short description */}
        <div className="row my-4">
          <div>
            <label htmlFor="shortDescription" className="form-label">
              Short Description
            </label>
          </div>
          <div>
            <textarea
              ref={shortDescriptionRef}
              id="shortDescription"
              name="shortDescription"
              placeholder="Write Short Description among 150 characters"
              className="form-control"
              required
            ></textarea>
          </div>
        </div>

        {/* product Full description */}
        <div>
          <label htmlFor="description" className="form-label">
            Full Description
          </label>
        </div>
        <ReactQuill
          className="fullDescription"
          theme="snow"
          value={showDescription}
          modules={{
            toolbar: [
              [{ header: "1" }, { header: "2" }, { font: [] }],
              [{ size: [] }],
              ["bold", "italic", "underline", "strike", "blockquote"],
              [{ align: [] }],
              [{ color: [] }, { background: [] }],
              [
                { list: "ordered" },
                { list: "bullet" },
                { indent: "-1" },
                { indent: "+1" },
              ],
              ["code-block"],
              ["clean"],
            ],
          }}
          formats={[
            "header",
            "font",
            "size",
            "bold",
            "italic",
            "underline",
            "strike",
            "blockquote",
            "color",
            "background",
            "list",
            "bullet",
            "indent",
            "code-block",
            "align",
          ]}
          onChange={(val) => {
            setShowDescription(val);
          }}
        />

        {/* product main color */}
        <div className="row my-4">
          {/* product Flash Sale */}
          <div className="col-md-4">
            <div>
              <label htmlFor="flashSale" className="form-label">
                Flash Sale
              </label>
            </div>
            <div>
              <select
                id="flashSale"
                name="flashSale"
                className="input-group form-select"
                ref={flashRef}
                required
              >
                <option value="">Choose</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
          </div>

          {/* Popular Items */}
          <div className="col-md-4">
            <div>
              <label htmlFor="PopularItems" className="form-label">
                Popular Items
              </label>
            </div>
            <div>
              <select
                id="PopularItems"
                name="PopularItems"
                className="input-group form-select"
                ref={PopularItemsRef}
                required
              >
                <option value="">Choose</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
          </div>

          {/* Campain */}
          {/* <div className="col-md-4">
            <div>
              <label htmlFor="campain" className="form-label">
                Campain
              </label>
            </div>
            <div>
              <select
                id="campain"
                name="campain"
                className="input-group form-select"
                ref={campainRef}
              >
                <option value="">Choose</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
          </div> */}

          {/* Merchant  */}
          <div className="col-md-4">
            <div>
              <label htmlFor="marchent" className="form-label">
                Merchant
              </label>
            </div>
            <div>
              <input
                ref={marchentRef}
                type="text"
                id="marchent"
                name="marchent"
                placeholder="Your company"
                className="form-control"
                required
              />
            </div>
          </div>
        </div>

        <div className="row my-4">
          {/* product categories */}
          <div className="col-md-3">
            <div>
              <label htmlFor="categories" className="form-label">
                Categories
              </label>
            </div>
            <div>
              <select
                id="categories"
                name="categories"
                className="input-group form-select"
                ref={categoriesRef}
                required
              >
                <option value="Sports and Entertainment">
                  Sports and Entertainment
                </option>
              </select>
            </div>
          </div>
          {/* product sub categories */}
          <div className="col-md-3">
            <div>
              <label htmlFor="sub-categories" className="form-label">
                Sub-Categories
              </label>
            </div>
            <div>
              <select
                id="sub-categories"
                name="sub-categories"
                className="input-group form-select"
                ref={subCategoriesRef}
                onClick={handleSelectOption}
                required
              >
                <option value="">Choose a category</option>
                <option value="Exercise&Fitness">
                  Exercise & Fitness, Yoga
                </option>
                <option value="OutdoorRecreation">Outdoor Recreation</option>
                <option value="IndoorRecreation">Indoor Recreation</option>
                <option value="Camping_Hiking">Camping Hiking</option>
              </select>
            </div>
          </div>
          {/* child categories */}
          <div className="col-md-3">
            <div>
              <label htmlFor="child-categories" className="form-label">
                child-Categories
              </label>
            </div>
            <div>
              <select
                id="child-categories"
                name="child-categories"
                className="input-group form-select"
                ref={childCategoriesRef}
              >
                {selectOption === "Exercise&Fitness" && (
                  <option value="Exercise&Fitness">
                    Exercise & Fitness, Yoga
                  </option>
                )}

                {selectOption === "OutdoorRecreation" && (
                  <option value="OutdoorRecreation">Outdoor Recreation</option>
                )}

                {selectOption === "IndoorRecreation" && (
                  <option value="IndoorRecreation">Indoor Recreation</option>
                )}

                {selectOption === "Camping_Hiking" && (
                  <option value="Camping_Hiking">Camping Hiking</option>
                )}
              </select>
            </div>
          </div>
          {/* product sub child categories */}
          <div className="col-md-3">
            <div>
              <label htmlFor="sub-child-categories" className="form-label">
                Child-Sub-Categories
              </label>
            </div>
            <div>
              <select
                id="sub-child-categories"
                name="sub-child-categories"
                className="input-group form-select"
                ref={subChildCategoriesRef}
              >
                <option value=""></option>
              </select>
            </div>
          </div>
        </div>

        <div className="row my-4">
          {/* product stock */}
          <div className="col-md-3">
            <div>
              <label htmlFor="stock" className="form-label">
                Stock
              </label>
            </div>
            <div>
              <select
                ref={stockRef}
                id="stock"
                name="stock"
                placeholder="Your product stock.."
                className="input-group form-select"
                required
              >
                <option value="">Choose an option</option>
                <option value="In Stock">In Stock</option>
                <option value="Out of Stock">Out of Stock</option>
              </select>
            </div>
          </div>
          {/* product Weight */}
          <div className="col-md-3">
            <div>
              <label htmlFor="weight" className="form-label">
                Product Weight(gm)
              </label>
            </div>
            <div>
              <input
                ref={weightRef}
                type="number"
                id="weight"
                name="weight"
                placeholder="Product weight"
                className="input-group form-control"
              />
            </div>
          </div>
          {/* product discount price */}
          <div className="col-md-3">
            <div>
              <label htmlFor="currentPrice" className="form-label">
                Current price
              </label>
            </div>
            <div>
              <input
                ref={currentPriceRef}
                type="number"
                id="currentPrice"
                name="currentPrice"
                placeholder="Product discount Price"
                className="input-group form-control"
                required
              />
            </div>
          </div>
          {/* product current price */}
          <div className="col-md-3">
            <div>
              <label htmlFor="oldPrice" className="form-label">
                Old price
              </label>
            </div>
            <div>
              <input
                ref={oldPriceRef}
                type="number"
                id="oldPrice"
                name="oldPrice"
                placeholder="Product Previous Price"
                className="input-group form-control"
                required
              />
            </div>
          </div>
        </div>

        {/* extra delvery charge */}
        <div className="col-md-4">
          <div>
            <label htmlFor="extraDeliveryCost" className="form-label">
              Extra Delivery Cost
            </label>
          </div>
          <input
            type="number"
            name="extraDeliveryCost"
            id="extraDeliveryCost"
            className="form-control"
            ref={extraDeliveryCostRef}
            placeholder="extra Delivery Cost"
            required
          />
        </div>

        <div className="row my-4">
          <div className="col d-grid gap-2">
            <button type="submit" value="Submit" className="btn myBtn">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SportsEntertainments;
