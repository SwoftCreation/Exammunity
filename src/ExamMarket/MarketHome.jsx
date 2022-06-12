import React from "react";
import { Button, ListGroupItem } from "reactstrap";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { userUpdate } from "../reducers/userReducer";

const CustomP = styled.p`
  @import url("https://fonts.googleapis.com/css2?family=Black+Han+Sans&display=swap");
  font-size: 2rem;
  font-family: "Black Han Sans", sans-serif;
`;

export default function MarketHome() {
  const dispatch = useDispatch();
  const history = useHistory();

  const Toast = Swal.mixin({
    toast: true,
    position: "top-right",
    iconColor: "green",
    customClass: {
      popup: "colored-toast",
    },
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true,
  });

  const reportBtn = async () => {
    const { value: accept } = await Swal.fire({
      title: "신고 시 주의사항",
      input: "checkbox",
      inputValue: 1,
      inputPlaceholder: "허위로 신고하지 않겠습니다.",
      confirmButtonText: 'Continue <i class="fa fa-arrow-right"></i>',
      inputValidator: (result) => {
        return !result && "동의하시지 않으면 신고가 불가능합니다";
      },
    });

    if (accept) {
      Swal.fire("동의하셨습니다. 신고창으로 이동합니다.");

      await Toast.fire({
        icon: "success",
        title: "Success",
      });
    }
  };

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
      await Toast.fire({
        icon: "success",
        title: "이동 중",
      });
      setTimeout(() => {
        history.push("/ExamMarket/MarketForm");
      }, 500);
    } else Swal.fire("잘못된 방지메시지를 입력하셨습니다.");
  };

  const markets = useSelector((state) => {
    return state.marketReducer.markets;
    //배열이 들어온다
  });
  const MarketNum = useSelector((state) => {
    return state.marketReducer.marketNum;
  });

  const userInfo = useSelector((state) => {
    return state.userReducer.userInfo[0];
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
          reportBtn();
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
                Swal.fire({
                  icon: "warning",
                  title: "결제 안내",
                  text: `해당 exam의 가격은 ${market.coin} EXM 입니다. 구매하시겠습니까?`,
                  showDenyButton: true,
                  showCancelButton: true,
                  confirmButtonText: "구매합니다",
                  denyButtonText: `안사요`,
                }).then((result) => {
                  /* Read more about isConfirmed, isDenied below */
                  if (result.isConfirmed) {
                    Swal.fire(
                      `보유: ${userInfo.userPoint} EXM COIN\n
                      사용: - ${market.coin} EXM COIN\n
                      활동보상(10%): + ${market.coin * 0.1}\n
                      ------------------------------\n
                      잔여코인: ${
                        userInfo.userPoint - market.coin + market.coin * 0.1
                      } EXM COIN`,
                      "",
                      "success"
                    );
                    console.log("isconfirmed selected");

                    dispatch(
                      userUpdate({
                        name: "suwon",
                        coin:
                          userInfo.userPoint - market.coin + market.coin * 0.1,
                      })
                    );
                    setTimeout(() => {
                      history.push({
                        pathname: "/ExamMarket/MarketDetail",
                        state: { market: market },
                      });
                    }, 1000);
                  } else if (result.isDenied) {
                    Swal.fire("구매가 취소되었습니다", "", "danger");
                  }
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
