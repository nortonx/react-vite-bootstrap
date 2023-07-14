import React, { useState } from "react";
import { NavLink } from "react-router-dom";
const Header = () => {
  
  return(
    <div className="container header">
      <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">Brand</a>
        <ul className="nav nav-pills">
          <li className="nav-item">
            <NavLink to="/" className="nav-link" activeclassname="active">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" className="nav-link" activeclassname="active">About</NavLink>
          </li>
        </ul>
      </header>
    </div>
  )
}

export default Header;