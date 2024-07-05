import React, { useState } from 'react';
import { NavHashLink } from 'react-router-hash-link';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from "../../Asset/Banner/logo.png"
import "../Styles/Header.css"
import { logout, selectCurrentUser } from '../../redux/features/auth/login/loginSlice';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../redux/hooks';
import { toast } from 'react-toastify';
const Header = () => {
  const user = useSelector(selectCurrentUser);
  console.log(user)
  const dispatch = useAppDispatch();
  const [activeLink, setActiveLink] = useState('/#home');
  const handleSetActive = (link) => {
    setActiveLink(link);
  };
  const handleLogout = () => {
    dispatch(logout());
    toast.success("Logged out");
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
            {/* <NavHashLink
              className={`nav-anchor ${activeLink === '/#about' ? 'active-link' : ''}`}
              smooth="true"
              to="/#about"
              onClick={() => handleSetActive('/#about')}
            >
              About
            </NavHashLink> */}
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
            {
              user?.role === "admin" && <NavHashLink
                className={`nav-anchor ${activeLink === '/dashboard' ? 'active-link' : ''}`}
                smooth="true"
                to="/dashboard"
                onClick={() => handleSetActive('/dashboard')}
              >
                Dashboard
              </NavHashLink>
            }
          </Nav>
          {
            !user ?
              <div>
                <Link
                  className="Contact-header-button me-2"
                  to="/login"
                >
                  Login
                </Link>
                <Link
                  className="Contact-header-button"
                  to="/register"
                >
                  Signup
                </Link>
              </div> :
              <button
                onClick={handleLogout}
                className="Contact-header-button"
              >
                Logout
              </button>
          }
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;