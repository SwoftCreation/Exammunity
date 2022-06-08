import React from "react";
import { Button } from "reactstrap";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const CustomBox = styled.div`
  margin: auto;
  text-align: center;
  background-color: aqua;
  font-size: 2rem;
`;

export default function MarketHome() {
  const history = useHistory();
  return (
    <div>
      <hr />
      <h1>MarketPlace</h1>

      <hr />

      <Button
        color="info"
        outline
        onClick={() => {
          history.push("/ExamMarket/MarketForm");
        }}
      >
        내 exam 등록하기
      </Button>
    </div>
  );
}
