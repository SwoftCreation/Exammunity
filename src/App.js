import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Route } from "react-router-dom";
import Soo from "./introduce/Soo";
import Gyu from "./introduce/Gyu";
import Dong from "./introduce/Dong";
import Schedule from "./introduce/Schedule";

import Project from "./introduce/Project";
import Home from "./component/Home";
import ExamMarket from "./component/ExamMarket";
import ExamSquare from "./component/ExamSquare";

/*
  App.js
  라우트 리스트 
 */

function App() {
  return (
    <div>
      <Route path="/" component={Home} exact="true" />

      <Route path="/introduce/Schedule" component={Schedule} exact="true" />
      <Route path="/introduce/Soo" component={Soo} />
      <Route path="/introduce/Dong" component={Dong} />
      <Route path="/introduce/Gyu" component={Gyu} />
      <Route path="/introduce/Team" component={Project} />

      <Route path="/ExamMarket" component={ExamMarket} />
      <Route path="/ExamSquare" component={ExamSquare} />
    </div>
  );
}

export default App;
