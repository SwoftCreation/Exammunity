import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
} from "reactstrap";
import FooterComponent from "./FooterComponent";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const CustomP = styled.p`
  @import url("https://fonts.googleapis.com/css2?family=Black+Han+Sans&display=swap");
  font-size: 2rem;
  font-family: "Black Han Sans", sans-serif;
`;

export default function MyExam() {
  const history = useHistory();

  return (
    <div>
      <h1>
        <CustomP>구매한 시험지</CustomP>
      </h1>
      <br />
      <br />
      <div>
        <Card
          onClick={() => {
            history.push("/ExamMarket/MyExam/MyExamDetail");
          }}
        >
          <CardBody>
            <CardTitle tag="h5">현읍읍 모의고사</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              2022-2 현읍읍 모의고사
            </CardSubtitle>
            <CardText>40000 EXM COIN</CardText>
            <Button color="danger" outline>
              열람하기
            </Button>
          </CardBody>
        </Card>
      </div>
      <br />
      <br />

      <FooterComponent />
    </div>
  );
}
