import React, { useState } from "react";

import "../style/FrontArticleStyle.css";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
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
  const history = useHistory();
  const markets = useSelector((state) => {
    return state.marketReducer.markets;
  });
  const marketNum = useSelector((state) => {
    return state.marketReducer.marketNum;
  });
  const buttonClicked = (title, text, icon) => {
    Swal.fire({
      title: title,
      icon: icon,
      text: text,
    });
  };

  const askBuy = (price) => {
    Swal.fire({
      title: "결제 안내",
      text: price + " COIN 결제를 진행합니다",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "결제진행",
      denyButtonText: "취소합니다",
    }).then((result) => {
      if (result.isConfirmed)
        Swal.fire({ text: "결제 서비스 준비중입니다", icon: "error" });
      else if (result.isDenied)
        Swal.fire({ text: "결제 서비스 준비중입니다", icon: "error" });
    });
  };
  return (
    <div className="FrontArticleContainer">
      {marketNum >= 3 ? (
        markets.map((market) => {
          return (
            <div
              onClick={() => {
                console.log("프론트 마켓 클릭 -", market);
                history.push({
                  pathname: "/ExamMarket/MarketDetail",
                  state: { market: market },
                });
              }}
            >
              <Card>
                <CardImg
                  alt="card image"
                  src="https://picsum.photos/318/180"
                  top
                  width="100%"
                />
                <CardBody className="Cardbody">
                  <CardTitle tag="h5">{market.title}</CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    {market.author}
                  </CardSubtitle>
                  <CardText>{market.coin} EXM COIN</CardText>
                  <Button
                    color="danger"
                    outline
                    onClick={() => {
                      buttonClicked("알림", "서비스 준비중입니다", "info");
                      history.push("/ExamMarket/Detail");
                    }}
                    style={{ margin: "5px" }}
                  >
                    자세히보기
                  </Button>
                  <Button
                    color="primary"
                    outline
                    onClick={() => askBuy("2800")}
                  >
                    구매하기
                  </Button>
                </CardBody>
              </Card>
            </div>
          );
        })
      ) : (
        <div>
          <CardGroup>
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
                  onClick={() => {
                    buttonClicked("알림", "서비스 준비중입니다", "info");
                    history.push("/ExamMarket/Detail");
                  }}
                  style={{ margin: "5px" }}
                >
                  자세히보기
                </Button>
                <Button color="primary" onClick={() => askBuy("2800")}>
                  구매하기
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
                <CardTitle tag="h5">평가원ST 기출30선</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  writer: 김동화
                </CardSubtitle>
                <CardText>__ 10000 COIN __</CardText>
                <Button
                  id="FrontArticleButtons"
                  onClick={() => {
                    buttonClicked("알림", "서비스 준비중입니다", "info");
                    history.push("/ExamMarket/Detail");
                  }}
                  style={{ margin: "5px" }}
                >
                  자세히보기
                </Button>
                <Button color="primary" onClick={() => askBuy("10000")}>
                  구매하기
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
                <CardTitle tag="h5">교육청 모의고사 모아보기</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  writer: 임수원
                </CardSubtitle>
                <CardText>__ 3100 COIN __</CardText>
                <Button
                  id="FrontArticleButtons"
                  onClick={() => {
                    buttonClicked("알림", "서비스 준비중입니다", "info");
                    history.push("/ExamMarket/Detail");
                  }}
                  style={{ margin: "5px" }}
                >
                  자세히보기
                </Button>

                <Button color="primary" onClick={() => askBuy("3100")}>
                  구매하기
                </Button>
              </CardBody>
            </Card>
          </CardGroup>
        </div>
      )}
    </div>
  );
}
