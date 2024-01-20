import React, { useEffect, useState } from "react";
import AllFooter from "./../../../Shared/Footer/AllFooter";
import AllHeader from "./../../../Shared/Header/AllHeader";
import Aos from "aos";
import "aos/dist/aos.css";
import "../FooterPages.css";
import ContentJson from "../JsonData/TranslateData.json";
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2,
} from "react-html-parser";
import LanguageBtn from "./../JsonData/LanguageBtn";

const Payment = () => {
  const [language, setLanguage] = useState("english");
  const [content, setContent] = useState({});

  useEffect(() => {
    if (language == "english") {
      setContent(ContentJson?.paymentEnglish);
    } else if (language == "bangla") {
      setContent(ContentJson?.paymentBangla);
    }
  }, [language]);

  const handleButtonClick = (selectedLanguage) => {
    setLanguage(selectedLanguage);
  };

  // Animation on scroll
  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);

  return (
    <>
      <AllHeader />
      <div className="mb-5">
        <span>{ReactHtmlParser(content.Description)}</span>
      </div>
      <LanguageBtn onClick={handleButtonClick} />
      <AllFooter />
    </>
  );
};

export default Payment;
