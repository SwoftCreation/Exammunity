import React from "react";
import FooterComponent from "../component/FooterComponent";
import "../style/SquareStyle.css";
import Board from "./Board";

function ExamSquare() {
  return (
    <div>
      <Board />
      <FooterComponent />
    </div>
  );
}

export default ExamSquare;
