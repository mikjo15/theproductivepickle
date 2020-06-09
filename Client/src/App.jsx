import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import Homepage from "./pages/Homepage";
import Blog from "./pages/Blog";
import Cv from "./pages/Cv";
import Portfolio from "./pages/Portfolio";
import Compose from "./pages/Compose";
import ShowPost from "./pages/ShowPost";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Homepage}/>
      <Route exact path="/blog" component={Blog}/>
      <Route exact path="/Cv" component={Cv}/>
      <Route exact path="/portfolio" component={Portfolio}/>
      <Route exact path="/compose" component={Compose}/>
      <Route exact path="/posts/:title" component={ShowPost}/>
    </Router>
  )
}

export default App;
