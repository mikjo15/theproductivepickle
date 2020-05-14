import React from "react";
import { tumbling, dmt, perf, tumAch, dmtAch } from "../gymnastics.js";

function Gymnastics() {
  return (
    <section>
      <div className="card border-secondary text-center m-3  mt-5">

        <div class="card-header bg-success">
          <h3>GYMNASTICS CAREER</h3>
        </div>

        <div className="card-body row m-0">

          {/* Teams */}
          <div class="col-md-6 p-4">

            <h6>Teams</h6>
            <hr />
            <p class="mb-2"><em>Tumbling</em></p>

            {tumbling.map(entry => (
              <div className="d-flex justify-content-between">
                <p class="m-0 text-left">{entry.team}</p>
                <p class="m-0 text-right">{entry.time}</p>
              </div>
            ))}

            <p class="my-2"><em>DMT</em></p>
            {dmt.map(entry => (
              <div className="d-flex justify-content-between">
                <p class="m-0 text-left">{entry.team}</p>
                <p class="m-0 text-right">{entry.time}</p>
              </div>
            ))}

            <p class="my-2"><em>Performance</em></p>
            {perf.map(entry => (
              <div className="d-flex justify-content-between">
                <p class="m-0 text-left">{entry.team}</p>
                <p class="m-0 text-right">{entry.time}</p>
              </div>
            ))}

          </div>

          {/* Achievements */}
          <div class="col-md-6 p-4">

            <h6>Achievements</h6>
            <hr />

            <p class="mb-2"><em>Tumbling</em></p>
            {tumAch.map(entry => (
              <div class="d-flex justify-content-between">
                <p class="m-0 ">{entry.year} - {entry.comp}</p>
                <p class="m-0 ">{entry.place}</p>
              </div>
            ))}

            <p class="mb-2"><em>DMT</em></p>
            {dmtAch.map(entry => (
              <div class="d-flex justify-content-between">
                <p class="m-0 ">{entry.year} - {entry.comp}</p>
                <p class="m-0 ">{entry.place} place</p>
              </div>
            ))}

            </div>

        </div>
      </div>
    </section>
  )
}

export default Gymnastics;
