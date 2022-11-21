import React from "react";
import List from "./List";
import { STATUS_LIST } from "../App";

function Main(props) {
  return (
    <main className="main">
      <div className="main__layout">
        {STATUS_LIST.map((status, index) => (
          <List
            status={status}
            key={index}
            task={props.task}
            addTask={props.addTask}
            moveTask={props.moveTask}
          />
        ))}
      </div>
    </main>
  );
}

export default Main;
