import React from "react";
import "./index.css";
import checkBox from "../../assets/svgCircle.png"

type Props = {};

const Todo = (props: Props) => {
  return (
    <div className="todoWrapper">
      <span className="todoTitle">User Interviews</span>
      <div className="taskCheckBox">
        <img src={checkBox} alt="checkBoxLogo" />
      </div>
    </div>
  );
};

export default Todo;
