//install axios (for making API calls)
//explanation more details of the useEffect Hooks can be found on the official documentation
//below is one of the example of how to use it

import React, { useEffect, useState } from "react";
import axios from "axios";

const EffectTutorial = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/comments").then((response) => {
      setData(response.data[0].email);
      console.log("API WAS CALLED");
      console.log("this is side effect of react using useEffect");
    });
  }, []);

  return <div> Hello World {data}</div>;
};

export default EffectTutorial;
