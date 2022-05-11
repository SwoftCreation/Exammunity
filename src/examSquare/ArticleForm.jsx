import React from "react";
import "./examSquare.css";
import { Button } from "reactstrap";
import { useEffect } from "react";
import AOS from "aos";
import Swal from "sweetalert2";

const okayBtnClicked = () => {
  Swal.fire({
    title: "게시글을 등록합니다",
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: "네",
    denyButtonText: `아니요`,
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      Swal.fire("게시글이 저장되었습니다", "", "success");
    } else if (result.isDenied) {
      Swal.fire("취소되었습니다", "", "info");
    }
  });
};

function ArticleForm() {
  useEffect(() => {
    AOS.init({});
  });
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
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="20"
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
      <Button color="danger">취소</Button>
    </div>
  );
}

export default ArticleForm;
