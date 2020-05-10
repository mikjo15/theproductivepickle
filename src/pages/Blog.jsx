import React from "react";
import useWindowSize from "../use-window-size";
import Headerblog from "../components/Headerblog";
import Navbar from "../components/Navbar";
import Blogstart from "../components/Blogstart"
import Blogpost from "../components/Blogpost"

function Blog() {
  const windowSize = useWindowSize();

  return (
    <div>
      <Headerblog />
      {windowSize.width < 768 && <Navbar />}
      <Blogstart />
      <Blogpost />
    </div>
  )
}

export default Blog;
