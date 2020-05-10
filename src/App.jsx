import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import Homepage from "./pages/Homepage";
import Blog from "./pages/Blog";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Homepage}/>
      <Route exact path="/blog" component={Blog}/>
    </Router>
  )
}

export default App;
