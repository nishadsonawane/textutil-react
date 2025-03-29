import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';  // ✅ Import Link

export default function Navbar(props) {
  return (
    <nav className={`navbar bg-${props.mode} border-bottom border-body text-${props.mode}`} data-bs-theme={props.mode}>
      <div className="container-fluid d-flex justify-content-between align-items-center">
        
        {/* Left section - Brand & Nav Links */}
        <div className="d-flex align-items-center">
          <a className="navbar-brand me-3" href="#">{props.title}</a>

          <ul className="navbar-nav d-flex flex-row">
            <li className="nav-item me-3"> 
              <a className="nav-link active" href="#">Home</a>
            </li>
            {/* <li className="nav-item me-4">
              <Link className="nav-link" to="/about">About</Link>
            </li> */}
          </ul>
        </div>

        {/* Right section - Theme Buttons & Dark Mode Toggle */}
        <div className="d-flex align-items-center">
          <button className="green" style={{ backgroundColor: "green", height: 30, width: 30, borderRadius: 150, border: "none", marginRight: "8px" }} onClick={() => props.changeTheme("success")}></button>
          <button className="yellow" style={{ backgroundColor: "yellow", height: 30, width: 30, borderRadius: 150, border: "none", marginRight: "8px" }} onClick={() => props.changeTheme("warning")}></button>
          <button className="red" style={{ backgroundColor: "red", height: 30, width: 30, borderRadius: 150, border: "none", marginRight: "8px" }} onClick={() => props.changeTheme("danger")}></button>
          <button className="gray" style={{ backgroundColor: "gray", height: 30, width: 30, borderRadius: 150, border: "none", marginRight: "8px" }} onClick={() => props.changeTheme("secondary")}></button>

          <div className="form-check form-switch">
            <input className="form-check-input" onClick={props.toggle} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">🌙☀️</label>
          </div>
        </div>
        
      </div>
    </nav>
  );
}

Navbar.propTypes = { title: PropTypes.string };
Navbar.defaultProps = {
  title: 'Set title here'
};
