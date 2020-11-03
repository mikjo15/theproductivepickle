import React from "react";
import WebExample from "../images/websiteex2.webp";
import WebExample2 from "../images/websiteex.webp";

function WebDev() {
  return (
    <section id="WebDev" className="bg-success text-center container-fluid text-light p-3">
      <h1 className="">Web Developement</h1>

      <div className="row mt-5">

      <div className="col-md-6 d-flex justify-content-center align-items-center flex-column">
        <h6 className="text-light">IanUsherAutomotive.com</h6>
        <img className="img-fluid" src={WebExample} alt="Tumblingsystemet"/>
      </div>

        <div className="col-md-6 d-flex justify-content-center align-items-center flex-column">
          <p className="px-5 py-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
        </div>

      </div>

      <div className="row mt-5">

        <div className="col-md-6 d-flex justify-content-center align-items-center flex-column">
          <p className="px-5 py-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
        </div>

        <div className="col-md-6 d-flex justify-content-center align-items-center flex-column">
          <h6 className="text-light">TheProductivePickle.com version 1</h6>
          <img className="img-fluid" src={WebExample2} alt="Tumblingsystemet"/>
        </div>

      </div>
    </section>
  )
}

export default WebDev;
