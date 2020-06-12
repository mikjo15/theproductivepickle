import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand">
      <ul className="navbar-nav nav-fill w-100">
        <li className="nav-item mobile-black">
          <Link to="/blog" className="nav-link">BLOG<span className="sr-only">(current)</span></Link>
        </li>
        <li className="nav-item mobile-black">
          <a className="nav-link" href="/">HOME</a>
        </li>
        <li className="nav-item mobile-black">
          <Link to="/CV" className="nav-link">CV</Link>
        </li>
        {
          // <li className="nav-item mobile-black">
          //   <Link to="/portfolio" className="nav-link">PORTFOLIO</Link>
          // </li>
        }
      </ul>
    </nav>
  )
}

export default Navbar;
