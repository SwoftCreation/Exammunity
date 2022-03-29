import React from "react";
import FooterComponent from "./FooterComponent";
import NavbarComponent from "./NavbarComponent";
import "../style/SquareStyle.css";
export default function ExamSquare() {
  return (
    <div>
      <NavbarComponent />
      <h1>ExamSquare Component</h1>
      <FooterComponent />
    </div>
  );
}
