import React from 'react';
import { Link, NavLink }from 'react-router-dom';
import './Header.css';
import logo from './img/logo.png';

function Header() {
  return (
    <div className="Navbar">
      <div className="container-fluid">
    <i className="navbar-brand">
      <img src={logo} alt="" width="50" height="50" className="d-inline-block align-text-top" type="/jpg"/>
    <span><Link to="/">Tugas 17</Link></span>
    <Link to="/">Home</Link>
    </i>
  </div>
  <div className="buttons">
      <i><NavLink to="/login">Login</NavLink></i>
      <i><NavLink to="/Signup">Sign Up</NavLink></i>
      </div>
    </div>
  );
}

export default Header;