import React from "react";
import FooterComponent from "./FooterComponent";
import styled from "styled-components";

const CustomP = styled.p`
  @import url("https://fonts.googleapis.com/css2?family=Black+Han+Sans&display=swap");
  font-size: 2rem;
  font-family: "Black Han Sans", sans-serif;
`;

export default function MyExamDetail() {
  return (
    <div>
      <h1>
        <CustomP>나의 시험지 열람하기</CustomP>
      </h1>
      <br />
      <hr />
      <h3>시험지 - 현읍읍 모의고사</h3>

      <br />
      <iframe
        src="https://onedrive.live.com/embed?cid=A581D305D3D85C3C&resid=A581D305D3D85C3C%21242&authkey=ACNzMyxh9jmC2Ow&em=2"
        width="476"
        height="288"
        frameborder="0"
        scrolling="no"
      ></iframe>
      <br />
      <br />
      <br />
      <FooterComponent />
    </div>
  );
}
