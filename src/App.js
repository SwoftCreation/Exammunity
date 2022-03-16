import React, { useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Zoom } from "react-reveal";

import CarouselComponent from "./component/CarouselComponent";
import FrontArticleComponent from "./component/FrontArticleComponent";
import NavbarComponent from "./component/NavbarComponent";

function App() {
  return (
    <div>
      <NavbarComponent dataAos="flipLeft" />
      <Zoom>
        <CarouselComponent dataAos="flipLeft" />
      </Zoom>
      <br />
      <hr />
      <br />

      <FrontArticleComponent dataAos="flipLeft" />
    </div>
  );
}

export default App;
