import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route } from "react-router-dom";
import Soo from "./introduce/Soo";
import Gyu from "./introduce/Gyu";
import Dong from "./introduce/Dong";
import Home from "./Home";
import Team from "./introduce/Team";

function App() {
  return (
    <div>
      <Route path="/" component={Home} exact={true} />
      <Route path="/Soo" component={Soo} exact={true} />
      <Route path="/Dong" component={Dong} exact={true} />
      <Route path="/Gyu" component={Gyu} exact={true} />
      <Route path="/Team" component={Team} exact={true} />
    </div>
  );
}

export default App;
