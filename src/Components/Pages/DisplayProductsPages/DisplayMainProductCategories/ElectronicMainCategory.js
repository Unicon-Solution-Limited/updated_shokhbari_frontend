import React from "react";
import "./DisplayMainProduct.css";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <div>
      {/* Banner */}
      <div className="electronic-banner">
        <img
          src="https://res.cloudinary.com/shokhbari/image/upload/v1686396982/shokhbari_apparel/01_Mens-Clothings_ox7ynd.webp"
          alt=""
        />
      </div>

      {/* Content */}
      <div className="container py-5">
        <div className="row">
          {/* Buttons */}
          <div className="col-xs-12 col-lg-4 mb-3">
            <Link
              to={`/ElectronicDevicesAndAccessoriesItem/${"Laptop"}`}
              className="custom-link"
            >
              <button className="mb-2 mainCategory-button">
                <img
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1709189955/shokhbari_electronices/laptopIcon.jpg_vyfjno.png"
                  alt="Logo"
                  className="logo-category"
                />
                <span className="categoryHeadline">Laptop</span>
              </button>
            </Link>
          </div>
          <div className="col-xs-12 col-lg-4 mb-3">
            <Link
              to={`/ElectronicDevicesAndAccessoriesItem/${"DesktopBrandPC"}`}
              className="custom-link"
            >
              <button className="mb-2 mainCategory-button">
                <img
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1709375778/brandPc1_uroglw.png"
                  alt="Logo"
                  className="logo-category"
                />
                <span className="categoryHeadline">Desktop & Brand PC</span>
              </button>
            </Link>
          </div>
          <div className="col-xs-12 col-lg-4 mb-3">
            <Link
              to={`/ElectronicDevicesAndAccessoriesItem/${"Components"}`}
              className="custom-link"
            >
              <button className="mb-2 mainCategory-button">
                <img src="" alt="Logo" className="logo-category" />
                <span className="categoryHeadline">Components</span>
              </button>
            </Link>
          </div>
          <div className="col-xs-12 col-lg-4 mb-3">
            <Link
              to={`/ElectronicDevicesAndAccessoriesItem/${"Accessories"}`}
              className="custom-link"
            >
              <button className="mb-2 mainCategory-button">
                <img src="" alt="Logo" className="logo-category" />
                <span className="categoryHeadline">Accessories</span>
              </button>
            </Link>
          </div>
          <div className="col-xs-12 col-lg-4 mb-3">
            <Link
              to={`/ElectronicDevicesAndAccessoriesItem/${"SmartphoneTablet"}`}
              className="custom-link"
            >
              <button className="mb-2 mainCategory-button">
                <img src="" alt="Logo" className="logo-category" />
                <span className="categoryHeadline">Smartphone & Tablet</span>
              </button>
            </Link>
          </div>
          <div className="col-xs-12 col-lg-4 mb-3">
            <Link
              to={`/ElectronicDevicesAndAccessoriesItem/${"Monitor"}`}
              className="custom-link"
            >
              <button className="mb-2 mainCategory-button">
                <img src="" alt="Logo" className="logo-category" />
                <span className="categoryHeadline">Monitor</span>
              </button>
            </Link>
          </div>
          <div className="col-xs-12 col-lg-4 mb-3">
            <Link
              to={`/ElectronicDevicesAndAccessoriesItem/${"NetworkRouter"}`}
              className="custom-link"
            >
              <button className="mb-2 mainCategory-button">
                <img src="" alt="Logo" className="logo-category" />
                <span className="categoryHeadline">Network & Router</span>
              </button>
            </Link>
          </div>
          <div className="col-xs-12 col-lg-4 mb-3">
            <Link
              to={`/ElectronicDevicesAndAccessoriesItem/${"OfficeEquipments"}`}
              className="custom-link"
            >
              <button className="mb-2 mainCategory-button">
                <img src="" alt="Logo" className="logo-category" />
                <span className="categoryHeadline">Office Equipments</span>
              </button>
            </Link>
          </div>
          <div className="col-xs-12 col-lg-4 mb-3">
            <Link
              to={`/ElectronicDevicesAndAccessoriesItem/${"GamingZone"}`}
              className="custom-link"
            >
              <button className="mb-2 mainCategory-button">
                <img src="" alt="Logo" className="logo-category" />
                <span className="categoryHeadline">Gaming Zone</span>
              </button>
            </Link>
          </div>
          <div className="col-xs-12 col-lg-4 mb-3">
            <Link
              to={`/ElectronicDevicesAndAccessoriesItem/${"Gadgets"}`}
              className="custom-link"
            >
              <button className="mb-2 mainCategory-button">
                <img src="" alt="Logo" className="logo-category" />
                <span className="categoryHeadline">Gadgets</span>
              </button>
            </Link>
          </div>
          <div className="col-xs-12 col-lg-4 mb-3">
            <Link
              to={`/ElectronicDevicesAndAccessoriesItem/${"Cameras"}`}
              className="custom-link"
            >
              <button className="mb-2 mainCategory-button">
                <img src="" alt="Logo" className="logo-category" />
                <span className="categoryHeadline">Cameras</span>
              </button>
            </Link>
          </div>
          <div className="col-xs-12 col-lg-4 mb-3">
            <Link
              to={`/ElectronicDevicesAndAccessoriesItem/${"ProjectorScreen"}`}
              className="custom-link"
            >
              <button className="mb-2 mainCategory-button">
                <img src="" alt="Logo" className="logo-category" />
                <span className="categoryHeadline">Projector & Screen</span>
              </button>
            </Link>
          </div>
          <div className="col-xs-12 col-lg-4 mb-3">
            <Link
              to={`/ElectronicDevicesAndAccessoriesItem/${"TVSpeaker"}`}
              className="custom-link"
            >
              <button className="mb-2 mainCategory-button">
                <img src="" alt="Logo" className="logo-category" />
                <span className="categoryHeadline">TV & Speaker</span>
              </button>
            </Link>
          </div>
          <div className="col-xs-12 col-lg-4 mb-3">
            <Link
              to={`/ElectronicDevicesAndAccessoriesItem/${"IPSUps"}`}
              className="custom-link"
            >
              <button className="mb-2 mainCategory-button">
                <img src="" alt="Logo" className="logo-category" />
                <span className="categoryHeadline">IPS/Ups</span>
              </button>
            </Link>
          </div>
          <div className="col-xs-12 col-lg-4 mb-3">
            <Link
              to={`/ElectronicDevicesAndAccessoriesItem/${"SecuritySurveillance"}`}
              className="custom-link"
            >
              <button className="mb-2 mainCategory-button">
                <img src="" alt="Logo" className="logo-category" />
                <span className="categoryHeadline">Security Surveillance</span>
              </button>
            </Link>
          </div>
          <div className="col-xs-12 col-lg-4 mb-3">
            <Link
              to={`/ElectronicDevicesAndAccessoriesItem/${"ACHomeAppliance"}`}
              className="custom-link"
            >
              <button className="mb-2 mainCategory-button">
                <img src="" alt="Logo" className="logo-category" />
                <span className="categoryHeadline">AC & Home Appliance</span>
              </button>
            </Link>
          </div>
          <div className="col-xs-12 col-lg-4 mb-3">
            <Link
              to={`/ElectronicDevicesAndAccessoriesItem/${"Software"}`}
              className="custom-link"
            >
              <button className="mb-2 mainCategory-button">
                <img src="" alt="Logo" className="logo-category" />
                <span className="categoryHeadline">Software</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
