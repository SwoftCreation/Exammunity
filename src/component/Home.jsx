import React from "react";
import CarouselComponent from "./CarouselComponent";
import FrontArticleComponent from "./FrontArticleComponent";
import NavbarComponent from "./NavbarComponent";
import FooterComponent from "./FooterComponent";
function Home() {
  return (
    <div>
      <NavbarComponent />
      <CarouselComponent />
      <br />
      <hr />
      <br />
      <FrontArticleComponent data-aos="fade-up" />
      <br />

      <FooterComponent />
    </div>
  );
}

export default Home;
