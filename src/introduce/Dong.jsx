import React, { useEffect } from "react";
import NavbarComponent from "../component/NavbarComponent";
import AOS from "aos";
function Dong() {
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
        <h1>김동화</h1>
        <br />
        <h4>Languages | C C++ node.js</h4>
        <h4>Hobby | 독서와 명상</h4>
        <br />
        <h4>
          <pre>
            소프트웨어학부에 재학 중인 3학년 김동화입니다.{"\n"}
            <br />
            현재 백엔드 개발을 공부 중입니다.
          </pre>
        </h4>
      </div>
    </div>
  );
}

export default Dong;
