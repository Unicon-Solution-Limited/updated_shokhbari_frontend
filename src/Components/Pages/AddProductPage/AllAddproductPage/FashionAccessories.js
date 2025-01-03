import axios from "axios";
import React, { useRef, useState, useCallback } from "react";
import "../AddProductPage.css";
import { useAuth } from "./../../../Authentication/AuthContext/AuthContext";
import { v4 as uuidv4 } from "uuid";
import JoditEditor from "jodit-react";

const FashionAccessories = () => {
  const { currentUser } = useAuth();
  const [message, setMessage] = useState("");
  const [addInputProduct, setAddInputProduct] = useState(false);

  //Conditionally set category in select options
  const [selectOption, setSelectOption] = useState("");
  const [selectChildCategory, setSelectChildCategory] = useState("");
  const editor = useRef(null);
  const [showDescription, setShowDescription] = useState("");

  const editorContentRef = useRef(showDescription);

  const handleEditorChange = useCallback((newContent) => {
    editorContentRef.current = newContent;
  }, []);

  const handleEditorBlur = () => {
    setShowDescription(editorContentRef.current);
  };

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
        setTimeout(() => {
          window.location.reload();
        }, 500);
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
    setAddInputProduct(true);
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

  const duplicatePreviousVariant = () => {
    if (newProduct.variants.length === 0) {
      alert("No previous variant to duplicate.");
      return;
    }

    const lastVariant = newProduct.variants[newProduct.variants.length - 1];
    const duplicatedVariant = {
      variantId: uuidv4(),
      sameVariantId: uuidv4(),
      color: lastVariant.color,
      colorInput: lastVariant.colorInput,
      image: "", // New image will be uploaded
      sizes: lastVariant.sizes.map((size) => ({
        variantItemId: uuidv4(),
        sameVariantItemId: lastVariant.sameVariantId,
        size: size.size,
        stock: size.stock,
        price: size.price,
      })),
    };

    setNewProduct({
      ...newProduct,
      variants: [...newProduct.variants, duplicatedVariant],
    });
  };

  return (
    <div className="apparel my-2 addProductBody">
      <div className="headline">
        <h3 className="d-flex justify-content-center">
          Add Fashion Accessories Products
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
          {/* button */}
          <div className="d-flex justify-content-center align-items-center">
            <button
              type="button"
              className="btn myBtn mr-2"
              onClick={addVariant}
            >
              Add New product
            </button>

            <button
              type="button"
              className="btn myBtn mx-2"
              onClick={duplicatePreviousVariant}
            >
              Add more Image
            </button>

            <button
              type="button"
              className="btn myBtn mx-2"
              onClick={addProduct}
            >
              Submit Product
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

        {addInputProduct && (
          <div>
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

            <JoditEditor
              ref={editor}
              value={editorContentRef.current}
              config={config}
              tabIndex={1}
              onBlur={handleEditorBlur}
              onChange={handleEditorChange}
            />

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

            <div className="row my-4">
              {/* product categories */}
              <div className="col-md-3">
                <div>
                  <label htmlFor="Categories" className="form-label">
                    Categories
                  </label>
                </div>
                <div>
                  <select
                    id="Categories"
                    name="Categories"
                    className="input-group form-select"
                    ref={categoriesRef}
                    required
                  >
                    <option value="Fashion Accessories">
                      Fashion Accessories
                    </option>
                  </select>
                </div>
              </div>
              {/* product sub categories */}
              <div className="col-md-3">
                <div>
                  <label htmlFor="sub-Categories" className="form-label">
                    Sub-Categories
                  </label>
                </div>
                <div>
                  <select
                    id="sub-Categories"
                    name="sub-Categories"
                    className="input-group form-select"
                    ref={subCategoriesRef}
                    onClick={handleSelectOption}
                    required
                  >
                    <option value="">Choose a category</option>
                    <option value="Hair Accessories">Hair Accessories</option>
                    <option value="Jewelry">Jewelry</option>
                    <option value="Sunglass">Sunglass</option>
                    <option value="Watch">Watch</option>
                    <option value="Bag">Bag</option>
                    <option value="Belt">Belt</option>
                    <option value="Ties and Accessories">
                      Ties & Accessories
                    </option>
                    <option value="Footwear">Footwear</option>
                    <option value="Umbrellas">Umbrellas</option>
                    <option value="Face Mask">Face Mask</option>
                    <option value="Others">Others</option>
                  </select>
                </div>
              </div>
              {/* child categories */}
              <div className="col-md-3">
                <div>
                  <label htmlFor="child-Categories" className="form-label">
                    Child-Categories
                  </label>
                </div>
                <div>
                  <select
                    id="child-Categories"
                    name="child-Categories"
                    className="input-group form-select"
                    ref={childCategoriesRef}
                    onClick={handleChildSelectOption}
                  >
                    <option value="">Choose a category</option>

                    {selectOption === "Hair Accessories" && (
                      <>
                        <option value="Hair Band">Hair Band</option>
                        <option value="Hair Clip">Hair Clip</option>
                        <option value="Crown and Tiklies">
                          Crown & Tiklies
                        </option>
                        <option value="Others">Others</option>
                      </>
                    )}

                    {selectOption === "Jewelry" && (
                      <>
                        <option value="Jewelry set">Jewelry set</option>
                        <option value="Ear Ornaments">Ear Ornaments</option>
                        <option value="Neck Ornaments">Neck Ornaments</option>
                        <option value="Hand Ornaments">Hand Ornaments</option>
                        <option value="Brooch">Brooch</option>
                        <option value="Leg Ornaments">Leg Ornaments</option>
                        <option value="Nose Ornament">Nose Ornament</option>
                        <option value="Others">Others</option>
                      </>
                    )}
                    {selectOption === "Sunglass" && (
                      <>
                        <option value="Gents Sunglass">Gents Sunglass</option>
                        <option value="Ladies Sunglass">Ladies Sunglass</option>
                        <option value="Unisex Sunglass">Unisex Sunglass</option>
                      </>
                    )}

                    {selectOption === "Watch" && (
                      <>
                        <option value="Gents Watch">Gents Watch</option>
                        <option value="Ladies Watch">Ladies Watch</option>
                        <option value="Unisex Watch">Unisex Watch</option>
                      </>
                    )}
                    {selectOption === "Bag" && (
                      <>
                        <option value="Gents Bag">Gents Bag</option>
                        <option value="Ladies Bag">Ladies Bag</option>
                        <option value="Unisex Bag">Unisex Bag</option>
                      </>
                    )}
                    {selectOption === "Belt" && (
                      <>
                        <option value="Gents Belt">Gents Belt</option>
                        <option value="Ladies Belt">Ladies Belt</option>
                        <option value="Unisex Belt">Unisex Belt</option>
                      </>
                    )}

                    {selectOption === "Ties and Accessories" && (
                      <>
                        <option value="Ties">Ties</option>
                        <option value="Tie Accessories">Tie Accessories</option>
                      </>
                    )}
                    {selectOption === "Footwear" && (
                      <>
                        <option value="Gents Footwear">Gents Footwear</option>
                        <option value="Ladies Footwear">Ladies Footwear</option>
                      </>
                    )}
                    {selectOption === "Umbrellas" && (
                      <>
                        <option value="Gents Umbrellas">Gents Umbrellas</option>
                        <option value="Ladies Umbrellas">
                          Ladies Umbrellas
                        </option>
                        <option value="Unisex Umbrellas">
                          Unisex Umbrellas
                        </option>
                      </>
                    )}
                    {selectOption === "Face Mask" && (
                      <>
                        <option value="Face Mask">Gents Face Mask</option>
                        <option value="Kids Face Mask">Kids Face Mask</option>
                      </>
                    )}

                    {selectOption === "Others" && (
                      <>
                        <option value="OtherFeshionAccessories">
                          Other Feshion Accessories
                        </option>
                      </>
                    )}
                  </select>
                </div>
              </div>
              {/* product sub child categories */}
              <div className="col-md-3">
                <div>
                  <label htmlFor="sub-child-Categories" className="form-label">
                    Sub-Child-Categories
                  </label>
                </div>
                <div>
                  <select
                    id="sub-child-Categories"
                    name="sub-child-Categories"
                    className="input-group form-select"
                    ref={subChildCategoriesRef}
                  >
                    <option value="">Choose a Sub Child Categories</option>
                    {selectChildCategory === "Gents Bag" && (
                      <>
                        <option value="Corporate Bags">Corporate Bags</option>
                        <option value="Cross body Bags">Cross body Bags</option>
                        <option value="Back Pack">Back Pack</option>
                        <option value="Laptop Bag">Laptop Bag</option>
                        <option value="Messenger Bag">Messenger Bag</option>
                        <option value="Wallet and long parse">
                          Wallet & long parse
                        </option>
                      </>
                    )}
                    {selectChildCategory === "Ladies Bag" && (
                      <>
                        <option value="Purse and Clutches">
                          Purse & Clutches
                        </option>
                        <option value="Top Handbags">Top Handbags</option>
                        <option value="W-Corporate Bags">Corporate Bags</option>
                        <option value="Cross body and shoulder Bags">
                          Cross body & Shoulder Bags
                        </option>
                        <option value="Parts Bags">Parts Bags</option>
                        <option value="Pouches and Coin Purse">
                          Pouches and Coin Purse
                        </option>
                        <option value="W-Back Packs">Back Pack</option>
                        <option value="W-Laptop Bags">Laptop Bag</option>
                        <option value="W-Messenger Bags">Messenger Bag</option>
                        <option value="W-Wallet and Long parse">
                          Wallet and Long parse
                        </option>
                      </>
                    )}
                    {selectChildCategory === "Unisex Bag" && (
                      <>
                        <option value="Mobile and Tab Covers">
                          Mobile & Tab Covers
                        </option>
                        <option value="Coin purse">Coin purse</option>
                        <option value="Card Holder">Card Holder</option>
                        <option value="Weekender Bags">Weekender Bags</option>
                        <option value="Suitcase and Trolley Bags">
                          Suitcase & Trolley Bags
                        </option>
                        <option value="Travel Bags">Travel Bags</option>
                      </>
                    )}
                    {selectChildCategory === "Gents Footwear" && (
                      <>
                        <option value="M-Sneakers and Converses">
                          Sneakers and Converses
                        </option>
                        <option value="M-Sandals">Sandals</option>
                        <option value="M-Shoes">Shoes</option>
                        <option value="M-Loafers">Loafers</option>
                        <option value="M-Flip Flops">Flip Flops</option>
                        <option value="M-Slippers">Slippers</option>
                        <option value="M-Boots">Boots</option>
                      </>
                    )}
                    {selectChildCategory === "Ladies Footwear" && (
                      <>
                        <option value="W-Sneakers and Converses">
                          Sneakers & Converses
                        </option>
                        <option value="W-Sandals">Sandals</option>
                        <option value="W-Shoes">Shoes</option>
                        <option value="W-Loafers">Loafers</option>
                        <option value="W-Flip Flops">Flip Flops</option>
                        <option value="W-Slippers">Slippers</option>
                        <option value="W-Boots">Boots</option>
                        <option value="Heals">Heals</option>
                        <option value="Wedges">Wedges</option>
                      </>
                    )}
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
          </div>
        )}
      </form>
    </div>
  );
};

export default FashionAccessories;
