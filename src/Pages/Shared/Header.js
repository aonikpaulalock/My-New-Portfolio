import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import Logo from "../../Asset/Banner/logo.png"
import "../Styles/Header.css"
const Header = () => {
  const navigate = useNavigate()
  return (
    <Navbar expand="lg" className="nav-bg">
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
            <NavLink className="nav-anchor" to="/">Home</NavLink>
            <NavLink className="nav-anchor" to="/aboutpage">About</NavLink>
            <NavLink className="nav-anchor" to="/servicePages">Skills</NavLink>
            <NavLink className="nav-anchor" to="/contactPage">Projects</NavLink>
            <NavLink className="nav-anchor" to="/blogs">Blogs</NavLink>
          </Nav>
          <div>
            <button className="Contact-header-button">Contact</button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;