import React from "react";
import useWindowSize from '../use-window-size';
import Navbar from "./Navbar";

function Headercv() {
  const windowSize = useWindowSize();

  return (
    <section className="bg d-flex flex-column">
      <div className="layer d-flex flex-column">
        {windowSize.width > 768 && <Navbar />}
        <div className="header-textbox d-flex flex-column align-items-center">
          <h1 className="text-light display-4">CURRICULUM VITAE</h1>
        </div>
      </div>
    </section>
  )
}

export default Headercv;
