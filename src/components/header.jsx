import React from "react";
import useWindowSize from '../use-window-size';
import Navbar from "./navbar";

function Header() {
  const windowSize = useWindowSize();

  return (
    <section className="bg d-flex flex-column">
      <div className="layer d-flex flex-column">
        {windowSize.width > 768 && <Navbar />}
        <div className="header-textbox d-flex flex-column align-items-center">
          <h1 className="text-light header-txt1">LOOKING FOR A</h1>
          <nav className="navbar navbar-expand header-nav">
            <ul className="navbar-nav">
              <li className="nav-item"><a className="nav-link" href="/">TUMBLING COACH</a></li>
              <li className="nav-item"><a className="nav-link" href="/">WEB DEVELOPER</a></li>
              <li className="nav-item"><a className="nav-link" href="/">COPYWRITER</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  )
}

export default Header;
