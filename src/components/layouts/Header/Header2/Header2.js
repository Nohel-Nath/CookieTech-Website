import React, { useState } from "react";
import "./header2.css";
import { HiOutlineMailOpen } from "react-icons/hi";
import { BsTelephoneInbound } from "react-icons/bs";
import { AiOutlineArrowDown } from "react-icons/ai";

function Header2() {
  const [showLanguages, setShowLanguages] = useState(false);

  function handleLanguageIconHover() {
    setShowLanguages(true);
  }

  function handleLanguageIconLeave() {
    setShowLanguages(false);
  }
  return (
    <div className="header2">
      <p className="paragraph">
        IT solutions that are designed to integrate multiple sectors
      </p>
      <div className="contact-info">
        <div className="phone">
          <BsTelephoneInbound />
          <span>
            Phone
            <strong> 500.369.2580</strong>
          </span>
        </div>
        <div className="email">
          <HiOutlineMailOpen />
          <span>info@zentec.com</span>
        </div>
        <div
          className="language"
          onMouseEnter={handleLanguageIconHover}
          onMouseLeave={handleLanguageIconLeave}
        >
          <span className="flag">
            <img
              className="flag1"
              src="https://cdn-icons-png.flaticon.com/128/555/555417.png"
              alt="English"
            />
          </span>
          <span style={{ fontFamily: "sans-serif", fontSize: "16px" }}>EN</span>
          <AiOutlineArrowDown
            size={15}
            style={{ marginLeft: "2px", fontWeight: "bold" }}
          />
          {showLanguages && (
            <div className="language-options">
              <div className="language-option red-hover sans-serif-font">
                <span>German</span>
              </div>
              <div className="language-option red-hover sans-serif-font">
                <span>Chinese</span>
              </div>
              <div className="language-option red-hover sans-serif-font">
                <span>Italian</span>
              </div>
              <div className="language-option red-hover sans-serif-font">
                <span>Russian</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header2;
