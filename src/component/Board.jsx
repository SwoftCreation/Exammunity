import React, { useEffect } from "react";
import {
  Pagination,
  PaginationItem,
  PaginationLink,
  ListGroup,
  ListGroupItem,
} from "reactstrap";
import "../style/Board.css";
import AOS from "aos";

const Board = () => {
  useEffect(() => {
    AOS.init({});
  });
  return (
    <div>
      <Articles />
      <br />
      <PageList />
    </div>
  );
};

export default Board;

const Articles = () => (
  <div>
    <ListGroup
      data-aos="flip-right"
      data-aos-delay="200"
      data-aos-duration="1500"
    >
      <ListGroupItem action active href="#" tag="a">
        Cras justo odio
      </ListGroupItem>
      <ListGroupItem action href="#" tag="a">
        Dapibus ac facilisis in
      </ListGroupItem>
      <ListGroupItem action href="#" tag="a">
        Morbi leo risus
      </ListGroupItem>
      <ListGroupItem action href="#" tag="a">
        Porta ac consectetur ac
      </ListGroupItem>
      <ListGroupItem action disabled href="#" tag="a">
        Vestibulum at eros
      </ListGroupItem>
    </ListGroup>
  </div>
);

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
