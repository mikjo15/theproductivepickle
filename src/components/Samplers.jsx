import React from "react";
import Iframe from "react-iframe";
import Copywriting from "../images/Copywriting.jpg";
import Webdev from "../images/WebDev.jpg";
import Fullthing from "../images/FullThing.jpg";

function Samplers() {
  return (
    <section>
      <div className="card border-secondary text-center m-3 mt-5">

        <div className="card-header bg-success">
          <h3>LATEST SAMPLER</h3>
        </div>

        <div className="card-body d-flex justify-content-center">
          <Iframe
            width="854px"
            height="480px"
            src="https://www.youtube.com/embed/ekEuBeCzn44"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </div>
      </div>
    </section>
  )
}

export default Samplers;
