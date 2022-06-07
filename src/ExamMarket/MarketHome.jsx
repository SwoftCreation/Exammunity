import React, { useEffect } from "react";
import AOS from "aos";

export default function MarketHome() {
  useEffect(() => {
    AOS.init();
  });
  return (
    <div>
      <h1>ExamMarket</h1>
    </div>
  );
}
