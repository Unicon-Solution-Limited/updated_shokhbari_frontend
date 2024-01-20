import React, { useEffect, useRef, useState } from "react";
import { useAuth } from "../../../Authentication/AuthContext/AuthContext";
import axios from "axios";

const MerchantProfile = () => {
  const { currentUser } = useAuth();
  const numberRef = useRef();
  const businessRef = useRef();
  const businessOwnerRef = useRef();
  const legalForamRef = useRef();
  const adressRef = useRef();
  const thanaRef = useRef();
  const cityRef = useRef();
  const businessRegNumberRef = useRef();
  const [tredLicenseImg, setTredLicenseImg] = useState("");
  const tinNumberRef = useRef();
  const [businessLogo, setBusinessLogo] = useState("");
  const accountNameRef = useRef();
  const accountNumberRef = useRef();
  const bankNameRef = useRef();
  const branchNameRef = useRef();
  const routingNumberRef = useRef();
  const [checkImg, setCheckImg] = useState("");
  const WarehouseAdressRef = useRef();
  const [message, setMessage] = useState("");

  //image upload
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

  //handleSubmit
  const handleSubmit = async (e) => {
    e.preventDefault();
    const merchantInfo = {
      merchantName: currentUser.displayName,
      merchantEmail: currentUser.email,
      merchantNumber: numberRef.current.value,
      merchantBusiness: businessRef.current.value,
      merchantBusinessOwner: businessOwnerRef.current.value,
      merchantLegalForam: legalForamRef.current.value,
      merchantAdress: adressRef.current.value,
      merchantThana: thanaRef.current.value,
      merchantCity: cityRef.current.value,
      merchantBusinessRegNumber: businessRegNumberRef.current.value,
      merchantTredLicenseImg: tredLicenseImg,
      merchantTinNumber: tinNumberRef.current.value,
      merchantBusinessLogo: businessLogo,
      merchantAccountName: accountNameRef.current.value,
      merchantAccountNumber: accountNumberRef.current.value,
      merchantBankNameRef: bankNameRef.current.value,
      merchantBranchName: branchNameRef.current.value,
      merchantRoutingNumber: routingNumberRef.current.value,
      merchantCheckImg: checkImg,
      warehouseAdress: WarehouseAdressRef.current.value,
      merchantStatus: "pending",
    };

    try {
      const url = `${process.env.REACT_APP_BACKEND_URL}/addMerchant?email=${currentUser?.email}`;
      const option = {
        method: "POST",
        body: JSON.stringify(merchantInfo),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          authorization: `Bearer ${localStorage.getItem("shokhbari-token")}`,
        },
      };
      const response = await fetch(url, option);
      const data = await response.json();
      if (data) {
        numberRef.current.value = "";
        businessRef.current.value = "";
        businessOwnerRef.current.value = "";
        legalForamRef.current.value = "";
        adressRef.current.value = "";
        thanaRef.current.value = "";
        cityRef.current.value = "";
        businessRegNumberRef.current.value = "";
        tinNumberRef.current.value = "";
        accountNameRef.current.value = "";
        accountNumberRef.current.value = "";
        bankNameRef.current.value = "";
        branchNameRef.current.value = "";
        routingNumberRef.current.value = "";
        WarehouseAdressRef.current.value = "";

        setMessage(
          "Your information is submitted successfully, Please wait for the admin approval. After approving your request as a merchant, you will be able to manage and add your products to the website"
        );
      }
    } catch (error) {
      console.log(error);
      setMessage("you have already registered with same account");
    }
  };

  return (
    <main className="py-3">
      <h5 className="mb-3">Profile:</h5>

      {/* ************************* Tab Content ******************************* */}
      <form onSubmit={handleSubmit}>
        <div className="tab-content merchant-profile-content">
          {/* ********* Content 1 ********* */}

          <h6 className="mb-3">Seller Details</h6>
          <label for="name" className="form-label">
            Name
          </label>
          <div className="mb-3 d-flex align-items-center">
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Your Name"
              value={currentUser?.displayName}
              readOnly
            />
          </div>

          <label for="email" className="form-label">
            Email address
          </label>
          <div className="mb-3 d-flex align-items-center">
            <input
              type="email"
              className="form-control"
              id="email"
              value={currentUser?.email}
              readOnly
            />
          </div>

          <label for="contact-number" className="form-label">
            Contact Number(required)
          </label>
          <div className="mb-3 d-flex align-items-center">
            <input
              type="number"
              className="form-control"
              id="contact-number"
              ref={numberRef}
              placeholder="your phone number"
              required
            />
          </div>

          <label for="contact-number" className="form-label">
            Business Name(required)
          </label>
          <div className="mb-3 d-flex align-items-center">
            <input
              type="text"
              className="form-control"
              id="contact-number"
              ref={businessRef}
              placeholder="type your business name"
              required
            />
          </div>

          {/* ********* Content 2 ********* */}

          <h6>Business Information details -</h6>
          <label for="name" className="form-label">
            Legal Name / Business Owner(required)
          </label>
          <div className="mb-3 d-flex align-items-center">
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="business owner name"
              ref={businessOwnerRef}
              required
            />
          </div>

          <label for="email" className="form-label">
            Legal Form(required)
          </label>
          <div className="mb-3 d-flex align-items-center">
            <select
              className="form-select"
              aria-label="Default select example"
              ref={legalForamRef}
              required
            >
              <option value="">Select one</option>
              <option value="1">Limited liability company</option>
              <option value="2">Public Company</option>
              <option value="3">
                No minimum capital, unlimited liability of partners, non-busines
              </option>
            </select>
          </div>

          <div>
            <label className="mb-2">Road/street (required):</label>
            <input
              type="text"
              className="form-control mb-3"
              placeholder="#238, Dewan Mension, Elephantroad"
              ref={adressRef}
              required
            />

            <label className="mb-2">Thana/Police Station(required):</label>
            <input
              type="text"
              className="form-control mb-3"
              placeholder="type your thana"
              ref={thanaRef}
              required
            />
            <label className="mb-2">City:</label>
            <input
              type="text"
              className="form-control"
              placeholder="type your city"
              ref={cityRef}
              required
            />
          </div>

          <label for="contact-number" className="form-label mt-2">
            Business Registration Number
          </label>
          <div className="mb-3 d-flex align-items-center">
            <input
              type="number"
              className="form-control"
              id="contact-number"
              placeholder="type your business Registration Number"
              ref={businessRegNumberRef}
            />
          </div>

          <label for="contact-number" className="form-label">
            trade license(required)
          </label>
          <div className="mb-3 d-flex align-items-center">
            <input
              type="file"
              className="form-control"
              id="document"
              onChange={(e) => imageUploadHandler(e, setTredLicenseImg)}
              required
            />
          </div>

          <label for="contact-number" className="form-label">
            Seller Tin(required)
          </label>
          <div className="mb-3 d-flex align-items-center">
            <input
              type="text"
              className="form-control"
              id="contact-number"
              placeholder="type your tin number"
              ref={tinNumberRef}
              required
            />
          </div>

          <label for="contact-number" className="form-label">
            Business Logo(required)
          </label>
          <div className="mb-3 d-flex align-items-center">
            <input
              type="file"
              className="form-control"
              id="logo"
              onChange={(e) => imageUploadHandler(e, setBusinessLogo)}
              required
            />
          </div>

          {/* ********* Content 3 ********* */}

          <h6>Bank Information Details</h6>
          <label for="name" className="form-label">
            Account Title/Name(required)
          </label>
          <div className="mb-3 d-flex align-items-center">
            <input
              type="text"
              className="form-control"
              id="Account-name"
              placeholder="account holder name"
              ref={accountNameRef}
              required
            />
          </div>

          <label for="email" className="form-label">
            Account Number(required)
          </label>
          <div className="mb-3 d-flex align-items-center">
            <input
              type="number"
              className="form-control"
              id="account-number"
              placeholder="type your account number"
              ref={accountNumberRef}
              required
            />
          </div>

          <label className="form-label">Bank Name or MFS(required)</label>
          <div className="mb-3 d-flex align-items-center">
            <input
              type="text"
              className="form-control"
              placeholder="your bank name"
              ref={bankNameRef}
              required
            />
          </div>

          <label for="contact-number" className="form-label">
            Branch Name(required)
          </label>
          <div className="mb-3 d-flex align-items-center">
            <input
              type="text"
              className="form-control"
              placeholder="your branch name"
              ref={branchNameRef}
              required
            />
          </div>

          <label for="contact-number" className="form-label">
            Routing Number
          </label>
          <div className="mb-3 d-flex align-items-center">
            <input
              type="text"
              className="form-control"
              placeholder="your routing number"
              ref={routingNumberRef}
            />
          </div>

          <label for="contact-number" className="form-label">
            Upload Cheque Copy(required)
          </label>
          <div className="mb-3 d-flex align-items-center">
            <input
              type="file"
              className="form-control"
              id="Cheque"
              onChange={(e) => imageUploadHandler(e, setCheckImg)}
              required
            />
          </div>

          {/* ********* Content 4 ********* */}

          <h6>Warehouse/Return Details</h6>

          <label for="name" className="form-label">
            Details Address
          </label>
          <div className="mb-3 d-flex align-items-center">
            <textarea
              type="text"
              className="form-control"
              id="address-name"
              placeholder="#238 Dewan Mension, New Elephant Road, Dhaka"
              ref={WarehouseAdressRef}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            SUBMIT
          </button>
          <h5 className="text-success mt-2">{message}</h5>
        </div>
      </form>
    </main>
  );
};

export default MerchantProfile;
