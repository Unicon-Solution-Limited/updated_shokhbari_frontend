import React, { useEffect, useState } from "react";
import UserProfile from "../Pages/UserProfile/UserProfile";
import DashboardHeader from "./DashboardShared/DashboardHeader";
import DashboardFooter from "./DashboardShared/DashboardFooter";
import { useAuth } from "../Authentication/AuthContext/AuthContext";
import { Link } from "react-router-dom";
import CustomerOrderListPage from "./../Pages/OrderListPage/CustomerOrderListPage";
import MakeAdminPage from "../Pages/MakeAdminPage/MakeAdminPage";
import ManageProduct from "../Pages/ManageProduct/ManageProduct";
import Recycle from "../Pages/ManageProduct/Recycle";
import AllOrderList from "./../Pages/OrderListPage/AllOrderList";
import ManageMerchant from "../Pages/MerchantDetails/ManageMerchant";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import CampainControl from "../Pages/CampainControl/CampainControl";

const DashboardBody = () => {
  const { logout } = useAuth();
  const { currentUser } = useAuth();
  const [loading, setLoading] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  // FIND ADMIN
  // useEffect(() => {
  //   fetch(`${process.env.REACT_APP_BACKEND_URL}/findAdmin?email=${currentUser.email}`)
  //     .then((res) => res.json())
  //     .then((result) => {
  //       setIsAdmin(true);
  //     });
  // }, [currentUser?.email]);
  useEffect(() => {
    const headers = {
      "Content-Type": "application/json",
      authorization: `Bearer ${localStorage.getItem("shokhbari-token")}`,
    };

    fetch(
      `${process.env.REACT_APP_BACKEND_URL}/findAdmin?email=${currentUser.email}`,
      {
        headers,
      }
    )
      .then((res) => res.json())
      .then((result) => {
        setIsAdmin(true);
      });
  }, [currentUser?.email]);

  //remove shokhbari token
  const removeShokhbariToken = () => {
    localStorage.removeItem("shokhbari-token");
  };

  // Active side navbar
  const history = useHistory();
  const [activeTab, setActiveTab] = useState("");

  useEffect(() => {
    const storedTab = localStorage.getItem("activeTab");
    setActiveTab(storedTab || "#profile");
  }, []);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    localStorage.setItem("activeTab", tab);
    history.push(tab); // Update the URL to reflect the active tab
  };

  return (
    <>
      <DashboardHeader />
      <div
        className="row d-flex align-items-start dashboardMainBody"
        activeKey={activeTab}
        onClick={() => handleTabChange}
      >
        <div
          className="col-md-3 nav flex-column nav-pills me-3 dashboardSideNav"
          id="v-pills-tab"
          role="tablist"
          aria-orientation="vertical"
        >
          <button
            className={`nav-link dashboardSidenavButton ${
              activeTab === "#profile" ? "active" : ""
            }`}
            onClick={() => handleTabChange("#profile")}
            id="v-pills-home-tab"
            data-bs-toggle="pill"
            data-bs-target="#profile"
            type="button"
            role="tab"
            aria-controls="v-pills-home"
            aria-selected="true"
          >
            <div className="dashboardIcons">
              <i className="bi bi-person-fill"></i>
              Profile
            </div>
          </button>
          <button
            className={`nav-link dashboardSidenavButton ${
              activeTab === "#CustomerOrderListPage" ? "active" : ""
            }`}
            onClick={() => handleTabChange("#CustomerOrderListPage")}
            id="v-pills-profile-tab"
            data-bs-toggle="pill"
            data-bs-target="#CustomerOrderListPage"
            type="button"
            role="tab"
            aria-controls="v-pills-profile"
            aria-selected="false"
          >
            <div className="dashboardIcons">
              <i className="bi bi-bag-plus-fill"></i>
              My Order's
            </div>
          </button>
          {isAdmin && (
            <button
              className={`nav-link dashboardSidenavButton ${
                activeTab === "#allOrderList" ? "active" : ""
              }`}
              onClick={() => handleTabChange("#allOrderList")}
              id="v-pills-settings-tab"
              data-bs-toggle="pill"
              data-bs-target="#allOrderList"
              type="button"
              role="tab"
              aria-controls="v-pills-settings"
              aria-selected="false"
            >
              <div className="dashboardIcons">
                <i className="bi bi-chat-left-dots-fill"></i>
                Order List
              </div>
            </button>
          )}

          {isAdmin && (
            <button
              className={`nav-link dashboardSidenavButton ${
                activeTab === "#Wishlist" ? "active" : ""
              }`}
              onClick={() => handleTabChange("#Wishlist")}
              id="v-pills-settings-tab"
              data-bs-toggle="pill"
              data-bs-target="#Wishlist"
              type="button"
              role="tab"
              aria-controls="v-pills-settings"
              aria-selected="false"
            >
              <div className="dashboardIcons">
                <i className="bi bi-heart-fill"></i>
                Campaign Control
              </div>
            </button>
          )}

          {currentUser?.email === "brand.shokhbari@gmail.com" && isAdmin && (
            <button
              className={`nav-link dashboardSidenavButton ${
                activeTab === "#Admin" ? "active" : ""
              }`}
              onClick={() => handleTabChange("#Admin")}
              id="v-pills-settings-tab"
              data-bs-toggle="pill"
              data-bs-target="#Admin"
              type="button"
              role="tab"
              aria-controls="v-pills-settings"
              aria-selected="false"
            >
              <div className="dashboardIcons">
                <i className="bi bi-person-circle"></i>
                Make Admin
              </div>
            </button>
          )}

          {isAdmin && (
            <>
              <Link
                to="/AddProductPage"
                className="nav-link dashboardSidenavButton addProduct"
                type="button"
                role="tab"
                aria-controls="v-pills-settings"
                aria-selected="false"
              >
                <div className="dashboardIcons">
                  <i className="bi bi-plus-circle-fill"></i>
                  Add Product
                </div>
              </Link>
              <button
                className={`nav-link dashboardSidenavButton ${
                  activeTab === "#ManageProduct" ? "active" : ""
                }`}
                onClick={() => handleTabChange("#ManageProduct")}
                id="v-pills-messages-tab"
                data-bs-toggle="pill"
                data-bs-target="#ManageProduct"
                type="button"
                role="tab"
                aria-controls="v-pills-messages"
                aria-selected="false"
              >
                <div className="dashboardIcons">
                  <i className="bi bi-gear-fill"></i>
                  Manage Product
                </div>
              </button>
              <button
                className={`nav-link dashboardSidenavButton ${
                  activeTab === "#recycle" ? "active" : ""
                }`}
                onClick={() => handleTabChange("#recycle")}
                id="v-pills-messages-tab"
                data-bs-toggle="pill"
                data-bs-target="#recycle"
                type="button"
                role="tab"
                aria-controls="v-pills-messages"
                aria-selected="false"
              >
                <div className="dashboardIcons">
                  <i className="bi bi-trash2-fill"></i>
                  Recycle Bin
                </div>
              </button>
            </>
          )}

          {isAdmin && (
            <>
              <button
                className={`nav-link dashboardSidenavButton ${
                  activeTab === "#ManageSellers" ? "active" : ""
                }`}
                onClick={() => handleTabChange("#ManageSellers")}
                id="v-pills-messages-tab"
                data-bs-toggle="pill"
                data-bs-target="#ManageSellers"
                type="button"
                role="tab"
                aria-controls="v-pills-messages"
                aria-selected="false"
              >
                <div className="dashboardIcons">
                  <i className="bi bi-people-fill"></i>
                  Manage Merchant
                </div>
              </button>
            </>
          )}

          <Link
            to="/"
            className="nav-link dashboardSidenavButton"
            type="button"
            role="tab"
            aria-controls="v-pills-settings"
            aria-selected="false"
          >
            <div className="dashboardIcons">
              <i className="bi bi-arrow-left-circle-fill"></i>
              Back to Home
            </div>
          </Link>
          <button
            className="nav-link dashboardSidenavButton"
            type="button"
            onClick={() => {
              logout();
              removeShokhbariToken();
            }}
          >
            <div className="dashboardIcons">
              <i className="bi bi-box-arrow-left"></i>
              <span>Logout</span>
            </div>
          </button>
        </div>

        {/* ********************** this is right tab content ******************* */}
        <div
          className="col-md-9 tab-content dashboardTabsContent"
          id="v-pills-tabContent"
        >
          <div
            className={`tab-pane fade ${
              activeTab === "#profile" ? "show active" : ""
            }`}
            id="profile"
            role="tabpanel"
            aria-labelledby="v-pills-home-tab"
          >
            <UserProfile />
          </div>
          <div
            className={`tab-pane fade ${
              activeTab === "#CustomerOrderListPage" ? "show active" : ""
            }`}
            id="CustomerOrderListPage"
            role="tabpanel"
            aria-labelledby="v-pills-profile-tab"
          >
            <CustomerOrderListPage />
          </div>
          {isAdmin && (
            <div
              className={`tab-pane fade ${
                activeTab === "#allOrderList" ? "show active" : ""
              }`}
              id="allOrderList"
              role="tabpanel"
              aria-labelledby="v-pills-messages-tab"
            >
              <AllOrderList />
            </div>
          )}

          {isAdmin && (
            <div
              className={`tab-pane fade ${
                activeTab === "#Wishlist" ? "show active" : ""
              }`}
              id="Wishlist"
              role="tabpanel"
              aria-labelledby="v-pills-settings-tab"
            >
              <CampainControl />
            </div>
          )}

          {currentUser?.email === "brand.shokhbari@gmail.com" && (
            <div
              className={`tab-pane fade ${
                activeTab === "#Admin" ? "show active" : ""
              }`}
              id="Admin"
              role="tabpanel"
              aria-labelledby="v-pills-settings-tab"
            >
              <MakeAdminPage />
            </div>
          )}
          {isAdmin && (
            <>
              <div
                className={`tab-pane fade mt-3 ${
                  activeTab === "#ManageProduct" ? "show active" : ""
                }`}
                id="ManageProduct"
                role="tabpanel"
                aria-labelledby="v-pills-settings-tab"
              >
                <ManageProduct />
              </div>
              <div
                className={`tab-pane fade mt-3 ${
                  activeTab === "#ManageSellers" ? "show active" : ""
                }`}
                id="ManageSellers"
                role="tabpanel"
                aria-labelledby="v-pills-settings-tab"
              >
                <ManageMerchant />
              </div>
              <div
                className={`tab-pane fade mt-3 ${
                  activeTab === "#recycle" ? "show active" : ""
                }`}
                id="recycle"
                role="tabpanel"
                aria-labelledby="v-pills-settings-tab"
              >
                <Recycle />
              </div>
            </>
          )}
        </div>
      </div>
      <DashboardFooter />
    </>
  );
};

export default DashboardBody;
