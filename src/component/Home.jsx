import React from "react";
import CarouselComponent from "./CarouselComponent";
import FrontArticleComponent from "./FrontArticleComponent";
import NavbarComponent from "./NavbarComponent";
import FooterComponent from "./FooterComponent";

import "../style/HomeStyle.css";
function Home() {
  return (
    <div className="Home">
      <div className="NavbarComponent">
        <NavbarComponent />
      </div>

      <div className="CarouselComponent">
        <CarouselComponent />
      </div>

      <hr />
      <FrontArticleComponent />

      <FooterComponent />
    </div>
  );
}

export default Home;
