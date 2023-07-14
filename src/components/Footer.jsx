import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {

  return(
    <div className="container footer">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">Logo</a>
          <span className="mb-3 mb-md-0 text-muted">{new Date().getFullYear()} &copy;</span>
        </div>
        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3">
          <Link to="/" className="text-muted">Home</Link>
          </li>
          <li className="ms-3">
            <Link to="/about" className="text-muted">About</Link>
          </li>
        </ul>
      </footer>
    </div>
  )
}

export default Footer;