import React, { useState } from "react";
import ReactDOM from "react-dom";
import { IPCEvent } from "../common/event";

declare global {
  interface Window {
    api: {
      add(i: number): number;
    };
  }
}

const MainWindow = () => {
  const [count, setCount] = useState(0);
  const add = async () => {
    const newCount = await window.api.add(count);
    setCount(newCount);
  };

  return (
    <div>
      <div>{count}</div>
      <button onClick={add}>add</button>
    </div>
  );
};

const appContainer = document.createElement("div");
document.body.appendChild(appContainer);

ReactDOM.render(<MainWindow />, appContainer);

export default appContainer;
