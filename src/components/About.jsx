import React from "react";
import HandstandImg from "../images/Handstand.jpg"

function About() {
 return (
   <section className="row m-0">
     <div className="col-md-8 container-fill bg-success text-center text-light pt-5 px-md-5 pb-4">
       <h1>Im the description</h1>
       <p className="m-md-5 my-5 mx-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Auctor neque vitae tempus quam. Tellus in metus vulputate eu. Ac tincidunt vitae semper quis lectus. Tortor posuere ac ut consequat. In hac habitasse platea dictumst quisque sagittis purus. Metus vulputate eu scelerisque felis. Sollicitudin ac orci</p>
       <p className="m-md-5 my-5 mx-4">Duis at tellus at urna. Ipsum dolor sit amet consectetur adipiscing elit. Elementum integer enim neque volutpat ac tincidunt vitae semper quis. Dolor purus non enim praesent elementum. Malesuada proin libero nunc consequat interdum</p>
       <p className="m-md-5 my-5 mx-4">Adipiscing elit duis tristique sollicitudin nibh sit. Tempus urna et pharetra pharetra massa massa ultricies mi quis. Consequat interdum varius sit amet mattis. Sed risus ultricies tristique nulla aliquet enim. Suspendisse potenti nullam ac tortor vitae purus. Bibendum enim facilisis gravida neque convallis a cras semper.</p>
       <button type="button" className="btn btn-lg btn-block btn-outline-light">BOOST YOUR BRAND</button>
     </div>
     <div className="col-md-4 container-fill bg-success p-0">
       <img src={HandstandImg} alt="Handstand-with-computer" className="fill-div"></img>
     </div>
   </section>
)
}

export default About;
