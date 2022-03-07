import React, { useState } from "react";
import "../App.css";

function EventPractice() {
  const input2 = React.createRef();
  const handleFocus = () => {
    input2.current.Focus();
  };

  return (
    <div>
      <input type="text" name="textInput" ref={input2} className="textArea" />
      <input
        type="button"
        name="buttonFocus"
        value="button"
        onClick={handleFocus}
      />
    </div>
  );
}

export default EventPractice;
