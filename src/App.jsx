import React from "react";
import useWindowSize from "./use-window-size";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import About from "./components/About";


function App() {
  const windowSize = useWindowSize();

  return (
    <div>
      <Header />
      {windowSize.width < 768 && <Navbar />}
      <Pricing />
      <About />
    </div>
  )
}

export default App;
