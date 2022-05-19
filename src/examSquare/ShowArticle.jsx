import React, { useEffect } from "react";
import NavbarComponent from "../component/NavbarComponent";
import FooterComponent from "../component/FooterComponent";
import {
  CardTitle,
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  Button,
} from "reactstrap";
import { useLocation, useHistory } from "react-router-dom";
import AOS from "aos";
function ShowArticle() {
  useEffect(() => {
    AOS.init({});
  });

  const location = useLocation();
  const article = location.state.Article;
  console.log("article is ", article);
  return (
    <div>
      <ArticleInfo article={article} />
      <FooterComponent />
    </div>
  );
}

function ArticleInfo(props) {
  const history = useHistory();
  return (
    <div data-aos="flip-right" data-aos-delay="200" data-aos-duration="1500">
      <Card>
        <CardBody>
          <CardTitle style={{ fontSize: "2rem" }}>
            {props.article.title}
          </CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            작성자: {props.article.author}
          </CardSubtitle>
          <CardText>{props.article.contents}</CardText>
          <Button
            onClick={() => {
              history.goBack();
            }}
          >
            뒤로가기
          </Button>
        </CardBody>
      </Card>
    </div>
  );
}

export default ShowArticle;
