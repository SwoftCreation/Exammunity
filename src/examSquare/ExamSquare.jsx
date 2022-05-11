import React from "react";
import FooterComponent from "../component/FooterComponent";
import NavbarComponent from "../component/NavbarComponent";
import "../style/SquareStyle.css";
import Board from "./Board";

function ExamSquare() {
  return (
    <div>
      <NavbarComponent />
      <br />
      <br />
      <hr />
      <br />
      <Board />
      <FooterComponent />
    </div>
  );
}

export default ExamSquare;
