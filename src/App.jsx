import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Header from "./components/header";
import Navbar from "./components/navbar";
import useWindowSize from "./use-window-size";

function App() {
  const windowSize = useWindowSize();

  return (
    <div>
      <Header />
      {windowSize.width < 768 && <Navbar />}
    </div>
  )
}

export default App;
