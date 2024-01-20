import React from "react";
import { Link } from "react-router-dom";

const ElectronicDevicesAccessories_M = () => {
  return (
    <>
      <li className="nav-item">
        <Link className="nav-link offcanvasLink" to="/">
          Computers, Electronic Devices and Accessories
        </Link>
        <ul className="submenu dropdown-menu mega_menu" id="Electronics_mega">
          <div className="container">
            <h2 className="text-center py-4 headline">
              Computers, Electronic Devices and Accessories World
            </h2>
            <div className="row">
              <div className="col-2">
                <p className="text-center subHeadline">Laptop</p>
                <hr />
                <ul className="text-center" data-bs-dismiss="offcanvas">
                  <li className="megaMenu_li">
                    <Link to={`/displayProduct/${"Laptop"}`} id="megaMenuLink">
                      Laptop
                    </Link>
                  </li>
                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Gaming-Laptops"}`}
                      id="megaMenuLink"
                    >
                      Gaming Laptops
                    </Link>
                  </li>
                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Laptop-Accessories"}`}
                      id="megaMenuLink"
                    >
                      Laptop Accessories
                    </Link>
                  </li>
                </ul>
                <hr />
                <p className="text-center subHeadline border-bottom">Monitor</p>
                <ul className="text-center" data-bs-dismiss="offcanvas">
                  <li className="megaMenu_li">
                    <Link to={`/displayProduct/${"Monitor"}`} id="megaMenuLink">
                      Monitor
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-2 subcategorySection">
                <p className="text-center subHeadline">Desktop & Brand PC</p>
                <hr />
                <ul className="text-center" data-bs-dismiss="offcanvas">
                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Brand-PCs"}`}
                      id="megaMenuLink"
                    >
                      Brand PCs
                    </Link>
                  </li>
                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Gaming-PC"}`}
                      id="megaMenuLink"
                    >
                      Gaming PC
                    </Link>
                  </li>
                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Corporate-PC"}`}
                      id="megaMenuLink"
                    >
                      Corporate/Office PC
                    </Link>
                  </li>
                  <li className="megaMenu_li">
                    <Link to={`/displayProduct/${"Server"}`} id="megaMenuLink">
                      Server
                    </Link>
                  </li>
                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Server-RAM"}`}
                      id="megaMenuLink"
                    >
                      Server RAM
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-2 subcategorySection">
                <p className="text-center subHeadline">Cameras</p>
                <hr />
                <ul className="text-center" data-bs-dismiss="offcanvas">
                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Action-Camera"}`}
                      id="megaMenuLink"
                    >
                      Action Camera
                    </Link>
                  </li>
                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Camera-Accessories"}`}
                      id="megaMenuLink"
                    >
                      Camera Accessories
                    </Link>
                  </li>
                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Camera-Lenses"}`}
                      id="megaMenuLink"
                    >
                      Camera Lenses
                    </Link>
                  </li>
                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Conferencing-Camera"}`}
                      id="megaMenuLink"
                    >
                      Conferencing Camera
                    </Link>
                  </li>
                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Digital-Camera"}`}
                      id="megaMenuLink"
                    >
                      Digital Camera
                    </Link>
                  </li>
                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"DSLR-Cameras"}`}
                      id="megaMenuLink"
                    >
                      DSLR Cameras
                    </Link>
                  </li>
                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Handycam"}`}
                      id="megaMenuLink"
                    >
                      Handycam
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-4 subcategorySection">
                <p className="text-center subHeadline">Components</p>
                <hr />
                <ul
                  className="text-center d-flex justify-content-around"
                  data-bs-dismiss="offcanvas"
                >
                  <div>
                    <li className="megaMenu_li">
                      <Link
                        to={`/displayProduct/${"Processor"}`}
                        id="megaMenuLink"
                      >
                        Processor
                      </Link>
                    </li>
                    <li className="megaMenu_li">
                      <Link
                        to={`/displayProduct/${"CPU-Cooler"}`}
                        id="megaMenuLink"
                      >
                        CPU Cooler
                      </Link>
                    </li>
                    <li className="megaMenu_li">
                      <Link
                        to={`/displayProduct/${"Portable-HDD"}`}
                        id="megaMenuLink"
                      >
                        Portable HDD
                      </Link>
                    </li>
                    <li className="megaMenu_li">
                      <Link
                        to={`/displayProduct/${"Motherboard"}`}
                        id="megaMenuLink"
                      >
                        Motherboard
                      </Link>
                    </li>
                    <li className="megaMenu_li">
                      <Link
                        to={`/displayProduct/${"Desktop-Ram"}`}
                        id="megaMenuLink"
                      >
                        Desktop Ram
                      </Link>
                    </li>
                    <li className="megaMenu_li">
                      <Link
                        to={`/displayProduct/${"Casing-Fan"}`}
                        id="megaMenuLink"
                      >
                        Casing Fan
                      </Link>
                    </li>
                    <li className="megaMenu_li">
                      <Link
                        to={`/displayProduct/${"Hard-Disk-Drive"}`}
                        id="megaMenuLink"
                      >
                        Hard Disk Drive
                      </Link>
                    </li>
                    <li className="megaMenu_li">
                      <Link
                        to={`/displayProduct/${"Laptop-Ram"}`}
                        id="megaMenuLink"
                      >
                        Laptop Ram
                      </Link>
                    </li>
                  </div>
                  <div>
                    <li className="megaMenu_li">
                      <Link
                        to={`/displayProduct/${"Portable-SSD"}`}
                        id="megaMenuLink"
                      >
                        Portable SSD
                      </Link>
                    </li>
                    <li className="megaMenu_li">
                      <Link to={`/displayProduct/${"SSD"}`} id="megaMenuLink">
                        SSD
                      </Link>
                    </li>
                    <li className="megaMenu_li">
                      <Link
                        to={`/displayProduct/${"Graphics-Card"}`}
                        id="megaMenuLink"
                      >
                        Graphics Card
                      </Link>
                    </li>
                    <li className="megaMenu_li">
                      <Link
                        to={`/displayProduct/${"Power-Supply"}`}
                        id="megaMenuLink"
                      >
                        Power Supply
                      </Link>
                    </li>
                    <li className="megaMenu_li">
                      <Link
                        to={`/displayProduct/${"Casing"}`}
                        id="megaMenuLink"
                      >
                        Casing
                      </Link>
                    </li>
                    <li className="megaMenu_li">
                      <Link
                        to={`/displayProduct/${"Custom-Cooling-Kit"}`}
                        id="megaMenuLink"
                      >
                        Custom Cooling Kit
                      </Link>
                    </li>
                    <li className="megaMenu_li">
                      <Link
                        to={`/displayProduct/${"Internal-Optical-Drive"}`}
                        id="megaMenuLink"
                      >
                        Internal Optical Drive
                      </Link>
                    </li>
                  </div>
                </ul>
              </div>
              <div className="col-md-2 subcategorySection">
                <p className="text-center subHeadline">Smartphone & Tablet</p>
                <hr />
                <ul className="text-center" data-bs-dismiss="offcanvas">
                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Smartphone"}`}
                      id="megaMenuLink"
                    >
                      Smartphone
                    </Link>
                  </li>
                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Tablet-PC"}`}
                      id="megaMenuLink"
                    >
                      Tablet PC
                    </Link>
                  </li>
                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Graphics-Tablet"}`}
                      id="megaMenuLink"
                    >
                      Graphics Tablet
                    </Link>
                  </li>
                </ul>
                <hr />
                <p className="text-center subHeadline border-bottom">IPS/Ups</p>
                <ul className="text-center" data-bs-dismiss="offcanvas">
                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Online-UPS"}`}
                      id="megaMenuLink"
                    >
                      Online UPS
                    </Link>
                  </li>
                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Offline-UPS"}`}
                      id="megaMenuLink"
                    >
                      Offline UPS
                    </Link>
                  </li>
                  <li className="megaMenu_li">
                    <Link to={`/displayProduct/${"IPS"}`} id="megaMenuLink">
                      IPS
                    </Link>
                  </li>
                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"UPS-Battery"}`}
                      id="megaMenuLink"
                    >
                      UPS Battery
                    </Link>
                  </li>
                </ul>
              </div>
              <hr />
              <div className="col-md-6 subcategorySection">
                <p className="text-center subHeadline">Accessories</p>
                <hr />
                <ul
                  className="text-center d-flex justify-content-around"
                  data-bs-dismiss="offcanvas"
                >
                  <div>
                    <li className="megaMenu_li">
                      <Link
                        to={`/displayProduct/${"Headphone-Microphone"}`}
                        id="megaMenuLink"
                      >
                        Headphone & Microphone
                      </Link>
                    </li>
                    <li className="megaMenu_li">
                      <Link to={`/displayProduct/${"Mouse"}`} id="megaMenuLink">
                        Mouse
                      </Link>
                    </li>
                    <li className="megaMenu_li">
                      <Link
                        to={`/displayProduct/${"Keyboard"}`}
                        id="megaMenuLink"
                      >
                        Keyboard
                      </Link>
                    </li>
                    <li className="megaMenu_li">
                      <Link
                        to={`/displayProduct/${"WebCam"}`}
                        id="megaMenuLink"
                      >
                        WebCam
                      </Link>
                    </li>
                    <li className="megaMenu_li">
                      <Link
                        to={`/displayProduct/${"Mouse-pad"}`}
                        id="megaMenuLink"
                      >
                        Mouse pad
                      </Link>
                    </li>
                    <li className="megaMenu_li">
                      <Link
                        to={`/displayProduct/${"Gamepad"}`}
                        id="megaMenuLink"
                      >
                        Gamepad
                      </Link>
                    </li>
                    <li className="megaMenu_li">
                      <Link
                        to={`/displayProduct/${"Pen-Drive"}`}
                        id="megaMenuLink"
                      >
                        Pen Drive
                      </Link>
                    </li>
                    <li className="megaMenu_li">
                      <Link
                        to={`/displayProduct/${"External-Optical-Drive"}`}
                        id="megaMenuLink"
                      >
                        External Optical Drive
                      </Link>
                    </li>
                  </div>
                  <div>
                    <li className="megaMenu_li">
                      <Link
                        to={`/displayProduct/${"Memory-Card"}`}
                        id="megaMenuLink"
                      >
                        Memory Card
                      </Link>
                    </li>
                    <li className="megaMenu_li">
                      <Link
                        to={`/displayProduct/${"Power-Bank"}`}
                        id="megaMenuLink"
                      >
                        Power Bank
                      </Link>
                    </li>
                    <li className="megaMenu_li">
                      <Link
                        to={`/displayProduct/${"Thermal-Paste"}`}
                        id="megaMenuLink"
                      >
                        Thermal Paste
                      </Link>
                    </li>
                    <li className="megaMenu_li">
                      <Link
                        to={`/displayProduct/${"Capture-Card"}`}
                        id="megaMenuLink"
                      >
                        Capture Card
                      </Link>
                    </li>
                    <li className="megaMenu_li">
                      <Link
                        to={`/displayProduct/${"Power-Strip"}`}
                        id="megaMenuLink"
                      >
                        Power Strip
                      </Link>
                    </li>
                    <li className="megaMenu_li">
                      <Link
                        to={`/displayProduct/${"Sound-Card"}`}
                        id="megaMenuLink"
                      >
                        Sound Card
                      </Link>
                    </li>
                    <li className="megaMenu_li">
                      <Link
                        to={`/displayProduct/${"Presenter"}`}
                        id="megaMenuLink"
                      >
                        Presenter
                      </Link>
                    </li>
                    <li className="megaMenu_li">
                      <Link
                        to={`/displayProduct/${"Cable-Convertor"}`}
                        id="megaMenuLink"
                      >
                        Cable & Convertor
                      </Link>
                    </li>
                  </div>
                  <div>
                    <li className="megaMenu_li">
                      <Link
                        to={`/displayProduct/${"USB-HUB"}`}
                        id="megaMenuLink"
                      >
                        USB HUB
                      </Link>
                    </li>
                    <li className="megaMenu_li">
                      <Link
                        to={`/displayProduct/${"Splitter"}`}
                        id="megaMenuLink"
                      >
                        Splitter
                      </Link>
                    </li>
                    <li className="megaMenu_li">
                      <Link
                        to={`/displayProduct/${"HDD-SSD-Enclosure"}`}
                        id="megaMenuLink"
                      >
                        HDD-SSD Enclosure
                      </Link>
                    </li>
                    <li className="megaMenu_li">
                      <Link
                        to={`/displayProduct/${"Wrist-Pad"}`}
                        id="megaMenuLink"
                      >
                        Wrist Pad
                      </Link>
                    </li>
                    <li className="megaMenu_li">
                      <Link
                        to={`/displayProduct/${"Keyboard-Keycaps"}`}
                        id="megaMenuLink"
                      >
                        Keyboard Keycaps
                      </Link>
                    </li>
                    <li className="megaMenu_li">
                      <Link
                        to={`/displayProduct/${"Floor-Mat"}`}
                        id="megaMenuLink"
                      >
                        Floor Mat
                      </Link>
                    </li>
                    <li className="megaMenu_li">
                      <Link
                        to={`/displayProduct/${"Backpack"}`}
                        id="megaMenuLink"
                      >
                        Backpack
                      </Link>
                    </li>
                    <li className="megaMenu_li">
                      <Link
                        to={`/displayProduct/${"Bluetooth-Receiver"}`}
                        id="megaMenuLink"
                      >
                        Bluetooth Receiver
                      </Link>
                    </li>
                  </div>
                </ul>
              </div>
              <div className="col-md-2 subcategorySection">
                <p className="text-center subHeadline">TV & Speaker</p>
                <hr />
                <ul className="text-center" data-bs-dismiss="offcanvas">
                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Television"}`}
                      id="megaMenuLink"
                    >
                      Television
                    </Link>
                  </li>
                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Speakers-Home-Theater"}`}
                      id="megaMenuLink"
                    >
                      Speakers & Home Theater
                    </Link>
                  </li>
                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Portable-Speaker"}`}
                      id="megaMenuLink"
                    >
                      Portable Speaker
                    </Link>
                  </li>
                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"TV-Remote"}`}
                      id="megaMenuLink"
                    >
                      TV Remote
                    </Link>
                  </li>
                  <li className="megaMenu_li">
                    <Link to={`/displayProduct/${"TV-Box"}`} id="megaMenuLink">
                      TV-Box
                    </Link>
                  </li>
                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Soundbar"}`}
                      id="megaMenuLink"
                    >
                      Soundbar
                    </Link>
                  </li>
                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Wall-Mount"}`}
                      id="megaMenuLink"
                    >
                      Wall Mount
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-2 subcategorySection">
                <p className="text-center subHeadline">AC & Home Appliance</p>
                <hr />
                <ul className="text-center" data-bs-dismiss="offcanvas">
                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Air-Conditioner"}`}
                      id="megaMenuLink"
                    >
                      Air Conditioner
                    </Link>
                  </li>
                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Blender-Grinder"}`}
                      id="megaMenuLink"
                    >
                      Blender & Grinder
                    </Link>
                  </li>
                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Dry-Iron"}`}
                      id="megaMenuLink"
                    >
                      Dry Iron
                    </Link>
                  </li>
                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Electric-Kettle"}`}
                      id="megaMenuLink"
                    >
                      Electric Kettle
                    </Link>
                  </li>
                  <li className="megaMenu_li">
                    <Link to={`/displayProduct/${"Toaster"}`} id="megaMenuLink">
                      Toaster
                    </Link>
                  </li>
                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Refrigerator"}`}
                      id="megaMenuLink"
                    >
                      Refrigerator
                    </Link>
                  </li>
                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Washing-Machine"}`}
                      id="megaMenuLink"
                    >
                      Washing Machine
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-2 subcategorySection">
                <p className="text-center subHeadline">Security Surveillance</p>
                <hr />
                <ul className="text-center" data-bs-dismiss="offcanvas">
                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"CC-Camera-Accessories"}`}
                      id="megaMenuLink"
                    >
                      CC Camera Accessories
                    </Link>
                  </li>
                  <li className="megaMenu_li">
                    <Link to={`/displayProduct/${"XVR"}`} id="megaMenuLink">
                      XVR
                    </Link>
                  </li>
                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"IP-Camera"}`}
                      id="megaMenuLink"
                    >
                      IP Camera
                    </Link>
                  </li>
                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"CC-Camera"}`}
                      id="megaMenuLink"
                    >
                      CC Camera
                    </Link>
                  </li>
                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"DVR-NVR-Machine"}`}
                      id="megaMenuLink"
                    >
                      DVR / NVR Machine
                    </Link>
                  </li>
                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"WiFi-Camera"}`}
                      id="megaMenuLink"
                    >
                      WiFi Camera
                    </Link>
                  </li>
                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Digital-Locker-Vault"}`}
                      id="megaMenuLink"
                    >
                      Digital Locker / Vault
                    </Link>
                  </li>
                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Access-Control"}`}
                      id="megaMenuLink"
                    >
                      Access Control
                    </Link>
                  </li>
                </ul>
              </div>
              <hr />
              <div className="col-md-2 subcategorySection">
                <p className="text-center subHeadline">Network & Router</p>
                <hr />
                <ul className="text-center" data-bs-dismiss="offcanvas">
                  <li className="megaMenu_li">
                    <Link to={`/displayProduct/${"Router"}`} id="megaMenuLink">
                      Router
                    </Link>
                  </li>
                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"UTP-Cable-Accessories"}`}
                      id="megaMenuLink"
                    >
                      UTP Cable & Accessories
                    </Link>
                  </li>
                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Network-Switch"}`}
                      id="megaMenuLink"
                    >
                      Network Switch
                    </Link>
                  </li>
                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Receiver"}`}
                      id="megaMenuLink"
                    >
                      Receiver
                    </Link>
                  </li>
                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"LAN-Card"}`}
                      id="megaMenuLink"
                    >
                      LAN Card
                    </Link>
                  </li>
                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Network-Extender"}`}
                      id="megaMenuLink"
                    >
                      Network Extender
                    </Link>
                  </li>
                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Wifi-Adapter"}`}
                      id="megaMenuLink"
                    >
                      Wifi-Adapter
                    </Link>
                  </li>
                  <li className="megaMenu_li">
                    <Link to={`/displayProduct/${"Modem"}`} id="megaMenuLink">
                      Modem
                    </Link>
                  </li>
                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Network-Accessories"}`}
                      id="megaMenuLink"
                    >
                      Network Accessories
                    </Link>
                  </li>
                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Access-Point"}`}
                      id="megaMenuLink"
                    >
                      Access Point
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-6 subcategorySection">
                <p className="text-center subHeadline">Office Equipments</p>
                <hr />
                <ul
                  className="text-center d-flex justify-content-between"
                  data-bs-dismiss="offcanvas"
                >
                  <div>
                    <li className="megaMenu_li">
                      <Link
                        to={`/displayProduct/${"Interactive-Board"}`}
                        id="megaMenuLink"
                      >
                        Interactive Board
                      </Link>
                    </li>
                    <li className="megaMenu_li">
                      <Link
                        to={`/displayProduct/${"Laminating-Machine"}`}
                        id="megaMenuLink"
                      >
                        Laminating Machine
                      </Link>
                    </li>
                    <li className="megaMenu_li">
                      <Link
                        to={`/displayProduct/${"Print-Head"}`}
                        id="megaMenuLink"
                      >
                        Print Head
                      </Link>
                    </li>
                    <li className="megaMenu_li">
                      <Link
                        to={`/displayProduct/${"Signage"}`}
                        id="megaMenuLink"
                      >
                        Signage
                      </Link>
                    </li>
                    <li className="megaMenu_li">
                      <Link
                        to={`/displayProduct/${"Weight-Scale"}`}
                        id="megaMenuLink"
                      >
                        Weight Scale
                      </Link>
                    </li>
                    <li className="megaMenu_li">
                      <Link
                        to={`/displayProduct/${"Printers"}`}
                        id="megaMenuLink"
                      >
                        Printers
                      </Link>
                    </li>
                    <li className="megaMenu_li">
                      <Link
                        to={`/displayProduct/${"Photocopier"}`}
                        id="megaMenuLink"
                      >
                        Photocopier
                      </Link>
                    </li>
                    <li className="megaMenu_li">
                      <Link
                        to={`/displayProduct/${"IP-Phone"}`}
                        id="megaMenuLink"
                      >
                        IP Phone/PABX
                      </Link>
                    </li>
                    <li className="megaMenu_li">
                      <Link
                        to={`/displayProduct/${"Printer-Accessories"}`}
                        id="megaMenuLink"
                      >
                        Printer Accessories
                      </Link>
                    </li>
                  </div>
                  <div>
                    <li className="megaMenu_li">
                      <Link
                        to={`/displayProduct/${"POS-Printer"}`}
                        id="megaMenuLink"
                      >
                        POS Printer
                      </Link>
                    </li>
                    <li className="megaMenu_li">
                      <Link
                        to={`/displayProduct/${"Scanner"}`}
                        id="megaMenuLink"
                      >
                        Scanner
                      </Link>
                    </li>
                    <li className="megaMenu_li">
                      <Link
                        to={`/displayProduct/${"Toner-Cartridge"}`}
                        id="megaMenuLink"
                      >
                        Toner & Cartridge
                      </Link>
                    </li>
                    <li className="megaMenu_li">
                      <Link
                        to={`/displayProduct/${"Barcode-Scanner"}`}
                        id="megaMenuLink"
                      >
                        Barcode Scanner
                      </Link>
                    </li>
                    <li className="megaMenu_li">
                      <Link
                        to={`/displayProduct/${"Ink-Bottle"}`}
                        id="megaMenuLink"
                      >
                        Ink Bottle
                      </Link>
                    </li>
                    <li className="megaMenu_li">
                      <Link
                        to={`/displayProduct/${"ID-Card-Printer"}`}
                        id="megaMenuLink"
                      >
                        ID Card Printer
                      </Link>
                    </li>
                    <li className="megaMenu_li">
                      <Link
                        to={`/displayProduct/${"Label-Printer"}`}
                        id="megaMenuLink"
                      >
                        Label Printer
                      </Link>
                    </li>
                    <li className="megaMenu_li">
                      <Link
                        to={`/displayProduct/${"PA-SYSTEM"}`}
                        id="megaMenuLink"
                      >
                        PA SYSTEM
                      </Link>
                    </li>
                  </div>
                  <div>
                    <li className="megaMenu_li">
                      <Link
                        to={`/displayProduct/${"Conference-System"}`}
                        id="megaMenuLink"
                      >
                        Conference System
                      </Link>
                    </li>
                    <li className="megaMenu_li">
                      <Link
                        to={`/displayProduct/${"Cutter-Blade"}`}
                        id="megaMenuLink"
                      >
                        Cutter Blade
                      </Link>
                    </li>
                    <li className="megaMenu_li">
                      <Link
                        to={`/displayProduct/${"Paper-Shredder"}`}
                        id="megaMenuLink"
                      >
                        Paper Shredder
                      </Link>
                    </li>
                    <li className="megaMenu_li">
                      <Link
                        to={`/displayProduct/${"POS-Receipt"}`}
                        id="megaMenuLink"
                      >
                        POS Receipt
                      </Link>
                    </li>
                    <li className="megaMenu_li">
                      <Link
                        to={`/displayProduct/${"Cash-Drawer"}`}
                        id="megaMenuLink"
                      >
                        Cash Drawer
                      </Link>
                    </li>
                    <li className="megaMenu_li">
                      <Link
                        to={`/displayProduct/${"Money-Counting-Machine"}`}
                        id="megaMenuLink"
                      >
                        Money Counting Machine
                      </Link>
                    </li>
                    <li className="megaMenu_li">
                      <Link
                        to={`/displayProduct/${"Binding-Machine"}`}
                        id="megaMenuLink"
                      >
                        Binding Machine
                      </Link>
                    </li>
                    <li className="megaMenu_li">
                      <Link
                        to={`/displayProduct/${"Measurement-Machine"}`}
                        id="megaMenuLink"
                      >
                        Measurement Machine
                      </Link>
                    </li>

                    <li className="megaMenu_li">
                      <Link
                        to={`/displayProduct/${"Fake-Note-Detector-Machine"}`}
                        id="megaMenuLink"
                      >
                        Fake Note Detector Machine
                      </Link>
                    </li>
                  </div>
                </ul>
              </div>
              <div className="col-md-2 subcategorySection">
                <p className="text-center subHeadline">Gaming Zone</p>
                <hr />
                <ul className="text-center" data-bs-dismiss="offcanvas">
                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Gaming-Chair"}`}
                      id="megaMenuLink"
                    >
                      Gaming Chair
                    </Link>
                  </li>
                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Gaming-Console"}`}
                      id="megaMenuLink"
                    >
                      Gaming Console
                    </Link>
                  </li>
                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Gaming-Desk"}`}
                      id="megaMenuLink"
                    >
                      Gaming Desk
                    </Link>
                  </li>
                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Gaming-Sofa"}`}
                      id="megaMenuLink"
                    >
                      Gaming Sofa
                    </Link>
                  </li>
                </ul>
                <hr />
                <p className="text-center subHeadline border-bottom">
                  Projector & Screen
                </p>
                <ul className="text-center" data-bs-dismiss="offcanvas">
                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Projectors"}`}
                      id="megaMenuLink"
                    >
                      Projectors
                    </Link>
                  </li>
                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Projector-Screen"}`}
                      id="megaMenuLink"
                    >
                      Projector Screen
                    </Link>
                  </li>
                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Projector-Mount"}`}
                      id="megaMenuLink"
                    >
                      Projector Mount
                    </Link>
                  </li>
                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Projector-Trolley"}`}
                      id="megaMenuLink"
                    >
                      Projector Trolley
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-2 subcategorySection">
                <p className="text-center subHeadline">Software</p>
                <hr />
                <ul className="text-center" data-bs-dismiss="offcanvas">
                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Operating-System"}`}
                      id="megaMenuLink"
                    >
                      Operating System
                    </Link>
                  </li>
                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Office-Application"}`}
                      id="megaMenuLink"
                    >
                      Office Application
                    </Link>
                  </li>
                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Antivirus"}`}
                      id="megaMenuLink"
                    >
                      Antivirus
                    </Link>
                  </li>
                </ul>
                <hr />
                <p className="text-center subHeadline border-bottom">Gadgets</p>
                <ul className="text-center" data-bs-dismiss="offcanvas">
                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Smart-Watch"}`}
                      id="megaMenuLink"
                    >
                      Smart Watch
                    </Link>
                  </li>
                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Gadgets-items"}`}
                      id="megaMenuLink"
                    >
                      Gadgets Items
                    </Link>
                  </li>
                  <li className="megaMenu_li">
                    <Link to={`/displayProduct/${"Drone"}`} id="megaMenuLink">
                      Drone
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </ul>
      </li>
    </>
  );
};

export default ElectronicDevicesAccessories_M;
