import React from "react";
import AddNewTask from "./AddNewTask";
import MoveTask from "./MoveTask";
import { STATUS_LIST } from "../App";

function AddCard(props) {
  let [clicked, setClicked] = React.useState(false);

  const handlerClick = () => setClicked((clicked = true));
  const resetHandler = () => setClicked((clicked = false));

  return (
    <>
      {(clicked &&
        (props.status === STATUS_LIST[0] ? (
          <AddNewTask addTask={props.addTask} resetHandler={resetHandler} />
        ) : (
          <MoveTask
            task={props.task}
            status={props.status}
            moveTask={props.moveTask}
            resetHandler={resetHandler}
          />
        ))) || (
        <button onClick={handlerClick} className="button button_add-card">
          <div className="button-add-card__label">Add card</div>
        </button>
      )}
    </>
  );
}

export default AddCard;
