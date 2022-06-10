import React from "react";
import { Button, ListGroupItem } from "reactstrap";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import styled from "styled-components";

const CustomP = styled.p`
  @import url("https://fonts.googleapis.com/css2?family=Black+Han+Sans&display=swap");
  font-size: 2rem;
  font-family: "Black Han Sans", sans-serif;
`;

export default function MarketHome() {
  const history = useHistory();

  const publishBtn = async () => {
    const { value: text } = await Swal.fire({
      input: "textarea",
      inputLabel: "발행위조 입력메시지 [본인입니다]를 입력해주세요",
      inputPlaceholder: "방지메시지 입력",
      inputAttributes: {
        "aria-label": "Type your message here",
      },
      showCancelButton: true,
    });

    if (text === "본인입니다") {
      Swal.fire("Exam발행화면으로 이동합니다!");
      console.log("right message --> move to publish component");
      setTimeout(() => {
        history.push("/ExamMarket/MarketForm");
      }, 1000);
    } else Swal.fire("잘못된 방지메시지를 입력하셨습니다.");
  };

  const markets = useSelector((state) => {
    return state.marketReducer.markets;
    //배열이 들어온다
  });
  const MarketNum = useSelector((state) => {
    return state.marketReducer.marketNum;
  });

  console.log("Market Home initial marketNum is ", MarketNum);
  return (
    <div style={{ margin: "10px" }}>
      <Button
        color="info"
        outline
        onClick={() => {
          publishBtn();
        }}
        style={{ marginBottom: "10px" }}
      >
        내 exam 등록하기
      </Button>
      <Button
        color="danger"
        outline
        onClick={() => {
          publishBtn();
        }}
        style={{ marginBottom: "10px", marginLeft: "10px" }}
      >
        신고하기
      </Button>

      {MarketNum !== 0 ? (
        markets.map((market) => {
          return (
            <div
              onClick={() => {
                console.log("마켓 판매상품 클릭 -", market);
                history.push({
                  pathname: "/ExamMarket/MarketDetail",
                  state: { market: market },
                });
              }}
            >
              <ListGroupItem>
                <CustomP>
                  {market.title} exam - {market.coin} EXM
                </CustomP>
              </ListGroupItem>
            </div>
          );
        })
      ) : (
        <div>
          <CustomP>텅! 비었습니다</CustomP>
        </div>
      )}
    </div>
  );
}
