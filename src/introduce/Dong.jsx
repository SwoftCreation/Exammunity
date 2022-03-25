import React, { useEffect } from "react";
import NavbarComponent from "../component/NavbarComponent";
import AOS from "aos";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../style/introduce.css";
import {
  faPager,
  faDesktop,
  faFaceKissWinkHeart,
  faOtter,
} from "@fortawesome/free-solid-svg-icons";
function Dong() {
  useEffect(() => {
    AOS.init({});
  });
  return (
    <div>
      <NavbarComponent />
      <br />
      <br />
      <hr />
      <br />
      <div className="Introduce">
        <h1 data-aos="fade-up" data-aos-delay="300">
          <br />
          김동화
        </h1>
        <br />
        <div data-aos="fade-up" data-aos-delay="600">
          <h4>
            <FontAwesomeIcon icon={faPager} />
            &nbsp; Language
            <br />C C++
          </h4>
          <br />
          <h4>
            <FontAwesomeIcon icon={faDesktop} />
            &nbsp; Tech
            <br />
            Node.js
          </h4>
          <br />
          <h4>
            <FontAwesomeIcon icon={faOtter} />
            &nbsp; Hobby
            <br />
            독서와 명상
          </h4>
        </div>
        <br />
        <hr />
        <div data-aos="fade-up" data-aos-delay="900">
          <h4>
            <FontAwesomeIcon icon={faFaceKissWinkHeart} />
            &nbsp;About me!
          </h4>
          숭실대 소프트웨어학부 재학중인 김동화입니다.
          <br />
          현재 백엔드 개발을 공부 중입니다
        </div>
      </div>
    </div>
  );
}

export default Dong;
