import React, { useEffect, useState } from "react";
import "./header.css";
import logo1 from "../../../images/logo.png";
import Button from "@mui/material/Button";

function Header() {
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setIsHeaderFixed(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`container ${isHeaderFixed ? "header-fixed" : ""}`}>
      <div className="Header__topbar space__between">
        <img className="logo" src={logo1} alt="logo" />
        <div className="button">
          <Button
            className="bookButton"
            style={{ color: "white", fontSize: "1rem" }}
          >
            Buy Now
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Header;
