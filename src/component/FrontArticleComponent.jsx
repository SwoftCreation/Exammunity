import React from "react";
import "../style/FrontArticleStyle.css";
import Swal from "sweetalert2";
import {
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  Button,
  CardTitle,
  CardImg,
  CardGroup,
} from "reactstrap";

export default function FrontArticleComponent() {
  const buttonClicked = () => {
    Swal.fire({
      title: "알림",
      icon: "info",
      text: "서비스 준비중 입니다:)",
    });
  };
  return (
    <div className="FrontArticleContainer">
      <CardGroup style={{}}>
        <Card>
          <CardImg
            alt="Card image cap"
            src="https://picsum.photos/318/180"
            top
            width="100%"
          />
          <CardBody className="Cardbody">
            <CardTitle tag="h5">2021 6월평가원</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              writer: 장규은
            </CardSubtitle>
            <CardText>2022.03.11</CardText>
            <Button id="FrontArticleButtons" onClick={buttonClicked}>
              시험지열람
            </Button>
          </CardBody>
        </Card>
        <Card>
          <CardImg
            alt="Card image cap"
            src="https://picsum.photos/318/180"
            top
            width="100%"
          />
          <CardBody className="Cardbody">
            <CardTitle tag="h5">2019 9월평가원</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              writer: 장규은
            </CardSubtitle>
            <CardText>2022.03.11</CardText>
            <Button id="FrontArticleButtons" onClick={buttonClicked}>
              시험지열람
            </Button>
          </CardBody>
        </Card>
        <Card>
          <CardImg
            alt="Card image cap"
            src="https://picsum.photos/318/180"
            top
            width="100%"
          />
          <CardBody className="Cardbody">
            <CardTitle tag="h5">2010 3월모의고사</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              writer: 장규은
            </CardSubtitle>
            <CardText>2022.03.11</CardText>
            <Button id="FrontArticleButtons" onClick={buttonClicked}>
              시험지열람
            </Button>
          </CardBody>
        </Card>
      </CardGroup>
    </div>
  );
}
