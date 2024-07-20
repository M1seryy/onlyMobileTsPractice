import React from "react";
import logo from "../../assets/Group 5.png";
import text from "../../assets/welcomeText.png";
import work from "../../assets/work-in-progress_pana.png";

import "./index.css";
import Button from "../../components/Button/Button";

type Props = {};

const Welcome = (props: Props) => {
  return (
    <div className="container">
      <img src={logo} alt="logo" />
      <div className="mainImgBlock">
        <img className="mainImg" src={work} />
      </div>
      <img className="welcomeText" src={text} alt="some big text" />
      {/* <button className="startBtn">Let’s Start</button> */}
      <Button>Let’s Start</Button>
    </div>
  );
};

export default Welcome;
