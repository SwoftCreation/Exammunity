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
    <div>
      <NavbarComponent />
      <br />
      <br />
      <hr />
      <h4
        style={{ textAlign: "center", fontSize: "1.8rem" }}
        data-aos="fade-down-right"
      >
        <strong>현재 이 프로젝트는 30% 완성되었습니다</strong>
      </h4>
      <ul
        style={{ width: "800px", margin: "2vh auto 2vh", fontSize: "1.4rem" }}
        data-aos="fade-down-left"
        data-aos-delay="300"
      >
        <div className="doneList">
          <li>디자인 틀 설정 reactstrap</li>
          <li>서버연결 netlify</li>
          <li>라우팅 설정 react-router-dom</li>
          <li>푸터 설정</li>
          <li>Team 소개 페이지 작업(scroll animation) AOS.api</li>
        </div>
        <li>DB 연결 및 회원가입 구현 Firebase</li>
        <li>ExamSquare 게시판 구현 Firebase Redux Recoil Zustand</li>
      </ul>

      <figure data-aos="fade-down-right" data-aos-delay="300">
        <img
          src={image1}
          alt="image1"
          data-aos="fade-up"
          className="projectImage"
        />
      </figure>

      <hr />
      <br />
      <div className="Introduce" data-aos="fade-down-left" data-aos-delay="300">
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
