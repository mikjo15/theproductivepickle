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
         <p className="mb-3">There are two reasons for making this site:</p>
           <p className="mx-5">1. Practising and teaching is the most efficient way of mastering a skill, while it can help others at the same time.</p>
           <p className="mx-5">2. I get a platform to show you, how I can help you the most.</p>
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
           So <a className="text-light" href="#pricing"><em><strong>let me help you</strong></em></a> boost your sales before your competitor,
           or <a className="text-light" href="#contact"><em><strong>let me inspire you</strong></em></a> every month.
         </p>
       </div>
     </div>
     <div className="col-md-4 container-fill bg-success p-0">
       <img src={HandstandImg} alt="Handstand-with-computer" className="fill-div"></img>
     </div>
   </section>
)
}

export default About;
