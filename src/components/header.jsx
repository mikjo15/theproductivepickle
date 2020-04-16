import React from "react";
import useWindowSize from '../use-window-size';
import Navbar from "./navbar";

function Header() {
  const windowSize = useWindowSize();

  return (
    <section className="bg d-flex flex-column">
      {windowSize.width > 768 && <Navbar />}
      <div className="header-textbox d-flex align-items-lg-center">
        <h1 className="text-light header-txt">
          TUMBLING. <br/>
          TEACHING. <br/>
          LEARNING.
        </h1>
      </div>
    </section>
  )
}

export default Header;
