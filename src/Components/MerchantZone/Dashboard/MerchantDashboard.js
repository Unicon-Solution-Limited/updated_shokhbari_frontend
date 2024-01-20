import "./MerchantDashboard.css";
import MerchantDashboardHeader from "./MerchantDashboardHeader";
import MerchantDashboardFooter from "./MerchantDashboardFooter";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import MerchantProfile from "./Sidenav/MerchantProfile";
import { useAuth } from "../../Authentication/AuthContext/AuthContext";
import axios from "axios";
import { useEffect, useState } from "react";
import MerchantManageProduct from "./MerchantManageProduct/MerchantManageProduct";

const MerchantDashboard = () => {
  const { logout, currentUser } = useAuth();
  //remove shokhbari token
  const removeShokhbariToken = () => {
    localStorage.removeItem("shokhbari-token");
  };

  const [activeMerchant, setActiveMerchant] = useState([]);
  const [loading, setLoading] = useState();
  const [merchantAccess, setMerchantAccess] = useState(false);

  useEffect(() => {
    if (
      activeMerchant.find((data) => data?.merchantEmail === currentUser?.email)
    ) {
      setMerchantAccess(true);
    }
  }, [activeMerchant, currentUser.email]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/getActiveMerchant`
        );
        setActiveMerchant(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

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
      <MerchantDashboardHeader />
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
              Profile Request
            </div>
          </button>

          {merchantAccess === true && (
            <>
              {/* <button
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
              </button> */}

              <Link
                to="/merchant-add-product"
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
          <button className="nav-link dashboardSidenavButton" type="button">
            <div
              className="dashboardIcons"
              onClick={() => {
                logout();
                removeShokhbariToken();
              }}
            >
              <i className="bi bi-box-arrow-left"></i>
              <span>Logout</span>
            </div>
          </button>
        </div>

        {/* ********************************* this is tab content */}

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
            <MerchantProfile />
          </div>
          {/* <div
            className={`tab-pane fade ${
              activeTab === "#CustomerOrderListPage" ? "show active" : ""
            }`}
            id="CustomerOrderListPage"
            role="tabpanel"
            aria-labelledby="v-pills-profile-tab"
          >
            // hre my order component
          </div> */}

          <div
            className={`tab-pane fade ${
              activeTab === "#ManageProduct" ? "show active" : ""
            }`}
            id="ManageProduct"
            role="tabpanel"
            aria-labelledby="v-pills-settings-tab"
          >
            <MerchantManageProduct />
          </div>
        </div>
      </div>
      <MerchantDashboardFooter />
    </>
  );
};

export default MerchantDashboard;
