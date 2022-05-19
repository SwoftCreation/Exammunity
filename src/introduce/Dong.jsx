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
import FooterComponent from "../component/FooterComponent";
function Dong() {
  useEffect(() => {
    AOS.init({});
  });
  return (
    <div className="Dong">
      <div className="personalIntroduce">
        <h1
          data-aos="fade-up"
          data-aos-delay="300"
          style={{ textShadow: "5px 5px 5px #726e71ba" }}
        >
          <br />
          김동화
        </h1>
        <br />
        <div>
          <h4 data-aos="fade-up" data-aos-delay="400">
            <FontAwesomeIcon icon={faPager} />
            &nbsp; Language
            <br />C C++
          </h4>
          <br />
          <h4 data-aos="fade-up" data-aos-delay="500">
            <FontAwesomeIcon icon={faDesktop} />
            &nbsp; Tech
            <br />
            Node.js
          </h4>
          <br />
          <h4 data-aos="fade-up" data-aos-delay="600">
            <FontAwesomeIcon icon={faOtter} />
            &nbsp; Hobby
            <br />
            독서와 명상
          </h4>
        </div>
        <br />
        <hr />
        <div data-aos="fade-up" data-aos-delay="700">
          <h4>
            <FontAwesomeIcon icon={faFaceKissWinkHeart} />
            &nbsp;About me!
          </h4>
          숭실대 소프트웨어학부 재학중인 김동화입니다.
          <br />
          현재 백엔드 개발을 공부 중입니다
        </div>
      </div>
      <FooterComponent />
    </div>
  );
}

export default Dong;
