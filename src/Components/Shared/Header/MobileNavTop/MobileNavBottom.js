import React, { useContext, useState } from "react";
import "./MobileNavBottom.css";
import { useAuth } from "./../../../Authentication/AuthContext/AuthContext";
import { useHistory } from "react-router-dom";
import { ProductProvider } from "./../../../AllContextApi/ProductsContext";

const MobileNavBottom = () => {
  const { currentUser } = useAuth();
  const [products, setProducts] = useContext(ProductProvider);
  const [searchValue, setSearchValue] = useState("");
  const history = useHistory();
  // sendign the daynamic  search value into the browser search bar and also redrict search component
  const handleSearch = (e) => {
    e.preventDefault();
    history.push(`/Search/${searchValue}`);
  };
  return (
    <div className="sticky-top MobileNav">
      {/* Navbar for and search */}
      <div className="hamser">
        <form className="input-group" method="GET" onSubmit={handleSearch}>
          <input
            type="text"
            className="form-control input-text"
            placeholder="Search products...."
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <button className="btn btn-lg" type="submit">
            <i className="bi bi-search"></i>
          </button>
        </form>
      </div>
      {/* End Navbar for and search */}
    </div>
  );
};

export default MobileNavBottom;
