import React, { useEffect } from "react";
import NavbarComponent from "../component/NavbarComponent";
import AOS from "aos";
import "aos/dist/aos.css";
import "../style/introduce.css";
import FooterComponent from "../component/FooterComponent";

function Project() {
  useEffect(() => {
    AOS.init({});
  });

  return (
    <div>
      <NavbarComponent />
      <br />
      <br />
      <hr />
      <br />

      <div className="todoList">
        <h4
          style={{ textAlign: "center", fontSize: "1.8rem" }}
          data-aos="fade-down-right"
        >
          <strong>현재 이 프로젝트는 [ 45% ] 완성되었습니다</strong>
          <br />
          <a href="https://www.notion.so/EXAMMUNITY-4996cf4ef2db4aca8efb86448e9f9510">
            [LINK] notion page about our project
          </a>
        </h4>
        <ul
          style={{ width: "800px", margin: "2vh auto 2vh", fontSize: "1.4rem" }}
          data-aos="fade-down-left"
          data-aos-delay="300"
        >
          <div className="doneList" data-aos="flip-right" data-aos-delay="300">
            <li>디자인 틀 설정 bootstrap, reactstrap</li>
            <li>서버연결 netlify</li>
            <li>라우팅 설정 react-router-dom</li>
            <li>푸터 설정</li>
            <li>Team 소개 페이지 작업(scroll animation) AOS.api</li>
            <li>ExamSquare 리덕스 작업</li>
            <li>데이터베이스 스키마 작성 및 구축 완료 Amazon AWS</li>
          </div>
          <li data-aos="zoom-in" data-aos-delay="300">
            ExamSquare 게시판 구현 완료
          </li>
          <li data-aos="zoom-in" data-aos-delay="400">
            DB 연결 및 회원가입 구현
          </li>

          <li data-aos="zoom-in" data-aos-delay="500">
            ExamMarket 마켓플레이스 구현
          </li>
          <li data-aos="zoom-in" data-aos-delay="600">
            회원 포인트 구현 Redux
          </li>
          <li data-aos="zoom-in" data-aos-delay="700">
            회원간 포인트 송금기능 구현
          </li>
          <li data-aos="zoom-in" data-aos-delay="800">
            디자인 최종 수정
          </li>
        </ul>
      </div>

      <hr />
      <br />
      <div className="projectExplain">
        <h1
          style={{ fontSize: "2rem" }}
          data-aos="zoom-in"
          data-aos-delay="300"
        >
          <strong>Exammunity</strong> 프로젝트 소개
        </h1>
        <br />
        <h2
          style={{ fontSize: "1.5rem", marginBottom: "4rem" }}
          data-aos="zoom-in"
          data-aos-delay="300"
        >
          최초의 커스텀 시험지 마켓 플레이스
        </h2>
        <span>
          <p data-aos="zoom-in" data-aos-delay="300">
            우리는 살면서 10년이 넘는 의무교육을 받습니다 (정확히는 12년입니다!)
          </p>
          <p data-aos="zoom-in" data-aos-delay="400">
            우리 숨쉬며 살아있는 시간의 10%가 넘는 시간을 교육 받습니다
          </p>
          <p data-aos="zoom-in" data-aos-delay="500">
            국가는 매년마다 의무교육을 새로이 하기 위해서 막대한 예산을 사용하죠
          </p>
          <p data-aos="zoom-in" data-aos-delay="600">
            하지만 수능이 끝나면 의무교육지식은 시간이 지나면서 우리 머릿속에서
            점점 사라집니다.
          </p>
          <p data-aos="zoom-in" data-aos-delay="700">
            만약 의무교육으로 얻은 지식을 재사용할 수 있다면 얼마나 많은 돈을
            아낄 수 있을까요?
          </p>
          <p data-aos="zoom-in" data-aos-delay="800">
            누구나 평등하게 받은 의무교육으로 고정수익을 만들 수 있다면 얼마나
            좋을까요?
          </p>
          <p data-aos="zoom-in" data-aos-delay="900">
            지식의 선순환은 무엇인가요?
          </p>
          <p
            data-aos="zoom-in"
            data-aos-delay="1000"
            style={{ fontsize: "5rem" }}
          >
            Exammunity는 그 이슈를 다루기 위해 세상에 나왔습니다!
          </p>
        </span>
      </div>
      <FooterComponent />
    </div>
  );
}

export default Project;
