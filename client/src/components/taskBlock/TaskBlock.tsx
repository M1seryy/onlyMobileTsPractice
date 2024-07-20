import React, { FC } from "react";
import "./index.css";

interface taskData {
  data: {
    id: number;
    title: string;
    complete: boolean;
    persantage: number;
  };
}

const TaskBlock: FC<taskData> = ({ data }) => {
  return (
    <div className="taskBlockWrapper">
      <h2 className="taskTtitle">{data.title}</h2>

      <div className="progresWrapper">
        <span className="progressTitle">Completed</span>
        <span className="persantage">{data.persantage} %</span>
      </div>
      {data.persantage === 0 ? (
        <div className="progressBarZero"></div>
      ) : (
        <div className="progressBar" style={{ width: data.persantage }}></div>
      )}
    </div>
  );
};

export default TaskBlock;
