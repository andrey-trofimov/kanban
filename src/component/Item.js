import React from "react";

function Item(props) {
  if (props.task !== {}) {
    return (
      <>
        <ul>
          {props.task[props.status].map((task) => (
            <li className="list__item" key={task.id}>
              {task.name}
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default Item;
