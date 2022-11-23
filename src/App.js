import React from "react";
import Header from "./component/Header";
import Main from "./component/Main";
import Footer from "./component/Footer";
import dataMock from "./dataMock.json";

let initialTask = JSON.parse(localStorage.data) || dataMock;
let statusList = Object.keys(initialTask);
// let userMenuData = [];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task: initialTask,
    };
  }

  addTask = (name) => {
    let newTask = {};
    newTask.id = new Date();
    newTask.name = name;
    newTask.description = "";

    initialTask[statusList[0]].push(newTask);
    this.writeTask(initialTask);
  };

  moveTask = (id, taskId) => {
    let currentList = this.state.task[statusList[taskId]];
    let nextList = this.state.task[statusList[taskId + 1]];

    currentList.forEach((task, index) => {
      if (String(task.id) === id) {
        nextList.push(task);
        currentList.splice(index, 1);
      }
    });

    this.writeTask(initialTask);
  };

  resetBoard = () => {
    initialTask = { Backlog: [], Ready: [], "In Progress": [], Finished: [] };
    this.writeTask(initialTask);
  };

  loadMock = () => {
    this.writeTask(dataMock);
  };

  writeTask = (task) => {
    this.setState({ task: task });
    localStorage.data = JSON.stringify(task);
  };

  render() {
    let userMenuData = [
      { link: "/", title: "Profile", action: null },
      { link: "/", title: "Log Out", action: null },
      { link: "/", title: "Load mock", action: this.loadMock },
      { link: "/", title: "Reset", action: this.resetBoard },
    ];

    return (
      <div className="container">
        <Header userMenuData={userMenuData} />
        <Main
          task={this.state.task}
          addTask={this.addTask}
          moveTask={this.moveTask}
        />
        <Footer task={this.state.task} />
      </div>
    );
  }
}
export default App;
