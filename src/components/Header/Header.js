import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const common = {
    marginRight: 20,
    letterSpacing: ".5px",
  };

  return (
    <>
      <Navbar className="header">
        <Container>
          <div className="hamburgur">
            <i
              class="fa fa-bars inner"
              onClick={handleShow}
              aria-hidden="true"
              style={{ cursor: "pointer" }}
            ></i>

            <h2 className="mt-2 h2_right" >
              <NavLink to="/" style={{ textDecoration: "none", color: "cornflowerblue" }}>
                Maria Nayab
              </NavLink>
            </h2>
          </div>

          <Nav className="nav">
            <div className="mt-2">
              <NavLink
                to="/"
                className="text-decoration-none text-blue font"
                style={common}
              >
                Home
              </NavLink>

              <NavLink
                to="playlist"
                className="text-decoration-none text-blue font"
                style={common}
              >
                Projects
              </NavLink>

              <NavLink
                to="/certificates"
                className="text-decoration-none text-blue font"
                style={common}
              >
                Certificates
              </NavLink>
            </div>

            <div>
              <NavLink to="/contact" className="button text-decoration-none">
                <Button className="text-blue font" variant="info">
                  Contact
                </Button>
              </NavLink>
            </div>
          </Nav>
        </Container>

        {/* side baar */}

        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton></Offcanvas.Header>

          <Offcanvas.Body>
            <div className="side_nav" onClick={() => setShow(false)}>
              <NavLink
                to="/"
                className="text-decoration-none mb-4 text-blue font"
                style={common}
              >
                Home
              </NavLink>

              <NavLink
                to="/playlist"
                className="text-decoration-none mb-4 text-blue font"
                style={common}
              >
                Projects
              </NavLink>

              <NavLink
                to="/certificates"
                className="text-decoration-none mb-4 text-blue font"
                style={common}
              >
                Certificates
              </NavLink>

              <NavLink
                to="/contact"
                className="button text-decoration-none mb-4"
                style={common}>
                <Button
                  variant="info" className=" text-blue font"
                  style={{ letterSpacing: ".5px"}}>Contact
                </Button>
              </NavLink>
              
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </Navbar>
    </>
  );
};

export default Header;
