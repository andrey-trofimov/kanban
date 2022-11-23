import React from "react";
import { useRef } from "react";
import AddCard from "./AddCard";

function AddNewTask(props) {
  const inputRef = useRef(null);

  let [clicked, setClicked] = React.useState(false);
  const handlerClick = () => setClicked((clicked = true));
  const resetHandler = () => setClicked((clicked = false));

  let [style, changeState] = React.useState("button button_submit-inactive");
  const handlerChenge = (event) => {
    event.target.value && changeState((style = "button button_submit-active"));
  };

  const handlerSubmit = () => {
    if (inputRef.current.value) {
      props.addTask(inputRef.current.value);
      resetHandler();
      changeState((style = "button button_submit-inactive"));
    }
  };

  let inputForm = (
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

  return (
    <>
      {(clicked && inputForm) || (
        <AddCard isDisabled={false} handlerClick={handlerClick} />
      )}
    </>
  );
}

export default AddNewTask;
