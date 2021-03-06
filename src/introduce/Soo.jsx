import React, { useEffect } from "react";
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
function Soo() {
  useEffect(() => {
    AOS.init({});
  });
  return (
    <div className="Soo">
      <div className="personalIntroduce">
        <h1
          data-aos="fade-up"
          data-aos-delay="300"
          style={{ textShadow: "5px 5px 5px #726e71ba" }}
        >
          <br />
          임수원
        </h1>
        <br />
        <div data-aos="fade-up" data-aos-delay="400">
          <h4>
            <FontAwesomeIcon icon={faPager} />
            &nbsp; Language
            <br />
            Javascript Python
          </h4>
          <br />
          <h4 data-aos="fade-up" data-aos-delay="500">
            <FontAwesomeIcon icon={faDesktop} />
            &nbsp; Tech
            <br />
            HTML/CSS
            <br />
            Javascript ( - , ES6)
            <br />
            React
            <br />
            Oracle
          </h4>
          <br />
          <h4 data-aos="fade-up" data-aos-delay="600">
            <FontAwesomeIcon icon={faOtter} />
            &nbsp; Hobby
            <br />
            힙합과 정치 그리고 여행
          </h4>
        </div>
        <br />
        <hr />
        <div data-aos="fade-up" data-aos-delay="700">
          <h4>
            <FontAwesomeIcon icon={faFaceKissWinkHeart} />
            &nbsp;About me!
          </h4>
          <p>
            숭실대 소프트웨어학부 재학중인 임수원입니다.
            <br />
            현재 웹 프론트엔드 개발자를 목표로 공부 중입니다.
            <br />
            기회가 된다면 블록체인을 웹에 적용해보는 공부를 해보고 싶습니다.
          </p>
        </div>
      </div>
      <FooterComponent />
    </div>
  );
}

export default Soo;
