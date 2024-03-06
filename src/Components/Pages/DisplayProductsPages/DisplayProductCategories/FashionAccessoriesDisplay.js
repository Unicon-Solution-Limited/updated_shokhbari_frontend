import React, { useState, useEffect } from "react";
import AllHeader from "../../../Shared/Header/AllHeader";
import AllFooter from "../../../Shared/Footer/AllFooter";
import { Link, useParams } from "react-router-dom";
import "./CategoryDisplay.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import loader from "../../../Image/loder.gif";

const FashionAccessoriesDisplay = () => {
  const { itemName } = useParams();
  return (
    <>
      <AllHeader />
      <div className="d-flex align-items-start categoryDisplay">
        {/* Categories start */}
        <aside>
          {itemName === "Hair Accessories" && (
            <div id="Hair-Accessories">
              <LazyLoadImage
                src="https://res.cloudinary.com/shokhbari/image/upload/v1686217637/Fashion%20accessories/hair_moesjj.webp"
                alt=""
                className="img-fluid subCateBanner mb-5"
              />
              <section className="row tab-content-body container-fluid justify-content-center">
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Hair Band"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686217637/Fashion%20accessories/hairBand_czck9c.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Hair Band
                  </figcaption>
                </Link>
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Hair Clip"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686217637/Fashion%20accessories/hairClip_fncvkx.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Hair Clip
                  </figcaption>
                </Link>
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Crown & Tiklies"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686217636/Fashion%20accessories/crown_qedcc2.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Crown & Tiklies
                  </figcaption>
                </Link>
              </section>
            </div>
          )}

          {itemName === "Jewelry" && (
            <div id="Jewelry">
              <LazyLoadImage
                src="https://res.cloudinary.com/shokhbari/image/upload/v1686217239/Fashion%20accessories/jewelery_z6x4rx.webp"
                alt=""
                className="img-fluid subCateBanner mb-5"
              />
              <section className="row tab-content-body container-fluid">
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Jewelry set"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686217239/Fashion%20accessories/jewelery-ornament_hnsdat.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Jewelry set
                  </figcaption>
                </Link>
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Ear Ornaments"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686217238/Fashion%20accessories/ear-ornament_aqrmnc.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Ear Ornaments
                  </figcaption>
                </Link>
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Neck Ornaments"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686217239/Fashion%20accessories/neck-ornament_x7gace.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Neck Ornaments
                  </figcaption>
                </Link>
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Hand Ornaments"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686217239/Fashion%20accessories/hand-ornament_mupm6k.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Hand Ornaments
                  </figcaption>
                </Link>
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Brooch"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686217239/Fashion%20accessories/broch-ornament_mpjmwa.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Brooch
                  </figcaption>
                </Link>
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Leg Ornaments"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686217239/Fashion%20accessories/leg-ornament_ec7vbq.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Leg Ornaments
                  </figcaption>
                </Link>
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Nose Ornament"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686217239/Fashion%20accessories/nose-ornament_tcqsnq.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Nose Ornament
                  </figcaption>
                </Link>
              </section>
            </div>
          )}

          {itemName === "Sunglass" && (
            <div id="Sunglass">
              <LazyLoadImage
                src="https://res.cloudinary.com/shokhbari/image/upload/v1686217971/Fashion%20accessories/sunglass_dhydtw.webp"
                alt=""
                className="img-fluid subCateBanner mb-5"
              />
              <section className="row tab-content-body container-fluid justify-content-center">
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Gents Sunglass"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686217970/Fashion%20accessories/mens-sunglass_kled5n.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Gents Sunglass
                  </figcaption>
                </Link>
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Ladies Sunglass"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686217970/Fashion%20accessories/womens-sunglass_cqvzrc.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Ladies Sunglass
                  </figcaption>
                </Link>
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Unisex Sunglass"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686217970/Fashion%20accessories/unisex-sunglass_kix2zh.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Unisex Sunglass
                  </figcaption>
                </Link>
              </section>
            </div>
          )}

          {itemName === "Watch" && (
            <div id="Watch">
              <LazyLoadImage
                src="https://res.cloudinary.com/shokhbari/image/upload/v1686218104/Fashion%20accessories/watch-jpg_u5gzkr.webp"
                alt=""
                className="img-fluid subCateBanner mb-5"
              />
              <section className="row tab-content-body container-fluid justify-content-center">
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Gents Watch"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686218104/Fashion%20accessories/watch-m_rboozv.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Gents Watch
                  </figcaption>
                </Link>
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Ladies Watch"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686218105/Fashion%20accessories/w-watch_mmunb7.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Ladies Watch
                  </figcaption>
                </Link>
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Unisex Watch"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686218105/Fashion%20accessories/watch-uni_kqdbme.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Unisex Watch
                  </figcaption>
                </Link>
              </section>
            </div>
          )}

          {itemName === "Bag" && (
            <div id="Bag">
              <LazyLoadImage
                src="https://res.cloudinary.com/shokhbari/image/upload/v1686218261/Fashion%20accessories/bag_qasvmm.webp"
                alt=""
                className="img-fluid subCateBanner mb-5"
              />
              <section className="row tab-content-body container-fluid justify-content-center">
                {/* Gents bag Modals */}
                <span
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Gents Bag"}`}
                  data-bs-toggle="modal"
                  data-bs-target="#M-Bag"
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686218261/Fashion%20accessories/Bag-gents_wanioa.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Gents Bag
                  </figcaption>
                </span>
                <div
                  className="modal fade"
                  id="M-Bag"
                  tabIndex="-1"
                  aria-labelledby="M-Bag"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="M-bag">
                          Gents Bag
                        </h5>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="row modal-body">
                        <Link
                          className="col-12 col-lg-4 col-md-4 categoryContentBody"
                          to={`/displaySubChildProduct/${"Corporate Bags"}`}
                        >
                          <span data-bs-dismiss="modal">
                            <LazyLoadImage
                              src="https://res.cloudinary.com/shokhbari/image/upload/v1686224108/Fashion%20accessories/Corporate-Bag_gbbkfu.webp"
                              alt="Trulli"
                              className="img-fluid categoryImage"
                              placeholderSrc={loader}
                            />
                            <figcaption className="categoryImageCaption">
                              Corporate Bags
                            </figcaption>
                          </span>
                        </Link>
                        <Link
                          className="col-12 col-lg-4 col-md-4 categoryContentBody"
                          to={`/displaySubChildProduct/${"Cross body Bags"}`}
                        >
                          <span data-bs-dismiss="modal">
                            <LazyLoadImage
                              src="https://res.cloudinary.com/shokhbari/image/upload/v1686224108/Fashion%20accessories/Crossbody-Bags_seonuo.webp"
                              alt="Trulli"
                              className="img-fluid categoryImage"
                              placeholderSrc={loader}
                            />
                            <figcaption className="categoryImageCaption">
                              Cross body Bags
                            </figcaption>
                          </span>
                        </Link>
                        <Link
                          className="col-12 col-lg-4 col-md-4 categoryContentBody"
                          to={`/displaySubChildProduct/${"Back Pack"}`}
                        >
                          <span data-bs-dismiss="modal">
                            <LazyLoadImage
                              src="https://res.cloudinary.com/shokhbari/image/upload/v1686224108/Fashion%20accessories/Back-Pack_vhdims.webp"
                              alt="Trulli"
                              className="img-fluid categoryImage"
                              placeholderSrc={loader}
                            />
                            <figcaption className="categoryImageCaption">
                              Back Pack
                            </figcaption>
                          </span>
                        </Link>
                        <Link
                          className="col-12 col-lg-4 col-md-4 categoryContentBody"
                          to={`/displaySubChildProduct/${"Laptop Bag"}`}
                        >
                          <span data-bs-dismiss="modal">
                            <LazyLoadImage
                              src="https://res.cloudinary.com/shokhbari/image/upload/v1686224109/Fashion%20accessories/Laptop-bag_lz8tvl.webp"
                              alt="Trulli"
                              className="img-fluid categoryImage"
                              placeholderSrc={loader}
                            />
                            <figcaption className="categoryImageCaption">
                              Laptop Bag
                            </figcaption>
                          </span>
                        </Link>
                        <Link
                          className="col-12 col-lg-4 col-md-4 categoryContentBody"
                          to={`/displaySubChildProduct/${"Messenger Bag"}`}
                        >
                          <span data-bs-dismiss="modal">
                            <LazyLoadImage
                              src="https://res.cloudinary.com/shokhbari/image/upload/v1686224108/Fashion%20accessories/Messenger-Bag_ukjdfl.webp"
                              alt="Trulli"
                              className="img-fluid categoryImage"
                              placeholderSrc={loader}
                            />
                            <figcaption className="categoryImageCaption">
                              Messenger Bag
                            </figcaption>
                          </span>
                        </Link>
                        <Link
                          className="col-12 col-lg-4 col-md-4 categoryContentBody"
                          to={`/displaySubChildProduct/${"Wallet and long parse"}`}
                        >
                          <span data-bs-dismiss="modal">
                            <LazyLoadImage
                              src="https://res.cloudinary.com/shokhbari/image/upload/v1686224108/Fashion%20accessories/Wallet-long-parse_brzaec.webp"
                              alt="Trulli"
                              className="img-fluid categoryImage"
                              placeholderSrc={loader}
                            />
                            <figcaption className="categoryImageCaption">
                              Wallet and long parse
                            </figcaption>
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Gents bag Modals */}
                {/* ladies bag Modal */}
                <span
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Ladies Bag"}`}
                  data-bs-toggle="modal"
                  data-bs-target="#W-Bag"
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686218261/Fashion%20accessories/Bag-ladies_rqxp0u.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Ladies Bag
                  </figcaption>
                </span>
                <div
                  className="modal fade"
                  id="W-Bag"
                  tabIndex="-1"
                  aria-labelledby="W-Bag"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="W-bag">
                          Ladies Bag
                        </h5>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="row modal-body">
                        <Link
                          className="col-12 col-lg-4 col-md-4 categoryContentBody"
                          to={`/displaySubChildProduct/${"W-Corporate Bags"}`}
                        >
                          <span data-bs-dismiss="modal">
                            <LazyLoadImage
                              src="https://res.cloudinary.com/shokhbari/image/upload/v1686224435/Fashion%20accessories/Corporate-Bag-Ladies_aoupsw.webp"
                              alt="Trulli"
                              className="img-fluid categoryImage"
                              placeholderSrc={loader}
                            />
                            <figcaption className="categoryImageCaption">
                              Corporate Bags
                            </figcaption>
                          </span>
                        </Link>
                        <Link
                          className="col-12 col-lg-4 col-md-4 categoryContentBody"
                          to={`/displaySubChildProduct/${"Cross body and shoulder Bags"}`}
                        >
                          <span data-bs-dismiss="modal">
                            <LazyLoadImage
                              src="https://res.cloudinary.com/shokhbari/image/upload/v1686224435/Fashion%20accessories/Crossbody-and-Shoulder-Bags-women_xewlqb.webp"
                              alt="Trulli"
                              className="img-fluid categoryImage"
                              placeholderSrc={loader}
                            />
                            <figcaption className="categoryImageCaption">
                              Cross body and shoulder Bags
                            </figcaption>
                          </span>
                        </Link>
                        <Link
                          className="col-12 col-lg-4 col-md-4 categoryContentBody"
                          to={`/displaySubChildProduct/${"W-Back Packs"}`}
                        >
                          <span data-bs-dismiss="modal">
                            <LazyLoadImage
                              src="https://res.cloudinary.com/shokhbari/image/upload/v1686224435/Fashion%20accessories/ladies-backpack_o0gvtz.webp"
                              alt="Trulli"
                              className="img-fluid categoryImage"
                              placeholderSrc={loader}
                            />
                            <figcaption className="categoryImageCaption">
                              Back Packs
                            </figcaption>
                          </span>
                        </Link>
                        <Link
                          className="col-12 col-lg-4 col-md-4 categoryContentBody"
                          to={`/displaySubChildProduct/${"W-Laptop Bags"}`}
                        >
                          <span data-bs-dismiss="modal">
                            <LazyLoadImage
                              src="https://res.cloudinary.com/shokhbari/image/upload/v1686224435/Fashion%20accessories/Ladies-laptop-bag_tayyc4.webp"
                              alt="Trulli"
                              className="img-fluid categoryImage"
                              placeholderSrc={loader}
                            />
                            <figcaption className="categoryImageCaption">
                              Laptop Bags
                            </figcaption>
                          </span>
                        </Link>
                        <Link
                          className="col-12 col-lg-4 col-md-4 categoryContentBody"
                          to={`/displaySubChildProduct/${"W-Messenger Bags"}`}
                        >
                          <span data-bs-dismiss="modal">
                            <LazyLoadImage
                              src="https://res.cloudinary.com/shokhbari/image/upload/v1686224435/Fashion%20accessories/ladies-messenger-bag_o8m74k.webp"
                              alt="Trulli"
                              className="img-fluid categoryImage"
                              placeholderSrc={loader}
                            />
                            <figcaption className="categoryImageCaption">
                              Messenger Bags
                            </figcaption>
                          </span>
                        </Link>
                        <Link
                          className="col-12 col-lg-4 col-md-4 categoryContentBody"
                          to={`/displaySubChildProduct/${"W-Wallet and Long parse"}`}
                        >
                          <span data-bs-dismiss="modal">
                            <LazyLoadImage
                              src="https://res.cloudinary.com/shokhbari/image/upload/v1686224436/Fashion%20accessories/Wallet-and-Long-Bags_it7fwd.webp"
                              alt="Trulli"
                              className="img-fluid categoryImage"
                              placeholderSrc={loader}
                            />
                            <figcaption className="categoryImageCaption">
                              Wallet and long parse
                            </figcaption>
                          </span>
                        </Link>
                        <Link
                          className="col-12 col-lg-4 col-md-4 categoryContentBody"
                          to={`/displaySubChildProduct/${"Purse and Clutches"}`}
                        >
                          <span data-bs-dismiss="modal">
                            <LazyLoadImage
                              src="https://res.cloudinary.com/shokhbari/image/upload/v1686224436/Fashion%20accessories/Purse-and-Clutches-women_m7sxwl.webp"
                              alt="Trulli"
                              className="img-fluid categoryImage"
                              placeholderSrc={loader}
                            />
                            <figcaption className="categoryImageCaption">
                              Purse & Clutches
                            </figcaption>
                          </span>
                        </Link>
                        <Link
                          className="col-12 col-lg-4 col-md-4 categoryContentBody"
                          to={`/displaySubChildProduct/${"Top Handbags"}`}
                        >
                          <span data-bs-dismiss="modal">
                            <LazyLoadImage
                              src="https://res.cloudinary.com/shokhbari/image/upload/v1686224436/Fashion%20accessories/Top-Handbags-women_qdocdv.webp"
                              alt="Trulli"
                              className="img-fluid categoryImage"
                              placeholderSrc={loader}
                            />
                            <figcaption className="categoryImageCaption">
                              Top Handbags
                            </figcaption>
                          </span>
                        </Link>
                        <Link
                          className="col-12 col-lg-4 col-md-4 categoryContentBody"
                          to={`/displaySubChildProduct/${"Parts Bags"}`}
                        >
                          <span data-bs-dismiss="modal">
                            <LazyLoadImage
                              src="https://res.cloudinary.com/shokhbari/image/upload/v1686224435/Fashion%20accessories/Parts-Bags-ladies_erdw5p.webp"
                              alt="Trulli"
                              className="img-fluid categoryImage"
                              placeholderSrc={loader}
                            />
                            <figcaption className="categoryImageCaption">
                              Parts Bags
                            </figcaption>
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                {/* ladies bag Modal */}
                {/* Unisex Bag modal */}
                <span
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  data-bs-toggle="modal"
                  data-bs-target="#Unisex-bag"
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686218261/Fashion%20accessories/Bag-uni_xqp8uo.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Unisex Bag
                  </figcaption>
                </span>
                <div
                  className="modal fade"
                  id="Unisex-bag"
                  tabIndex="-1"
                  aria-labelledby="W-Bag"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="uni-bag">
                          Unisex Bag
                        </h5>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="row modal-body">
                        <Link
                          className="col-12 col-lg-4 col-md-4 categoryContentBody"
                          to={`/displaySubChildProduct/${"Mobile and Tab Covers"}`}
                        >
                          <span data-bs-dismiss="modal">
                            <LazyLoadImage
                              src="https://res.cloudinary.com/shokhbari/image/upload/v1686224967/Fashion%20accessories/Mobile-and-Tab-Covers_evqt9d.webp"
                              alt="Trulli"
                              className="img-fluid categoryImage"
                              placeholderSrc={loader}
                            />
                            <figcaption className="categoryImageCaption">
                              Mobile and Tab Covers
                            </figcaption>
                          </span>
                        </Link>
                        <Link
                          className="col-12 col-lg-4 col-md-4 categoryContentBody"
                          to={`/displaySubChildProduct/${"Coin purse"}`}
                        >
                          <span data-bs-dismiss="modal">
                            <LazyLoadImage
                              src="https://res.cloudinary.com/shokhbari/image/upload/v1686224967/Fashion%20accessories/Coin-purse_bjwtot.webp"
                              alt="Trulli"
                              className="img-fluid categoryImage"
                              placeholderSrc={loader}
                            />
                            <figcaption className="categoryImageCaption">
                              Coin purse
                            </figcaption>
                          </span>
                        </Link>
                        <Link
                          className="col-12 col-lg-4 col-md-4 categoryContentBody"
                          to={`/displaySubChildProduct/${"Card Holder"}`}
                        >
                          <span data-bs-dismiss="modal">
                            <LazyLoadImage
                              src="https://res.cloudinary.com/shokhbari/image/upload/v1686224967/Fashion%20accessories/Card-Holder_mzy0rl.webp"
                              alt="Trulli"
                              className="img-fluid categoryImage"
                              placeholderSrc={loader}
                            />
                            <figcaption className="categoryImageCaption">
                              Card Holder
                            </figcaption>
                          </span>
                        </Link>
                        <Link
                          className="col-12 col-lg-4 col-md-4 categoryContentBody"
                          to={`/displaySubChildProduct/${"Weekender Bags"}`}
                        >
                          <span data-bs-dismiss="modal">
                            <LazyLoadImage
                              src="https://res.cloudinary.com/shokhbari/image/upload/v1686224968/Fashion%20accessories/Weekender-Bags_zwzqpg.webp"
                              alt="Trulli"
                              className="img-fluid categoryImage"
                              placeholderSrc={loader}
                            />
                            <figcaption className="categoryImageCaption">
                              Weekender Bags
                            </figcaption>
                          </span>
                        </Link>
                        <Link
                          className="col-12 col-lg-4 col-md-4 categoryContentBody"
                          to={`/displaySubChildProduct/${"Suitcase and Trolley Bags"}`}
                        >
                          <span data-bs-dismiss="modal">
                            <LazyLoadImage
                              src="https://res.cloudinary.com/shokhbari/image/upload/v1686224967/Fashion%20accessories/Suitcase-and-Trolley-Bags_cyam6u.webp"
                              alt="Trulli"
                              className="img-fluid categoryImage"
                              placeholderSrc={loader}
                            />
                            <figcaption className="categoryImageCaption">
                              Suitcase and Trolley Bags
                            </figcaption>
                          </span>
                        </Link>
                        <Link
                          className="col-12 col-lg-4 col-md-4 categoryContentBody"
                          to={`/displaySubChildProduct/${"Travel Bags"}`}
                        >
                          <span data-bs-dismiss="modal">
                            <LazyLoadImage
                              src="https://res.cloudinary.com/shokhbari/image/upload/v1686224968/Fashion%20accessories/Travel-Bags_qcbqh2.webp"
                              alt="Trulli"
                              className="img-fluid categoryImage"
                              placeholderSrc={loader}
                            />
                            <figcaption className="categoryImageCaption">
                              Travel Bags
                            </figcaption>
                          </span>
                        </Link>
                        <Link
                          className="col-12 col-lg-4 col-md-4 categoryContentBody"
                          to={`/displaySubChildProduct/${"Travel Bags"}`}
                        >
                          <span data-bs-dismiss="modal">
                            <LazyLoadImage
                              src="https://res.cloudinary.com/shokhbari/image/upload/v1686224968/Fashion%20accessories/Others_vkudp7.webp"
                              alt="Trulli"
                              className="img-fluid categoryImage"
                              placeholderSrc={loader}
                            />
                            <figcaption className="categoryImageCaption">
                              Others
                            </figcaption>
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Unisex Bag modal */}
              </section>
            </div>
          )}

          {itemName === "Belt" && (
            <div id="Belt">
              <LazyLoadImage
                src="https://res.cloudinary.com/shokhbari/image/upload/v1686221157/Fashion%20accessories/belt_qaggxk.webp"
                alt=""
                className="img-fluid subCateBanner mb-5"
              />
              <section className="row tab-content-body container-fluid justify-content-center">
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Gents Belt"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686221157/Fashion%20accessories/belt-mens_lnnhzh.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Gents Belt
                  </figcaption>
                </Link>
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Ladies Belt"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686221157/Fashion%20accessories/belt-womens_fjttcp.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Ladies Belt
                  </figcaption>
                </Link>
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Unisex Belt"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686221157/Fashion%20accessories/belt-uni_hbptxb.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Unisex Belt
                  </figcaption>
                </Link>
              </section>
            </div>
          )}

          {itemName === "Ties & Accessoires" && (
            <div id="Ties-And-Accessoires">
              <LazyLoadImage
                src="https://res.cloudinary.com/shokhbari/image/upload/v1686221328/Fashion%20accessories/tiesBanner_wa0p6g.webp"
                alt=""
                className="img-fluid subCateBanner mb-5"
              />
              <section className="row tab-content-body container-fluid justify-content-center">
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Ties"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686221327/Fashion%20accessories/ties_1_chb5v7.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">Ties</figcaption>
                </Link>
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Tie Accessories"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686221327/Fashion%20accessories/tie-accessories_crtufx.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Tie Accessories
                  </figcaption>
                </Link>
              </section>
            </div>
          )}

          {itemName === "Footwear" && (
            <div id="Footwear">
              <LazyLoadImage
                src="https://res.cloudinary.com/shokhbari/image/upload/v1686221470/Fashion%20accessories/ties_xu6q8m.webp"
                alt=""
                className="img-fluid subCateBanner mb-5"
              />
              <section className="row tab-content-body container-fluid justify-content-center">
                {/* Gents Footwear Modal */}
                <span
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  data-bs-toggle="modal"
                  data-bs-target="#Gents-Footwear"
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686221470/Fashion%20accessories/gents-shoes_qmmd6s.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Gents Footwear
                  </figcaption>
                </span>
                <div
                  className="modal fade"
                  id="Gents-Footwear"
                  tabIndex="-1"
                  aria-labelledby="Gents-Footwear"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="Gents-Footwear">
                          Gents Footwear
                        </h5>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="row modal-body">
                        <Link
                          className="col-12 col-lg-4 col-md-4 categoryContentBody"
                          to={`/displaySubChildProduct/${"M-Sneakers and Converses"}`}
                        >
                          <span data-bs-dismiss="modal">
                            <LazyLoadImage
                              src="https://res.cloudinary.com/shokhbari/image/upload/v1686225404/Fashion%20accessories/Sneakers-and-Converses_o6wrjx.webp"
                              alt="Trulli"
                              className="img-fluid categoryImage"
                              placeholderSrc={loader}
                            />
                            <figcaption className="categoryImageCaption">
                              Sneakers and Converses
                            </figcaption>
                          </span>
                        </Link>
                        <Link
                          className="col-12 col-lg-4 col-md-4 categoryContentBody"
                          to={`/displaySubChildProduct/${"M-Sandals"}`}
                        >
                          <span data-bs-dismiss="modal">
                            <LazyLoadImage
                              src="https://res.cloudinary.com/shokhbari/image/upload/v1686225403/Fashion%20accessories/Sandals_kekcsw.webp"
                              alt="Trulli"
                              className="img-fluid categoryImage"
                              placeholderSrc={loader}
                            />
                            <figcaption className="categoryImageCaption">
                              Sandals
                            </figcaption>
                          </span>
                        </Link>
                        <Link
                          className="col-12 col-lg-4 col-md-4 categoryContentBody"
                          to={`/displaySubChildProduct/${"M-Shoes"}`}
                        >
                          <span data-bs-dismiss="modal">
                            <LazyLoadImage
                              src="https://res.cloudinary.com/shokhbari/image/upload/v1686225403/Fashion%20accessories/Shoes_rf14a2.webp"
                              alt="Trulli"
                              className="img-fluid categoryImage"
                              placeholderSrc={loader}
                            />
                            <figcaption className="categoryImageCaption">
                              Shoes
                            </figcaption>
                          </span>
                        </Link>
                        <Link
                          className="col-12 col-lg-4 col-md-4 categoryContentBody"
                          to={`/displaySubChildProduct/${"M-Loafers"}`}
                        >
                          <span data-bs-dismiss="modal">
                            <LazyLoadImage
                              src="https://res.cloudinary.com/shokhbari/image/upload/v1686225404/Fashion%20accessories/Loafers_lrnlgq.webp"
                              alt="Trulli"
                              className="img-fluid categoryImage"
                              placeholderSrc={loader}
                            />
                            <figcaption className="categoryImageCaption">
                              Loafers
                            </figcaption>
                          </span>
                        </Link>
                        <Link
                          className="col-12 col-lg-4 col-md-4 categoryContentBody"
                          to={`/displaySubChildProduct/${"M-Flip Flops"}`}
                        >
                          <span data-bs-dismiss="modal">
                            <LazyLoadImage
                              src="https://res.cloudinary.com/shokhbari/image/upload/v1686225403/Fashion%20accessories/Flip-Flops_gfzkdd.webp"
                              alt="Trulli"
                              className="img-fluid categoryImage"
                            />
                            <figcaption className="categoryImageCaption">
                              Flip Flops
                            </figcaption>
                          </span>
                        </Link>
                        <Link
                          className="col-12 col-lg-4 col-md-4 categoryContentBody"
                          to={`/displaySubChildProduct/${"M-Slippers"}`}
                        >
                          <span data-bs-dismiss="modal">
                            <LazyLoadImage
                              src="https://res.cloudinary.com/shokhbari/image/upload/v1686225403/Fashion%20accessories/Slippers_xfqapd.webp"
                              alt="Trulli"
                              className="img-fluid categoryImage"
                              placeholderSrc={loader}
                            />
                            <figcaption className="categoryImageCaption">
                              Slippers
                            </figcaption>
                          </span>
                        </Link>
                        <Link
                          className="col-12 col-lg-4 col-md-4 categoryContentBody"
                          to={`/displaySubChildProduct/${"M-Boots"}`}
                        >
                          <span data-bs-dismiss="modal">
                            <LazyLoadImage
                              src="https://res.cloudinary.com/shokhbari/image/upload/v1686225403/Fashion%20accessories/Boots_bbh9nl.webp"
                              alt="Trulli"
                              className="img-fluid categoryImage"
                              placeholderSrc={loader}
                            />
                            <figcaption className="categoryImageCaption">
                              Boots
                            </figcaption>
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Gents Footwear */}
                {/* Ladies footwear */}
                <span
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  data-bs-toggle="modal"
                  data-bs-target="#Ladies-Footwear"
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686221470/Fashion%20accessories/ladies-shoes_fnwwgx.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Ladies Footwear
                  </figcaption>
                </span>
                <div
                  className="modal fade"
                  id="Ladies-Footwear"
                  tabIndex="-1"
                  aria-labelledby="Ladies-Footwear"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="Ladies-Footwear">
                          Ladies Footwear
                        </h5>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="row modal-body">
                        <Link
                          className="col-12 col-lg-4 col-md-4 categoryContentBody"
                          to={`/displaySubChildProduct/${"W-Sneakers and Converses"}`}
                        >
                          <span data-bs-dismiss="modal">
                            <LazyLoadImage
                              src="https://res.cloudinary.com/shokhbari/image/upload/v1686225612/Fashion%20accessories/Sneakers-and-Converses_1_lzjalm.webp"
                              alt="Trulli"
                              className="img-fluid categoryImage"
                              placeholderSrc={loader}
                            />
                            <figcaption className="categoryImageCaption">
                              Sneakers and Converses
                            </figcaption>
                          </span>
                        </Link>
                        <Link
                          className="col-12 col-lg-4 col-md-4 categoryContentBody"
                          to={`/displaySubChildProduct/${"W-Sandals"}`}
                        >
                          <span data-bs-dismiss="modal">
                            <LazyLoadImage
                              src="https://res.cloudinary.com/shokhbari/image/upload/v1686225611/Fashion%20accessories/Sandals_wpp6bq.webp"
                              alt="Trulli"
                              className="img-fluid categoryImage"
                              placeholderSrc={loader}
                            />
                            <figcaption className="categoryImageCaption">
                              Sandals
                            </figcaption>
                          </span>
                        </Link>
                        <Link
                          className="col-12 col-lg-4 col-md-4 categoryContentBody"
                          to={`/displaySubChildProduct/${"W-Shoes"}`}
                        >
                          <span data-bs-dismiss="modal">
                            <LazyLoadImage
                              src="https://res.cloudinary.com/shokhbari/image/upload/v1686225611/Fashion%20accessories/shoes_hgr6en.webp"
                              alt="Trulli"
                              className="img-fluid categoryImage"
                              placeholderSrc={loader}
                            />
                            <figcaption className="categoryImageCaption">
                              Shoes
                            </figcaption>
                          </span>
                        </Link>
                        <Link
                          className="col-12 col-lg-4 col-md-4 categoryContentBody"
                          to={`/displaySubChildProduct/${"W-Loafers"}`}
                        >
                          <span data-bs-dismiss="modal">
                            <LazyLoadImage
                              src="https://res.cloudinary.com/shokhbari/image/upload/v1686225611/Fashion%20accessories/Loafers_yqlc6r.webp"
                              alt="Trulli"
                              className="img-fluid categoryImage"
                              placeholderSrc={loader}
                            />
                            <figcaption className="categoryImageCaption">
                              Loafers
                            </figcaption>
                          </span>
                        </Link>
                        <Link
                          className="col-12 col-lg-4 col-md-4 categoryContentBody"
                          to={`/displaySubChildProduct/${"W-Flip Flops"}`}
                        >
                          <span data-bs-dismiss="modal">
                            <LazyLoadImage
                              src="https://res.cloudinary.com/shokhbari/image/upload/v1686225611/Fashion%20accessories/Flip-Flops_oufkss.webp"
                              alt="Trulli"
                              className="img-fluid categoryImage"
                              placeholderSrc={loader}
                            />
                            <figcaption className="categoryImageCaption">
                              Flip Flops
                            </figcaption>
                          </span>
                        </Link>
                        <Link
                          className="col-12 col-lg-4 col-md-4 categoryContentBody"
                          to={`/displaySubChildProduct/${"W-Slippers"}`}
                        >
                          <span data-bs-dismiss="modal">
                            <LazyLoadImage
                              src="https://res.cloudinary.com/shokhbari/image/upload/v1686225611/Fashion%20accessories/Slippers_hmvwch.webp"
                              alt="Trulli"
                              className="img-fluid categoryImage"
                              placeholderSrc={loader}
                            />
                            <figcaption className="categoryImageCaption">
                              Slippers
                            </figcaption>
                          </span>
                        </Link>
                        <Link
                          className="col-12 col-lg-4 col-md-4 categoryContentBody"
                          to={`/displaySubChildProduct/${"W-Boots"}`}
                        >
                          <span data-bs-dismiss="modal">
                            <LazyLoadImage
                              src="https://res.cloudinary.com/shokhbari/image/upload/v1686225611/Fashion%20accessories/Boots_m3tbzi.webp"
                              alt="Trulli"
                              className="img-fluid categoryImage"
                              placeholderSrc={loader}
                            />
                            <figcaption className="categoryImageCaption">
                              Boots
                            </figcaption>
                          </span>
                        </Link>
                        <Link
                          className="col-12 col-lg-4 col-md-4 categoryContentBody"
                          to={`/displaySubChildProduct/${"Heals"}`}
                        >
                          <span data-bs-dismiss="modal">
                            <LazyLoadImage
                              src="https://res.cloudinary.com/shokhbari/image/upload/v1686225611/Fashion%20accessories/Heals_u0zip0.webp"
                              alt="Trulli"
                              className="img-fluid categoryImage"
                              placeholderSrc={loader}
                            />
                            <figcaption className="categoryImageCaption">
                              Heals
                            </figcaption>
                          </span>
                        </Link>
                        <Link
                          className="col-12 col-lg-4 col-md-4 categoryContentBody"
                          to={`/displaySubChildProduct/${"Wedges"}`}
                        >
                          <span data-bs-dismiss="modal">
                            <LazyLoadImage
                              src="https://res.cloudinary.com/shokhbari/image/upload/v1686225612/Fashion%20accessories/Wedges_dtcnrf.webp"
                              alt="Trulli"
                              className="img-fluid categoryImage"
                              placeholderSrc={loader}
                            />
                            <figcaption className="categoryImageCaption">
                              Wedges
                            </figcaption>
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Ladies footwear */}
              </section>
            </div>
          )}

          {itemName === "Umbrellas" && (
            <div id="Umbrellas">
              <LazyLoadImage
                src="https://res.cloudinary.com/shokhbari/image/upload/v1686221694/Fashion%20accessories/unbralla_dp2zeo.webp"
                alt=""
                className="img-fluid subCateBanner mb-5"
              />
              <section className="row tab-content-body container-fluid justify-content-center">
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Gents Umbrellas"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686221693/Fashion%20accessories/mens-umbrella_g8asxt.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Gents Umbrellas
                  </figcaption>
                </Link>
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Ladies Umbrellas"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686221694/Fashion%20accessories/wo-umbrella_pq9lvw.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Ladies Umbrellas
                  </figcaption>
                </Link>
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Unisex Umbrellas"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686221694/Fashion%20accessories/umbrella-uni_mwiuhk.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Unisex Umbrellas
                  </figcaption>
                </Link>
              </section>
            </div>
          )}

          {itemName === "Face Mask" && (
            <div id="Face-Mask" role="tabpanel" aria-labelledby="Face-Mask-tab">
              <LazyLoadImage
                src="https://res.cloudinary.com/shokhbari/image/upload/v1686221899/Fashion%20accessories/mask_xqjxhp.webp"
                alt=""
                className="img-fluid subCateBanner mb-5"
              />
              <section className="row tab-content-body container-fluid justify-content-center">
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Gents Face Mask"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686221899/Fashion%20accessories/gents-mask_vj9ui3.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Gents Face Mask
                  </figcaption>
                </Link>
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Ladies Face Mask"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686221899/Fashion%20accessories/womens-face-mask_fon8rq.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Ladies Face Mask
                  </figcaption>
                </Link>
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Kids Face Mask"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686221899/Fashion%20accessories/kids-mask_mhhop4.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Kids Face Mask
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

export default FashionAccessoriesDisplay;
