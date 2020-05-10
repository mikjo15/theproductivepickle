import React from "react";

function Jobs() {
  return (
    <section>
      <div className="card border-secondary text-center m-3 mt-5">

        <div className="card-header bg-success">
          <h3>JOB EXPERIENCE</h3>
        </div>

        <div className="card-body m-0">
          <div className="row">

            <div className="col-md-6 p-4">
              <h4>App and web developer</h4>
              <div className="d-flex justify-content-between">
                <h6>The productive pickle</h6>
                <h6>October 2018 - present</h6>
              </div>
              <p className="m-0">
                I’ve made my own hobby company, called the productive pickle. The
                goal with it is to have a platform for developing my skills in
                programming both apps and web pages. So far the products have been an
                Android app, TrainingJournal, and two versions of this website.
              </p>
            </div>

            <div className="col-md-6 p-4">
              <h4>Coach at camp Ollerup</h4>
              <div className="d-flex justify-content-between">
                <h6>Gymnastikhøjskolen i Ollerup</h6>
                <h6>August 2016 - present</h6>
              </div>
              <p className="m-0">
                Two consecutive weeks of teamgym camp, with a total attendance of
                around 300 kids from Scandinavia, Iceland, Britain and Germany. You
                have to work together with your team of instructors, be creative in
                your coaching and manage skill levels from beginners to national team level.
              </p>
            </div>

            <div className="col-md-6 p-4">
              <h4>Junior teamgym coach</h4>
              <div className="d-flex justify-content-between">
                <h6>Bellinge gymnasterne</h6>
                <h6>August 2016 - June 2018</h6>
              </div>
              <p className="m-0">
                As a junior girl coach, I had to do season planning with a team of
                four coaches and weekly planning myself, as well as plannign physical
                training programmes and screenings. It’s be creative in my daily
                planning, to keep the kids engaged.
              </p>
            </div>

            <div className="col-md-6 p-4">
              <h4>Substitue tumbling teacher</h4>
              <div className="d-flex justify-content-between">
                <h6>Gymnastikhøjskolen i Ollerup</h6>
                <h6>March 2016 - June 2018</h6>
              </div>
              <p className="m-0">
                As a substitute coach in teamgym and powertumbling, I had to be
                prepared to plan trainings with short notice and work with student
                aged 18 and up, from all around the world in all levels.
              </p>
            </div>

          </div>

          <div className="col-md-6 p-4 mx-auto">
            <h4>Coach at Splitt turn helg</h4>
            <div className="d-flex justify-content-between">
              <h6>Norges Gymnastik- og Turnforbund</h6>
              <h6>March 2018</h6>
            </div>
            <p className="m-0">
              A four-day camp in Norway for kids in the age 12 – 22 and their
              instructors. I was both a teaching on the instructor’s course and on
              the teamgym course. This meant communicating in Norwegian and
              coaching basic spotting.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Jobs;
