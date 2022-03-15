import React from "react";
import "../style/CarouselStyle.css";
import { Navbar, UncontrolledCarousel } from "reactstrap";

export default function CarouselComponent() {
  /* 
  TODO: 슬라이드 수정 ( 직접구현 해야할듯 ) 
    윈도우 상에서 캐러셀이 슬라이드 될때 일시적으로 확대되었다가 
    줄어든다
  */
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
