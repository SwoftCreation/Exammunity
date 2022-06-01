function StateChanged() {
  /*
  TODO:
    store의 state가 변경되면 stateChanged 안의 코드가 실행됩니다
    ( 변경: 생성, 삭제, 수정 )
  */
  console.log("***State Changed***");

  fetch("/api/cmtext", {
    method: "GET",
  }).then((response) => {
    console.log("***게시글 가져오기***");
    console.log(response);
  });
}

export default StateChanged;
