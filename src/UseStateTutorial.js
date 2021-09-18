//learning HOOKS to become HOOKER
// useState tutorials

import React, { useState } from "react";

function UseStateTutorial() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const increment = () => {
    setCount(count + 1);
  };

  let showText = (event) => {
    const changeText = event.target.value;
    setText(changeText);
  };

  return (
    <div className="App">
      <input type="text" placeholder="write some text here" onChange={showText} />
      <h1>{text}</h1>
      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default UseStateTutorial;
