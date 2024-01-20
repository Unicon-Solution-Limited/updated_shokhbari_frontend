import React, { useEffect, useState } from "react";
import AllHeader from "./../../../Shared/Header/AllHeader";
import AllFooter from "./../../../Shared/Footer/AllFooter";
import "../FooterPages.css";
import Aos from "aos";
import "aos/dist/aos.css";

import ContentJson from "../JsonData/TranslateData.json";
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2,
} from "react-html-parser";
import LanguageBtn from "./../JsonData/LanguageBtn";

const PrivacyPolicy = () => {
  const [language, setLanguage] = useState("english");
  const [content, setContent] = useState({});

  useEffect(() => {
    if (language == "english") {
      setContent(ContentJson?.privacyPolicyEnglish);
    } else if (language == "bangla") {
      setContent(ContentJson?.privacyPolicyBangla);
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

export default PrivacyPolicy;
