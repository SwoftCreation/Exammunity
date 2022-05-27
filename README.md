2022 [공학설계필수 전공] 소프트웨어프로젝트
임수원 장규은 김동화

SPA 지향

상태관리
redux

서버통신
axios.api

라우터
react-router-dom

디자인 프레임워크
React-strap
sweetalert2

스크롤 애니메이션
AOS.api

데이터베이스
amazonAWS

-server 업데이트후 실행하기

1. react파일 ">>npm run build" 명령어를 통해서 빌드 파일 업데이트
2. /src/backEnd/server 폴더로 이동하기.
3. npm start 이용하여 서버 실행하기.
4. localhost:3000 주소로 접속.

-WorkBook 생성 JSON 형식 예시
{
"control" : "create",
"writer" : "", // 로그인 user_num
"title" : "",
"path" : "C:/Users/example.hwp", // 파일 확장자 포함 절대 경로
"price" : ""
}
