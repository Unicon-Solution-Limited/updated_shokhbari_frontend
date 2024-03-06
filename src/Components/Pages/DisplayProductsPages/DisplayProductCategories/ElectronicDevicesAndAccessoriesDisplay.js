import AllHeader from "../../../Shared/Header/AllHeader";
import AllFooter from "../../../Shared/Footer/AllFooter";
import { Link, useParams } from "react-router-dom";
import "./CategoryDisplay.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import loader from "../../../Image/loder.gif";

const ElectronicDevicesAndAccessoriesDisplay = () => {
  const { itemName } = useParams();

  return (
    <>
      <AllHeader />
      <div className="d-flex align-items-start categoryDisplay">
        {/* Categories start */}
        <aside>
          {itemName === "Laptop" && (
            <div id="Laptop">
              <LazyLoadImage
                src="https://res.cloudinary.com/shokhbari/image/upload/v1686392831/shokhbari_electronices/01-Laptop-Image_es3fkg.webp"
                alt=""
                className="img-fluid subCateBanner mb-5"
              />
              <section className="row tab-content-body container-fluid justify-content-center">
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Laptop"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686467390/shokhbari_electronices/a_-Laptop_qks09b.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Laptop
                  </figcaption>
                </Link>
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Gaming-Laptops"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686467390/shokhbari_electronices/b_-Gaming-Laptop_hpyjto.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Gaming Laptops
                  </figcaption>
                </Link>
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Laptop-Accessories"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686467390/shokhbari_electronices/c_-Laptop-Accessories_l2zipd.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Laptop Accessories
                  </figcaption>
                </Link>
              </section>
            </div>
          )}

          {itemName === "DesktopBrandPC" && (
            <div id="DesktopBrandPC">
              <LazyLoadImage
                src="https://res.cloudinary.com/shokhbari/image/upload/v1686392831/shokhbari_electronices/02-Desktop-_-Brand-PC_g8yvu9.webp"
                alt=""
                className="img-fluid subCateBanner mb-5"
              />
              <section className="row tab-content-body container-fluid justify-content-center">
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Brand-PCs"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686472188/shokhbari_electronices/a_-Brand-PC_epkoxy.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Brand PCs
                  </figcaption>
                </Link>
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Gaming-PC"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686472188/shokhbari_electronices/b_-Gaming-PC_oec4r7.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Gaming PC
                  </figcaption>
                </Link>
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Corporate-PC"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686472188/shokhbari_electronices/c_-Corporate-_-Office-PC_kbiorw.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Corporate/Office PC
                  </figcaption>
                </Link>
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Server"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686472188/shokhbari_electronices/e_-Server_bqev3o.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Server
                  </figcaption>
                </Link>
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Server-RAM"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686472188/shokhbari_electronices/f_-Server-RAM_f8gdsg.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Server RAM
                  </figcaption>
                </Link>
              </section>
            </div>
          )}

          {itemName === "Components" && (
            <div id="Components">
              <LazyLoadImage
                src="https://res.cloudinary.com/shokhbari/image/upload/v1686392831/shokhbari_electronices/03-Computer-Components_uqdii5.webp"
                alt=""
                className="img-fluid subCateBanner mb-5"
              />
              <section className="row tab-content-body container-fluid">
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Processor"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686473076/shokhbari_electronices/a_-Processors_idbo5k.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Processor
                  </figcaption>
                </Link>
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"CPU-Cooler"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686473076/shokhbari_electronices/b_-CPU-Cooler_hy6wfl.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    CPU Cooler
                  </figcaption>
                </Link>
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Portable-HDD"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686473076/shokhbari_electronices/c_-Portable-HDD_dinkuv.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Portable HDD
                  </figcaption>
                </Link>
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Motherboard"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686473076/shokhbari_electronices/d_-Motherboard_tmzfil.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Motherboard
                  </figcaption>
                </Link>
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Desktop-Ram"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686473076/shokhbari_electronices/e_-Desktop-RAM_e8gsn2.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Desktop Ram
                  </figcaption>
                </Link>
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Casing-Fan"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686473076/shokhbari_electronices/f_-Casing-Fan_uhmblk.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Casing Fan
                  </figcaption>
                </Link>
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Hard-Disk-Drive"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686473077/shokhbari_electronices/g_-Hard-Disk-Drive_emlcvb.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Hard Disk Drive
                  </figcaption>
                </Link>
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Laptop-Ram"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686473077/shokhbari_electronices/h_-Laptop-Ram_w9bkwp.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Laptop Ram
                  </figcaption>
                </Link>
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Portable-SSD"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686473077/shokhbari_electronices/i_-Portable-SSD_ckqmef.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Portable SSD
                  </figcaption>
                </Link>
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"SSD"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686473077/shokhbari_electronices/j_-SSD_zob1us.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">SSD</figcaption>
                </Link>
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Graphics-Card"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686473077/shokhbari_electronices/k_-Graphics-Card_gx3lv6.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Graphics Card
                  </figcaption>
                </Link>
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Power-Supply"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686473078/shokhbari_electronices/l_-Power-Supply_lrpl3d.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Power Supply
                  </figcaption>
                </Link>
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Casing"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686473077/shokhbari_electronices/m_-Casing_fds7ox.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Casing
                  </figcaption>
                </Link>
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Custom-Cooling-Kit"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686473078/shokhbari_electronices/n_-Custom-Cooling-Kit_e2olfl.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Custom Cooling Kit
                  </figcaption>
                </Link>
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Internal-Optical-Drive"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686473078/shokhbari_electronices/o_-Internal-Optical-Drive_fjaqbh.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Internal Optical Drive
                  </figcaption>
                </Link>
              </section>
            </div>
          )}

          {itemName === "Accessories" && (
            <div id="Accessories">
              <LazyLoadImage
                src="https://res.cloudinary.com/shokhbari/image/upload/v1687086019/shokhbari_electronices/04-Accessories_hhoyzt.webp"
                alt=""
                className="img-fluid subCateBanner mb-5"
              />
              <section className="row tab-content-body container-fluid">
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Headphone-Microphone"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686476232/shokhbari_electronices/a_-Headphone-_-Microphone_a8re88.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Headphone & Microphone
                  </figcaption>
                </Link>
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Mouse"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686476232/shokhbari_electronices/b_-Mouse_qxegij.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Mouse
                  </figcaption>
                </Link>
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Keyboard"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686476232/shokhbari_electronices/c_-Keyboard_qromp6.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Keyboard
                  </figcaption>
                </Link>
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"WebCam"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686476232/shokhbari_electronices/d_-Web-Cam_udk6qf.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    WebCam
                  </figcaption>
                </Link>
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Mouse-pad"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686476233/shokhbari_electronices/e_-Mouse-Pad_vkyndv.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Mouse pad
                  </figcaption>
                </Link>
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Gamepad"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686477315/shokhbari_electronices/f_-Game-Pad_xxhyxx.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Gamepad
                  </figcaption>
                </Link>
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Pen-Drive"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686476233/shokhbari_electronices/g_-Pen-Drive_g77bsd.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Pen Drive
                  </figcaption>
                </Link>
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Memory-Card"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686476233/shokhbari_electronices/h_-Memory-Card_zkxuvr.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Memory Card
                  </figcaption>
                </Link>
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Power-Bank"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686476233/shokhbari_electronices/i_-Power-Bank_gmyeqb.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Power Bank
                  </figcaption>
                </Link>
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Thermal-Paste"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686476233/shokhbari_electronices/j_-Thermal-Paste_woxhvi.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Thermal Paste
                  </figcaption>
                </Link>
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Capture-Card"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686476233/shokhbari_electronices/k_-Capture-Card_fbtrdb.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Capture Card
                  </figcaption>
                </Link>
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Power-Strip"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686476234/shokhbari_electronices/l_-Power-Strip_ydxmjv.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Power Strip
                  </figcaption>
                </Link>
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Sound-Card"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686476233/shokhbari_electronices/m_-Sound-Card_z22ka1.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Sound Card
                  </figcaption>
                </Link>
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Presenter"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686476233/shokhbari_electronices/n_-Presenter_jrqnyy.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Presenter
                  </figcaption>
                </Link>
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Cable-Convertor"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686476233/shokhbari_electronices/o_-Cable-_-Converter_b4uuak.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Cable & Convertor
                  </figcaption>
                </Link>
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"USB-HUB"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686476234/shokhbari_electronices/p_-USB-Hub_lngiwg.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    USB HUB
                  </figcaption>
                </Link>
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Splitter"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686476234/shokhbari_electronices/q_-Splitter_nt1jkc.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Splitter
                  </figcaption>
                </Link>
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"HDD-SSD-Enclosure"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686476234/shokhbari_electronices/r_-HDD-SSD-Enclosure_y6tgh4.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    HDD-SSD Enclosure
                  </figcaption>
                </Link>
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Wrist-Pad"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686476234/shokhbari_electronices/s_-Wrist-Pad_darkvc.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Wrist Pad
                  </figcaption>
                </Link>
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Keyboard-Keycaps"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686476234/shokhbari_electronices/t_-Keyboard-Keycaps_d6i78q.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Keyboard Keycaps
                  </figcaption>
                </Link>
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Floor-Mat"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686476234/shokhbari_electronices/u_-Floor-Mat_cz2jsn.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Floor Mat
                  </figcaption>
                </Link>
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Backpack"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686476235/shokhbari_electronices/v_-Backpack_vduft1.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Backpack
                  </figcaption>
                </Link>
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Bluetooth-Receiver"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686476235/shokhbari_electronices/w_-Bluetooth-Receiver_szgffv.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Bluetooth Receiver
                  </figcaption>
                </Link>
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"External-Optical-Drive"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686476235/shokhbari_electronices/x_-External-Optical-Drive_lxf5b5.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    External Optical Drive
                  </figcaption>
                </Link>
              </section>
            </div>
          )}

          {itemName === "SmartphoneTablet" && (
            <div id="SmartphoneTablet">
              <LazyLoadImage
                src="https://res.cloudinary.com/shokhbari/image/upload/v1687086018/shokhbari_electronices/05-Smart-Phones_colicp.webp"
                alt=""
                className="img-fluid subCateBanner mb-5"
              />
              <section className="row tab-content-body container-fluid justify-content-center">
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Smartphone"}`}
                  data-bs-toggle="modal"
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686478552/shokhbari_electronices/a_-Smartphone_w4dd8h.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Smartphone
                  </figcaption>
                </Link>

                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Tablet-PC"}`}
                  data-bs-toggle="modal"
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686478552/shokhbari_electronices/b_-Tablet-PC_nbn9kc.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Tablet PC
                  </figcaption>
                </Link>

                <Link
                  to={`/displayProduct/${"Graphics-Tablet"}`}
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  data-bs-toggle="modal"
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686478552/shokhbari_electronices/c_-Graphics-Tablet_k3d8ts.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Graphics Tablet
                  </figcaption>
                </Link>
              </section>
            </div>
          )}

          {itemName === "Monitor" && (
            <div id="Monitor">
              <LazyLoadImage
                src="https://res.cloudinary.com/shokhbari/image/upload/v1686392832/shokhbari_electronices/06-Monitor_zi9pbh.webp"
                alt=""
                className="img-fluid subCateBanner mb-5"
              />
              <section className="row tab-content-body container-fluid justify-content-center">
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Monitor"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686478719/shokhbari_electronices/a_-Monitor_rl2hko.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Monitor
                  </figcaption>
                </Link>
              </section>
            </div>
          )}

          {itemName === "NetworkRouter" && (
            <div id="NetworkAndRouter">
              <LazyLoadImage
                src="https://res.cloudinary.com/shokhbari/image/upload/v1686392832/shokhbari_electronices/07-Network-_-Router_oubmvq.webp"
                alt=""
                className="img-fluid subCateBanner mb-5"
              />
              <section className="row tab-content-body container-fluid">
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Router"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686568985/shokhbari_electronices/a_-Router_fl6pom.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Router
                  </figcaption>
                </Link>
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"UTP-Cable-Accessories"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686568985/shokhbari_electronices/b_-UTP-Cable-_-Accessories_xjigxb.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    UTP Cable & Accessories
                  </figcaption>
                </Link>
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Network-Switch"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686568985/shokhbari_electronices/c_-Network-Switch_ivzibq.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Network Switch
                  </figcaption>
                </Link>
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Receiver"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686568985/shokhbari_electronices/d_-Receiver_hl3yzl.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Receiver
                  </figcaption>
                </Link>
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"LAN-Card"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686568985/shokhbari_electronices/e_-LAN-Card_s2cthb.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    LAN Card
                  </figcaption>
                </Link>
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Network-Extender"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686568985/shokhbari_electronices/f_-Network-Extender_p1dxn1.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Network Extender
                  </figcaption>
                </Link>
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Wifi-Adapter"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686568986/shokhbari_electronices/g_-Wifi-Adapter_ksudib.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Wifi-Adapter
                  </figcaption>
                </Link>
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Modem"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686568986/shokhbari_electronices/h_-Modem_owyken.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Modem
                  </figcaption>
                </Link>
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Network-Accessories"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686568986/shokhbari_electronices/i_-Network-Accessories_cfnw3t.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Network Accessories
                  </figcaption>
                </Link>
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Access-Point"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686568986/shokhbari_electronices/j_-Access-Point_znqwg8.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Access Point
                  </figcaption>
                </Link>
              </section>
            </div>
          )}

          {itemName === "OfficeEquipments" && (
            <div id="OfficeEquipments">
              <LazyLoadImage
                src="https://res.cloudinary.com/shokhbari/image/upload/v1686392832/shokhbari_electronices/08-Office-Equipment_kfnrqy.webp"
                alt=""
                className="img-fluid subCateBanner mb-5"
              />
              <section className="row tab-content-body container-fluid">
                <Link
                  to={`/displayProduct/${"Interactive-Board"}`}
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686649883/shokhbari_electronices/a_-Interactive-Board_lgxdbr.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Interactive Board
                  </figcaption>
                </Link>

                <Link
                  to={`/displayProduct/${"Laminating-Machine"}`}
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686649883/shokhbari_electronices/b_-Laminating-Machine_xi7qd9.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Laminating Machine
                  </figcaption>
                </Link>
                <Link
                  to={`/displayProduct/${"Print-Head"}`}
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686649883/shokhbari_electronices/c_-Print-Head_qwgzhm.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Print Head
                  </figcaption>
                </Link>
                <Link
                  to={`/displayProduct/${"Signage"}`}
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686649883/shokhbari_electronices/d_-Signage_rbce29.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Signage
                  </figcaption>
                </Link>
                <Link
                  to={`/displayProduct/${"Weight-Scale"}`}
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686649883/shokhbari_electronices/e_-Weight-Scale_eairii.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Weight Scale
                  </figcaption>
                </Link>
                <Link
                  to={`/displayProduct/${"Printers"}`}
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686649883/shokhbari_electronices/f_-Printers_tlcjoo.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Printers
                  </figcaption>
                </Link>
                <Link
                  to={`/displayProduct/${"Photocopier"}`}
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686649883/shokhbari_electronices/g_-Photocopier_ql9rii.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Photocopier
                  </figcaption>
                </Link>
                <Link
                  to={`/displayProduct/${"IP-Phone"}`}
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686649884/shokhbari_electronices/h_-IP-Phone-or-PABX_lvvavc.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    IP Phone/PABX
                  </figcaption>
                </Link>
                <Link
                  to={`/displayProduct/${"Printer-Accessories"}`}
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686649886/shokhbari_electronices/y_-Printer-Accessories_fh6wid.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Printer Accessories
                  </figcaption>
                </Link>
                <Link
                  to={`/displayProduct/${"POS-Printer"}`}
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686649884/shokhbari_electronices/i_-POS-Printer_gcf4ov.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    POS Printer
                  </figcaption>
                </Link>
                <Link
                  to={`/displayProduct/${"Scanner"}`}
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686649884/shokhbari_electronices/j_-Scanner_khpnkl.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Scanner
                  </figcaption>
                </Link>
                <Link
                  to={`/displayProduct/${"Toner-Cartridge"}`}
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686649884/shokhbari_electronices/k_-Toner-_-Cartridge_upfygw.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Toner & Cartridge
                  </figcaption>
                </Link>
                <Link
                  to={`/displayProduct/${"Barcode-Scanner"}`}
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686649884/shokhbari_electronices/l_-Barcode-Scanner_xmkofu.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Barcode Scanner
                  </figcaption>
                </Link>
                <Link
                  to={`/displayProduct/${"Ink-Bottle"}`}
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686649884/shokhbari_electronices/m_-Ink-Bottle_d4agp9.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Ink Bottle
                  </figcaption>
                </Link>
                <Link
                  to={`/displayProduct/${"ID-Card-Printer"}`}
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686649884/shokhbari_electronices/n_-ID-Card-Printer_yjtbfg.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    ID Card Printer
                  </figcaption>
                </Link>
                <Link
                  to={`/displayProduct/${"Label-Printer"}`}
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686649884/shokhbari_electronices/o_-Label-Printer_dttw8l.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Label Printer
                  </figcaption>
                </Link>
                <Link
                  to={`/displayProduct/${"PA-SYSTEM"}`}
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686649885/shokhbari_electronices/p_-PA-SYSTEM_phhdji.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    PA SYSTEM
                  </figcaption>
                </Link>
                <Link
                  to={`/displayProduct/${"Conference-System"}`}
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686649885/shokhbari_electronices/q_-Conference-System_ydj62p.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Conference System
                  </figcaption>
                </Link>
                <Link
                  to={`/displayProduct/${"Cutter-Blade"}`}
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686649885/shokhbari_electronices/r_-Cutter-Blade_jgmdvl.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Cutter Blade
                  </figcaption>
                </Link>
                <Link
                  to={`/displayProduct/${"Paper-Shredder"}`}
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686649885/shokhbari_electronices/s_-Paper-Shredder_vsvgp7.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Paper Shredder
                  </figcaption>
                </Link>
                <Link
                  to={`/displayProduct/${"POS-Receipt"}`}
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686649885/shokhbari_electronices/t_-POS-Receipt_bvi33x.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    POS Receipt
                  </figcaption>
                </Link>
                <Link
                  to={`/displayProduct/${"Cash-Drawer"}`}
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686649885/shokhbari_electronices/u_-Cash-Drawer_mdjvyb.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Cash Drawer
                  </figcaption>
                </Link>
                <Link
                  to={`/displayProduct/${"Money-Counting-Machine"}`}
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686649885/shokhbari_electronices/v_-Money-Counting-Machine_tzrxie.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Money Counting Machine
                  </figcaption>
                </Link>
                <Link
                  to={`/displayProduct/${"Binding-Machine"}`}
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686649885/shokhbari_electronices/w_-Binding-Machine_qmxehz.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Binding Machine
                  </figcaption>
                </Link>
                <Link
                  to={`/displayProduct/${"Measurement-Machine"}`}
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686649886/shokhbari_electronices/x_-Measurement-Machine_jp7ni1.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Measurement Machine
                  </figcaption>
                </Link>
                <Link
                  to={`/displayProduct/${"Fake-Note-Detector-Machine"}`}
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686649886/shokhbari_electronices/z_-Fake-Note-Detector-Machine_ies2gk.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Fake Note Detector Machine
                  </figcaption>
                </Link>
              </section>
            </div>
          )}

          {itemName === "GamingZone" && (
            <div id="GamingZone">
              <LazyLoadImage
                src="https://res.cloudinary.com/shokhbari/image/upload/v1686392832/shokhbari_electronices/09-Gaming-Zone_szqotr.webp"
                alt=""
                className="img-fluid subCateBanner mb-5"
              />
              <section className="row tab-content-body container-fluid justify-content-center">
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Gaming-Chair"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686569348/shokhbari_electronices/a_-Gaming-Chair_ummqoa.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Gaming Chair
                  </figcaption>
                </Link>
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Gaming-Console"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686569347/shokhbari_electronices/b_-Gaming-Console_mgneeg.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Gaming Console
                  </figcaption>
                </Link>
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Gaming-Desk"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686569348/shokhbari_electronices/c_-Gaming-Desk_t5ojcf.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Gaming Desk
                  </figcaption>
                </Link>
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Gaming-Sofa"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686635714/shokhbari_electronices/d_-Gaming-Sofa_hqofsq.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Gaming Sofa
                  </figcaption>
                </Link>
              </section>
            </div>
          )}

          {itemName === "Gadgets" && (
            <div id="Gadgets">
              <LazyLoadImage
                src="https://res.cloudinary.com/shokhbari/image/upload/v1686392832/shokhbari_electronices/10-Gadgets_yflmvl.webp"
                alt=""
                className="img-fluid subCateBanner mb-5"
              />
              <section className="row tab-content-body container-fluid justify-content-center">
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Smart-Watch"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686569795/shokhbari_electronices/a_-Smart-Watch_ecjnog.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Smart Watch
                  </figcaption>
                </Link>
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Gadgets-items"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686569794/shokhbari_electronices/b_-VRBox_xdn6vs.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Gadgets Items
                  </figcaption>
                </Link>
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Drone"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686569796/shokhbari_electronices/c_-Drone_wvpomx.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Drone
                  </figcaption>
                </Link>
              </section>
            </div>
          )}

          {itemName === "Cameras" && (
            <div id="Cameras">
              <LazyLoadImage
                src="https://res.cloudinary.com/shokhbari/image/upload/v1686392832/shokhbari_electronices/11-Camera_xpwgbn.webp"
                alt=""
                className="img-fluid subCateBanner mb-5"
              />
              <section className="row tab-content-body container-fluid">
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Action-Camera"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686638268/shokhbari_electronices/a_-Action-Camera_wxqkup.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Action Camera
                  </figcaption>
                </Link>
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Camera-Accessories"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686638268/shokhbari_electronices/b_-Camera-Accessories_qjbauk.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Camera Accessories
                  </figcaption>
                </Link>
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Camera-Lenses"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686638268/shokhbari_electronices/c_-Camera-Lenses_xs3ljt.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Camera Lenses
                  </figcaption>
                </Link>
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Conferencing-Camera"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686638268/shokhbari_electronices/d_-Conferencing-Camera_xhezhh.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Conferencing Camera
                  </figcaption>
                </Link>
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Digital-Camera"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686638268/shokhbari_electronices/e_-Digital-Camera_dtm9v3.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Digital Camera
                  </figcaption>
                </Link>
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"DSLR-Cameras"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686638268/shokhbari_electronices/f_-DSLR-Cameras_d0losk.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    DSLR Cameras
                  </figcaption>
                </Link>
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Handycam"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686638269/shokhbari_electronices/g_-Handycam_pm9wsr.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Handycam
                  </figcaption>
                </Link>
              </section>
            </div>
          )}

          {itemName === "ProjectorScreen" && (
            <div id="Projector-and-Screen">
              <LazyLoadImage
                src="https://res.cloudinary.com/shokhbari/image/upload/v1686392833/shokhbari_electronices/12-Projector-_-Screen_zdroqq.webp"
                alt=""
                className="img-fluid subCateBanner mb-5"
              />
              <section className="row tab-content-body container-fluid justify-content-center">
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Projectors"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686644496/shokhbari_electronices/a_-Projectors_hrvcdb.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Projectors
                  </figcaption>
                </Link>
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Projector-Screen"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686644496/shokhbari_electronices/b_-Projector-Screen_jplfbm.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Projector Screen
                  </figcaption>
                </Link>
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Projector-Mount"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686644496/shokhbari_electronices/c_-Projector-Mount_nalb11.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Projector Mount
                  </figcaption>
                </Link>
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Projector-Trolley"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686644496/shokhbari_electronices/d_-Projector-Trolley_u6g33i.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Projector Trolley
                  </figcaption>
                </Link>
              </section>
            </div>
          )}

          {itemName === "TVSpeaker" && (
            <div id="TV-and-Speaker">
              <LazyLoadImage
                src="https://res.cloudinary.com/shokhbari/image/upload/v1686392833/shokhbari_electronices/13-TV-_-Speaker_imkm1r.webp"
                alt=""
                className="img-fluid subCateBanner mb-5"
              />
              <section className="row tab-content-body container-fluid">
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Television"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686570885/shokhbari_electronices/a_-Television_ptykdv.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Television
                  </figcaption>
                </Link>
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Speakers-Home-Theater"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686570885/shokhbari_electronices/b_-Speakers-_-Home-Theater_p3usud.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Speakers & Home Theater
                  </figcaption>
                </Link>
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Portable-Speaker"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686570885/shokhbari_electronices/c_-Portable-Speaker_o97aou.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Portable Speaker
                  </figcaption>
                </Link>
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"TV-Remote"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686570885/shokhbari_electronices/d_-TV-Remote_zibate.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    TV Remote
                  </figcaption>
                </Link>
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"TV-Box"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686570885/shokhbari_electronices/e_-TV-Box_v5tfba.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    TV-Box
                  </figcaption>
                </Link>
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Soundbar"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686570885/shokhbari_electronices/f_-Soundbar_kxy4qf.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Soundbar
                  </figcaption>
                </Link>
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Wall-Mount"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686570885/shokhbari_electronices/g_-Wall-Mount_ni8mum.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Wall Mount
                  </figcaption>
                </Link>
              </section>
            </div>
          )}

          {itemName === "IPSUps" && (
            <div id="IPS-Ups" aria-labelledby="IPS-Ups-tab">
              <LazyLoadImage
                src="https://res.cloudinary.com/shokhbari/image/upload/v1686392832/shokhbari_electronices/14-UPS_p4xtp0.webp"
                alt=""
                className="img-fluid subCateBanner mb-5"
              />
              <section className="row tab-content-body container-fluid justify-content-center">
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Online-UPS"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686571208/shokhbari_electronices/a_-Online-UPS_c6gel1.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Online UPS
                  </figcaption>
                </Link>
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Offline-UPS"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686571208/shokhbari_electronices/b_-Offline-UPS_xdy11j.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Offline UPS
                  </figcaption>
                </Link>
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"IPS"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686571209/shokhbari_electronices/c_-IPS_irzdhd.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">IPS</figcaption>
                </Link>
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"UPS-Battery"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686571209/shokhbari_electronices/d_-UPS-Battery_qytucc.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    UPS Battery
                  </figcaption>
                </Link>
              </section>
            </div>
          )}

          {itemName === "SecuritySurveillance" && (
            <div id="Security-Surveillance">
              <LazyLoadImage
                src="https://res.cloudinary.com/shokhbari/image/upload/v1686392833/shokhbari_electronices/15-Security_e5xufc.webp"
                alt=""
                className="img-fluid subCateBanner mb-5"
              />
              <section className="row tab-content-body container-fluid">
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"CC-Camera-Accessories"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686571391/shokhbari_electronices/a_-CC-Camera-Accessories_nrt4yv.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    CC Camera Accessories
                  </figcaption>
                </Link>
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"XVR"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686571391/shokhbari_electronices/b_-XVR_i0krvj.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">XVR</figcaption>
                </Link>
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"IP-Camera"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686571391/shokhbari_electronices/c_-IP-Camera_oe84c6.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    IP Camera
                  </figcaption>
                </Link>
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"CC-Camera"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686571391/shokhbari_electronices/d_-CC-Camera_sozmsk.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    CC Camera
                  </figcaption>
                </Link>
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"DVR-NVR-Machine"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686571391/shokhbari_electronices/e_-DVR-or-NVR-Machine_cjikil.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    DVR / NVR Machine
                  </figcaption>
                </Link>
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"WiFi-Camera"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686571392/shokhbari_electronices/f_-WiFi-Camera_eziuwc.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    WiFi Camera
                  </figcaption>
                </Link>
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Digital-Locker-Vault"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686571392/shokhbari_electronices/g_-Digital-Locker-or-Vault_cu5tup.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Digital Locker / Vault
                  </figcaption>
                </Link>
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Access-Control"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686571392/shokhbari_electronices/h_-Access-Control_js6nd0.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Access Control
                  </figcaption>
                </Link>
              </section>
            </div>
          )}

          {itemName === "ACHomeAppliance" && (
            <div id="AC-Home-Appliance">
              <LazyLoadImage
                src="https://res.cloudinary.com/shokhbari/image/upload/v1686392833/shokhbari_electronices/16-AC-_-Home-Appliance-Image_z137sr.webp"
                alt=""
                className="img-fluid subCateBanner mb-5"
              />
              <section className="row tab-content-body container-fluid">
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Air-Conditioner"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686637344/shokhbari_electronices/a_-Air-Conditioner_zkok6t.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Air Conditioner
                  </figcaption>
                </Link>
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Blender-Grinder"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686637344/shokhbari_electronices/b_-Blender-_-Grinder_ptxaxj.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Blender & Grinder
                  </figcaption>
                </Link>
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Dry-Iron"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686637344/shokhbari_electronices/c_-Dry-Iron_fwatfc.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Dry Iron
                  </figcaption>
                </Link>
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Electric-Kettle"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686637344/shokhbari_electronices/d_-Electric-Kettle_uukfbc.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Electric Kettle
                  </figcaption>
                </Link>
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Toaster"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686637344/shokhbari_electronices/e_-Toaster_nosue8.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Toaster
                  </figcaption>
                </Link>
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Refrigerator"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686637344/shokhbari_electronices/f_-Refrigerator_ynrfsq.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Refrigerator
                  </figcaption>
                </Link>
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Washing-Machine"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686637345/shokhbari_electronices/g_-Washing-Machine_c68mbn.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Washing Machine
                  </figcaption>
                </Link>
              </section>
            </div>
          )}

          {itemName === "Software" && (
            <div id="Software">
              <LazyLoadImage
                src="https://res.cloudinary.com/shokhbari/image/upload/v1686392833/shokhbari_electronices/17-Software_t0fcst.webp"
                alt=""
                className="img-fluid subCateBanner mb-5"
              />
              <section className="row tab-content-body container-fluid justify-content-center">
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Operating-System"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686638870/shokhbari_electronices/a_-Operating-System_b8szgw.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Operating System
                  </figcaption>
                </Link>
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Office-Application"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686638870/shokhbari_electronices/b_-Office-Application_i402gl.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Office Application
                  </figcaption>
                </Link>
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Antivirus"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686638870/shokhbari_electronices/c_-Antivirus_mwu21p.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Antivirus
                  </figcaption>
                </Link>
              </section>
            </div>
          )}
        </aside>
        {/* Categories start */}
      </div>
      <AllFooter />
    </>
  );
};

export default ElectronicDevicesAndAccessoriesDisplay;
