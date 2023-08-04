import { NavLink } from "react-router-dom";
import "../scss/Navbar.scss";
import logo from '../images/logo.png';
import {FaAlignJustify} from "react-icons/fa6";
import { useState } from "react";


function Navbar() {

  const nav = document.querySelector('.links');
  function hidenavbar()
  { 
    nav.style.display= "none";
  }
  function shownavbar()
  {
    nav.style.display = "flex";
  }


  return (
    <nav id="navbar">
      <div className="content-container">
        <div className="content">
          <NavLink to={'/'} >
            <div className="logo-title">
              <img src={logo} alt="logo" />
            </div>
          </NavLink>
          <ul className="links">
            <li>
              <button onClick={hidenavbar} class="nav-btn-close">X</button>
            </li>
            <li>
              <NavLink to={'/chat-with-CA'}>Chat with CA</NavLink>
            </li>
            <li>
              <a href="#">Chat with Lawyer</a>
            </li>
            <li>
              <a href="#">Book a Chat</a>
            </li>
            <li>
              <a href="#">Skillmail</a>
            </li>
            <li>
              <a href="#">
                <i class="bi bi-person-fill"></i>Login
              </a>
            </li>
          </ul>
          <div className="nav-btn" onClick={shownavbar}>
            <FaAlignJustify />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
