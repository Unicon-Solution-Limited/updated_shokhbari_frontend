import React from "react";
import { Link } from "react-router-dom";
// import { useAuth } from "../../Authentication/AuthContext/AuthContext";
import "./MerchantDashboard.css";
import { useAuth } from "../../Authentication/AuthContext/AuthContext";

const MerchantDashboardHeader = () => {
  const { currentUser } = useAuth();
  return (
    <>
      <nav className="navbar navbar-expand-lg dashboardNav sticky-top">
        <div className="container-fluid">
          <a className="navbar-brand dashBoard" href="/merchant-dashboard">
            Shokhbari Seller
          </a>

          <div className="navbar-nav rightnavbarItems">
            <table>
              <tbody>
                <tr>
                  <td>
                    <Link to="/merchant-dashboard">
                      <img
                        src={currentUser?.photoURL}
                        alt="Hi, "
                        className="dashboardProfileImage"
                      />
                    </Link>
                  </td>
                  <td>
                    <Link to="/merchant-dashboard">
                      <p className="dashboardProfileName">
                        {currentUser?.displayName}
                      </p>
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </nav>
    </>
  );
};

export default MerchantDashboardHeader;
