import AllHeader from "../../../Shared/Header/AllHeader";
import AllFooter from "../../../Shared/Footer/AllFooter";
import { Link, useParams } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "./CategoryDisplay.css";
import loader from "../../../Image/loder.gif";

const AutomobileAndMotorBikeDisplay = () => {
  const { itemName } = useParams();
  return (
    <>
      <AllHeader />
      <div className="d-flex align-items-start">
        {/* Categories start */}
        <aside>
          {/* Automobile */}
          {itemName === "Automobile" && (
            <div id="Automobile">
              <LazyLoadImage
                src="https://res.cloudinary.com/shokhbari/image/upload/v1705565985/01-Novelty-Gifts_hnrm3w.png"
                alt=""
                className="img-fluid subCateBanner mb-5"
                effect="blur"
              />
              <section className="row tab-content-body container-fluid m-0 justify-content-center">
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Automobile"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1711003092/Automobile-1-_4_pb5uuq.jpg"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Automobile
                  </figcaption>
                </Link>
              </section>
            </div>
          )}

          {/* Automobile_Parts */}
          {itemName === "Automobile_Parts" && (
            <div id="Automobile_Parts">
              <LazyLoadImage
                src="https://res.cloudinary.com/shokhbari/image/upload/v1705565985/01-Novelty-Gifts_hnrm3w.png"
                alt=""
                className="img-fluid subCateBanner mb-5"
                effect="blur"
              />
              <section className="row tab-content-body container-fluid m-0 justify-content-center">
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Automobile_Parts"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1711002751/Automobile-Parts-2_wfcmj6.jpg"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Automobile Parts
                  </figcaption>
                </Link>
              </section>
            </div>
          )}

          {/* Interior_Accessories_care */}
          {itemName === "Interior_Accessories_Care" && (
            <div id="Interior_Accessories_care">
              <LazyLoadImage
                src="https://res.cloudinary.com/shokhbari/image/upload/v1705565985/01-Novelty-Gifts_hnrm3w.png"
                alt=""
                className="img-fluid subCateBanner mb-5"
                effect="blur"
              />
              <section className="row tab-content-body container-fluid m-0 justify-content-center">
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Interior_Accessories_care"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1711002899/Interior-Accessories-Care-3_al0sea.jpg"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Interior Accessories
                  </figcaption>
                </Link>
              </section>
            </div>
          )}

          {/* Exterior_Accessories_care */}
          {itemName === "Exterior_Accessories_Care" && (
            <div id="Exterior_Accessories_care">
              <LazyLoadImage
                src="https://res.cloudinary.com/shokhbari/image/upload/v1705565985/01-Novelty-Gifts_hnrm3w.png"
                alt=""
                className="img-fluid subCateBanner mb-5"
                effect="blur"
              />
              <section className="row tab-content-body container-fluid m-0 justify-content-center">
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Exterior_Accessories_care"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1711002771/Exterior-Accessories-Care-1_szevpq.jpg"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Exterior Accessories
                  </figcaption>
                </Link>
              </section>
            </div>
          )}

          {/* Bike */}
          {itemName === "Bike" && (
            <div id="Bike">
              <LazyLoadImage
                src="https://res.cloudinary.com/shokhbari/image/upload/v1705565985/01-Novelty-Gifts_hnrm3w.png"
                alt=""
                className="img-fluid subCateBanner mb-5"
                effect="blur"
              />
              <section className="row tab-content-body container-fluid m-0 justify-content-center">
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Bike"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1711002301/bike-3_ow6jqn.jpg"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">Bike</figcaption>
                </Link>
              </section>
            </div>
          )}

          {/* Bike_Parts_Accessories */}
          {itemName === "Bike_Parts_Accessories" && (
            <div id="Bike_Parts_Accessories">
              <LazyLoadImage
                src="https://res.cloudinary.com/shokhbari/image/upload/v1705565985/01-Novelty-Gifts_hnrm3w.png"
                alt=""
                className="img-fluid subCateBanner mb-5"
                effect="blur"
              />
              <section className="row tab-content-body container-fluid m-0 justify-content-center">
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Bike_Parts_Accessories"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1711002756/Bike-Parts-Accessories-1_p6im8i.jpg"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Bike Parts
                  </figcaption>
                </Link>
              </section>
            </div>
          )}

          {/* Oil_Fluids */}
          {itemName === "Oil_Fluids" && (
            <div id="Oil_Fluids">
              <LazyLoadImage
                src="https://res.cloudinary.com/shokhbari/image/upload/v1705565985/01-Novelty-Gifts_hnrm3w.png"
                alt=""
                className="img-fluid subCateBanner mb-5"
                effect="blur"
              />
              <section className="row tab-content-body container-fluid m-0 justify-content-center">
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Oil_Fluids"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1711002918/Oil_Fluids_1_xrisjn.jpg"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Oil Fluids
                  </figcaption>
                </Link>
              </section>
            </div>
          )}

          {/* Riders_gear */}
          {itemName === "Riders Gear" && (
            <div id="Riders_gear">
              <LazyLoadImage
                src="https://res.cloudinary.com/shokhbari/image/upload/v1705565985/01-Novelty-Gifts_hnrm3w.png"
                alt=""
                className="img-fluid subCateBanner mb-5"
                effect="blur"
              />
              <section className="row tab-content-body container-fluid m-0 justify-content-center">
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Riders_gear"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1711002925/Riders-Gear-3_v6rj2z.jpg"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Riders gear
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

export default AutomobileAndMotorBikeDisplay;
