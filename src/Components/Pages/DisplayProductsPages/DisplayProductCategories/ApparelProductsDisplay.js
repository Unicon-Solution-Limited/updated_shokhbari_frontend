import AllHeader from "../../../Shared/Header/AllHeader";
import AllFooter from "../../../Shared/Footer/AllFooter";
import { Link, useParams } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "./CategoryDisplay.css";
import loader from "../../../Image/loder.gif";

const ApparelProductsDisplay = () => {
  const { itemName } = useParams();
  return (
    <>
      <AllHeader />
      <div className="d-flex align-items-start">
        {/* Categories start */}
        <aside>
          {itemName === "Men’s-Clothing" && (
            <div id="Men’s-Clothing">
              <LazyLoadImage
                src="https://res.cloudinary.com/shokhbari/image/upload/v1686396982/shokhbari_apparel/01_Mens-Clothings_ox7ynd.webp"
                alt=""
                className="img-fluid subCateBanner mb-5"
                effect="blur"
              />
              <section className="row tab-content-body container-fluid m-0">
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"M-Shirts"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686136779/shokhbari_apparel/shirt_k99kte.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Shirts
                  </figcaption>
                </Link>
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"M-T-Shirts"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686136780/shokhbari_apparel/tshirt_xa5ydc.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    T-Shirts
                  </figcaption>
                </Link>
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Polo Shirts"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686136779/shokhbari_apparel/polo-shirt_h6lp6g.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Polo Shirts
                  </figcaption>
                </Link>
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Mcoats-Jackets"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686136778/shokhbari_apparel/jackets_qpbp2u.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Coats AND Jackets
                  </figcaption>
                </Link>
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"M-Hoodies and Sweaters"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686136778/shokhbari_apparel/hoddie_drayd5.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Hoodies and Sweaters
                  </figcaption>
                </Link>
                {/* Child-Sub-category item (Modal) */}
                <span
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  data-bs-toggle="modal"
                  data-bs-target="#M-pant"
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686136779/shokhbari_apparel/pant_nufagx.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">Pant</figcaption>
                </span>
                <div
                  className="modal fade"
                  id="M-pant"
                  tabIndex="-1"
                  aria-labelledby="M-pant"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="M-pant">
                          Gents Pant
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
                          to={`/displaySubChildProduct/${"Jeans"}`}
                        >
                          <span data-bs-dismiss="modal">
                            <LazyLoadImage
                              src="https://res.cloudinary.com/shokhbari/image/upload/v1686136778/shokhbari_apparel/jeans_yjsoct.webp"
                              alt="Trulli"
                              className="img-fluid categoryImage"
                              placeholderSrc={loader}
                            />
                            <figcaption className="categoryImageCaption">
                              Jeans
                            </figcaption>
                          </span>
                        </Link>
                        <Link
                          className="col-12 col-lg-4 col-md-4 categoryContentBody"
                          to={`/displaySubChildProduct/${"Gabardine"}`}
                        >
                          <span data-bs-dismiss="modal">
                            <LazyLoadImage
                              src="https://res.cloudinary.com/shokhbari/image/upload/v1686136777/shokhbari_apparel/gabading_rqdguk.webp"
                              alt="Trulli"
                              className="img-fluid categoryImage"
                              placeholderSrc={loader}
                            />
                            <figcaption className="categoryImageCaption">
                              Gabardine
                            </figcaption>
                          </span>
                        </Link>
                        <Link
                          className="col-12 col-lg-4 col-md-4 categoryContentBody"
                          to={`/displaySubChildProduct/${"Trousers"}`}
                        >
                          <span data-bs-dismiss="modal">
                            <LazyLoadImage
                              src="https://res.cloudinary.com/shokhbari/image/upload/v1686136779/shokhbari_apparel/trouser_tocdsh.webp"
                              alt="Trulli"
                              className="img-fluid categoryImage"
                              placeholderSrc={loader}
                            />
                            <figcaption className="categoryImageCaption">
                              Trousers
                            </figcaption>
                          </span>
                        </Link>
                        <Link
                          className="col-12 col-lg-4 col-md-4 categoryContentBody"
                          to={`/displaySubChildProduct/${"Joggers and Sweats"}`}
                        >
                          <span data-bs-dismiss="modal">
                            <LazyLoadImage
                              src="https://res.cloudinary.com/shokhbari/image/upload/v1686136778/shokhbari_apparel/jogers_ne23c0.webp"
                              alt="Trulli"
                              className="img-fluid categoryImage"
                              placeholderSrc={loader}
                            />
                            <figcaption className="categoryImageCaption">
                              Joggers and Sweats
                            </figcaption>
                          </span>
                        </Link>
                        <Link
                          className="col-12 col-lg-4 col-md-4 categoryContentBody"
                          to={`/displaySubChildProduct/${"Shorts"}`}
                        >
                          <span data-bs-dismiss="modal">
                            <LazyLoadImage
                              src="https://res.cloudinary.com/shokhbari/image/upload/v1686136780/shokhbari_apparel/short-pant_zq2yqt.webp"
                              alt="Trulli"
                              className="img-fluid categoryImage"
                              placeholderSrc={loader}
                            />
                            <figcaption className="categoryImageCaption">
                              Shorts
                            </figcaption>
                          </span>
                        </Link>
                        <Link
                          className="col-12 col-lg-4 col-md-4 categoryContentBody"
                          to={`/displaySubChildProduct/${"M-Pajama"}`}
                        >
                          <span data-bs-dismiss="modal">
                            <LazyLoadImage
                              src="https://res.cloudinary.com/shokhbari/image/upload/v1686136778/shokhbari_apparel/pajama_myrahk.webp"
                              alt="Trulli"
                              className="img-fluid categoryImage"
                              placeholderSrc={loader}
                            />
                            <figcaption className="categoryImageCaption">
                              Pajama
                            </figcaption>
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Child-Sub-category item (Modal) */}

                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Panjabi"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686136779/shokhbari_apparel/panjabi_undoob.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Panjabi
                  </figcaption>
                </Link>
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"M-Koti"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686136778/shokhbari_apparel/koti_f8aquj.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">Koti</figcaption>
                </Link>
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"M-Shawls"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686136779/shokhbari_apparel/shawl_ebti5j.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Shawls
                  </figcaption>
                </Link>
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"M-lingerie"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686136778/shokhbari_apparel/lengerie_pgkqdv.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    lingerie
                  </figcaption>
                </Link>
              </section>
            </div>
          )}

          {itemName === "Women’s-Clothing" && (
            <div id="Women’s-Clothing">
              <LazyLoadImage
                src="https://res.cloudinary.com/shokhbari/image/upload/v1686396981/shokhbari_apparel/02_Womens-Collection_yehzpo.webp"
                alt=""
                className="img-fluid subCateBanner mb-5"
                effect="blur"
              />
              <section className="row tab-content-body container-fluid m-0">
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Kurtis"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686203672/shokhbari_apparel/kurti_wcmdkl.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Kurtis
                  </figcaption>
                </Link>
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Tunic Fusion"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686203673/shokhbari_apparel/tunic_dbslg5.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Tunic Fusion
                  </figcaption>
                </Link>
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Tops"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686203673/shokhbari_apparel/tops_tcmtyp.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">Tops</figcaption>
                </Link>
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Western Attire"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686203673/shokhbari_apparel/western-attire_zq81sr.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Western Attire
                  </figcaption>
                </Link>
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"W-Shirts"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686203672/shokhbari_apparel/lshirt_bw5ggz.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Shirts
                  </figcaption>
                </Link>
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"W-T-Shirts"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686203674/shokhbari_apparel/wtshirt_blcd9d.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    T-Shirts
                  </figcaption>
                </Link>
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Gown"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686203671/shokhbari_apparel/gown_bpknz0.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">Gown</figcaption>
                </Link>
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Lehenga"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686203672/shokhbari_apparel/lehenga_k10wki.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Lehenga
                  </figcaption>
                </Link>
                {/* Child-Sub-category item (Modal) */}
                <span
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  data-bs-toggle="modal"
                  data-bs-target="#Salwar-kameez"
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686203672/shokhbari_apparel/Salwar-kamez_bjn7jl.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Salwar kameez
                  </figcaption>
                </span>
                <div
                  className="modal fade"
                  id="Salwar-kameez"
                  tabIndex="-1"
                  aria-labelledby="Salwar-kameez"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="M-pant">
                          Salwar kameez
                        </h5>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div
                        className="row modal-body"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      >
                        <Link
                          className="col-12 col-lg-4 col-md-4 categoryContentBody"
                          to={`/displaySubChildProduct/${"1piecesalwar"}`}
                        >
                          <LazyLoadImage
                            src="https://res.cloudinary.com/shokhbari/image/upload/v1686207575/shokhbari_apparel/1-pieces_kryo1i.webp"
                            alt="Trulli"
                            className="img-fluid categoryImage"
                            placeholderSrc={loader}
                          />
                          <figcaption className="categoryImageCaption">
                            1 piece
                          </figcaption>
                        </Link>
                        <Link
                          className="col-12 col-lg-4 col-md-4 categoryContentBody"
                          to={`/displaySubChildProduct/${"2piecesalwar"}`}
                        >
                          <LazyLoadImage
                            src="https://res.cloudinary.com/shokhbari/image/upload/v1686207575/shokhbari_apparel/2-piece_savxg7.webp"
                            alt="Trulli"
                            className="img-fluid categoryImage"
                            placeholderSrc={loader}
                          />
                          <figcaption className="categoryImageCaption">
                            2 pieces
                          </figcaption>
                        </Link>
                        <Link
                          className="col-12 col-lg-4 col-md-4 categoryContentBody"
                          to={`/displaySubChildProduct/${"3piecesalwar"}`}
                        >
                          <LazyLoadImage
                            src="https://res.cloudinary.com/shokhbari/image/upload/v1686207575/shokhbari_apparel/3-piece_orjwwp.webp"
                            alt="Trulli"
                            className="img-fluid categoryImage"
                            placeholderSrc={loader}
                          />
                          <figcaption className="categoryImageCaption">
                            3 pieces
                          </figcaption>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Child-Sub-category item (Modal) */}
                {/* Child-Sub-category item (Modal) */}
                <span
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  data-bs-toggle="modal"
                  data-bs-target="#Unstitched-dress"
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686203673/shokhbari_apparel/unstitched_pbuele.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Unstitched dress
                  </figcaption>
                </span>
                <div
                  className="modal fade"
                  id="Unstitched-dress"
                  tabIndex="-1"
                  aria-labelledby="Unstitched-dress"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="M-pant">
                          Unstitched dress
                        </h5>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div
                        className="row modal-body"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      >
                        <Link
                          className="col-12 col-lg-4 col-md-4 categoryContentBody"
                          to={`/displaySubChildProduct/${"1piecenstitched"}`}
                        >
                          <LazyLoadImage
                            src="https://res.cloudinary.com/shokhbari/image/upload/v1686208170/shokhbari_apparel/1-piece_h4t0av.webp"
                            alt="Trulli"
                            className="img-fluid categoryImage"
                            placeholderSrc={loader}
                          />
                          <figcaption className="categoryImageCaption">
                            1 piece
                          </figcaption>
                        </Link>
                        <Link
                          className="col-12 col-lg-4 col-md-4 categoryContentBody"
                          to={`/displaySubChildProduct/${"2piecenstitched"}`}
                        >
                          <LazyLoadImage
                            src="https://res.cloudinary.com/shokhbari/image/upload/v1686208170/shokhbari_apparel/2-pieces_nj5jbo.webp"
                            alt="Trulli"
                            className="img-fluid categoryImage"
                            placeholderSrc={loader}
                          />
                          <figcaption className="categoryImageCaption">
                            2 pieces
                          </figcaption>
                        </Link>
                        <Link
                          className="col-12 col-lg-4 col-md-4 categoryContentBody"
                          to={`/displaySubChildProduct/${"3piecenstitched"}`}
                        >
                          <LazyLoadImage
                            src="https://res.cloudinary.com/shokhbari/image/upload/v1686208170/shokhbari_apparel/3-pieces_jjbn15.webp"
                            alt="Trulli"
                            className="img-fluid categoryImage"
                            placeholderSrc={loader}
                          />
                          <figcaption className="categoryImageCaption">
                            3 pieces
                          </figcaption>
                        </Link>
                        <Link
                          className="col-12 col-lg-4 col-md-4 categoryContentBody"
                          to={`/displaySubChildProduct/${"4piecenstitched"}`}
                        >
                          <LazyLoadImage
                            src="https://res.cloudinary.com/shokhbari/image/upload/v1686208170/shokhbari_apparel/4-pieces_tkek2u.webp"
                            alt="Trulli"
                            className="img-fluid categoryImage"
                            placeholderSrc={loader}
                          />
                          <figcaption className="categoryImageCaption">
                            4 pieces
                          </figcaption>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Child-Sub-category item (Modal) */}
                {/* Child-Sub-category item (Modal) */}
                <span
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  data-bs-toggle="modal"
                  data-bs-target="#saree"
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686203673/shokhbari_apparel/saree_frrmkn.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Saree
                  </figcaption>
                </span>
                <div
                  className="modal fade"
                  id="saree"
                  tabIndex="-1"
                  aria-labelledby="saree"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="M-pant">
                          Saree
                        </h5>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="row modal-body" data-bs-dismiss="modal">
                        <Link
                          className="col-12 col-lg-4 col-md-4 categoryContentBody"
                          to={`/displaySubChildProduct/${"Tant"}`}
                        >
                          <LazyLoadImage
                            src="https://res.cloudinary.com/shokhbari/image/upload/v1686208410/shokhbari_apparel/Tant_qiwcyx.webp"
                            alt="Trulli"
                            className="img-fluid categoryImage"
                            placeholderSrc={loader}
                          />
                          <figcaption className="categoryImageCaption">
                            Tant
                          </figcaption>
                        </Link>
                        <Link
                          className="col-12 col-lg-4 col-md-4 categoryContentBody"
                          to={`/displaySubChildProduct/${"Tangails"}`}
                        >
                          <LazyLoadImage
                            src="https://res.cloudinary.com/shokhbari/image/upload/v1686208410/shokhbari_apparel/Tangails_bjc5oh.webp"
                            alt="Trulli"
                            className="img-fluid categoryImage"
                            placeholderSrc={loader}
                          />
                          <figcaption className="categoryImageCaption">
                            Tangails
                          </figcaption>
                        </Link>
                        <Link
                          className="col-12 col-lg-4 col-md-4 categoryContentBody"
                          to={`/displaySubChildProduct/${"Jamdani"}`}
                        >
                          <LazyLoadImage
                            src="https://res.cloudinary.com/shokhbari/image/upload/v1686208410/shokhbari_apparel/Jamdani_r9pe33.webp"
                            alt="Trulli"
                            className="img-fluid categoryImage"
                            placeholderSrc={loader}
                          />
                          <figcaption className="categoryImageCaption">
                            Jamdani
                          </figcaption>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Child-Sub-category item (Modal) */}
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"W-Pant"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686203672/shokhbari_apparel/lpant_gjkgco.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">Pant</figcaption>
                </Link>
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"W-Pajama"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686203672/shokhbari_apparel/paijama_bidh1g.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Pajama
                  </figcaption>
                </Link>
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Scart"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686203673/shokhbari_apparel/scart_xho318.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Skirt
                  </figcaption>
                </Link>
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Scarves"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686203673/shokhbari_apparel/scarves_sgj2iy.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Scarves
                  </figcaption>
                </Link>
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Dupatta"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686203672/shokhbari_apparel/dupatta_ada57v.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                  />
                  <figcaption className="categoryImageCaption">
                    Dupatta
                  </figcaption>
                </Link>
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Wshawl-poncho"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686203672/shokhbari_apparel/poncho_lpm1mm.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Shawl and poncho
                  </figcaption>
                </Link>
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Wcoats-Jackets"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686203672/shokhbari_apparel/coat-jacket_holndi.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Coat and Jacket
                  </figcaption>
                </Link>
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"W-Hoodies and Sweater"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686203671/shokhbari_apparel/hoodies-jacket_u91jwy.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Hoodies and Sweater
                  </figcaption>
                </Link>
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"W-lingerie"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686203674/shokhbari_apparel/womens-lenjeri_jzyjjt.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    lingerie
                  </figcaption>
                </Link>

                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"W-kaftan"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1702807365/kaptan_fmzdyp.jpg"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Kaftan
                  </figcaption>
                </Link>
              </section>
            </div>
          )}

          {itemName === "Fabrics" && (
            <div id="Fabrics">
              <LazyLoadImage
                src="https://res.cloudinary.com/shokhbari/image/upload/v1686396982/shokhbari_apparel/03_Fabrics_o1lsa3.webp"
                alt=""
                className="img-fluid subCateBanner mb-5"
                effect="blur"
              />
              <section className="row tab-content-body container-fluid m-0">
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"F-Shirt"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686138236/shokhbari_apparel/shirt-fabric_ffyjv3.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Shirt
                  </figcaption>
                </Link>
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"F-Pant"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686138235/shokhbari_apparel/pant-fabrics_zvefl2.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">Pant</figcaption>
                </Link>
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"F-Panjabi"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686138236/shokhbari_apparel/panjabi_pthw15.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Panjabi
                  </figcaption>
                </Link>
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"F-Kamiz"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686138234/shokhbari_apparel/kamiz_s7zevw.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Kamiz
                  </figcaption>
                </Link>
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"F-Salwar"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686138236/shokhbari_apparel/salwar-fabrics_hmjnmf.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Salwar
                  </figcaption>
                </Link>
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"F-Orna"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1686138235/shokhbari_apparel/Orna-Fabric_qb1guh.webp"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">Orna</figcaption>
                </Link>
              </section>
            </div>
          )}
        </aside>
        {/* Categories end */}
      </div>
      <AllFooter />
    </>
  );
};

export default ApparelProductsDisplay;
