import axios from "axios";
import React, { useRef, useState } from "react";
import ReactQuill from "react-quill";
import "../AddProductPage.css";
import "react-quill/dist/quill.snow.css";
import { useAuth } from "./../../../Authentication/AuthContext/AuthContext";
import { v4 as uuidv4 } from "uuid";

const HomeAppliances = () => {
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
      variantItems: products,
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

  //varient system
  const initialVariant = {
    variantId: "",
    size: "",
    colorInput: "",
    color: "",
    price: 0,
    stock: 0,
    image: "", // Single image for each variant
  };

  const [products, setProducts] = useState({ variants: [] });
  const [newVariantItem, setnewVariantItem] = useState({ ...initialVariant });
  const imageInputRef = useRef(null);

  const handleVariantChange = (e) => {
    const { name, value } = e.target;
    setnewVariantItem((prevVariant) => ({ ...prevVariant, [name]: value }));
  };

  const handleAddVariant = () => {
    const variantWithId = { ...newVariantItem, variantId: uuidv4() };
    setProducts((prevProducts) => ({
      ...prevProducts,
      variants: [...prevProducts.variants, variantWithId],
    }));
    setnewVariantItem({ ...initialVariant });
    // Reset the image input field
    imageInputRef.current.value = null;
  };

  // Handle Image Upload (image upload by API to Cloudinary)
  const imageUploadHandler = (event) => {
    const imageData = new FormData();
    imageData.append("upload_preset", "shokh_img");
    imageData.append("file", event.target.files[0]);

    axios
      .post("https://api.cloudinary.com/v1_1/shokh-bari/upload", imageData)
      .then(function (response) {
        setnewVariantItem((prevVariant) => ({
          ...prevVariant,
          image: response?.data?.url,
        }));
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="addProductBody my-2">
      <div className="headline">
        <h3 className="d-flex justify-content-center">
          Add Home Appliance Products
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
        {/*varient start  */}
        <div className="row my-4">
          {/* product Image */}
          <div className="col-md-4">
            <div>
              <label htmlFor="variantImage" className="form-label">
                Product Image
              </label>
            </div>
            <div>
              <input
                type="file"
                className="input-group form-control"
                id="variantImage"
                accept="image/*"
                onChange={imageUploadHandler}
                ref={imageInputRef}
              />
            </div>
          </div>
          {/* Product Size */}
          <div className="col-md-4">
            <div>
              <label htmlFor="variantSize" className="form-label">
                Product Size
              </label>
            </div>
            <div>
              <input
                type="text"
                className="input-group form-control"
                id="variantSize"
                placeholder="Product Size"
                name="size"
                value={newVariantItem.size}
                onChange={handleVariantChange}
              />
            </div>
          </div>
          {/* Product Color */}
          <div className="col-md-4">
            <div>
              <label htmlFor="variantColor" className="form-label">
                Product Color
              </label>
            </div>
            <div>
              <input
                type="text"
                className="input-group form-control"
                placeholder="Product Color"
                id="variantColor"
                name="color"
                value={newVariantItem.color}
                onChange={handleVariantChange}
              />
            </div>
          </div>

          {/* color input */}
          <div className="col-md-3 mt-4">
            <div>
              <label htmlFor="variantColorInput" className="form-label">
                Product Color Input
              </label>
            </div>
            <div>
              <input
                type="color"
                className="input-group form-control"
                id="variantColorInput"
                name="colorInput"
                value={newVariantItem.colorInput}
                onChange={handleVariantChange}
              />
            </div>
          </div>

          {/* Stock */}
          <div className="col-md-3 mt-4">
            <div>
              <label htmlFor="variantStock" className="form-label">
                Product Stock
              </label>
            </div>
            <div>
              <input
                type="number"
                className="input-group form-control"
                id="variantStock"
                name="stock"
                value={newVariantItem.stock}
                onChange={handleVariantChange}
              />
            </div>
          </div>
        </div>
        <div className="col-md-12">
          {products.variants.length ? (
            <h2 className="mt-4">Preview Variants:</h2>
          ) : (
            ""
          )}
          <div className="d-flex flex-wrap gap-3">
            {products.variants.map((variant) => (
              <div key={variant.variantId} className="mt-3">
                <p>Size: {variant.size}</p>
                <p>Color: {variant.color}</p>
                <p>Stock: {variant.stock}</p>
                <p>ColorInput: {variant.colorInput}</p>
                {variant.image && (
                  <img
                    src={variant.image}
                    alt={`Variant`}
                    className="img-fluid mt-2"
                    style={{ maxWidth: "100px", maxHeight: "100px" }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="col-md-4">
          <button
            type="button"
            className="btn myBtn mt-3"
            onClick={handleAddVariant}
          >
            Add Variant Product
          </button>
        </div>
        {/*varient end */}

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

          {/* marchant  */}
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
                <option value="Home Appliance">Home Appliance</option>
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
                <option value="">Choose a Category</option>
                <option value="Home Entertainment">Home Entertainment</option>
                <option value="Refrigerator and Freezer">
                  Refrigerator & Freezer
                </option>
                <option value="Cooling and Heating">Cooling & Heating</option>
                <option value="Kitchen Appliance">Kitchen Appliance</option>
                <option value="Bath Fixtures">Bath Fixtures</option>
                <option value="Washing Machine">Washing Machine</option>
                <option value="Cleaning Equipments">Cleaning Equipments</option>
                <option value="Iron and Garment steamers">
                  Iron & Garment steamers
                </option>
                <option value="Home lighting">Home lighting</option>
                <option value="Others Appliances">Others Appliances</option>
              </select>
            </div>
          </div>
          {/* child categories */}
          <div className="col-md-3">
            <div>
              <label htmlFor="child-Categories" className="form-label">
                child-Categories
              </label>
            </div>
            <div>
              <select
                id="child-Categories"
                name="child-Categories"
                className="input-group form-select"
                ref={childCategoriesRef}
                required
              >
                {selectOption === "Home Entertainment" && (
                  <>
                    <option value="Television">Television</option>
                    <option value="Audio and Music Devices">
                      Audio & Music Devices
                    </option>
                    <option value="VR and Glasses">VR & Glasses</option>
                    <option value="Android Box">Android Box</option>
                  </>
                )}

                {selectOption === "Refrigerator and Freezer" && (
                  <>
                    <option value="Direct Cool refrigerator">
                      Direct Cool refrigerator
                    </option>
                    <option value="Non-frost refrigerator">
                      Non-frost refrigerator
                    </option>
                    <option value="Freezer">Freezer</option>
                    <option value="Beverage Cooler">Beverage Cooler</option>
                  </>
                )}
                {selectOption === "Cooling and Heating" && (
                  <>
                    <option value="Air Conditioner">Air Conditioner</option>
                    <option value="Air Cooler">Air Cooler</option>
                    <option value="Fan">Fan</option>
                    <option value="Room Heater">Room Heater</option>
                    <option value="Geyser">Geyser</option>
                    <option value="Air Purifier">Air Purifier</option>
                  </>
                )}
                {selectOption === "Kitchen Appliance" && (
                  <>
                    <option value="Water Purifier and Filter">
                      Water Purifier & Filter
                    </option>
                    <option value="Kitchen Stove">Kitchen Stove</option>
                    <option value="Kitchen Hood">Kitchen Hood</option>
                    <option value="Microwave and Electric Oven">
                      Microwave & Electric Oven
                    </option>
                    <option value="Cooker">Cooker</option>
                    <option value="Other electronic Appliance">
                      Other electronic Appliance
                    </option>
                  </>
                )}
                {selectOption === "Bath Fixtures" && (
                  <>
                    <option value="Basin">Basin</option>
                    <option value="Commode">Commode</option>
                    <option value="Bath tub">Bath tub</option>
                    <option value="Bath fittings">Bath fittings</option>
                  </>
                )}
                {selectOption === "Washing Machine" && (
                  <>
                    <option value="Automatic Front Load">
                      Automatic Front Load
                    </option>
                    <option value="Automatic top load">
                      Automatic top load
                    </option>
                    <option value="Semi-Automatic">Semi-Automatic</option>
                  </>
                )}
                {selectOption === "Cleaning Equipments" && (
                  <>
                    <option value="Vacuum Cleaner">Vacuum Cleaner</option>
                    <option value="Others Cleaning Equipments">
                      Others Cleaning Equipments
                    </option>
                  </>
                )}
                {selectOption === "Home lighting" && (
                  <>
                    <option value="Lights">Lights</option>
                    <option value="Switch">Switch</option>
                    <option value="Plugs and Outlets">Plugs & Outlets</option>
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

export default HomeAppliances;
