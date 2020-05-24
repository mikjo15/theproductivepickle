import React from "react";
import useWindowSize from '../use-window-size';
import Navbar from "../components/Navbar";
import Header from "../components/Headerportfolio";
import Coaching from "../components/Coaching";
import WebDev from "../components/WebDev";
import AppDev from "../components/AppDev";
import Teaching from "../components/Teaching";

function Portfolio() {
  const windowSize = useWindowSize();

  return (
    <div>
      <Header />
      {windowSize.width < 768 && <Navbar />}
      <Coaching />
      <WebDev />
      <AppDev />
      <Teaching />
    </div>
  )
}

export default Portfolio;
