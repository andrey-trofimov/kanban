import React from "react";
import List from "./List";

function Main(props) {
  return (
    <main className="main">
      <div className="main__layout">
        {Object.keys(props.task).map((taskStatus, index) => (
          <List
            task={props.task}
            status={taskStatus}
            key={index}
            addTask={props.addTask}
            moveTask={props.moveTask}
          />
        ))}
      </div>
    </main>
  );
}

export default Main;
