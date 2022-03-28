import React, { useEffect } from "react";
import NavbarComponent from "../component/NavbarComponent";
import AOS from "aos";
import "aos/dist/aos.css";
import "../style/introduce.css";
import image1 from "./carousel2.png";
import FooterComponent from "../component/FooterComponent";

function Project() {
  useEffect(() => {
    AOS.init({});
  });

  return (
    <div style={{ float: "center" }}>
      <NavbarComponent />
      <br />
      <br />
      <hr />

      <figure data-aos="fade-up" data-aos-delay="300">
        <img
          src={image1}
          alt="image1"
          data-aos="fade-up"
          className="projectImage"
        />
      </figure>

      <hr />
      <br />
      <div className="Introduce" data-aos="fade-up" data-aos-delay="500">
        <h1>
          <strong>Exammunity</strong> 프로젝트 소개
        </h1>
        <br />
        <h2>최초의 커스텀 시험지 마켓 플레이스</h2>
        <h4>누구나 시험지를 사고 팔 수 있습니다</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum nemo et
          odit eius aliquid corporis! Nisi veniam, recusandae ea, rem et minus
          delectus laborum, eos quod culpa modi dolorem quis eveniet sint nihil.
          Earum doloribus magni delectus veniam, magnam blanditiis
          exercitationem rerum tenetur suscipit laboriosam atque deleniti quasi
          necessitatibus. Nesciunt!
        </p>
      </div>
      <FooterComponent />
    </div>
  );
}

export default Project;
