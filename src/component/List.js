import React from "react";
import Item from "./Item";
import AddCard from "./AddCard";

function List(props) {
  return (
    <>
      <div className="list">
        <h2 className="list__title">{props.status}</h2>
        <div className="list__scroll">
          <Item task={props.task} status={props.status} />
          <AddCard
            task={props.task}
            status={props.status}
            addTask={props.addTask}
            moveTask={props.moveTask}
          />
        </div>
      </div>
    </>
  );
}

export default List;
