import React from "react";
import AllHeader from "../../Shared/Header/AllHeader";
import Footer from "../../Shared/Footer/Footer";
import { useHistory } from "react-router-dom";

const Add = () => {
  const history = useHistory();
  return (
    <div>
      <div
        style={{ position: "relative", height: "100vh", overflow: "hidden" }}
      >
        {/* Video Element */}
        <video
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover", // Ensures the video covers the screen
          }}
          controls
          autoPlay
          loop // Optional: Adds looping functionality
          muted // Optional: Mutes the video for autoplay compliance
          src="https://www.w3schools.com/html/mov_bbb.mp4"
        >
          Your browser does not support the video tag.
        </video>

        {/* Back to Home Button */}
        <button
          onClick={() => history.push("/")}
          style={{
            position: "absolute",
            top: "20px",
            left: "20px",
            zIndex: 1050, // Higher z-index to be on top of the video
            padding: "10px 20px",
            backgroundColor: "rgba(255, 255, 255, 0.8)", // Semi-transparent background
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Back to Home
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default Add;
