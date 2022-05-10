import React from "react";
import FooterComponent from "./FooterComponent";
import NavbarComponent from "./NavbarComponent";
import "../style/SquareStyle.css";
import Board from "./Board";

export default function ExamSquare() {
  return (
    <div>
      <NavbarComponent />
      <Board />
      <FooterComponent />
    </div>
  );
}
