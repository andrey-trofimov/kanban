import Header from "./component/Header";
import Main from "./component/Main";
import Footer from "./component/Footer";
import React from "react";

export const STATUS_LIST = ["Backlog", "Ready", "In Progress", "Finished"];

// import dataMock from "./dataMock.json";
// let initialTask = dataMock;

// let initialTask = [];
let initialTask = JSON.parse(localStorage.data) || [];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task: initialTask,
    };
  }

  addTask = (name) => {
    let newTask = {};
    newTask.id = this.state.task.length || 0;
    newTask.status = STATUS_LIST[0];
    newTask.name = name;
    newTask.description = "";

    initialTask.push(newTask);
    this.writeTask(initialTask);
  };

  moveTask = (id, statusId) => {
    initialTask.forEach((task) => {
      if (task.id === +id) task.status = STATUS_LIST[statusId];
    });

    this.writeTask(initialTask);
  };

  writeTask = (task) => {
    this.setState({ task: task });
    localStorage.data = JSON.stringify(this.state.task);
  };

  render() {
    return (
      <div className="container">
        <Header />
        <Main
          task={this.state.task}
          statusList={this.statusList}
          addTask={this.addTask}
          moveTask={this.moveTask}
        />
        <Footer task={this.state.task} />
      </div>
    );
  }
}
export default App;
