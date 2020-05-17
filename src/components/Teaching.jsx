import React from "react";
import TeachingSystem from "../images/Undervisningssystem.jpg";

function WebDev() {
  return (
    <section id="Teaching" className="bg-success text-center container-fluid text-light p-3">
      <h1 className="">Teaching</h1>

      <div className="row mt-5">

        <div className="col-md-6 d-flex justify-content-center align-items-center flex-column">
          <p className="px-5 py-3">
            Den vigtigste pointe fra mit lærerkursus har været at man skal bruge
            varierende undervisningsresurser. Jeg vil som lærer forsøge at variere
            undervisningen, så alle eleverne kan finde og bruge deres styrker.
            Det kan for eksempel være at der i løbet af undervisningen først skal arbejdes alene
            på nogle opgaver, hvorefter man går sammen i en gruppe for at evaluere
            eller løse lignende opgaver.
            Da teenagere ikke har den største kapacitet for koncentration, er jeg
            derfor fan af korte fokuserede sessions, der er spredt ud i små intervaller,
            som det beskrives i Barbara Oakleys bog: A mind for numbers. Ved at
            gøre dette, vil eleverne være mere koncentrerede når de skal og man
            får brugt konceptet spaced repetition, så eleverne husker og forstår
            materialet bedre. Ved at forsøge at inddrage dem i hvilke emner der
            kan gennemgås, får eleverne også en følelse af autonomi og ansvar, og
            er derved mere engagerede i undervisningen.
          </p>
        </div>

        <div className="col-md-6 d-flex justify-content-center align-items-center flex-column">
          <h6 className="text-light">Teaching System</h6>
          <img className="img-fluid" src={TeachingSystem} alt="Tumblingsystemet"/>
        </div>

      </div>
    </section>
  )
}

export default WebDev;
