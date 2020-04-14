import React from "react";

function Navbar() {
  return (
    <nav className="navbar bg-white navbar-expand">
      <ul className="navbar-nav nav-fill w-100">
        <li className="nav-item">
          <a className="nav-link" href="/">BLOG<span class="sr-only">(current)</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">CV<span class="sr-only">(current)</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">PORTFOLIO<span class="sr-only">(current)</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">PB APP<span class="sr-only">(current)</span></a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;
