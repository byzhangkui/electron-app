import React from "react";
import ReactDOM from "react-dom";
import { IPCEvent } from '../common/event';

const add = () => {
  console.log('add');
}

const MainWindow = () => {
  return (
    <div>
      <div>hello</div>
      <button onClick={add}>add</button>
  </div>
  );
};

const appContainer = document.createElement('div');
document.body.appendChild(appContainer);

ReactDOM.render(<MainWindow />, appContainer);

export default appContainer;
