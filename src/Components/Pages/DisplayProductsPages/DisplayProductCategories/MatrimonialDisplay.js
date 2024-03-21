import AllHeader from "../../../Shared/Header/AllHeader";
import AllFooter from "../../../Shared/Footer/AllFooter";
import { Link, useParams } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "./CategoryDisplay.css";
import loader from "../../../Image/loder.gif";

const MatrimonialDisplay = () => {
  const { itemName } = useParams();
  return (
    <>
      <AllHeader />
      <div className="d-flex align-items-start">
        {/* Categories start */}
        <aside>
          {/* Wedding_Planner */}
          {itemName === "Wedding_Planner" && (
            <div id="Wedding_Planner">
              <LazyLoadImage
                src="https://res.cloudinary.com/shokhbari/image/upload/v1705565985/01-Novelty-Gifts_hnrm3w.png"
                alt=""
                className="img-fluid subCateBanner mb-5"
                effect="blur"
              />
              <section className="row tab-content-body container-fluid m-0 justify-content-center">
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Wedding_Planner"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1711008143/Wedding-Planner-2_um2hpw.jpg"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Wedding Planner
                  </figcaption>
                </Link>
              </section>
            </div>
          )}

          {/* Wedding_Dress_Collection */}
          {itemName === "Wedding_Dress" && (
            <div id="Wedding_Dress_Collection">
              <LazyLoadImage
                src="https://res.cloudinary.com/shokhbari/image/upload/v1705565985/01-Novelty-Gifts_hnrm3w.png"
                alt=""
                className="img-fluid subCateBanner mb-5"
                effect="blur"
              />
              <section className="row tab-content-body container-fluid m-0 justify-content-center">
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Wedding_Dress_Collection"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1711008139/wedding-dress-collection-3_bos1ql.jpg"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Wedding Dress Collection
                  </figcaption>
                </Link>
              </section>
            </div>
          )}

          {/* Wedding_Jewelry_Collection */}
          {itemName === "Wedding_Jewelry" && (
            <div id="Wedding_Jewelry_Collection">
              <LazyLoadImage
                src="https://res.cloudinary.com/shokhbari/image/upload/v1705565985/01-Novelty-Gifts_hnrm3w.png"
                alt=""
                className="img-fluid subCateBanner mb-5"
                effect="blur"
              />
              <section className="row tab-content-body container-fluid m-0 justify-content-center">
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Wedding_Jewelry_Collection"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1711008135/wedding-jewellery-2_kbv5tv.jpg"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Wedding Jewelry Collection
                  </figcaption>
                </Link>
              </section>
            </div>
          )}

          {/* Wedding_Footwear */}
          {itemName === "Wedding_Footwear" && (
            <div id="Wedding_Footwear">
              <LazyLoadImage
                src="https://res.cloudinary.com/shokhbari/image/upload/v1705565985/01-Novelty-Gifts_hnrm3w.png"
                alt=""
                className="img-fluid subCateBanner mb-5"
                effect="blur"
              />
              <section className="row tab-content-body container-fluid m-0 justify-content-center">
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Wedding_Footwear"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1711008120/Wedding_Footwear_5_pgiixn.jpg"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Wedding Footwear
                  </figcaption>
                </Link>
              </section>
            </div>
          )}

          {/* Wedding_Accessories */}
          {itemName === "Wedding_Accessories" && (
            <div id="Wedding_Accessories">
              <LazyLoadImage
                src="https://res.cloudinary.com/shokhbari/image/upload/v1705565985/01-Novelty-Gifts_hnrm3w.png"
                alt=""
                className="img-fluid subCateBanner mb-5"
                effect="blur"
              />
              <section className="row tab-content-body container-fluid m-0 justify-content-center">
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Wedding_Accessories"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1711008128/wedding-accessories-2_mao3ph.jpg"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Wedding Accessories
                  </figcaption>
                </Link>
              </section>
            </div>
          )}

          {/* Beauty_Park */}
          {itemName === "Beauty_Park" && (
            <div id="Beauty_Park">
              <LazyLoadImage
                src="https://res.cloudinary.com/shokhbari/image/upload/v1705565985/01-Novelty-Gifts_hnrm3w.png"
                alt=""
                className="img-fluid subCateBanner mb-5"
                effect="blur"
              />
              <section className="row tab-content-body container-fluid m-0 justify-content-center">
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Beauty_Park"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1711008132/Beauty-Park-1_q0ppgn.jpg"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Beauty Park
                  </figcaption>
                </Link>
              </section>
            </div>
          )}

          {/* Wedding_Vehicle */}
          {itemName === "Wedding_Vehicle" && (
            <div id="Wedding_Vehicle">
              <LazyLoadImage
                src="https://res.cloudinary.com/shokhbari/image/upload/v1705565985/01-Novelty-Gifts_hnrm3w.png"
                alt=""
                className="img-fluid subCateBanner mb-5"
                effect="blur"
              />
              <section className="row tab-content-body container-fluid m-0 justify-content-center">
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Wedding_Vehicle"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1711008124/Wedding_Vehicle_2_uoiqm2.jpg"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Wedding Vehicle
                  </figcaption>
                </Link>
              </section>
            </div>
          )}

          {/* Cinemafogrophy_Photography */}
          {itemName === "Cinemafogrophy_Photography" && (
            <div id="Cinemafogrophy_Photography">
              <LazyLoadImage
                src="https://res.cloudinary.com/shokhbari/image/upload/v1705565985/01-Novelty-Gifts_hnrm3w.png"
                alt=""
                className="img-fluid subCateBanner mb-5"
                effect="blur"
              />
              <section className="row tab-content-body container-fluid m-0 justify-content-center">
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Cinemafogrophy_Photography"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1711008112/Cinemafogrophy_Photography_cinematography_and_photography_3_sk4ptc.jpg"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Cinemafogrophy Photography
                  </figcaption>
                </Link>
              </section>
            </div>
          )}

          {/* Wedding_Venue */}
          {itemName === "Wedding_Venue" && (
            <div id="Wedding_Venue">
              <LazyLoadImage
                src="https://res.cloudinary.com/shokhbari/image/upload/v1705565985/01-Novelty-Gifts_hnrm3w.png"
                alt=""
                className="img-fluid subCateBanner mb-5"
                effect="blur"
              />
              <section className="row tab-content-body container-fluid m-0 justify-content-center">
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Wedding_Venue"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1711008148/Wedding-Venue-_1_whbtbd.jpg"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Wedding Venue
                  </figcaption>
                </Link>
              </section>
            </div>
          )}

          {/* Catering_Service */}
          {itemName === "Catering_Service" && (
            <div id="Catering_Service">
              <LazyLoadImage
                src="https://res.cloudinary.com/shokhbari/image/upload/v1705565985/01-Novelty-Gifts_hnrm3w.png"
                alt=""
                className="img-fluid subCateBanner mb-5"
                effect="blur"
              />
              <section className="row tab-content-body container-fluid m-0 justify-content-center">
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Catering_Service"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1711008108/Catering_Service_2_vadtuh.jpg"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Catering Service
                  </figcaption>
                </Link>
              </section>
            </div>
          )}

          {/* Sound_System */}
          {itemName === "Sound_System" && (
            <div id="Sound_System">
              <LazyLoadImage
                src="https://res.cloudinary.com/shokhbari/image/upload/v1705565985/01-Novelty-Gifts_hnrm3w.png"
                alt=""
                className="img-fluid subCateBanner mb-5"
                effect="blur"
              />
              <section className="row tab-content-body container-fluid m-0 justify-content-center">
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Sound_System"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1711008116/Sound-System-4_w1pjw3.jpg"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Sound System
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

export default MatrimonialDisplay;
