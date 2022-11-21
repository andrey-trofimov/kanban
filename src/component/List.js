import React from "react";
import Item from "./Item";
import AddCard from "./AddCard";

// import dataMock from "../dataMock.json";

// let initialTask = dataMock;

// let initialTask = [];
let initialTask = JSON.parse(localStorage.data) || [];

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task: initialTask,
    };
  }

  addTask = (name) => {
    let newTask = {};
    newTask.id = this.state.task.length || 0;
    newTask.status = this.props.statusList[0];
    newTask.name = name;
    newTask.description = "";

    initialTask.push(newTask);

    this.setState({ task: initialTask });
    localStorage.data = JSON.stringify(this.state.task);
  };

  moveTask = (id, statusId) => {
    let newStatus = this.props.statusList[statusId];
    initialTask.forEach((task) => {
      if (task.id === +id) task.status = newStatus;
    });

    this.setState({ task: initialTask });
    localStorage.data = JSON.stringify(this.state.task);
  };

  render() {
    return (
      <>
        <div className="list">
          <h2 className="list__title">{this.props.title}</h2>
          <div className="list__scroll">
            <Item task={this.state.task} status={this.props.title} />
            <AddCard
              task={this.state.task}
              status={this.props.title}
              statusList={this.props.statusList}
              addTask={this.addTask}
              moveTask={this.moveTask}
            />
          </div>
        </div>
      </>
    );
  }
}
export default List;
