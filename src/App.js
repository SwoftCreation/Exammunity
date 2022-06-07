import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Route } from "react-router-dom";
import Soo from "./introduce/Soo";
import Gyu from "./introduce/Gyu";
import Dong from "./introduce/Dong";
import Schedule from "./introduce/Schedule";

import Project from "./introduce/Project";
import Home from "./component/Home";

import ExamSquare from "./examSquare/ArticleList";
import writeArticle from "./examSquare/writeArticle.jsx";
import ShowArticle from "./examSquare/ShowArticle";
import NavbarComponent from "./component/NavbarComponent";

import MarketHome from "./ExamMarket/MarketHome";
import HomeDetail from "./HomeFiles/HomeDetail";
import MarketDetail from "./ExamMarket/MarketDetail";
import MarketForm from "./ExamMarket/MarketForm";
/*
  App.js
  라우트 리스트 
 */

function App() {
  return (
    <div>
      <Route path="/" component={Home} exact />

      <Route path="/introduce" component={NavbarComponent} />
      <Route path="/introduce/Schedule" component={Schedule} />
      <Route path="/introduce/Soo" component={Soo} />
      <Route path="/introduce/Dong" component={Dong} />
      <Route path="/introduce/Gyu" component={Gyu} />
      <Route path="/introduce/Team" component={Project} />

      <Route path="/ExamSquare" component={NavbarComponent} />
      <Route path="/ExamSquare/ArticleList" component={ExamSquare} exact />
      <Route path="/ExamSquare/writeArticle" component={writeArticle} />
      <Route path="/ExamSquare/ShowArticle" component={ShowArticle} />

      <Route path="/ExamMarket" component={NavbarComponent} />
      <Route path="/ExamMarket/MarketPlace" component={MarketHome} />
      <Route path="/ExamMarket/Detail" component={HomeDetail} />
      <Route path="/ExamMarket/MarketForm" component={MarketForm} />

      <Route path="/ExamMarket/MarketDetail" component={MarketDetail} />
    </div>
  );
}

export default App;
