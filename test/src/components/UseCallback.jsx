import React, { useState, useCallback } from "react";
import ChidlButton from "./ChidlButton";

function WithUseCallback() {
  const [count, setCount] = useState(0);
  const handleClick = useCallback(()=>{
    console.log("Child button clicked");
  },[])   
 console.log("parent rendered");
  return (
    <div className="container mt-4">
      <p>Count: {count}</p>
      <button className="btn btn-success"
        onClick={() => setCount(count + 1)}>
        Increase Count </button>
      <ChidlButton onClick={handleClick} />
    </div>
  );
}

export default WithUseCallback;