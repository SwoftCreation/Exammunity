import React, { useState, useEffect } from "react";
import "./examSquare.css";
import { Button } from "reactstrap";
import AOS from "aos";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { createArticle } from "../reducers/articleReducer";
import { useHistory } from "react-router-dom";
import FooterComponent from "../component/FooterComponent";

let id = 1;

export default function ArticleForm() {
  useEffect(() => {
    AOS.init({});
  });
  const history = useHistory();
  const okayBtnClicked = () => {
    Swal.fire({
      title: "게시글을 등록합니다",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "네",
      denyButtonText: `아니요`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        onSave();
        Swal.fire("게시글이 저장되었습니다", "", "success");
      } else if (result.isDenied) {
        Swal.fire("취소되었습니다", "", "info");
      }
    });
  };

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const dispatch = useDispatch();

  const onSave = () => {
    const _inputData = {
      id: id,
      title: title,
      content: content,
      author: "user",
    };
    dispatch(createArticle(_inputData));

    fetch("/api/cmtext", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        control: "create",
        writer: _inputData.author,
        title: _inputData.title,
        write_text: _inputData.content,
      }),
    });
    setTitle("");
    setContent("");
    id++;
    history.push("/ExamSquare/ArticleList");
  };

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleContent = (e) => {
    setContent(e.target.value);
  };
  return (
    <div
      data-aos="flip-right"
      data-aos-delay="200"
      data-aos-duration="1500"
      id="articleTextarea"
    >
      <div class="form-group" style={{ margin: "5%" }}>
        <label for="exampleFormControlTextarea1" style={{ fontSize: "1.4rem" }}>
          게시글 작성
        </label>
        <input
          type="text"
          class="form-control"
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
      </div>
      <hr />
      <Button
        color="primary"
        style={{ marginLeft: "10%", marginRight: "5%" }}
        onClick={okayBtnClicked}
      >
        등록하기
      </Button>
      <Button
        color="danger"
        onClick={() => {
          history.push("/ExamSquare");
        }}
      >
        취소
      </Button>
      <br />
      <br />
      <br />
      <FooterComponent />
    </div>
  );
}
