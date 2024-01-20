import React, { createContext, useState } from "react";

export const WishlistProvider = createContext();

// get cart-data from localStorage
const getLocalStorageWishlistData = () => {
  let wishlistData;
  if (typeof window !== "undefined") {
    const localData = JSON.parse(localStorage.getItem("wishlist")) || [];
    wishlistData = localData;
  }
  return wishlistData;
};

const WishlistContext = ({ children }) => {
  const [wishlist, setWishlist] = useState(getLocalStorageWishlistData());
  return (
    <div>
      <WishlistProvider.Provider value={[wishlist, setWishlist]}>
        {children}
      </WishlistProvider.Provider>
    </div>
  );
};

export default WishlistContext;
