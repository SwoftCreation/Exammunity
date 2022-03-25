import React, { useEffect } from "react";
import NavbarComponent from "../component/NavbarComponent";
import AOS from "aos";
function Soo() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      delay: 1000,
    });
  });
  return (
    <div>
      <NavbarComponent />
      <br />
      <br />
      <hr />
      <br />
      <div data-aos="fade-up">
        <h1>임수원</h1>
        <br />
        <h4>Languages | Javascript Python</h4>
        <h4>Web React React native</h4>
        <h4>Hobby | 힙합과 정치 그리고 여행에 관심이 많습니다</h4>
        <br />
        <h4>
          <pre>
            숭실대 소프트웨어학부 재학중인 임수원입니다.{"\n"}
            <br />
            현재 웹 프론트엔드 개발자를 목표로 공부 중입니다.{"\n"}
            <br />
            기회가 된다면 블록체인을 웹에 적용해보는 공부를 해보고 싶습니다.
          </pre>
        </h4>
      </div>
    </div>
  );
}

export default Soo;
