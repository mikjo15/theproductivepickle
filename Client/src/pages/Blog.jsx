import React from "react";
import useWindowSize from "../use-window-size";
import Headerblog from "../components/Headerblog";
import Navbar from "../components/Navbar";
import Blogpost from "../components/Blogpost"
import ContactFooter from "../components/Contactfooterwhite";

function Blog() {
  const windowSize = useWindowSize();

  return (
    <div>
      <Headerblog />
      {windowSize.width < 768 && <Navbar />}
      <Blogpost />
      <ContactFooter />
    </div>
  )
}

export default Blog;
