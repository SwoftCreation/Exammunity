import React from "react";
import FooterComponent from "./FooterComponent";
import NavbarComponent from "./NavbarComponent";
import "../style/MarketStyle.css";
export default function ExamMarket() {
  return (
    <div>
      <NavbarComponent />
      <h1>ExamMarket</h1>
      <FooterComponent />
    </div>
  );
}
