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
function Gyu() {
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
          장규은
        </h1>
        <br />
        <div data-aos="fade-up" data-aos-delay="600">
          <h4>
            <FontAwesomeIcon icon={faPager} />
            &nbsp; Language
            <br />C C++ Java
          </h4>
          <br />
          <h4>
            <FontAwesomeIcon icon={faDesktop} />
            &nbsp; Tech
            <br />
          </h4>
          <br />
          <h4>
            <FontAwesomeIcon icon={faOtter} />
            &nbsp; Hobby
            <br />
            농구 사진찍기 음악듣기
          </h4>
        </div>
        <br />
        <hr />
        <div data-aos="fade-up" data-aos-delay="300">
          <h4>
            <FontAwesomeIcon icon={faFaceKissWinkHeart} />
            &nbsp;About me!
          </h4>
          숭실대 소프트웨어학부 재학중인 장규은입니다. 많이 배우고 싶어요
          보안분야에 관심이 있습니다.
          {"\n"}대학원 가버려~
        </div>
      </div>
      <FooterComponent />
    </div>
  );
}

export default Gyu;
