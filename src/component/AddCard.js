import React from "react";
import AddNewTask from "./AddNewTask";
import MoveTask from "./MoveTask";

function AddCard(props) {
  let [clicked, showHandler] = React.useState(false);

  const handlerClick = () => {
    showHandler((clicked = true));
  };

  const resetHandler = () => {
    showHandler((clicked = false));
  };

  return (
    <>
      {(clicked &&
        (props.status === props.statusList[0] ? (
          <AddNewTask addTask={props.addTask} resetHandler={resetHandler} />
        ) : (
          <MoveTask resetHandler={resetHandler} />
        ))) || (
        <button onClick={handlerClick} className="button button_add-card">
          <div className="button-add-card__label">Add card</div>
        </button>
      )}
    </>
  );
}

export default AddCard;
