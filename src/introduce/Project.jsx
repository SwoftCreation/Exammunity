import React, { useEffect } from "react";
import NavbarComponent from "../component/NavbarComponent";
import AOS from "aos";
import "aos/dist/aos.css";

import image1 from "./carousel2.png";

function Project() {
  useEffect(() => {
    AOS.init({
      delay: 1000,
      duration: 3000,
    });
  });
  return (
    <div style={{ float: "center" }}>
      <NavbarComponent />
      <img
        src={image1}
        style={{ width: "50%", height: "10%" }}
        alt="image1"
        data-aos="fade-up"
      />
      <h1 data-aos="fade-right">Exammunity 프로젝트 소개</h1>
      <br />
      <h2 data-aos="fade-right">최초의 커스텀 시험지 마켓 플레이스</h2>
      <h4 data-aos="fade-right">누구나 시험지를 사고 팔 수 있습니다</h4>
    </div>
  );
}

export default Project;
