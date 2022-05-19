import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import AOS from "aos";
import NavbarComponent from "../component/NavbarComponent";
import FooterComponent from "../component/FooterComponent";
import "../style/CalendarStyle.css";
import { ListGroup, ListGroupItem } from "reactstrap";
function Schedule() {
  const [value, onChange] = useState(new Date());

  useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 400,
    });
  });

  return (
    <div className="projectPlan">
      <h3 style={{ marginBottom: "15vh" }}>Project Plan</h3>

      <div data-aos="fade-up" style={{ marginBottom: "5vh" }}>
        <Calendar onChange={onChange} value={value} className="calendar" />
      </div>

      <div className="planList" data-aos="fade-up" data-aos-delay="600">
        <h4 style={{ textAlign: "center" }}>작업예정 목록</h4>
        <ListGroup numbered>
          <ListGroupItem>회원가입 구현</ListGroupItem>
          <ListGroupItem>커뮤니티 구현</ListGroupItem>
          <ListGroupItem>포인트 구현</ListGroupItem>
          <ListGroupItem>결제구현</ListGroupItem>
          <ListGroupItem>회원 간 포인트 송금 구현</ListGroupItem>
        </ListGroup>
      </div>
      <FooterComponent />
    </div>
  );
}

export default Schedule;
