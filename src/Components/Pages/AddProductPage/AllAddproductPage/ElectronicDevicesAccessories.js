import axios from "axios";
import React, { useRef, useState } from "react";
import ReactQuill from "react-quill";
import "../AddProductPage.css";
import "react-quill/dist/quill.snow.css";
import { useAuth } from "./../../../Authentication/AuthContext/AuthContext";
import { v4 as uuidv4 } from "uuid";

const ElectronicDevicesAccessories = () => {
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
          Add Computer and electronics Products
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
                <option value="Electronic devices and accessories">
                  Electronic devices and accessories
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
                <option value="">Choose a cetegoris</option>
                <option value="Laptop">Laptop</option>
                <option value="DesktopAndBrandPC">Desktop & Brand PC</option>
                <option value="Components">Components</option>
                <option value="Accessories">Accessories</option>
                <option value="SmartphoneAndTablet">Smartphone & Tablet</option>
                <option value="Monitor">Monitor</option>
                <option value="NetworkAndRouter">Network & Router</option>
                <option value="OfficeEquipments">Office Equipments</option>
                <option value="GamingZone">Gaming Zone</option>
                <option value="Gadgets">Gadgets</option>
                <option value="Cameras">Cameras</option>
                <option value="ProjectorAndScreen">Projector & Screen</option>
                <option value="TVAndSpeaker">TV & Speaker</option>
                <option value="IPS/Ups">IPS/Ups</option>
                <option value="SecuritySurveillance">
                  Security Surveillance
                </option>
                <option value="ACAndHomeAppliance">AC & Home Appliance</option>
                <option value="Software">Software</option>
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
                required
                onClick={handleChildSelectOption}
              >
                {selectOption === "Laptop" && (
                  <>
                    {/* laptop */}
                    <option value="Laptop">Laptop</option>
                    <option value="Gaming-Laptops">Gaming Laptops</option>
                    <option value="Laptop-Accessories">
                      Laptop Accessories
                    </option>
                  </>
                )}

                {selectOption === "DesktopAndBrandPC" && (
                  <>
                    {/* laptop */}

                    <option value="Brand-PCs">Brand PCs</option>
                    <option value="Gaming-PC">Gaming PC</option>
                    <option value="Corporate-PC">Corporate/Office PC</option>
                    <option value="Server">Server</option>
                    <option value="Server-RAM">Server RAM</option>
                  </>
                )}

                {selectOption === "Components" && (
                  <>
                    {/* laptop */}

                    <option value="Processor">Processor</option>
                    <option value="CPU-Cooler">CPU Cooler</option>
                    <option value="Portable-HDD">Portable HDD</option>
                    <option value="Motherboard">Motherboard</option>
                    <option value="Desktop-Ram">Desktop Ram</option>
                    <option value="Casing-Fan">Casing Fan</option>
                    <option value="Hard-Disk-Drive">Hard Disk Drive</option>
                    <option value="Laptop-Ram">Laptop Ram</option>
                    <option value="Portable-SSD">Portable SSD</option>
                    <option value="SSD">SSD</option>
                    <option value="Graphics-Card">Graphics Card</option>
                    <option value="Power-Supply">Power Supply</option>
                    <option value="Casing">Casing</option>
                    <option value="Custom-Cooling-Kit">
                      Custom Cooling Kit
                    </option>
                    <option value="Internal-Optical-Drive">
                      Internal Optical Drive
                    </option>
                  </>
                )}

                {selectOption === "Accessories" && (
                  <>
                    {/* laptop */}

                    <option value="Headphone-Microphone">
                      Headphone & Microphone
                    </option>
                    <option value="Mouse">Mouse</option>
                    <option value="Keyboard">Keyboard</option>
                    <option value="WebCam">WebCam</option>
                    <option value="Mouse-pad">Mouse pad</option>
                    <option value="Gamepad">Gamepad</option>
                    <option value="Pen-Drive">Pen Drive</option>
                    <option value="Memory-Card">Memory Card</option>
                    <option value="Power-Bank">Power Bank</option>
                    <option value="Thermal-Paste">Thermal Paste</option>
                    <option value="Capture-Card">Capture Card</option>
                    <option value="Power-Strip">Power Strip</option>
                    <option value="Sound-Card">Sound Card</option>
                    <option value="Presenter">Presenter</option>
                    <option value="Cable-Convertor">Cable & Convertor</option>
                    <option value="USB-HUB">USB HUB</option>
                    <option value="Splitter">Splitter</option>
                    <option value="HDD-SSD-Enclosure">HDD-SSD Enclosure</option>
                    <option value="Wrist-Pad">Wrist Pad</option>
                    <option value="Keyboard-Keycaps">Keyboard Keycaps</option>
                    <option value="Floor-Mat">Floor Mat</option>
                    <option value="Backpack">Backpack</option>
                    <option value="Bluetooth-Receiver">
                      Bluetooth Receiver
                    </option>
                    <option value="External-Optical-Drive">
                      External Optical Drive
                    </option>
                  </>
                )}

                {selectOption === "SmartphoneAndTablet" && (
                  <>
                    <option value="Smartphone">Smartphone</option>
                    <option value="Tablet-PC">Tablet PC</option>
                    <option value="Graphics-Tablet">Graphics Tablet</option>
                  </>
                )}

                {selectOption === "Monitor" && (
                  <>
                    <option value="Monitor">Monitor</option>
                  </>
                )}

                {selectOption === "NetworkAndRouter" && (
                  <>
                    <option value="Router">Router</option>
                    <option value="UTP-Cable-Accessories">
                      UTP Cable & Accessories
                    </option>
                    <option value="Network-Switch">Network Switch</option>
                    <option value="Receiver">Receiver</option>
                    <option value="LAN-Card">LAN Card</option>
                    <option value="Network-Extender">Network Extender</option>
                    <option value="Wifi-Adapter">Wifi-Adapter</option>
                    <option value="Modem">Modem</option>
                    <option value="Network-Accessories">
                      Network Accessories
                    </option>
                    <option value="Access-Point">Access Point</option>
                  </>
                )}

                {selectOption === "OfficeEquipments" && (
                  <>
                    <option value="Interactive-Board">Interactive Board</option>
                    <option value="Laminating-Machine">
                      Laminating Machine
                    </option>
                    <option value="Print-Head">Print Head</option>
                    <option value="Signage">Signage</option>
                    <option value="Weight-Scale">Weight Scale</option>
                    <option value="Printers">Printers</option>
                    <option value="Photocopier">Photocopier</option>
                    <option value="IP-Phone">IP Phone/PABX</option>
                    <option value="Printer-Accessories">
                      Printer Accessories
                    </option>
                    <option value="POS-Printer">POS Printer</option>
                    <option value="Scanner">Scanner</option>
                    <option value="Toner-Cartridge">Toner & Cartridge</option>
                    <option value="Barcode-Scanner">Barcode Scanner</option>
                    <option value="Ink-Bottle">Ink Bottle</option>
                    <option value="ID-Card-Printer">ID Card Printer</option>
                    <option value="Label-Printer">Label Printer</option>
                    <option value="PA-SYSTEM">PA SYSTEM</option>
                    <option value="Conference-System">Conference System</option>
                    <option value="Cutter-Blade">Cutter Blade</option>
                    <option value="Paper-Shredder">Paper Shredder</option>
                    <option value="POS-Receipt">POS Receipt</option>
                    <option value="Cash-Drawer">Cash Drawer</option>
                    <option value="Money-Counting-Machine">
                      Money Counting Machine
                    </option>
                    <option value="Binding-Machine">Binding Machine</option>
                    <option value="Measurement-Machine">
                      Measurement Machine
                    </option>
                    <option value="Fake-Note-Detector-Machine">
                      Fake Note Detector Machine
                    </option>
                  </>
                )}

                {selectOption === "GamingZone" && (
                  <>
                    <option value="Gaming-Chair">Gaming Chair</option>
                    <option value="Gaming-Console">Gaming Console</option>
                    <option value="Gaming-Desk">Gaming Desk</option>
                    <option value="Gaming-Sofa">Gaming Sofa</option>
                  </>
                )}

                {selectOption === "Gadgets" && (
                  <>
                    <option value="Smart-Watch">Smart Watch</option>
                    <option value="Gadgets-items">Gadgets Items</option>
                    <option value="Drone">Drone</option>
                  </>
                )}
                {selectOption === "Cameras" && (
                  <>
                    <option value="Action-Camera">Action Camera</option>
                    <option value="Camera-Accessories">
                      Camera Accessories
                    </option>
                    <option value="Camera-Lenses">Camera Lenses</option>
                    <option value="Conferencing-Camera">
                      Conferencing Camera
                    </option>
                    <option value="Digital-Camera">Digital Camera</option>
                    <option value="DSLR-Cameras">DSLR Cameras</option>
                    <option value="Handycam">Handycam</option>
                  </>
                )}
                {selectOption === "ProjectorAndScreen" && (
                  <>
                    <option value="Projectors">Projectors</option>
                    <option value="Projector-Screen">Projector Screen</option>
                    <option value="Projector-Mount">Projector Mount</option>
                    <option value="Projector-Trolley">Projector Trolley</option>
                  </>
                )}
                {selectOption === "TVAndSpeaker" && (
                  <>
                    <option value="Television">Television</option>
                    <option value="Speakers-Home-Theater">
                      Speakers & Home Theater
                    </option>
                    <option value="Portable-Speaker">Portable Speaker</option>
                    <option value="TV-Remote">TV Remote</option>
                    <option value="TV-Box">TV-Box</option>
                    <option value="Soundbar">Soundbar</option>
                    <option value="Wall-Mount">Wall Mount</option>
                  </>
                )}

                {selectOption === "IPS/Ups" && (
                  <>
                    <option value="Online-UPS">Online UPS</option>
                    <option value="Offline-UPS">Offline UPS</option>
                    <option value="IPS">IPS</option>
                    <option value="UPS-Battery">UPS Battery</option>
                  </>
                )}
                {selectOption === "SecuritySurveillance" && (
                  <>
                    <option value="CC-Camera-Accessories">
                      CC Camera Accessories
                    </option>
                    <option value="XVR">XVR</option>
                    <option value="IPS">IPS</option>
                    <option value="IP-Camera">IP Camera</option>
                    <option value="CC-Camera">CC Camera</option>
                    <option value="DVR-NVR-Machine">DVR / NVR Machine</option>
                    <option value="WiFi-Camera">WiFi Camera</option>
                    <option value="Digital-Locker-Vault">
                      Digital Locker / Vault
                    </option>
                    <option value="Access-Control">Access Control</option>
                  </>
                )}

                {selectOption === "ACAndHomeAppliance" && (
                  <>
                    <option value="Air-Conditioner">Air Conditioner</option>
                    <option value="Blender-Grinder">Blender & Grinder</option>
                    <option value="Dry-Iron">Dry Iron</option>
                    <option value="Electric-Kettle">Electric Kettle</option>
                    <option value="Toaster">Toaster</option>
                    <option value="Refrigerator">Refrigerator</option>
                    <option value="Washing-Machine">Washing Machine</option>
                  </>
                )}

                {selectOption === "Software" && (
                  <>
                    <option value="Operating-System">Operating System</option>
                    <option value="Office-Application">
                      Office Application
                    </option>
                    <option value="Antivirus">Antivirus</option>
                  </>
                )}
              </select>
            </div>
          </div>
          {/* product sub child categories */}
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

export default ElectronicDevicesAccessories;
