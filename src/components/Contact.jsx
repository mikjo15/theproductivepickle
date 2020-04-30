import React from "react";
import Working from "../images/Working.jpg";

function Contact() {
  return (
    <section className="row m-0 bg-success">
      <div className="col-md-5 container-fill bg-success p-0">
        <img src={Working} alt="Handstand-with-computer" className="fill-div"></img>
      </div>
      <div className="col-md-7 container-fill text-center text-light pt-5 px-md-5 pb-4 align-items-center my-auto">
        <h1>Im the description</h1>
        <p className="m-md-5 my-5 mx-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Auctor neque vitae
          tempus quam. Tellus in metus vulputate eu. Ac tincidunt vitae semper quis
          lectus. Tortor posuere ac ut consequat. In hac habitasse platea dictumst
          quisque sagittis purus. Metus vulputate eu scelerisque felis. Sollicitudin ac orci
        </p>
        <form>
          <div class="form-group">
            <label for="name">First name</label>
            <input type="text" class="form-control" placeholder="First name" />
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
          </div>
          <button type="submit" class="btn btn-lg btn-block btn-outline-light">Submit</button>
        </form>
      </div>
    </section>
  )
}

export default Contact;
