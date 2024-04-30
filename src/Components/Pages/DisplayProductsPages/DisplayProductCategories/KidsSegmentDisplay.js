import AllHeader from "../../../Shared/Header/AllHeader";
import AllFooter from "../../../Shared/Footer/AllFooter";
import { Link, useParams } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "./CategoryDisplay.css";
import loader from "../../../Image/loder.gif";

const KidsSegmentDisplay = () => {
  const { itemName } = useParams();
  return (
    <>
      <AllHeader />
      <div className="d-flex align-items-start">
        {/* Categories start */}
        <aside>
          {/* BabyClothing */}
          {itemName === "Baby_Clothing" && (
            <div id="BabyClothing">
              <LazyLoadImage
                src="https://res.cloudinary.com/shokhbari/image/upload/v1714471866/kids_Clothing2_gwexuq.png"
                alt=""
                className="img-fluid subCateBanner mb-5"
                effect="blur"
              />
              <section className="row tab-content-body container-fluid m-0 justify-content-center">
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Infants_cloth"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1711007364/Infants-Cloth-5_c7fuh3.jpg"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Infants Cloth
                  </figcaption>
                </Link>

                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Boy_cloth"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1711007359/Boy-Cloth-1_zfsgua.jpg"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Boy Cloth
                  </figcaption>
                </Link>

                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Girl_cloth"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1711007361/Girls-Cloth-4_fo2ohf.jpg"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    GirlS Cloth
                  </figcaption>
                </Link>
              </section>
            </div>
          )}

          {/* BabyFootwaer */}
          {itemName === "Baby_Footwaer" && (
            <div id="BabyFootwaer">
              <LazyLoadImage
                src="https://res.cloudinary.com/shokhbari/image/upload/v1714471916/kids_footwear1_c5xgrz.png"
                alt=""
                className="img-fluid subCateBanner mb-5"
                effect="blur"
              />
              <section className="row tab-content-body container-fluid m-0 justify-content-center">
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Infants_Footwaer"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1711007515/Infants-Footwaer-4_idh2xt.jpg"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Infants Footwaer
                  </figcaption>
                </Link>

                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Boy_Footwaer"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1711007519/Boy-Footwaer-2_gpzskx.jpg"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Boy Footwaer
                  </figcaption>
                </Link>

                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Girl_Footwaer"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1711007512/Girl-Footwaer-1_br4d5o.jpg"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Girl Footwaer
                  </figcaption>
                </Link>
              </section>
            </div>
          )}

          {/* BabyCare */}
          {itemName === "Baby_Care" && (
            <div id="BabyCare">
              <LazyLoadImage
                src="https://res.cloudinary.com/shokhbari/image/upload/v1714471968/kids_Care1_imnmvx.png"
                alt=""
                className="img-fluid subCateBanner mb-5"
                effect="blur"
              />
              <section className="row tab-content-body container-fluid m-0 justify-content-center">
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Baby_body_care"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1711007621/Kids-Body-Care-3_quc1ta.jpg"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Kids Body Care
                  </figcaption>
                </Link>

                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Baby_PersonalCare"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1711007625/Kids-Personal-Care-1_jm5rco.jpg"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Kids Personal Care
                  </figcaption>
                </Link>
              </section>
            </div>
          )}

          {/* BabyAccessories */}
          {itemName === "Baby_Accessories" && (
            <div id="BabyAccessories">
              <LazyLoadImage
                src="https://res.cloudinary.com/shokhbari/image/upload/v1714472018/kids_Accessories1_nw7edr.png"
                alt=""
                className="img-fluid subCateBanner mb-5"
                effect="blur"
              />
              <section className="row tab-content-body container-fluid m-0 justify-content-center">
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Infants_Accessories"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1711007708/Infants-Accessories-4_hevtlr.jpg"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Infants Accessories
                  </figcaption>
                </Link>

                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Boy_Accessories"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1711007705/Boy_Accessories_3_qkmagj.jpg"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Boy Accessories
                  </figcaption>
                </Link>

                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"Girl_Accessories"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1711007701/girl-Accessories-4_jcikqw.jpg"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Girl Accessories
                  </figcaption>
                </Link>
              </section>
            </div>
          )}

          {/* BabyFeedingNursery */}
          {itemName === "Baby_Feeding_Nursery" && (
            <div id="BabyFeedingNursery">
              <LazyLoadImage
                src="https://res.cloudinary.com/shokhbari/image/upload/v1714472191/kids_Feeding1_x05v8c.jpg"
                alt=""
                className="img-fluid subCateBanner mb-5"
                effect="blur"
              />
              <section className="row tab-content-body container-fluid m-0 justify-content-center">
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"BabyFeedingNursery"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1711007818/Kids_Feeding_Nursery_3_aqtghv.jpg"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Kids Feeding
                  </figcaption>
                </Link>
              </section>
            </div>
          )}

          {/* BabySportsOutdoor */}
          {itemName === "Baby_Sports_Outdoor" && (
            <div id="BabySportsOutdoor">
              <LazyLoadImage
                src="https://res.cloudinary.com/shokhbari/image/upload/v1714472229/kids_Sports_Outdoor2_j8m5rw.jpg"
                alt=""
                className="img-fluid subCateBanner mb-5"
                effect="blur"
              />
              <section className="row tab-content-body container-fluid m-0 justify-content-center">
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"BabySportsOutdoor"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1711007826/Kids-Sports-Outdoor-1_omdk4t.jpg"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Kids Sports Outdoor
                  </figcaption>
                </Link>
              </section>
            </div>
          )}

          {/* BabyToysGames */}
          {itemName === "Baby_Toys_Games" && (
            <div id="BabyToysGames">
              <LazyLoadImage
                src="https://res.cloudinary.com/shokhbari/image/upload/v1714472267/kids_Toys_Games1_qldsne.jpg"
                alt=""
                className="img-fluid subCateBanner mb-5"
                effect="blur"
              />
              <section className="row tab-content-body container-fluid m-0 justify-content-center">
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"BabyToysGames"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1711007830/Kids-Toys-Games-3_c8rdua.jpg"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Kids Toys Games
                  </figcaption>
                </Link>
              </section>
            </div>
          )}

          {/* BabyEducation */}

          {itemName === "Baby_Education" && (
            <div id="BabyEducation">
              <LazyLoadImage
                src="https://res.cloudinary.com/shokhbari/image/upload/v1714472316/kids_Education1_ipsvcg.jpg"
                alt=""
                className="img-fluid subCateBanner mb-5"
                effect="blur"
              />
              <section className="row tab-content-body container-fluid m-0 justify-content-center">
                <Link
                  className="col-12 col-lg-2 col-md-2 categoryContentBody"
                  to={`/displayProduct/${"BabyEducation"}`}
                >
                  <LazyLoadImage
                    src="https://res.cloudinary.com/shokhbari/image/upload/v1711007822/Kids-Education-555_oiewy2.jpg"
                    alt="Trulli"
                    className="img-fluid categoryImage"
                    placeholderSrc={loader}
                  />
                  <figcaption className="categoryImageCaption">
                    Kids Education
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

export default KidsSegmentDisplay;
