import React from "react";
import "./App.css";
import CarouselComponent from "./component/CarouselComponent";
import FrontArticleComponent from "./component/FrontArticleComponent";
import NavbarComponent from "./component/NavbarComponent";

function App() {
  return (
    <div>
      <NavbarComponent />
      <CarouselComponent />
      <br />
      <hr />
      <br />
      <FrontArticleComponent />
    </div>
  );
}

export default App;
