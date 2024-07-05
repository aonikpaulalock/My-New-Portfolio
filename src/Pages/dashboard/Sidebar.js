import React from 'react';
import { Link } from 'react-router-dom';
import { FaBriefcase, FaProjectDiagram, FaBlog, FaCogs, FaBars } from 'react-icons/fa';
import "../Styles/dashboard/DashboardLayout.css"
import Logo from "../../Asset/Banner/logo.png"
import { Navbar } from 'react-bootstrap';
const Sidebar = ({ collapsed, setCollapsed }) => {
  return (
    <div className={`sidebar bg-dark text-light ${collapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-header d-flex justify-content-between align-items-center p-3">
        <h2 className={`text-center mb-0 ${collapsed ? 'd-none' : ''}`}>
        <Navbar.Brand as={Link} to="/" className="img-fluid">
          <img src={Logo} alt="" />
        </Navbar.Brand>
        </h2>
        <button className="btn btn-dark hoverButton" onClick={() => setCollapsed(!collapsed)}>
          <FaBars className="icon-md"/>
        </button>
      </div>
      <ul className="list-unstyled mt-3">
        <li className="py-2 px-3">
          <Link to="/dashboard/experience" className="text-light d-block h4 font-medium">
            <FaBriefcase className="icon-md me-4" /> <span className={collapsed ? 'd-none' : ''}>Experience</span>
          </Link>
        </li>
        <li className="py-2 px-3">
          <Link to="/dashboard/projects" className="text-light d-block h4 font-medium">
            <FaProjectDiagram className="icon-md me-4" /> <span className={collapsed ? 'd-none' : ''}>Projects</span>
          </Link>
        </li>
        <li className="py-2 px-3">
          <Link to="/dashboard/blogs" className="text-light d-block h4 font-medium">
            <FaBlog className="icon-md me-4" /> <span className={collapsed ? 'd-none' : ''}>Blogs</span>
          </Link>
        </li>
        <li className="py-2 px-3">
          <Link to="/dashboard/skills" className="text-light d-block h4 font-medium">
            <FaCogs className="icon-md me-4" /> <span className={collapsed ? 'd-none' : ''}>Skills</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
