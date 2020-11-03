import React from "react";
import Working from "../images/Working.webp";
import Subscribeform from "./Subscribeform";

function Contact() {
  return (
    <section id="contact" className="row m-0 bg-success">
      <div className="col-md-5 container-fill bg-success p-0">
        <img src={Working} alt="Handstand-with-computer" className="fill-div"></img>
      </div>
      <div className="col-md-7 container-fill text-center text-light pt-5 px-md-5 pb-4 align-items-center my-auto">
        <h1>Get inspired every month</h1>
        <p className="m-md-5 my-5 mx-4">
          About once or twice a month I will write a new blog post. It can be
          about pretty much anything, but it will mainly be gymnastics, with a
          little bit of productivity and side projects in between. Subscribe to
          get noticed when a new blog post is out, and follow my blog as it gets
          better and better.
        </p>
        <Subscribeform />
      </div>
    </section>
  )
}

export default Contact;
