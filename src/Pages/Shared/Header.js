import React, { useState } from 'react';
import { NavHashLink } from 'react-router-hash-link';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from "../../Asset/Banner/logo.png"
import "../Styles/Header.css"
const Header = () => {
  const [activeLink, setActiveLink] = useState('/#home');

  const handleSetActive = (link) => {
    setActiveLink(link);
  };
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
            <NavHashLink
              className={`nav-anchor ${activeLink === '/#home' ? 'active-link' : ''}`}
              smooth="true"
              to="/#home"
              onClick={() => handleSetActive('/#home')}
            >
              Home
            </NavHashLink>
            <NavHashLink
              className={`nav-anchor ${activeLink === '/#about' ? 'active-link' : ''}`}
              smooth="true"
              to="/#about"
              onClick={() => handleSetActive('/#about')}
            >
              About
            </NavHashLink>
            <NavHashLink
              className={`nav-anchor ${activeLink === '/#skills' ? 'active-link' : ''}`}
              smooth="true"
              to="/#skills"
              onClick={() => handleSetActive('/#skills')}
            >
              Skills
            </NavHashLink>
            <NavHashLink
              className={`nav-anchor ${activeLink === '/#project' ? 'active-link' : ''}`}
              smooth="true"
              to="/#project"
              onClick={() => handleSetActive('/#project')}
            >
              Projects
            </NavHashLink>
            <NavHashLink
              className={`nav-anchor ${activeLink === '/#blogs' ? 'active-link' : ''}`}
              smooth="true"
              to="/#blogs"
              onClick={() => handleSetActive('/#blogs')}
            >
              Blogs
            </NavHashLink>
          </Nav>
          <div>
            <NavHashLink
              className="Contact-header-button"
              smooth="true"
              to="/#contact"
            >
              Contact
            </NavHashLink>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;