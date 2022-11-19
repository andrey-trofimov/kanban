import React from "react";

function Item(props) {
  // let [taskArr, setTaskArr] = React.useState(props.task);
  // setTaskArr((taskArr = JSON.parse(localStorage.data)));

  if (props.task !== []) {
    return (
      <>
        <ul>
          {props.task.map(
            (task) =>
              task.status === props.status && (
                <li className="list__item" key={task.id}>
                  {task.name}
                </li>
              )
          )}
        </ul>
      </>
    );
  }
}

export default Item;
