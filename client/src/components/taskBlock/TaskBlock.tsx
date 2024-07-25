import React, { FC } from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";

interface taskData {
  data: {
    id: number;
    title: string;
    complete: boolean;
    persantage: number;
  };
}

const TaskBlock: FC<taskData> = ({ data }) => {
  const navigate = useNavigate();
  const onNavigateProjectHandler = () => {
    navigate(`/details/${data.id}`);
  };

  return (
    <div className="taskBlockWrapper" onClick={onNavigateProjectHandler}>
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
