import React, { ChangeEvent, useState } from "react";
import "./index.css";
import avatar from "../../assets/avatart.png";
import settingSvg from "../../assets/settingsSvg.png";
import searchSvg from "../../assets/searchSvg.png";
import TaskBlock from "../../components/taskBlock/TaskBlock";
import ProjectItem from "../../components/projectsBlock/ProjectItem";

type Props = {};

interface taskData {
  id: number;
  title: string;
  complete: boolean;
  persantage: number;
}

const Main = (props: Props) => {
  const [search, setSearch] = useState<string>("");

  const onSearchHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const completeTasks: taskData[] = [
    {
      id: Math.random(),
      title: "Real Estate Website Design",
      complete: true,
      persantage: 75,
    },
    {
      id: Math.random(),
      title: "Finance Mobile App Design",
      complete: false,
      persantage: 50,
    },
    {
      id: Math.random(),
      title: "Real Estate Website Design",
      complete: false,
      persantage: 0,
    },
  ];

  return (
    <div className="MainWrapper">
      <div className="header">
        <div className="userData">
          <span className="userDataSubText">Welcome Back!</span>
          <h2 className="userName">Fazil Laghari</h2>
        </div>
        <div className="userAvatar">
          <img src={avatar} alt="userAva" />
        </div>
      </div>

      <div className="searchBlock">
        <input
          onChange={onSearchHandler}
          type="text"
          className="taskSearch"
          placeholder="Seach tasks"
        />
        <img className="searchImg" src={searchSvg} alt="" />

        <button className="findBtn">
          <img src={settingSvg} alt="" />
        </button>
      </div>

      <div className="conmpleteTasks">
        {completeTasks.map((item: taskData) => {
          return <TaskBlock key={item.id} data={item} />;
        })}
      </div>

      <span className="projectTitle">Ongoing Projects</span>
      <div className="projects">
        {search === ""
          ? completeTasks.map((item: taskData) => {
              return <ProjectItem key={item.id} data={item} />;
            })
          : completeTasks
              .filter((item) => item.title.toLocaleLowerCase().includes(search))
              .map((item: taskData) => {
                return <ProjectItem key={item.id} data={item} />;
              })}
      </div>
    </div>
  );
};

export default Main;
