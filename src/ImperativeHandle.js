// this is the way to use reference from child component in the parent component
// in the example, the code is changing state from child component with action of toggle the text, but the function from child component is called by parent component
// the way on how to do this is to use {forwardRef}, which indicated that you "forwarding" reference from "current" or child component to be used by parent component
//  then you need to wrap the entire child component with "forwardRef" and pass "ref" to the parameter (see Button.js for what I mean by this)
// {ImperativeHandle}, I guess that this has to do with the functionality of calling reference from child component, because by default, it is not possible.

import React, { useRef } from "react";
import Button from "./Button";

function ImperativeHandle() {
  const buttonRef = useRef(null);

  return (
    <div>
      <button
        onClick={() => {
          buttonRef.current.alterToggle();
        }}
      >
        Button from Parent Component
      </button>
      <Button ref={buttonRef} />
    </div>
  );
}

export default ImperativeHandle;
