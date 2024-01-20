import React from "react";
import "./MobileNavTop.css";

const MobileNavTop = () => {
  return (
    <div className="MobileNav">
      <div className="MobileContact">
        <table>
          <tbody>
            <tr>
              <td>
                <i className="bi bi-telephone-fill"></i>
                <span> +8801841477361</span>
              </td>
              <td>
                <i className="bi bi-envelope-fill"></i>
                <span> shokhbari@gmail.com</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MobileNavTop;
