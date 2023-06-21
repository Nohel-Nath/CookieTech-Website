import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./style.css";
import { Card } from "react-bootstrap";

function Header3() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          <img src="http://t.commonsupport.xyz/zentec/images/logo.png" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" style={{ marginLeft: "400px" }}>
          <Nav className="me-auto">
            <div className="dropdown">
              <div
                aria-expanded="false"
                className="hover-underline-animation"
                style={{ fontSize: "20px", color: "black" }}
              >
                Home
              </div>
              <ul
                className="dropdown-menu"
                style={{ top: "55px" }}
                aria-labelledby="dropdownMenuButton"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header3;
