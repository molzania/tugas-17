import React from 'react';
import {Button} from 'react-bootstrap';
import { Link }from 'react-router-dom';
import './Header.css';
import logo from './img/logo.png';

function Header() {
  return (
    <div className="Navbar">
      <div className="container-fluid">
    <i className="navbar-brand">
      <img src={logo} alt="" width="50" height="50" className="d-inline-block align-text-top"/>
    <span><Link to="/">Tugas 17</Link></span>
    </i>
  </div>
  <div className="buttons">
      <Button>Login</Button>
      <button>Sign Up</button>
      </div>
    </div>
  );
}

export default Header;