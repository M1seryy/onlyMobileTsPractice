import React, { Fragment } from "react";
import logo from "../../assets/Group 5.png";
import text from "../../assets/welcomeText.png";
import work from "../../assets/work-in-progress_pana.png";

import "./index.css";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";

type Props = {};

const Welcome = (props: Props) => {
  const navigate = useNavigate();
  const navigateHandler = () => {
    navigate("/signUp");
  };
  return (
    <div className="container">
      <img src={logo} alt="logo" />
      <div className="mainImgBlock">
        <img className="mainImg" src={work} />
      </div>
      <img className="welcomeText" src={text} alt="some big text" />
      {/* <button className="startBtn">Let’s Start</button> */}
      <div onClick={() => navigateHandler()}>
        <Button>Let’s Start</Button>
      </div>
    </div>
  );
};

export default Welcome;
