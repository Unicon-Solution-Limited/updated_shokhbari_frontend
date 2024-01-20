import React from "react";
import BottomNavbar from "./BottomNavbar/BottomNavbar";
import MobileNavBottom from "./MobileNavTop/MobileNavBottom";
import MobileNavTop from "./MobileNavTop/MobileNavTop";
import TopNavbar from "./TopNavbar/TopNavbar";

const AllHeader = () => {
  return (
    <>
      <MobileNavTop />
      <MobileNavBottom />
      <TopNavbar />
      <BottomNavbar />
    </>
  );
};

export default AllHeader;
