import React from "react";
import HandstandImg from "../images/Handstand.jpg"

function About() {
 return (
   <section className="row m-0">
     <div className="col-md-8 container-fill bg-success text-center text-light pt-5 px-md-5 pb-4">
       <div>
         <h3 className="m-0">Who am I?</h3>
         <p>
           My name is Mikkel. I'm a gymnastics teacher at Ågård Efterskole, with a
           bachelor in engineering - health and welfare technology. I really like to
           learn new skills and I am currently on the way to mastering copywriting
           and web development.
         </p>
       </div>

       <div className="m-md-4 my-5 mx-4">
         <h3 className="m-0">Why this site?</h3>
         <p className="m-0">There are two reasons for making this site</p>
         <ol className="mx-5">
           <li>Practising and teaching is the most efficient way of mastering a skill, while it can help others at the same time.</li>
           <li>I get a platform to show you, how I can help you the most.</li>
         </ol>
       </div>

       <div className="m-md-4 my-5 mx-4">
         <h3 className="m-0">So what does this mean to you? </h3>
         <p>
           Well, if you are a gymnast or coach, it means that you can head over
           to my blog and find systems and ideas for your classes. I got 10 years
           of experience as a tumbler and have had some of the best coaches in the world.
         </p>
         <p>
           If you need a website or copy, it means you should contact me right
           now to get a very promising freelancer to boost your sales.
         </p>
         <p>
           So contact me here before your competitor
         </p>
       </div>

       <button type="button" className="btn btn-lg btn-block btn-outline-light">BOOST YOUR BRAND</button>
     </div>
     <div className="col-md-4 container-fill bg-success p-0">
       <img src={HandstandImg} alt="Handstand-with-computer" className="fill-div"></img>
     </div>
   </section>
)
}

export default About;
