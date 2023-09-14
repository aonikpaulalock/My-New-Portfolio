import React from 'react';
import { NavHashLink } from 'react-router-hash-link';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from "../../Asset/Banner/logo.png"
import "../Styles/Header.css"
const Header = () => {
  return (
    <Navbar expand="md" className="nav-bg">
      <Container>
        <Navbar.Brand as={Link} to="/" className="img-fluid">
          <img src={Logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" className="bg-white" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavHashLink className="nav-anchor" smooth="true" to="/#home">Home</NavHashLink>
            <NavHashLink className="nav-anchor" smooth="true" to="/#about">About</NavHashLink>
            <NavHashLink className="nav-anchor" smooth="true" to="/#skills">Skills</NavHashLink>
            <NavHashLink className="nav-anchor" smooth="true" to="/#project">Projects</NavHashLink>
            <NavHashLink className="nav-anchor" smooth="true" to="/#blogs">Blogs</NavHashLink>
          </Nav>
          <div>
            <NavHashLink className="Contact-header-button"  smooth="true" to="/#contact">Contact</NavHashLink>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;