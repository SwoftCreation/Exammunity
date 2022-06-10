import React, { useEffect } from "react";
import AOS from "aos";
import FooterComponent from "../component/FooterComponent";
import { useHistory, useLocation } from "react-router-dom";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
} from "reactstrap";

const MarketDetail = () => {
  useEffect(() => {
    AOS.init();
  });

  const history = useHistory();
  const location = useLocation();
  return (
    <div>
      <div data-aos="flip-right" data-aos-delay="200" data-aos-duration="1500">
        <Card>
          <CardBody>
            <CardTitle style={{ fontSize: "2rem" }}>
              {location.state.market.title}
            </CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              발행인: {location.state.market.author}
              Exam가격: {location.state.market.coin}
            </CardSubtitle>
            <CardText>{location.state.market.content}</CardText>
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

      <FooterComponent />
    </div>
  );
};

export default MarketDetail;
