import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";

import Nav from "./components/Nav/Nav";
import Home from "./pages/Home/Home";
import Cutest from "./pages/Cutest/Cutest";
import Gallery from "./pages/Gallery/Gallery";
import About from "./pages/about/About";
import LandingPage from "./pages/LandingPage/LandingPage";

function App() {
  return (
    <div className="app">
      <Nav />
      <Switch>
        <Route exact path="/">   <LandingPage />   </Route>
        <Route path="/home">   <Home /> </Route>
        <Route path="/cutest">  <Cutest />  </Route>
        <Route path="/gallery">  <Gallery />  </Route>
        <Route path="/hamsters">  <Redirect to="/gallery" />  </Route>
        <Route path="/about">  <About />  </Route>
      </Switch>
    </div>
  );
}

export default App;
