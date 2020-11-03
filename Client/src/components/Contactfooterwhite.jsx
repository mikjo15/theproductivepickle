import React from "react";

function Contactfooterwhite() {
  return (
    <section className="text-center bg-light p-4">
      <h3>CONTACT ME</h3>
      <h6><em>If you're looking for a passionate teacher or a new web page, hit me up!</em></h6>

      <hr />

      <div className="mt-3">
        <a className="contact-btn" href="mailto:theproductivepickle@gmail.com?Subject=Contact">
          <i className="fab fa-google"></i>
          theproductivepickle@gmail.com
        </a>
        <a className="contact-btn" href="https://www.linkedin.com/in/mikkel-skræddergaard-32537a113">
          <i className="fab fa-linkedin-in"></i>
          Mikkel Skræddergaard
        </a>
        <a className="contact-btn" href="https://www.instagram.com/mskraeddergaard/">
          <i className="fab fa-instagram"></i>
          @mskraeddergaard
        </a>
      </div>
    </section>
  )
}

export default Contactfooterwhite;
