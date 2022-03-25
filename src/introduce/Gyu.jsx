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
function Gyu() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      delay: 500,
    });
  });
  return (
    <div>
      <NavbarComponent />
      <br />
      <br />
      <hr />
      <br />

      <div data-aos="fade-up" className="Introduce">
        <h1>
          <br />
          장규은
        </h1>
        <br />
        <h4>
          <FontAwesomeIcon icon={faPager} />
          &nbsp; Language
          <br />
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
        </h4>
        <br />
        <hr />
        <h4>
          <FontAwesomeIcon icon={faFaceKissWinkHeart} />
          &nbsp;About me!
        </h4>
        숭실대 소프트웨어학부 재학중인 장규은입니다.
      </div>
    </div>
  );
}

export default Gyu;
