import React from "react";
import Entry from "./ResumeEntry";
import Entries from "../resume";

function Resume() {
  return (
    <section>
      <div class="card border-secondary text-center m-3 mt-md-5">

        <div class="card-header bg-success">
          <h3>RESUME HIGHLIGHTS</h3>
        </div>
        
        <div class="card-body row m-0">
          {Entries.map((entry, index) => (
            <Entry key={index} job={entry.job} desc={entry.desc} year={entry.year} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Resume;
