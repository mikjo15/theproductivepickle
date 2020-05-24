import React from "react";
import Appex1 from "../images/appex2.webp";
import Appex2 from "../images/appex3.webp";
import Webex1 from "../images/websiteex.jpg";
import Webex2 from "../images/websiteex2.JPG";

function Programming() {
  return (
      <section>
        <div className="card border-secondary text-center m-3 mt-5">

          <div className="card-header bg-success">
            <h3>PROGRAMMING</h3>
          </div>

          <div className="card-body text-center row">
            <div className="my-4 col-md-6">
              <h5>TrainingJournal</h5>
              <p className="p-2">
                The TrainingJournal is a quick and easy way to evaluate your
                trainings. It takes in seven parameters that can influence your
                training, and lets you rate the quality of your training right after
                in just a few clicks. It Is made in Android Studio with Java.
              </p>
              <img className="w-40 p-2" src={Appex1} alt="app-example-1"/>
              <img className="w-40 p-2" src={Appex2} alt="app-example-2"/>
            </div>

            <div className="py-4 col-md-6">
              <h5>www.TheProductivePickle.com</h5>
              <p>
                This website and its earlier version are both made as resumes and as
                a display of web developing skills.
              </p>
              <img className="w-90 mb-2" src={Webex1} alt="website-example"/>
              <img className="w-90" src={Webex2} alt="website-example2v"/>
            </div>

          </div>
        </div>
      </section>
    )
}

export default Programming;
