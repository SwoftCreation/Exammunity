import React, { useEffect } from "react";
import {
  Pagination,
  PaginationItem,
  PaginationLink,
  ListGroup,
  ListGroupItem,
  Button,
} from "reactstrap";
import "./examSquare.css";
import { useSelector } from "react-redux";
import AOS from "aos";
import { useHistory } from "react-router-dom";

const Board = () => {
  useEffect(() => {
    AOS.init({});
  });

  const history = useHistory();
  return (
    <div>
      <Articles />
      <br />
      <PageList />
      <Button
        color="primary"
        style={{ display: "block", margin: "auto" }}
        onClick={() => {
          history.push("/ExamSquare/Article");
        }}
      >
        글 작성
      </Button>
    </div>
  );
};

export default Board;

function Articles() {
  const articles = useSelector((state) => state.articleReducer.articles);
  const articleNum = useSelector((state) => state.articleReducer.articleNum);
  return (
    <div id="articleTextarea">
      <ListGroup
        data-aos="flip-right"
        data-aos-delay="200"
        data-aos-duration="1500"
      >
        {articleNum !== 0 ? (
          articles.map((article) => {
            return (
              <div>
                <ListGroupItem action href="#" tag="a">
                  {article.title}
                </ListGroupItem>
              </div>
            );
          })
        ) : (
          <div>
            <p>텅! 비었습니다 게시물을 등록해주세요</p>
          </div>
        )}
      </ListGroup>
    </div>
  );
}

const PageList = () => (
  <div className="PageList">
    <Pagination
      data-aos="flip-right"
      data-aos-delay="200"
      data-aos-duration="1500"
    >
      <PaginationItem>
        <PaginationLink first href="#" />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#" previous />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">1</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">2</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">3</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">4</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">5</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#" next />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#" last />
      </PaginationItem>
    </Pagination>
  </div>
);
