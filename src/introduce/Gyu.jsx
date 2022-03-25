import React, { useEffect } from "react";
import NavbarComponent from "../component/NavbarComponent";
import AOS from "aos";
function Gyu() {
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
        <h1>장규은</h1>
        <br />
        <h4>Languages |</h4>
        <h4>Hobby | </h4>
        <br />
        <p>
          소프트웨어학부에 재학 중인 장규은입니다.
          <br />
          <br />
        </p>
      </div>
    </div>
  );
}

export default Gyu;
