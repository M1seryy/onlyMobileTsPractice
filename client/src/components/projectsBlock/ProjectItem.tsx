import React, { FC } from "react";
import "./index.css";
import Progress from "../CircleProgressBar/Progress";

interface taskData {
  id: number;
  title: string;
  complete: boolean;
  persantage: number;
}

interface data {
  data: taskData;
}

const ProjectItem: FC<data> = ({ data }) => {
  return (
    <div className="projectWrapper">
      <h2 className="projectTtile">{data.title}</h2>
      <span className="projectSupText">Due on : 21 March</span>
      <div className="prog">
        {" "}
        <Progress data={data} />
      </div>
    </div>
  );
};

export default ProjectItem;
