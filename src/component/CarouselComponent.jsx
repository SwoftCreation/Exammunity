import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, UncontrolledCarousel } from "reactstrap";
import "../App.css";

export default function CarouselComponent() {
  return (
    <div className="CarouselContainer">
      <Navbar></Navbar>

      <UncontrolledCarousel
        className="carousel"
        items={[
          {
            altText: "Slide 1",
            key: 1,
            src: "https://picsum.photos/id/458/1200/500",
          },
          {
            altText: "Slide 2",
            key: 2,
            src: "https://picsum.photos/id/456/1200/500",
          },
          {
            altText: "Slide 3",

            key: 3,
            src: "https://picsum.photos/id/678/1200/500",
          },
        ]}
      />
    </div>
  );
}
