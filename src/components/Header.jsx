import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return(
    <div className="container header">
      <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">Brand</a>
        <ul className="nav nav-pills">
          <li className="nav-item">
            <Link to="/" className="nav-link active">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">About</Link>
          </li>
        </ul>
      </header>
    </div>
  )
}

export default Header;