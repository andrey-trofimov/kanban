import React from "react";
import { useRef } from "react";

function AddNewTask(props) {
  const inputRef = useRef(null);
  let [style, changeState] = React.useState("button button_submit-inactive");

  const handlerChenge = (event) => {
    let newStyle = event.target.value
      ? "button button_submit-active"
      : "button button_submit-inactive";

    changeState((style = newStyle));
  };

  const handlerSubmit = () => {
    if (inputRef.current.value) {
      props.addTask(inputRef.current.value);
      props.resetHandler();
    }
  };

  return (
    <>
      <input
        type="text"
        className="input"
        onChange={handlerChenge}
        ref={inputRef}
      />
      <button className={style} onClick={handlerSubmit}>
        Submit
      </button>
    </>
  );
}

export default AddNewTask;
