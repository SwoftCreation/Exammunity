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
            <CardTitle tag="h5">수능 미리보기</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              writer: 장규은
            </CardSubtitle>
            <CardText>__ 2800 COIN __</CardText>
            <Button
              id="FrontArticleButtons"
              onClick={buttonClicked}
              style={{ margin: "5px" }}
            >
              자세히보기
            </Button>
            <Button color="primary">구매하기</Button>
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
            <CardTitle tag="h5">평가원ST 기출30선</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              writer: 장규은
            </CardSubtitle>
            <CardText>__ 10000 COIN __</CardText>
            <Button
              id="FrontArticleButtons"
              onClick={buttonClicked}
              style={{ margin: "5px" }}
            >
              자세히보기
            </Button>
            <Button color="primary">구매하기</Button>
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
            <CardTitle tag="h5">이것이 대장동이다</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              writer: 이재명
            </CardSubtitle>
            <CardText>__ 3100 COIN __</CardText>
            <Button
              id="FrontArticleButtons"
              onClick={buttonClicked}
              style={{ margin: "5px" }}
            >
              자세히보기
            </Button>

            <Button color="primary">구매하기</Button>
          </CardBody>
        </Card>
      </CardGroup>
    </div>
  );
}
