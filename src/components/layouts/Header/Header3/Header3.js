import React, { useState, useEffect } from "react";
import "./header3.css";

import { NavLink } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

function Header3() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownOpen = () => {
    setIsDropdownOpen(true);
  };

  const handleDropdownClose = () => {
    setIsDropdownOpen(false);
  };
  return (
    <>
      <div className="container1">
        <div className="column pic">
          <div className="logo">
            <img
              className="logo-image"
              src="https://static.wixstatic.com/media/bfe296_4f04996d212f45bc9fcc4ca638a2b6c0~mv2_d_1920_1920_s_2.jpg/v1/fill/w_1920,h_1920,al_c/bfe296_4f04996d212f45bc9fcc4ca638a2b6c0~mv2_d_1920_1920_s_2.jpg"
              alt="logo"
            />
          </div>
        </div>
        <div className="column navbar">
          <div className="nav">
            <Navbar expand="lg" className="bg-body-tertiary">
              <Container>
                <div className="nav1">
                  <Nav className="me-auto">
                    <Nav.Link className="home-links">Home</Nav.Link>
                    <Nav.Link>About Us</Nav.Link>
                    <Nav.Link>IT Solutions</Nav.Link>
                    <Nav.Link>Case Studies</Nav.Link>
                    <Nav.Link>News</Nav.Link>
                    <Nav.Link>Contact</Nav.Link>
                    <Nav.Link className="faSearch">
                      <FaSearch />
                    </Nav.Link>
                  </Nav>
                </div>
              </Container>
            </Navbar>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header3;
