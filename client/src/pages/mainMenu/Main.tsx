import React, { ChangeEvent, useEffect, useState } from "react";
import "./index.css";
import avatar from "../../assets/avatart.png";
import settingSvg from "../../assets/settingsSvg.png";
import searchSvg from "../../assets/searchSvg.png";
import TaskBlock from "../../components/taskBlock/TaskBlock";
import ProjectItem from "../../components/projectsBlock/ProjectItem";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { useDispatch } from "react-redux";
import { getTasks } from "../../redux/slices/taskSlice";
import { AsyncThunkAction } from "@reduxjs/toolkit";
import { AppDispatch } from "../../redux/store";

type Props = {};

interface taskData {
  id: number;
  title: string;
  complete: boolean;
  persantage: number;
}

const Main = (props: Props) => {
  const dispatch = useDispatch<AppDispatch>();

  const tasks = useAppSelector((state) => state.tasks);
  const navigate = useNavigate();
  const [search, setSearch] = useState<string>("");

  const onNavigateProjectHandler = (item: taskData) => {
    navigate(`/details/${item.id}`);
  };

  const onSearchHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };


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
        {tasks.map((item: taskData) => {
          return <TaskBlock key={item.id} data={item} />;
        })}
      </div>

      <span className="projectTitle">Ongoing Projects</span>
      <div className="projects">
        {search === ""
          ? tasks.map((item: taskData) => {
              return (
                <div
                  key={item.id}
                  onClick={() => onNavigateProjectHandler(item)}
                >
                  <ProjectItem data={item} />
                </div>
              );
            })
          : tasks
              .filter((item) => item.title.toLocaleLowerCase().includes(search))
              .map((item: taskData) => {
                return (
                  <div onClick={() => onNavigateProjectHandler(item)}>
                    {" "}
                    <ProjectItem key={item.id} data={item} />
                  </div>
                );
              })}
      </div>
    </div>
  );
};

export default Main;
