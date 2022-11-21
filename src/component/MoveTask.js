import React from "react";

function MoveTask(props) {
  let statusId = props.statusList.indexOf(props.status);
  let status = props.statusList[statusId - 1];

  const handlerChange = (event) => {
    props.resetHandler();
    props.moveTask(event.target.value, statusId);
  };

  return (
    <>
      <select onChange={handlerChange}>
        <option>Select card</option>
        {props.task.map(
          (task) =>
            task.status === status && (
              <option value={task.id} key={task.id}>
                {task.name}
              </option>
            )
        )}
      </select>
    </>
  );
}

export default MoveTask;
