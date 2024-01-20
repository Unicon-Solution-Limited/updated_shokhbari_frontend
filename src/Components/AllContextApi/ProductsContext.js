import React, { createContext, useEffect, useState } from "react";

export const ProductProvider = createContext();

const ProductsContext = ({ children }) => {
  //all product state
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchValue, setSearchValue] = useState();

  //all product getting
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `${process.env.REACT_APP_BACKEND_URL}/allProduct`
        );
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.log("err", error);
      }
      setLoading(false);
    };
    fetchProduct();
  }, []);
  return (
    <div>
      <ProductProvider.Provider
        value={[
          products,
          setProducts,
          loading,
          setLoading,
          searchValue,
          setSearchValue,
        ]}
      >
        {children}
      </ProductProvider.Provider>
    </div>
  );
};

export default ProductsContext;
