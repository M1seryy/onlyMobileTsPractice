import React from "react";
import "./index.css";
import Progress from "../../components/CircleProgressBar/Progress";
import Todo from "../../components/Todo/Todo";
import { useParams } from "react-router-dom";

type Props = {};



const TaskDetails = (props: Props) => {
  const { id } = useParams();
  console.log('id: ', id);
  const testArr = [1, 2, 3, 4];
  const data = {
    id: Math.random(),
    title: "Real Estate Website Design",
    complete: true,
    persantage: 75,
  };
  return (
    <div className="detailsWrapper">
      <h2 className="detailsTitle">Task Details</h2>
      <h2 className="taskName">Real Estate App Design</h2>
      <div className="projectDetails">
        <span className="projectSubText">Project Details</span>
        <span className="projectSupText">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled
        </span>
        <div className="progressBlock">
          <span className="progressTitle">Project Progress</span>

          <div className="prog">
            <Progress data={data} />
          </div>
        </div>
        <div className="taskBlock">
          <h2 className="taskBlockTitle">All tasks</h2>
          <div className="todoBlock">
            {
                testArr.map(item => <Todo key={Math.random()}/>)
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskDetails;
