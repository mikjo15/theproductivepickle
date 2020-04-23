import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand">
      <ul className="navbar-nav nav-fill w-100">
        <li className="nav-item">
          <a className="nav-link" href="/">BLOG<span class="sr-only">(current)</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">CV</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">PORTFOLIO</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">PB APP</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;
