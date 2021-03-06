import React from "react";
import useWindowSize from '../use-window-size';
import Navbar from "../components/Navbar";
import Headercv from "../components/Headercv"
import Resume from "../components/Resume"
import Samplers from "../components/Samplers";
import Jobs from "../components/Jobs";
import Gymnastics from "../components/Gymnastics";
import Programming from "../components/Programming";
import Education from "../components/Education";
import Contact from "../components/Contactfooter";

function Cv() {
  const windowSize = useWindowSize();

  return (
    <div>
      <Headercv />
      {windowSize.width < 768 && <Navbar />}
      <Resume />
      <Samplers />
      <Jobs />
      <Gymnastics />
      <Programming />
      <Education />
      <Contact />
    </div>
  )
}

export default Cv;
