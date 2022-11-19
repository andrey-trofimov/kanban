import React from "react";
import List from "./List";
import dataMock from "../dataMock.json";

function Main(props) {
  // let initialTask = dataMock;
  let initialTask = [];
  // let initialTask = JSON.parse(localStorage.data) || [];

  const statusList = ["Backlog", "Ready", "In Progress", "Finished"];
  let [task, pushTask] = React.useState(initialTask);

  const addTask = (name) => {
    let newTask = {};
    newTask.id = task.length || 0;
    newTask.status = statusList[0];
    newTask.name = name;
    newTask.description = "";

    initialTask.push(newTask);
    pushTask((task = initialTask));

    localStorage.data = JSON.stringify(initialTask);
  };

  return (
    <main className="main">
      <div className="main__layout">
        {statusList.map((title, index) => (
          <List
            title={title}
            key={index}
            task={task}
            statusList={statusList}
            addTask={addTask}
          />
        ))}
      </div>
    </main>
  );
}

export default Main;
