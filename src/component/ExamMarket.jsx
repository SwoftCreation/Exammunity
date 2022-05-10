import React from "react";
import FooterComponent from "./FooterComponent";
import NavbarComponent from "./NavbarComponent";
import "../style/MarketStyle.css";

export default function ExamMarket() {
  return (
    <div>
      <br />
      <br />
      <NavbarComponent />
      <h1>Exam Marketplace</h1>
      <FooterComponent />
    </div>
  );
}
