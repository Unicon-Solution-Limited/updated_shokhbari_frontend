import React from "react";
import { Link } from "react-router-dom";
import "./MerchantDashboard.css";

const MerchantDashboardFooter = () => {
  return (
    <div className="text-center text-white dashboardFooter">
      <div className="text-center p-3">
        <ul className="ulDashboardFooter">
          <li>
            <Link to="/" className="dashboardFooterLinks">
              Terms and Condition |
            </Link>
          </li>
          <li>
            <Link to="/" className="dashboardFooterLinks">
              About Us |
            </Link>
          </li>
          <li>
            <Link to="/" className="dashboardFooterLinks">
              Our Policy
            </Link>
          </li>
        </ul>

        <p>© 2020 Copyright: ShokhBari</p>
      </div>
    </div>
  );
};

export default MerchantDashboardFooter;
