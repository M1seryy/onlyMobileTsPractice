import React, { FC } from "react";
import "./index.css";
import checkBox from "../../assets/svgCircle.png";

interface taskItem {
  id: number;
  task: string;
  dueDate: string;
  priority: string;
  completed: boolean;
}

type Props = {};
interface todoItem {
  data: taskItem;
}

const Todo: FC<todoItem> = ({ data }) => {
  return (
    <div className="todoWrapper">
      <span className="todoTitle">{data.task}</span>
      <div className="taskCheckBox">
        <img src={checkBox} alt="checkBoxLogo" />
      </div>
    </div>
  );
};

export default Todo;
