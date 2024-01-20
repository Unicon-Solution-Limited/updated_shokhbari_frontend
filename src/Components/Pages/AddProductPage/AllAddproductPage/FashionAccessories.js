import axios from "axios";
import React, { useRef, useState } from "react";
import ReactQuill from "react-quill";
import "../AddProductPage.css";
import "react-quill/dist/quill.snow.css";
import { useAuth } from "./../../../Authentication/AuthContext/AuthContext";

const FashionAccessories = () => {
  const { currentUser } = useAuth();
  const [message, setMessage] = useState("");
  const [imageUrl1, setImageUrl1] = useState("");
  const [imageUrl2, setImageUrl2] = useState("");
  const [imageUrl3, setImageUrl3] = useState("");
  const [imageUrl4, setImageUrl4] = useState("");
  const [imageUrl5, setImageUrl5] = useState("");

  // Child category and Sub Child category conditional display
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
  const mainColorRef = useRef();
  // const colorRef = useRef();
  const sizeRef = useRef();
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

  //avaiable product size function with multiple input start form here
  const [inputList, setInputList] = useState([{ size: "" }]);
  // handle input change (avaiable product size)
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };
  // handle click event of the Remove button (avaiable product size)
  const handleRemoveClick = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };
  // handle click event of the Add button (avaiable product size)
  const handleAddClick = () => {
    setInputList([...inputList, { size: "" }]);
  };

  //avaiable product color function with multiple input start form here
  const [inputColorList, setInputColorList] = useState([{ colors: "" }]);
  // handle input change (avaiable product color)
  const handleInputColorChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputColorList];
    list[index][name] = value;
    setInputColorList(list);
  };
  // handle click event of the Remove button (avaiable product color)
  const handleColorRemoveClick = (index) => {
    const list = [...inputColorList];
    list.splice(index, 1);
    setInputColorList(list);
  };
  // handle click event of the Add button (avaiable product color)
  const handleColorAddClick = () => {
    setInputColorList([...inputColorList, { colors: "" }]);
  };

  // Handle Image Upload (image upload by api in cloudenery)
  const imageUploadHandler = (event, setImg) => {
    const imageData = new FormData();
    imageData.append("upload_preset", "shokh_img");
    imageData.append("file", event.target.files[0]);

    axios
      .post("https://api.cloudinary.com/v1_1/shokh-bari/upload", imageData)
      .then(function (response) {
        setImg(response?.data?.url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  // handle add product and save at the database
  const handleAddProduct = async (e) => {
    e.preventDefault();

    const product = {
      img1: imageUrl1,
      img2: imageUrl2,
      img3: imageUrl3,
      img4: imageUrl4,
      img5: imageUrl5,
      name: nameRef.current.value,
      code: productCodeRef.current.value,
      description: showDescription,
      shortDescription: shortDescriptionRef.current.value,
      mainColor: mainColorRef.current.value.toLowerCase(),
      // color: colorRef.current.value,
      size: sizeRef.current.value,
      availableSize: inputList,
      availableColor: inputColorList,
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
        mainColorRef.current.value = "";
        // colorRef.current.value = "";
        sizeRef.current.value = "";
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
        <div className="row my-4">
          {/* product Image */}
          <div className="col-md-4">
            <div>
              <label htmlFor="img" className="form-label">
                Choose 1st photo
              </label>
            </div>
            <div>
              <input
                onChange={(e) => imageUploadHandler(e, setImageUrl1)}
                type="file"
                id="img"
                name="image1"
                placeholder="Your image.."
                accept=".jpg, .webp, .png, .jpeg"
                required
              />
            </div>
          </div>
          <div className="col-md-4">
            <div>
              <label htmlFor="img" className="form-label">
                Choose 2nd photo
              </label>
            </div>
            <div>
              <input
                onChange={(e) => imageUploadHandler(e, setImageUrl2)}
                type="file"
                id="img"
                name="image2"
                placeholder="Your image.."
                accept=".jpg, .webp, .png, .jpeg"
              />
            </div>
          </div>
          <div className="col-md-4">
            <div>
              <label htmlFor="img" className="form-label">
                Choose 3rd photo
              </label>
            </div>
            <div>
              <input
                onChange={(e) => imageUploadHandler(e, setImageUrl3)}
                type="file"
                id="img"
                name="image3"
                placeholder="Your image.."
                accept=".jpg, .webp, .png, .jpeg"
              />
            </div>
          </div>

          <div className="col-md-4 mt-2">
            <div>
              <label htmlFor="img4" className="form-label">
                Choose 4th photo
              </label>
            </div>
            <div>
              <input
                onChange={(e) => imageUploadHandler(e, setImageUrl4)}
                type="file"
                id="img4"
                name="image4"
                placeholder="Your image.."
                accept=".jpg, .webp, .png, .jpeg"
              />
            </div>
          </div>

          <div className="col-md-4 mt-2">
            <div>
              <label htmlFor="img5" className="form-label">
                Choose 5th photo
              </label>
            </div>
            <div>
              <input
                onChange={(e) => imageUploadHandler(e, setImageUrl5)}
                type="file"
                id="img5"
                name="image5"
                placeholder="Your image.."
                accept=".jpg, .webp, .png, .jpeg"
              />
            </div>
          </div>
        </div>

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

        <div className="row my-4">
          {/* product color name  */}
          <div className="col-md-4">
            <div>
              <label htmlFor="Mainolor" className="form-label">
                Color Name
              </label>
            </div>
            <input
              type="text"
              name="mainColor"
              id="Mainolor"
              className="form-control"
              placeholder="Type your color name"
              ref={mainColorRef}
              required
            />
          </div>
          {/* product color Code  */}
          {/* <div className="col-md-4">
            <div>
              <label htmlFor="color" className="form-label">
                Color
              </label>
            </div>
            <div>
              <input
                type="color"
                name="color"
                id="color"
                className="form-control colorPicker"
                defaultValue="#000"
                ref={colorRef}
              />
            </div>
          </div> */}

          {/* product size  */}
          <div className="col-md-4">
            <div>
              <label htmlFor="singleSize" className="form-label">
                Product Size
              </label>
            </div>
            <div>
              <input
                type="text"
                name="singleSize"
                id="singleSize"
                className="form-control"
                ref={sizeRef}
                placeholder="Product Size"
                required
              />
            </div>
          </div>

          {/* product available size */}
          <div className="col-md-4">
            <div>
              <label htmlFor="size" className="form-label">
                Available Size
              </label>
            </div>
            <div>
              {/* available product size  */}
              {inputList.map((x, i) => (
                <div key={(x, i)}>
                  <div>
                    <div className="d-flex">
                      <input
                        className="form-control"
                        name="size"
                        placeholder="Enter available size"
                        value={x.size}
                        onChange={(e) => handleInputChange(e, i)}
                        required
                      />
                      {inputList.length !== 1 && (
                        <button
                          className="btn myBtn removeSize"
                          onClick={() => handleRemoveClick(i)}
                        >
                          Remove
                        </button>
                      )}
                    </div>
                    <div>
                      {inputList.length - 1 === i && (
                        <button onClick={handleAddClick} className="btn myBtn">
                          Add
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* product available Color */}
          <div className="col-md-4">
            <div>
              <label htmlFor="colors" className="form-label">
                Available Color
              </label>
            </div>
            <div>
              {/* available product Color  */}
              {inputColorList.map((x, i) => (
                <div key={(x, i)}>
                  <div>
                    <div className="d-flex">
                      <input
                        type="color"
                        className="form-control"
                        name="colors"
                        placeholder="Enter available color"
                        value={x.colors}
                        onChange={(e) => handleInputColorChange(e, i)}
                      />
                      {inputColorList.length !== 1 && (
                        <button
                          className="btn myBtn removeSize"
                          onClick={() => handleColorRemoveClick(i)}
                        >
                          Remove
                        </button>
                      )}
                    </div>
                    <div>
                      {inputColorList.length - 1 === i && (
                        <button
                          onClick={handleColorAddClick}
                          className="btn myBtn"
                        >
                          Add
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

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
                <option value="Fashion Accessories">Fashion Accessories</option>
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
                <option value="Ties and Accessories">Ties & Accessories</option>
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
                    <option value="Crown and Tiklies">Crown & Tiklies</option>
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
                    <option value="Ladies Umbrellas">Ladies Umbrellas</option>
                    <option value="Unisex Umbrellas">Unisex Umbrellas</option>
                  </>
                )}
                {selectOption === "Face Mask" && (
                  <>
                    <option value="Gents Face Mask">Gents Face Mask</option>
                    <option value="Ladies Face Mask">Ladies Face Mask</option>
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
                    <option value="Purse and Clutches">Purse & Clutches</option>
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
      </form>
    </div>
  );
};

export default FashionAccessories;
