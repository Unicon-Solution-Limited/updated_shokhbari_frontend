import React from "react";
import { Link } from "react-router-dom";

const FoodBeverage_M = () => {
  return (
    <>
      <li className="nav-item" data-bs-dismiss="offcanvas">
        <Link className="nav-link offcanvasLink" to="/">
          Food Beverage And Groceries
        </Link>
        <ul
          className="submenu dropdown-menu mega_menu"
          id="SportsEntertainment_mega"
        >
          <div className="container">
            <h2 className="text-center py-3 headline">
              Food Beverage And Groceries Worlds
            </h2>
            <div className="row">
              <div className="col-md-3">
                <p
                  className="text-center subHeadline"
                  data-bs-dismiss="offcanvas"
                >
                  <Link
                    style={{ textDecoration: "none", color: "inherit" }}
                    to={`/GroceriesItem/Prime_Food`}
                  >
                    Prime Food
                  </Link>
                </p>
                <hr />
                <div className="row">
                  <div className="col">
                    <ul data-bs-dismiss="offcanvas">
                      <li className="megaMenu_li">
                        <Link
                          to={`/displayProduct/${"Rice"}`}
                          id="megaMenuLink"
                        >
                          Rice
                        </Link>
                      </li>

                      <li className="megaMenu_li">
                        <Link
                          to={`/displayProduct/${"Pulses"}`}
                          id="megaMenuLink"
                        >
                          Pulses
                        </Link>
                      </li>

                      <li className="megaMenu_li">
                        <Link
                          to={`/displayProduct/${"AttaSuji"}`}
                          id="megaMenuLink"
                        >
                          AttaSuji
                        </Link>
                      </li>

                      <li className="megaMenu_li">
                        <Link
                          to={`/displayProduct/${"SugerSalt"}`}
                          id="megaMenuLink"
                        >
                          SugerSalt
                        </Link>
                      </li>

                      <li className="megaMenu_li">
                        <Link
                          to={`/displayProduct/${"PowderedMilk"}`}
                          id="megaMenuLink"
                        >
                          PowderedMilk
                        </Link>
                      </li>

                      <li className="megaMenu_li">
                        <Link
                          to={`/displayProduct/${"OtherPriceFood"}`}
                          id="megaMenuLink"
                        >
                          OtherPriceFood
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-md-3 subcategorySection">
                <p
                  className="text-center subHeadline"
                  data-bs-dismiss="offcanvas"
                >
                  <Link
                    style={{ textDecoration: "none", color: "inherit" }}
                    to={`/GroceriesItem/Fruits_Vagetables`}
                  >
                    Fruits & Vagetables
                  </Link>
                </p>
                <hr />
                <ul data-bs-dismiss="offcanvas">
                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Vegetables"}`}
                      id="megaMenuLink"
                    >
                      Vegetables
                    </Link>
                  </li>

                  <li className="megaMenu_li">
                    <Link to={`/displayProduct/${"Fruit"}`} id="megaMenuLink">
                      Fruit
                    </Link>
                  </li>

                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"DryFruit"}`}
                      id="megaMenuLink"
                    >
                      DryFruit
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="col-md-3 subcategorySection">
                <p
                  className="text-center subHeadline"
                  data-bs-dismiss="offcanvas"
                >
                  <Link
                    style={{ textDecoration: "none", color: "inherit" }}
                    to={`/GroceriesItem/Meat_Fish_Seafood`}
                  >
                    Meat Fish & Seafood
                  </Link>
                </p>
                <hr />
                <ul data-bs-dismiss="offcanvas">
                  <li className="megaMenu_li">
                    <Link to={`/displayProduct/${"Meat"}`} id="megaMenuLink">
                      Meat
                    </Link>
                  </li>

                  <li className="megaMenu_li">
                    <Link to={`/displayProduct/${"Fish"}`} id="megaMenuLink">
                      Fish
                    </Link>
                  </li>

                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Dry Fish"}`}
                      id="megaMenuLink"
                    >
                      Dry Fish
                    </Link>
                  </li>

                  <li className="megaMenu_li">
                    <Link to={`/displayProduct/${"SeaFood"}`} id="megaMenuLink">
                      SeaFood
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="col-md-3">
                <p
                  className="text-center subHeadline"
                  data-bs-dismiss="offcanvas"
                >
                  <Link
                    style={{ textDecoration: "none", color: "inherit" }}
                    to={`/GroceriesItem/Cooking_Ingredient`}
                  >
                    Cooking Ingredient
                  </Link>
                </p>
                <hr />
                <div className="row">
                  <div className="col">
                    <ul data-bs-dismiss="offcanvas">
                      <li className="megaMenu_li">
                        <Link
                          to={`/displayProduct/${"CookingOils"}`}
                          id="megaMenuLink"
                        >
                          CookingOils
                        </Link>
                      </li>

                      <li className="megaMenu_li">
                        <Link
                          to={`/displayProduct/${"SpicesCondiments"}`}
                          id="megaMenuLink"
                        >
                          SpicesCondiments
                        </Link>
                      </li>

                      <li className="megaMenu_li">
                        <Link
                          to={`/displayProduct/${"FoodAdditives"}`}
                          id="megaMenuLink"
                        >
                          FoodAdditives
                        </Link>
                      </li>

                      <li className="megaMenu_li">
                        <Link
                          to={`/displayProduct/${"Herbs"}`}
                          id="megaMenuLink"
                        >
                          Herbs
                        </Link>
                      </li>

                      <li className="megaMenu_li">
                        <Link
                          to={`/displayProduct/${"Sauces"}`}
                          id="megaMenuLink"
                        >
                          Sauces
                        </Link>
                      </li>

                      <li className="megaMenu_li">
                        <Link
                          to={`/displayProduct/${"InstantMix"}`}
                          id="megaMenuLink"
                        >
                          Instant Mix
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* break */}
              <hr />
              <div className="row">
                <div className="col-md-3">
                  <p
                    className="text-center subHeadline"
                    data-bs-dismiss="offcanvas"
                  >
                    <Link
                      style={{ textDecoration: "none", color: "inherit" }}
                      to={`/GroceriesItem/Breakfast_Tea_Coffee`}
                    >
                      Breakfast Tea & Coffee
                    </Link>
                  </p>
                  <hr />
                  <div className="row">
                    <div className="col">
                      <ul data-bs-dismiss="offcanvas">
                        <li className="megaMenu_li">
                          <Link
                            to={`/displayProduct/${"BreakfastFood"}`}
                            id="megaMenuLink"
                          >
                            BreakfastFood
                          </Link>
                        </li>

                        <li className="megaMenu_li">
                          <Link
                            to={`/displayProduct/${"Tea"}`}
                            id="megaMenuLink"
                          >
                            Tea
                          </Link>
                        </li>

                        <li className="megaMenu_li">
                          <Link
                            to={`/displayProduct/${"Coffee"}`}
                            id="megaMenuLink"
                          >
                            Coffee
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <hr />

                  <p
                    className="text-center subHeadline"
                    data-bs-dismiss="offcanvas"
                  >
                    <Link
                      style={{ textDecoration: "none", color: "inherit" }}
                      to={`/GroceriesItem/Jarred_Canned`}
                    >
                      Jarred and Canned Food
                    </Link>
                  </p>
                  <hr />
                  <ul data-bs-dismiss="offcanvas">
                    <li className="megaMenu_li">
                      <Link
                        to={`/displayProduct/${"JarredFood"}`}
                        id="megaMenuLink"
                      >
                        JarredFood
                      </Link>
                    </li>
                    <li className="megaMenu_li">
                      <Link
                        to={`/displayProduct/${"CannedFoods"}`}
                        id="megaMenuLink"
                      >
                        CannedFoods
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="col-md-3 subcategorySection">
                  <p
                    className="text-center subHeadline"
                    data-bs-dismiss="offcanvas"
                  >
                    <Link
                      style={{ textDecoration: "none", color: "inherit" }}
                      to={`/GroceriesItem/Sweets_Dairy`}
                    >
                      Sweets & Dairy
                    </Link>
                  </p>
                  <hr />
                  <ul data-bs-dismiss="offcanvas">
                    <li className="megaMenu_li">
                      <Link to={`/displayProduct/${"Milk"}`} id="megaMenuLink">
                        Milk
                      </Link>
                    </li>
                    <li className="megaMenu_li">
                      <Link
                        to={`/displayProduct/${"Butter"}`}
                        id="megaMenuLink"
                      >
                        Butter
                      </Link>
                    </li>
                    <li className="megaMenu_li">
                      <Link
                        to={`/displayProduct/${"Cheese"}`}
                        id="megaMenuLink"
                      >
                        Cheese
                      </Link>
                    </li>
                    <li className="megaMenu_li">
                      <Link
                        to={`/displayProduct/${"Yougrat"}`}
                        id="megaMenuLink"
                      >
                        Yougrat
                      </Link>
                    </li>
                    <li className="megaMenu_li">
                      <Link
                        to={`/displayProduct/${"IceCrem"}`}
                        id="megaMenuLink"
                      >
                        IceCrem
                      </Link>
                    </li>
                    <li className="megaMenu_li">
                      <Link
                        to={`/displayProduct/${"Sweets"}`}
                        id="megaMenuLink"
                      >
                        Sweets
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="col-md-3 subcategorySection">
                  <p
                    className="text-center subHeadline"
                    data-bs-dismiss="offcanvas"
                  >
                    <Link
                      style={{ textDecoration: "none", color: "inherit" }}
                      to={`/GroceriesItem/Bakery_Snacks`}
                    >
                      Bakery Snacks
                    </Link>
                  </p>
                  <hr />
                  <ul data-bs-dismiss="offcanvas">
                    <li className="megaMenu_li">
                      <Link
                        to={`/displayProduct/${"Breads"}`}
                        id="megaMenuLink"
                      >
                        Breads
                      </Link>
                    </li>
                    <li className="megaMenu_li">
                      <Link
                        to={`/displayProduct/${"Cookies"}`}
                        id="megaMenuLink"
                      >
                        Cookies
                      </Link>
                    </li>
                    <li className="megaMenu_li">
                      <Link to={`/displayProduct/${"Bakes"}`} id="megaMenuLink">
                        Bakes
                      </Link>
                    </li>
                    <li className="megaMenu_li">
                      <Link
                        to={`/displayProduct/${"Snacks"}`}
                        id="megaMenuLink"
                      >
                        Snacks
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="col-md-3 subcategorySection">
                  <ul data-bs-dismiss="offcanvas">
                    <li className="megaMenu_li">
                      <Link to={`/GroceriesItem/Forzen_Item`} id="megaMenuLink">
                        Forzen Item
                      </Link>
                    </li>

                    <li className="megaMenu_li">
                      <Link to={`/GroceriesItem/Forzen_Item`} id="megaMenuLink">
                        Other Frozen Item
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Break */}
              <hr />
              <div className="row">
                <div className="col-md-3">
                  <p
                    className="text-center subHeadline"
                    data-bs-dismiss="offcanvas"
                  >
                    <Link
                      style={{ textDecoration: "none", color: "inherit" }}
                      to={`/GroceriesItem/Beverage_Chocolate`}
                    >
                      Beverage Chocolate
                    </Link>
                  </p>
                  <hr />
                  <div className="row">
                    <div className="col">
                      <ul data-bs-dismiss="offcanvas">
                        <li className="megaMenu_li">
                          <Link
                            to={`/displayProduct/${"SoftDrinks"}`}
                            id="megaMenuLink"
                          >
                            SoftDrinks
                          </Link>
                        </li>

                        <li className="megaMenu_li">
                          <Link
                            to={`/displayProduct/${"Juice"}`}
                            id="megaMenuLink"
                          >
                            Juice
                          </Link>
                        </li>

                        <li className="megaMenu_li">
                          <Link
                            to={`/displayProduct/${"Water"}`}
                            id="megaMenuLink"
                          >
                            Water
                          </Link>
                        </li>

                        <li className="megaMenu_li">
                          <Link
                            to={`/displayProduct/${"PowderedMlik"}`}
                            id="megaMenuLink"
                          >
                            PowderedMlik
                          </Link>
                        </li>

                        <li className="megaMenu_li">
                          <Link
                            to={`/displayProduct/${"Chocolate"}`}
                            id="megaMenuLink"
                          >
                            Chocolate
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-md-3 subcategorySection">
                  <p
                    className="text-center subHeadline"
                    data-bs-dismiss="offcanvas"
                  >
                    <Link
                      style={{ textDecoration: "none", color: "inherit" }}
                      to={`/GroceriesItem/Soup_Noodles`}
                    >
                      Soup & Noodles
                    </Link>
                  </p>
                  <hr />
                  <ul data-bs-dismiss="offcanvas">
                    <li className="megaMenu_li">
                      <Link
                        to={`/displayProduct/${"Noodles"}`}
                        id="megaMenuLink"
                      >
                        Noodles
                      </Link>
                    </li>

                    <li className="megaMenu_li">
                      <Link to={`/displayProduct/${"Parta"}`} id="megaMenuLink">
                        Parta
                      </Link>
                    </li>

                    <li className="megaMenu_li">
                      <Link to={`/displayProduct/${"Soup"}`} id="megaMenuLink">
                        Soup
                      </Link>
                    </li>

                    <li className="megaMenu_li">
                      <Link
                        to={`/displayProduct/${"InstandFood"}`}
                        id="megaMenuLink"
                      >
                        InstandFood
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="col-md-3 subcategorySection">
                  <p
                    className="text-center subHeadline"
                    data-bs-dismiss="offcanvas"
                  >
                    <Link
                      style={{ textDecoration: "none", color: "inherit" }}
                      to={`/GroceriesItem/Home_Essentials`}
                    >
                      Home Essentials
                    </Link>
                  </p>
                  <hr />
                  <ul data-bs-dismiss="offcanvas">
                    <li className="megaMenu_li">
                      <Link
                        to={`/displayProduct/${"Household"}`}
                        id="megaMenuLink"
                      >
                        Household
                      </Link>
                    </li>

                    <li className="megaMenu_li">
                      <Link
                        to={`/displayProduct/${"KitchenDining"}`}
                        id="megaMenuLink"
                      >
                        Kitchen Dining
                      </Link>
                    </li>

                    <li className="megaMenu_li">
                      <Link to={`/displayProduct/${"Bath"}`} id="megaMenuLink">
                        Bath
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="col-md-3 subcategorySection">
                  <p
                    className="text-center subHeadline"
                    data-bs-dismiss="offcanvas"
                  >
                    <Link
                      style={{ textDecoration: "none", color: "inherit" }}
                      to={`/GroceriesItem/Clearing_Needs`}
                    >
                      Clearing Needs
                    </Link>
                  </p>
                  <hr />
                  <ul data-bs-dismiss="offcanvas">
                    <li className="megaMenu_li">
                      <Link
                        to={`/displayProduct/${"ClearingNeedsHousehold"}`}
                        id="megaMenuLink"
                      >
                        Household
                      </Link>
                    </li>

                    <li className="megaMenu_li">
                      <Link
                        to={`/displayProduct/${"CleaningKitchenDining"}`}
                        id="megaMenuLink"
                      >
                        Cleaning Kitchen Dining
                      </Link>
                    </li>

                    <li className="megaMenu_li">
                      <Link
                        to={`/displayProduct/${"ClearingNeedsBath"}`}
                        id="megaMenuLink"
                      >
                        Bath
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </ul>
      </li>
    </>
  );
};

export default FoodBeverage_M;
