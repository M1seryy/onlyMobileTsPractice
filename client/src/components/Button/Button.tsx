import React from "react";
import "./index.css";

type Props = {};

const Button = ({ children }: any) => {
  return <button  className="startBtn">{children}</button>;
};

export default Button;
