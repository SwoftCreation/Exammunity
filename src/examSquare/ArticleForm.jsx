import React from "react";

import "./examSquare.css";
import { Button } from "reactstrap";
import { useEffect } from "react";
import AOS from "aos";
const ArticleForm = () => {
  useEffect(() => {
    AOS.init({});
  });
  return (
    <div className="ArticleFormDiv">
      <hr />
      <Button color="primary" style={{ marginRight: "10px" }}>
        등록하기
      </Button>
      <Button color="danger">취소</Button>
    </div>
  );
};

export default ArticleForm;
