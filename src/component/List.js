import React from "react";
import Item from "./Item";
import AddCard from "./AddCard";

function List(props) {
  return (
    <>
      <div className="list">
        <h2 className="list__title">{props.title}</h2>
        <div className="list__scroll">
          <Item task={props.task} status={props.title} />
          <AddCard
            status={props.title}
            statusList={props.statusList}
            addTask={props.addTask}
          />
        </div>
      </div>
    </>
  );
}

export default List;
