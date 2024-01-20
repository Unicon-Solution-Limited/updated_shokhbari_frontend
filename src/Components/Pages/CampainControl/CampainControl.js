import React, { useState } from "react";

const CampainControl = () => {
  const [updateStatus, setUpdateStatus] = useState("");

  const handleUpdateClick = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/campainOff`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const result = await response.json();

      if (response.ok) {
        setUpdateStatus(result.message);
      } else {
        console.error(result.message);
        setUpdateStatus("Update failed");
      }
    } catch (error) {
      console.error("Error updating campaign status:", error);
      setUpdateStatus("Update failed");
    }
  };

  return (
    <div>
      <button onClick={handleUpdateClick} className="btn myBtn mt-5">
        Stop Campain
      </button>
      <p>{updateStatus}</p>
    </div>
  );
};

export default CampainControl;
