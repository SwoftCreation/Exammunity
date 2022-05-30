import { legacy_createStore } from "redux";

function StateChanged() {
  /*
  TODO:
    store의 state가 변경되면 stateChanged 안의 코드가 실행됩니다
    ( 변경: 생성, 삭제, 수정 )
  */
  console.log("stateChanged");
  const store = legacy_createStore();
  const updatedState = store.getStore();
  console.log(updatedState);
}

export default StateChanged;
