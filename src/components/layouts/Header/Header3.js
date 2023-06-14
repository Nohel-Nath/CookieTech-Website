import React, { useState } from "react";
import "./header3.css";

import { NavLink } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

function Header3() {
  const [isHomeDropdownOpen, setIsHomeDropdownOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isItDropdownOpen, setIsItDropdownOpen] = useState(false);
  const [isCaseStudiesDropdownOpen, setIsCaseStudiesDropdownOpen] =
    useState(false);
  const [newsDropdownOpen, setNewsStudiesDropdownOpen] = useState(false);

  const handleHomeDropdownOpen = () => {
    setIsHomeDropdownOpen(true);
  };

  const handleHomeDropdownClose = () => {
    setIsHomeDropdownOpen(false);
  };

  const handleAboutDropdownOpen = () => {
    setIsAboutDropdownOpen(true);
  };

  const handleAboutDropdownClose = () => {
    setIsAboutDropdownOpen(false);
  };

  const handleItDropdownOpen = () => {
    setIsItDropdownOpen(true);
  };

  const handleItDropdownClose = () => {
    setIsItDropdownOpen(false);
  };

  const handleCaseStudiesDropdownOpen = () => {
    setIsCaseStudiesDropdownOpen(true);
  };

  const handleCaseStudiesDropdownClose = () => {
    setIsCaseStudiesDropdownOpen(false);
  };

  const handleNewsDropdownOpen = () => {
    setNewsStudiesDropdownOpen(true);
  };

  const handleNewsDropdownClose = () => {
    setNewsStudiesDropdownOpen(false);
  };

  return (
    <div className="header3">
      <div className="header-content">
        <img
          className="logo-image"
          src="https://static.wixstatic.com/media/bfe296_4f04996d212f45bc9fcc4ca638a2b6c0~mv2_d_1920_1920_s_2.jpg/v1/fill/w_1920,h_1920,al_c/bfe296_4f04996d212f45bc9fcc4ca638a2b6c0~mv2_d_1920_1920_s_2.jpg"
          alt="logo"
        />
        <nav className="navbar">
          <ul className="nav-links">
            <li className="nav-item">
              <div
                className="dropdown"
                onMouseEnter={handleHomeDropdownOpen}
                onMouseLeave={handleHomeDropdownClose}
              >
                <NavLink to="/" exact activeClassName="active">
                  Home
                  {isHomeDropdownOpen && (
                    <div className="dropdown-menu">
                      <NavLink to="/variant1" className="dropdown-item">
                        Home Variant 1
                      </NavLink>
                      <NavLink to="/variant2" className="dropdown-item">
                        Home Variant 2
                      </NavLink>
                      <NavLink
                        to="/header-styles"
                        className="dropdown-item last-dropdown-item"
                      >
                        Header Styles
                      </NavLink>
                    </div>
                  )}
                </NavLink>
              </div>
            </li>
            <li className="nav-item">
              <div
                className="dropdown"
                onMouseEnter={handleAboutDropdownOpen}
                onMouseLeave={handleAboutDropdownClose}
              >
                <NavLink to="/about" activeClassName="active">
                  About Us
                  {isAboutDropdownOpen && (
                    <div className="dropdown-menu">
                      <NavLink to="/aboutUs" className="dropdown-item">
                        About Us
                      </NavLink>
                      <NavLink to="/case-studies" className="dropdown-item">
                        Case Studies
                      </NavLink>
                      <NavLink
                        to="/faqs"
                        className="dropdown-item last-dropdown-item"
                      >
                        FAQ's
                      </NavLink>
                    </div>
                  )}
                </NavLink>
              </div>
            </li>
            <li className="nav-item">
              <div
                className="dropdown"
                onMouseEnter={handleItDropdownOpen}
                onMouseLeave={handleItDropdownClose}
              >
                <NavLink to="/solution" activeClassName="active">
                  IT Solution
                  {isItDropdownOpen && (
                    <div className="dropdown-menu">
                      <NavLink to="/services" className="dropdown-item">
                        All Services
                      </NavLink>
                      <NavLink to="/infrastructure" className="dropdown-item">
                        Data Infrastructure
                      </NavLink>
                      <NavLink to="/integration" className="dropdown-item">
                        IT Cloud Integration
                      </NavLink>
                      <NavLink to="/projects" className="dropdown-item">
                        IT Startup Projects
                      </NavLink>
                      <NavLink to="/engineering" className="dropdown-item">
                        Product Engineering
                      </NavLink>
                      <NavLink
                        to="/security"
                        className="dropdown-item last-dropdown-item"
                      >
                        Business Security
                      </NavLink>
                    </div>
                  )}
                </NavLink>
              </div>
            </li>
            <li className="nav-item">
              <div
                className="dropdown"
                onMouseEnter={handleCaseStudiesDropdownOpen}
                onMouseLeave={handleCaseStudiesDropdownClose}
              >
                <NavLink to="/case-studies" activeClassName="active">
                  Case Studies
                  {isCaseStudiesDropdownOpen && (
                    <div className="dropdown-menu">
                      <NavLink to="/case-studies" className="dropdown-item">
                        Case Studies
                      </NavLink>
                      <NavLink
                        to="/project-details"
                        className="dropdown-item last-dropdown-item"
                      >
                        Project Details
                      </NavLink>
                    </div>
                  )}
                </NavLink>
              </div>
            </li>
            <li className="nav-item">
              <div
                className="dropdown"
                onMouseEnter={handleNewsDropdownOpen}
                onMouseLeave={handleNewsDropdownClose}
              >
                <NavLink to="/news" activeClassName="active">
                  News
                  {newsDropdownOpen && (
                    <div className="dropdown-menu">
                      <NavLink to="/gridStyle" className="dropdown-item">
                        Blog Grid Style
                      </NavLink>
                      <NavLink to="/fullWidth" className="dropdown-item">
                        Blog Full Width
                      </NavLink>
                      <NavLink
                        to="/postDetails"
                        className="dropdown-item last-dropdown-item"
                      >
                        Blog Post Details
                      </NavLink>
                    </div>
                  )}
                </NavLink>
              </div>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" activeClassName="active">
                Contact
              </NavLink>
            </li>
          </ul>
          <div className="search-bar">
            <button type="submit">
              <FaSearch />
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header3;
