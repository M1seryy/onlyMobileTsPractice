import React from "react";
import "./index.css";
import Progress from "../../components/CircleProgressBar/Progress";
import Todo from "../../components/Todo/Todo";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAppSelector } from "../../redux/hooks";

type Props = {};

interface taskItem {
  id: number;
  task: string;
  dueDate: string;
  priority: string;
  completed: boolean;
}
interface ProjectItem {
  complete: boolean;
  id: number;
  persantage: number;
  title: string;
  todo: taskItem[];
}

const TaskDetails = (props: Props) => {
  const allTasks = useAppSelector((state) => state.tasks.project);
  const { id } = useParams();
  const currentTask: ProjectItem[] = allTasks.filter(
    (item) => item.id === Number(id)
  );
  const data = {
    id: Math.random(),
    title: "Real Estate Website Design",
    complete: true,
    persantage: 75,
  };
  return (
    <div className="detailsWrapper">
      {allTasks.length !== 0 ? (
        <>
          <h2 className="detailsTitle">Task Details</h2>
          <h2 className="taskName">{currentTask[0].title}</h2>
          <div className="projectDetails">
            <span className="projectSubText">Project Details</span>
            <span className="projectSupText">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled
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
                {currentTask.length !== 0
                  ? currentTask[0].todo.map((item) => (
                      <Todo data={item} key={item.id} />
                    ))
                  : null}
              </div>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default TaskDetails;
