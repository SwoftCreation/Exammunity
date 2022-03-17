import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route } from "react-router-dom";
import Soo from "./introduce/Soo";
import Gyu from "./introduce/Gyu";
import Dong from "./introduce/Dong";
import Home from "./component/Home";
import Team from "./introduce/Team";
import ExamMarket from "./component/ExamMarket";
import ExamSquare from "./component/ExamSquare";

function App() {
  return (
    <div>
      <Route path="/" component={Home} exact="true" />
      <Route path="/introduce/Soo" component={Soo} />
      <Route path="/introduce/Dong" component={Dong} />
      <Route path="/introduce/Gyu" component={Gyu} />
      <Route path="/introduce/Team" component={Team} />
      <Route path="/ExamMarket" component={ExamMarket} />
      <Route path="/ExamSquare" component={ExamSquare} />
    </div>
  );
}

export default App;
