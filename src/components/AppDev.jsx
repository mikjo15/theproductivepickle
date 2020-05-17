import React from "react";
import AppEx from "../images/appex2.webp";

function AppDev() {
  return (
    <section id="AppDev" className="text-center container-fluid">
      <h1 className="m-3">AppDev</h1>
      <div className="row p-4">

        <div className="col-md-6 d-flex justify-content-center align-items-center flex-column">
          <h6 className="text-secondary">Et overblik over complexity-systemet</h6>
          <img className="img-fluid w-25" src={AppEx} alt="Tumblingsystemet"/>
        </div>

        <div className="col-md-6 d-flex justify-content-center align-items-center flex-column">
          <p className="px-5 py-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
            in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
        </div>

      </div>
    </section>
  )
}

export default AppDev;
