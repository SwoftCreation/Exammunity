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
      <CustomBox>
        <h1 style={{ margin: "auto" }}>ExamMarket</h1>
        <Button
          color="info"
          outline
          onClick={() => {
            history.push("/ExamMarket/MarketForm");
          }}
        >
          문제 생성하기
        </Button>
      </CustomBox>
    </div>
  );
}
