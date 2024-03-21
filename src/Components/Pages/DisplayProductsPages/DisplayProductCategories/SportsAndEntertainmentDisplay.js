import AllHeader from "../../../Shared/Header/AllHeader";
import AllFooter from "../../../Shared/Footer/AllFooter";
import { Link, useParams } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "./CategoryDisplay.css";
import loader from "../../../Image/loder.gif";

const SportsAndEntertainmentDisplay = () => {
  const { itemName } = useParams();
  return (
    <>
      <AllHeader />
      <div className="d-flex align-items-start">
        {/* Categories start */}
        <aside>
          {/* Exercise&Fitness */}
          {itemName === "Exercise&Fitness" && (
            <div id="Exercise&Fitness">
              <LazyLoadImage
                src="https://res.cloudinary.com/shokhbari/image/upload/v1705565985/01-Novelty-Gifts_hnrm3w.png"
                alt=""
                className="img-fluid subCateBanner mb-5"
                effect="blur"
              />
              <section className="row tab-content-body container-fluid m-0 justify-content-center">
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Exercise&Fitness"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1711012963/Exercise-_-Fitness_-Yoga-2_yh1nct.jpg"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Exercise & Fitness, Yoga
                  </figcaption>
                </Link>
              </section>
            </div>
          )}

          {/* OutdoorRecreation */}
          {itemName === "OutdoorRecreation" && (
            <div id="OutdoorRecreation">
              <LazyLoadImage
                src="https://res.cloudinary.com/shokhbari/image/upload/v1705565985/01-Novelty-Gifts_hnrm3w.png"
                alt=""
                className="img-fluid subCateBanner mb-5"
                effect="blur"
              />
              <section className="row tab-content-body container-fluid m-0 justify-content-center">
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"OutdoorRecreation"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1711012974/Outdoor-Recreation-1_sduqwi.jpg"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Outdoor Recreation
                  </figcaption>
                </Link>
              </section>
            </div>
          )}

          {/* IndoorRecreation */}
          {itemName === "IndoorRecreation" && (
            <div id="IndoorRecreation">
              <LazyLoadImage
                src="https://res.cloudinary.com/shokhbari/image/upload/v1705565985/01-Novelty-Gifts_hnrm3w.png"
                alt=""
                className="img-fluid subCateBanner mb-5"
                effect="blur"
              />
              <section className="row tab-content-body container-fluid m-0 justify-content-center">
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"IndoorRecreation"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1711012970/Indoor-Recreation-1_k7gusu.jpg"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Indoor Recreation
                  </figcaption>
                </Link>
              </section>
            </div>
          )}

          {/* Camping_Hiking */}
          {itemName === "Camping Hiking" && (
            <div id="Camping_Hiking">
              <LazyLoadImage
                src="https://res.cloudinary.com/shokhbari/image/upload/v1705565985/01-Novelty-Gifts_hnrm3w.png"
                alt=""
                className="img-fluid subCateBanner mb-5"
                effect="blur"
              />
              <section className="row tab-content-body container-fluid m-0 justify-content-center">
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Camping_Hiking"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1711012966/Camping-Hiking-3_tka3ck.jpg"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Camping Hiking
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

export default SportsAndEntertainmentDisplay;
