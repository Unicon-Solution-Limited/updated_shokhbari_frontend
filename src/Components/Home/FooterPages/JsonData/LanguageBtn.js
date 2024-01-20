import React from "react";
import "../FooterPages.css";

const LanguageBtn = ({ onClick }) => {
  return (
    <>
      <div id="container-floating">
        <div className="float_items">
          <div className="nd1 nds">
            <button type="button" onClick={() => onClick("english")}>
              <img
                src="https://res.cloudinary.com/shokhbari/image/upload/v1687346254/united-kingdom_i49m7y.webp"
                alt=""
                className="img-fluid"
              />
            </button>
          </div>

          <div className="nd2 nds">
            <button type="button" onClick={() => onClick("bangla")}>
              <img
                src="https://res.cloudinary.com/shokhbari/image/upload/v1687346254/bangladesh_qsrcwf.webp"
                alt=""
                className="img-fluid"
              />
            </button>
          </div>

          <div id="floating-button">
            <p className="plus">
              Language <i className="bi bi-translate"></i>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LanguageBtn;
