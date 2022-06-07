import React, { useEffect } from "react";
import AOS from "aos";

const MarketDetail = () => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <div>
      <h1>MarketDetail Component</h1>
    </div>
  );
};

export default MarketDetail;
