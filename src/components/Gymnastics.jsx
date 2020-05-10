import React from "react";

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

            <div class="d-flex justify-content-between">
              <p class="m-0 text-left"></p>
              <p class="m-0 text-right"></p>
            </div>

            <p class="my-2"><em>DMT</em></p>
            <div class="d-flex justify-content-between">
              <p class="m-0"></p>
              <p class="m-0"></p>
            </div>

            <p class="my-2"><em>Performance</em></p>
            <div class="d-flex justify-content-between">
              <p class="m-0"></p>
              <p class="m-0"></p>
            </div>

          </div>

          {/* Achievements */}
          <div class="col-md-6 p-4">

            <h6>Achievements</h6>
            <hr />

            <p class="mb-2"><em>Tumbling</em></p>
            <div class="d-flex justify-content-between">
              <p class="m-0 "></p>
              <p class="m-0 "></p>
            </div>

            <p class="mb-2"><em>DMT</em></p>
            <div class="d-flex justify-content-between">
              <p class="m-0 "></p>
              <p class="m-0 "></p>
            </div>

            </div>

        </div>
      </div>
    </section>
  )
}

export default Gymnastics;
