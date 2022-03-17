import React from "react";
import CarouselComponent from "./CarouselComponent";
import FrontArticleComponent from "./FrontArticleComponent";
import NavbarComponent from "./NavbarComponent";
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
