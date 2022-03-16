import React from "react";

import CarouselComponent from "./component/CarouselComponent";
import NavbarComponent from "./component/NavbarComponent";
import FrontArticleComponent from "./component/FrontArticleComponent";

function Home() {
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

export default Home;
