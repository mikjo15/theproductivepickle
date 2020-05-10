import React from "react";
import useWindowSize from '../use-window-size';
import Navbar from "./Navbar";

function Headerblog() {
  const windowSize = useWindowSize();

    return (
      <section className="bg-blog d-flex flex-column">
        <div className="layer d-flex flex-column">
          {windowSize.width > 768 && <Navbar />}
          <div className="header-textbox-blog d-flex flex-column align-items-center p-2">
            <h1 className="text-light header-txt1">Don't miss out on valuable insight</h1>
            <h3 className="text-light header-txt2">Get the newsletter</h3>
            <form className="text-center">
              <div className="form-group">
                <input type="email" className="form-control" placeholder="Enter email"/>
              </div>
              <button className="btn btn-outline-light">Subscribe</button>
            </form>
          </div>
        </div>
      </section>
    )
}

export default Headerblog;
