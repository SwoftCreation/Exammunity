import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import AOS from "aos";
import NavbarComponent from "../component/NavbarComponent";

function Schedule() {
  const [value, onChange] = useState(new Date());

  useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 1000,
    });
  });
  return (
    <div>
      <NavbarComponent />
      <br />
      <br />
      <hr />
      <br />
      <div data-aos="fade-up">
        <Calendar onChange={onChange} value={value} className="calendar" />
      </div>
    </div>
  );
}

export default Schedule;
