import React from "react";

import "../style/footerStyle.css";
/*
  TODO:
  일반적인 푸터로 만들 것
  하단 고정
  
*/
function FooterComponent() {
  return (
    <div className="footer">
      <div className="footerContent">
        DM to instagram @ExammunityOfficial
        <br />
        Email to [ studentlimsoo@gmail.com ]
        <br />
        Copyright 2022, Exammunity, All Rights Reserved
      </div>
    </div>
  );
}

export default FooterComponent;
