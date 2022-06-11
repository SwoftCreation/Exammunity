import React, { useState, useEffect } from "react";
import { Button, InputGroup, InputGroupText, Input } from "reactstrap";
import { useDispatch } from "react-redux";
import { createMarket } from "../reducers/marketReducer";
import { useHistory } from "react-router-dom";
import FooterComponent from "../component/FooterComponent";
import AOS from "aos";
import styled from "styled-components";

const CustomP = styled.p`
  @import url("https://fonts.googleapis.com/css2?family=Black+Han+Sans&display=swap");
  font-size: 2rem;
  font-family: "Black Han Sans", sans-serif;
`;

export default function MarketForm() {
  useEffect(() => {
    AOS.init();
  });

  const history = useHistory();
  const [title, setTitle] = useState("");
  const [workbook, setWorkbook] = useState("");
  const [content, setContent] = useState("");
  const [coin, setCoin] = useState();
  const dispatch = useDispatch();
  let file;
  let formData = new FormData();
  const onSave = () => {
    const _inputData = {
      title: title,
      workbook: workbook,
      content: content,
      author: "user",
      coin: coin,
    };
    dispatch(createMarket(_inputData));

    setTitle("");
    setContent("");

    history.push("/ExamMarket/MarketPlace");
  };

  const okayBtnClicked = () => {
    console.log("okay clicked");
    formData.append("files", file);
    console.log(formData.get("files"));
    fetch("/post", { method: "post", body: formData })
      .then((response) => response.json())
      .then((result) => {
        console.log("success", result);
      })
      .catch((error) => {
        console.error("fault");
      });
    onSave();
  };

  function onFile(event) {
    event.preventDefault();
    file = event.target.files[0];
  }

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleWorkbook = (e) => {
    setWorkbook(e.target.value);
  };

  const handleContent = (e) => {
    setContent(e.target.value);
  };

  const handleCoin = (e) => {
    setCoin(e.target.value);
  };

  return (
    <div>
      <div class="form-group" style={{ margin: "3%" }}>
        <label for="exampleFormControlTextarea1" style={{ fontSize: "1.4rem" }}>
          <CustomP>Publish Exam</CustomP>
        </label>

        <input
          type="text"
          class="form-control"
          //value랑 onChange는 어떻게 보면 하나라고 봐야한다.
          value={title}
          onChange={handleTitle}
          placeholder="Exam 제목"
        ></input>
        <input
          class="form-control"
          type="file"
          onChange={(e) => {
            onFile(e);
          }}
        ></input>
        <InputGroup>
          <InputGroupText>판매가격 - $exmCoin</InputGroupText>
          <InputGroupText>$</InputGroupText>
          <Input
            placeholder="Exammunity Coin "
            onChange={handleCoin}
            value={coin}
          />
          <InputGroupText>$</InputGroupText>
        </InputGroup>
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="20"
          placeholder="커뮤니티 규칙을 위반한 게시물은 사전통보없이 삭제될 수 있습니다"
          onChange={handleContent}
          value={content}
        ></textarea>

        <Button
          color="primary"
          style={{ marginTop: "10px" }}
          onClick={okayBtnClicked}
        >
          등록하기
        </Button>
        <Button
          color="danger"
          style={{ marginLeft: "1%", marginTop: "10px" }}
          onClick={() => {
            history.goBack();
          }}
        >
          취소하기
        </Button>
      </div>
      <FooterComponent />
    </div>
  );
}
