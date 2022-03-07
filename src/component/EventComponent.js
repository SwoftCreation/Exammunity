import React, { useState } from "react";

function EventPractice() {
  const [state, setState] = useState({
    username: "",
    message: "",
  });
  return (
    <div>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        name="message"
        placeholder="아무거나 입력하세요"
        value={state.username}
        onChange={(e) => {
          setState({ username: e.target.value });
          console.log(state.username);
        }}
      />
      <br />
      <input
        type="button"
        value="clear"
        onClick={() => {
          setState({ ...state.message, username: "" });
        }}
      />

      <h1>{state.username}</h1>
    </div>
  );
}

export default EventPractice;
