import React from "react";
import Tumblingsystemet from "../images/TumblingSystem.webp";

function Coaching() {
  return (
    <section id="Coaching" className="text-center container-fluid">
      <h1 className="m-3">Coaching</h1>
      <div className="row">

        <div className="col-md-6 d-flex justify-content-center align-items-center flex-column">
          <p className="px-5 py-3">
            Den sikreste måde at opnå mål og sikre kvalitet på er ved at have et
            system. Fra min tid i KSTP, har jeg et gennemtestet system, der har
            produceret flere verdensmestre i tumbling. Systemet bygger på
            konceptet ”complexity” der bruger varierende vanskelighed og
            parallelle udviklingsforløb til at sikre minimal skadesfrekvens samt
            maksimal udvikling. Det vil blive mit job i fremtiden at tilpasse
            dette system til den danske model. Jeg har allerede lavet de første
            tilpasninger i form af at lave et spil ud af strukturen, hvor børnene
            laver whips og fliks for at kæmpe mod monstre og stige i levels. Det
            har gjort de mange perfektionerende gentagelser mere fokuserede og
            interessante for eleverne.
          </p>
        </div>

        <div className="col-md-6 d-flex justify-content-center align-items-center flex-column">
          <h6 className="text-secondary">Et overblik over complexity-systemet</h6>
          <img className="img-fluid" src={Tumblingsystemet} alt="Tumblingsystemet"/>
        </div>

      </div>
    </section>
  )
}

export default Coaching;
