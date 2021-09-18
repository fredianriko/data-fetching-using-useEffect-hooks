//example of how to use hook "useRef"
// when you want to use the value from input form as "reference" for other action to do

import React, { useRef, useState } from "react";

function RefTutorial() {
  const [text, setText] = useState("Riko");
  const inputRef = useRef(null);

  const onClick = () => {
    if (inputRef.current.value == "") {
      setText(text);
      inputRef.current.focus();
      alert("input form cannot be blank you son of bitch");
    } else {
      console.log(inputRef.current.value);
      setText(inputRef.current.value);
      inputRef.current.focus();
      inputRef.current.value = "";
    }
  };

  return (
    <div>
      <h1>{text}</h1>
      <input type="text" placeholder="test" ref={inputRef} />
      <button onClick={onClick}>Change Name</button>
    </div>
  );
}

export default RefTutorial;
