import React from "react";
import "./DisplayMainProduct.css";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <div>
      {/* Banner */}
      <div className="electronic-banner">
        <img
          src="https://res.cloudinary.com/shokhbari/image/upload/v1714476429/Computers_Electronic_Devices_and_Accessories1_mgv5jm.jpg"
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
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1712137501/laptop_lv3hs0.png"
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
                <img
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1711523610/computerComponents_ipjkhc.png"
                  alt="Logo"
                  className="logo-category"
                />
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
                <img
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1710144520/components1_zofods.png"
                  alt="Logo"
                  className="logo-category"
                />
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
                <img
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1711532999/tab_ls9kra.png"
                  alt="Logo"
                  className="logo-category"
                />
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
                <img
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1712138521/monitor_p1virf.png"
                  alt="Logo"
                  className="logo-category"
                />
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
                <img
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1712138028/95_m1zcn9.png"
                  alt="Logo"
                  className="logo-category"
                />
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
                <img
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1711781622/tf_glxeyw.png"
                  alt="Logo"
                  className="logo-category"
                />
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
                <img
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1711610853/finalgaming_eynevy.png"
                  alt="Logo"
                  className="logo-category"
                />
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
                <img
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1711616287/finalGadget_k7khje.png"
                  alt="Logo"
                  className="logo-category"
                />
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
                <img
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1712138638/camera_b4xqcb.png"
                  alt="Logo"
                  className="logo-category"
                />
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
                <img
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1712138826/pppppp_irquw9.png"
                  alt="Logo"
                  className="logo-category"
                />
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
                <img
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1711619458/tvAndSpiker_fydbts.png"
                  alt="Logo"
                  className="logo-category"
                />
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
                <img
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1711781300/ff_fvn7mj.png"
                  alt="Logo"
                  className="logo-category"
                />
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
                <img
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1711776212/securityFinal2_wzlnpq.png"
                  alt="Logo"
                  className="logo-category"
                />
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
                <img
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1711779132/new3_dnetlw.png"
                  alt="Logo"
                  className="logo-category"
                />
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
                <img
                  src="https://res.cloudinary.com/shokhbari/image/upload/v1712126905/dmn_mfqmhp.png"
                  alt="Logo"
                  className="logo-category"
                />
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
