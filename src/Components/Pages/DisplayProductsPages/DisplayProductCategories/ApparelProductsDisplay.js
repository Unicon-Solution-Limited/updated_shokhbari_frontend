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
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1710926483/shirts-1_ixrj8b.jpg"
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
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1710926486/T-shirt_uycxoz.jpg"
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
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1710926486/Polo-Shirts-2_x65pam.jpg"
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
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1710926482/Coats-AND-Jackets-4_co75vj.jpg"
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
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1710926482/Hoodies-and-Sweaters-3_wkse6t.jpg"
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
                              src="https://res.cloudinary.com/shokhbari/image/upload/v1710927679/Jeans-1_duuk7p.jpg"
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
                              src="https://res.cloudinary.com/shokhbari/image/upload/v1710927678/Gabardine-1_kzdwdo.jpg"
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
                              src="https://res.cloudinary.com/shokhbari/image/upload/v1710927689/Trousers_czvmwb.jpg"
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
                              src="https://res.cloudinary.com/shokhbari/image/upload/v1710927682/Joggers-_-Sweats-1_irknpg.jpg"
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
                              src="https://res.cloudinary.com/shokhbari/image/upload/v1710927687/Shorts-1_gssw7k.jpg"
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
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1710926482/Panjabi-1_h60sgh.jpg"
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
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1710926482/Koti-1_gqbxte.jpg"
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
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1710926487/Shawls-2_duided.jpg"
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
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1711516827/Kurtis-5_frwe2k.jpg"
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
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1711516870/Tunic-Fusion-4_cmpn1m.jpg"
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
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1711517022/tops-4_welmvl.jpg"
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
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1711517081/Western-Attire_fs31j7.jpg"
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
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1711517149/shirt-2_eopzpa.jpg"
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
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1711517744/T-shirt-_1_a7unaj.jpg"
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
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1711517984/Gown-_2_uga5vp.jpg"
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
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1711518015/Lehenga-3_bisz0m.jpg"
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
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1711518258/Salwar-kameez-3_wdngzc.jpg"
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
                        {/* <Link
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
                        </Link> */}
                        <Link
                          className="col-12 col-lg-4 col-md-4 categoryContentBody"
                          to={`/displaySubChildProduct/${"2piecesalwar"}`}
                        >
                          <LazyLoadImage
                            src="https://res.cloudinary.com/shokhbari/image/upload/v1711518395/2-piece-4_ukzvgp.jpg"
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
                            src="https://res.cloudinary.com/shokhbari/image/upload/v1711518360/3-PIECE-3_dyjslz.jpg"
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
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1711519446/Unstitched-dress-1_ew7xbn.jpg"
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
                            src="https://res.cloudinary.com/shokhbari/image/upload/v1711519505/unstitched_1_piece_1_lehzss.jpg"
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
                            src="https://res.cloudinary.com/shokhbari/image/upload/v1711519539/unstitched-2-piece-2_sug8p2.jpg"
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
                            src="https://res.cloudinary.com/shokhbari/image/upload/v1711519578/unstitched-3-piece-1_xadigr.jpg"
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
                            src="https://res.cloudinary.com/shokhbari/image/upload/v1711519619/unstitched-4-piece-2_j5uqmc.jpg"
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
                          to={`/displaySubChildProduct/${"Cotton"}`}
                        >
                          <LazyLoadImage
                            src="https://res.cloudinary.com/shokhbari/image/upload/v1711520992/Cotton_jp7vyl.jpg"
                            alt="Trulli"
                            className="img-fluid categoryImage"
                            placeholderSrc={loader}
                          />
                          <figcaption className="categoryImageCaption">
                            Cotton
                          </figcaption>
                        </Link>
                        <Link
                          className="col-12 col-lg-4 col-md-4 categoryContentBody"
                          to={`/displaySubChildProduct/${"Georgette"}`}
                        >
                          <LazyLoadImage
                            src="https://res.cloudinary.com/shokhbari/image/upload/v1711520996/Georgette_qycmgc.jpg"
                            alt="Trulli"
                            className="img-fluid categoryImage"
                            placeholderSrc={loader}
                          />
                          <figcaption className="categoryImageCaption">
                            Georgette
                          </figcaption>
                        </Link>
                        <Link
                          className="col-12 col-lg-4 col-md-4 categoryContentBody"
                          to={`/displaySubChildProduct/${"HaterKaj"}`}
                        >
                          <LazyLoadImage
                            src="https://res.cloudinary.com/shokhbari/image/upload/v1711521001/Hater-Kaj_nv9orv.jpg"
                            alt="Trulli"
                            className="img-fluid categoryImage"
                            placeholderSrc={loader}
                          />
                          <figcaption className="categoryImageCaption">
                            Hater-Kaj
                          </figcaption>
                        </Link>

                        <Link
                          className="col-12 col-lg-4 col-md-4 categoryContentBody"
                          to={`/displaySubChildProduct/${"Jamdani"}`}
                        >
                          <LazyLoadImage
                            src="https://res.cloudinary.com/shokhbari/image/upload/v1711521006/Jamdani_mv2p8c.jpg"
                            alt="Trulli"
                            className="img-fluid categoryImage"
                            placeholderSrc={loader}
                          />
                          <figcaption className="categoryImageCaption">
                            Jamdani
                          </figcaption>
                        </Link>

                        <Link
                          className="col-12 col-lg-4 col-md-4 categoryContentBody"
                          to={`/displaySubChildProduct/${"Muslin"}`}
                        >
                          <LazyLoadImage
                            src="https://res.cloudinary.com/shokhbari/image/upload/v1711521016/Muslin_wemthv.jpg"
                            alt="Trulli"
                            className="img-fluid categoryImage"
                            placeholderSrc={loader}
                          />
                          <figcaption className="categoryImageCaption">
                            Muslin
                          </figcaption>
                        </Link>

                        <Link
                          className="col-12 col-lg-4 col-md-4 categoryContentBody"
                          to={`/displaySubChildProduct/${"Silk"}`}
                        >
                          <LazyLoadImage
                            src="https://res.cloudinary.com/shokhbari/image/upload/v1711521011/Silk_ydrj7w.jpg"
                            alt="Trulli"
                            className="img-fluid categoryImage"
                            placeholderSrc={loader}
                          />
                          <figcaption className="categoryImageCaption">
                            Silk
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
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1711521511/Pant-_1_ex7s3g.jpg"
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
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1711521543/Pajama-2_zsezvw.jpg"
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
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1711521602/Skirts-1_svapif.jpg"
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
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1711521633/scarves-2_bzjbhk.jpg"
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
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1711521667/Dupatta-1_izxgch.jpg"
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
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1711521709/Shawl-and-poncho-2_zhjw4x.jpg"
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
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1711521754/Coat-_-Jacket-2_j3put0.jpg"
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
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1711521871/Hoodies-_-Sweater_pp7y2k.jpg"
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
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1711521972/Kaftan-_3_mryrm0.jpg"
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
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1711000136/Shirt_Fabrics_k4gpab.jpg"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Shirt Fabrics
                  </figcaption>
                </Link>
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"F-Pant"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1711000131/Pant_Fabrics_r3wrux.jpg"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Pant Fabrics
                  </figcaption>
                </Link>
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"F-Panjabi"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1711000126/Panjabi-Fabrics_ak60vm.jpg"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Panjabi Fabrics
                  </figcaption>
                </Link>

                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"F-Salwar"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1711000117/Mized-Fabrics_gd6mr2.jpg"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Mixed Fabrics
                  </figcaption>
                </Link>
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"F-Orna"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1711000121/Orna_Fabrics_qifk0p.jpg"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Orna Fabrics
                  </figcaption>
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
