import React, { useState, useEffect } from "react";
import { Button } from "reactstrap";
import { useDispatch } from "react-redux";
import { createMarket } from "../reducers/marketReducer";
import { useHistory } from "react-router-dom";
import FooterComponent from "../component/FooterComponent";
import AOS from "aos";

export default function MarketForm() {
  useEffect(() => {
    AOS.init();
  });

  const history = useHistory();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const dispatch = useDispatch();

  const onSave = () => {
    const _inputData = {
      title: title,
      content: content,
      author: "user",
    };
    dispatch(createMarket(_inputData));

    setTitle("");
    setContent("");

    history.push("/ExamMarket/MarketPlace");
  };

  const okayBtnClicked = () => {
    console.log("okay clicked");
    onSave();
  };

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleContent = (e) => {
    setContent(e.target.value);
  };

  return (
    <div>
      <h1>MarketForm</h1>
      <div class="form-group" style={{ margin: "5%" }}>
        <label for="exampleFormControlTextarea1" style={{ fontSize: "1.4rem" }}>
          문제등록
        </label>

        <input
          type="text"
          class="form-control"
          //value랑 onChange는 어떻게 보면 하나라고 봐야한다.
          value={title}
          onChange={handleTitle}
        ></input>

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
          style={{ marginLeft: "10%", marginRight: "5%" }}
          onClick={okayBtnClicked}
        >
          등록하기
        </Button>
      </div>
      <FooterComponent />
    </div>
  );
}
