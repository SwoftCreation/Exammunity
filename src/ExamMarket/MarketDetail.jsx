import React, { useEffect } from "react";
import AOS from "aos";
import FooterComponent from "../component/FooterComponent";

const MarketDetail = () => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <div>
      <h1>MarketDetail Component</h1>
      <FooterComponent />
    </div>
  );
};

export default MarketDetail;
