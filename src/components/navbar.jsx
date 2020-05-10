import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand">
      <ul className="navbar-nav nav-fill w-100">
        <li className="nav-item mobile-black">
          <Link to="/blog" className="nav-link">BLOG<span class="sr-only">(current)</span></Link>
        </li>
        <li className="nav-item mobile-black">
          <a className="nav-link" href="/">CV</a>
        </li>
        <li className="nav-item mobile-black">
          <a className="nav-link" href="/">PORTFOLIO</a>
        </li>
        <li className="nav-item mobile-black">
          <a className="nav-link" href="/">PB APP</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;
