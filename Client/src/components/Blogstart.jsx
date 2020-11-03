import React from "react";
import Copywriting from "../images/Copywriting.webp"

function Blogstart() {
    return (
      <section>
        <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 text-center">
          <h1 className="display-4">New to the blog? Start here</h1>
        </div>

        <div className="container">
          <div className="card-deck mb-3 text-center">

            <div className="card mb-4 box-shadow rounded-25 bg-success text-light border-light">
              <img className="card-img-top rounded-25" src={Copywriting} alt="Copywriting"/>
              <div className="card-body">
                <h1 className="card-title">Blog Title</h1>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </div>

            <div className="card mb-4 box-shadow rounded-25 bg-success text-light border-light">
              <img className="card-img-top rounded-25" src={Copywriting} alt="Copywriting"/>
              <div className="card-body">
                <h1 className="card-title">Blog Title</h1>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </div>

            <div className="card mb-4 box-shadow rounded-25 bg-success text-light border-light">
              <img className="card-img-top rounded-25" src={Copywriting} alt="Copywriting"/>
              <div className="card-body">
                <h1 className="card-title">Blog Title</h1>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    )
}

export default Blogstart;
