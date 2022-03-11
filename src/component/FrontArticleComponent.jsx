import React from "react";
import "../App.css";
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
  return (
    <div className="FrontArticleContainer">
      <CardGroup style={{}}>
        <Card>
          <CardImg
            alt="Card image cap"
            src="https://picsum.photos/318/180"
            top
            width="100%"
          />
          <CardBody>
            <CardTitle tag="h5">Card title</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              Card subtitle
            </CardSubtitle>
            <CardText>기사 1입니다</CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
        <Card>
          <CardImg
            alt="Card image cap"
            src="https://picsum.photos/318/180"
            top
            width="100%"
          />
          <CardBody>
            <CardTitle tag="h5">Card title</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              Card subtitle
            </CardSubtitle>
            <CardText>기사 2입니다</CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
        <Card>
          <CardImg
            alt="Card image cap"
            src="https://picsum.photos/318/180"
            top
            width="100%"
          />
          <CardBody>
            <CardTitle tag="h5">Card title</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              Card subtitle
            </CardSubtitle>
            <CardText>기사 3입니다</CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
      </CardGroup>
    </div>
  );
}
