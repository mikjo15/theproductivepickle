import React from "react";
import useWindowSize from "../use-window-size";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Pricing from "../components/Pricing";
import About from "../components/About";
import Contact from "../components/Contact";
import ContactFooter from "../components/Contactfooterwhite";

function Homepage() {
  const windowSize = useWindowSize();

  return (
  <div>
    <Header />
    {windowSize.width < 768 && <Navbar />}
    <Pricing />
    <About />
    <Contact />
    <ContactFooter />
  </div>
)
}

export default Homepage;
