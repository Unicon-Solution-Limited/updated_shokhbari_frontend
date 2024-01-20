import React from "react";
import { Link } from "react-router-dom";

const TripTours_M = () => {
  return (
    <>
      <li className="nav-item">
        <Link className="nav-link offcanvasLink" to="/">
          Tour & Trips
        </Link>
        <ul className="submenu dropdown-menu mega_menu" id="TripTours_mega">
          <div className="container">
            <h2 className="text-center py-3 headline">Tour & Trips World</h2>
            <div className="row">
              <div className="col-3">
                <p className="text-center subHeadline">Stay</p>
                <hr />
                <ul className="text-center" data-bs-dismiss="offcanvas">
                  <li className="megaMenu_li">
                    <Link to={`/displayProduct/${"Stay"}`} id="megaMenuLink">
                      Stay
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-3 subcategorySection">
                <p className="text-center subHeadline">Tour Guide</p>
                <hr />
                <ul className="text-center" data-bs-dismiss="offcanvas">
                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Tour_Guide"}`}
                      id="megaMenuLink"
                    >
                      Tour Guide
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-3 subcategorySection">
                <p className="text-center subHeadline">Package_Tour</p>
                <hr />
                <ul className="text-center" data-bs-dismiss="offcanvas">
                  <li className="megaMenu_li">
                    <Link
                      to={`/displayProduct/${"Package_Tour"}`}
                      id="megaMenuLink"
                    >
                      Package_Tour
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-12">
                <p className="text-center subHeadline">Travel</p>
                <hr />
                <div className="row">
                  <div className="col-md-4">
                    <ul className="text-center" data-bs-dismiss="offcanvas">
                      <p className="text-center">Buying Ticket</p>
                      <hr />
                      <li className="megaMenu_li">
                        <Link
                          to={`/displaySubChildProduct/${"Bus_Ticket"}`}
                          id="megaMenuLink"
                        >
                          Bus Ticket
                        </Link>
                      </li>

                      <li className="megaMenu_li">
                        <Link
                          to={`/displaySubChildProduct/${"Train_Ticket"}`}
                          id="megaMenuLink"
                        >
                          Train Ticket
                        </Link>
                      </li>

                      <li className="megaMenu_li">
                        <Link
                          to={`/displaySubChildProduct/${"Air_Ticket"}`}
                          id="megaMenuLink"
                        >
                          Air Ticket
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-4">
                    <ul className="text-center" data-bs-dismiss="offcanvas">
                      <p className="text-center">Rent</p>
                      <hr />

                      <li className="megaMenu_li">
                        <Link
                          to={`/displaySubChildProduct/${"Car_Rent"}`}
                          id="megaMenuLink"
                        >
                          Car Rent
                        </Link>
                      </li>

                      <li className="megaMenu_li">
                        <Link
                          to={`/displaySubChildProduct/${"Bus_Rent"}`}
                          id="megaMenuLink"
                        >
                          Bus Rent
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="col-md-4">
                    <ul className="text-center" data-bs-dismiss="offcanvas">
                      <p className="text-center">Booking</p>
                      <hr />

                      <li className="megaMenu_li">
                        <Link
                          to={`/displaySubChildProduct/${"Booking"}`}
                          id="megaMenuLink"
                        >
                          Booking
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ul>
      </li>
    </>
  );
};

export default TripTours_M;
