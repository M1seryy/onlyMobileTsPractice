import React, { ChangeEvent, FormEvent, useState } from "react";
import logo from "../../../assets/Group 5.png";
import "./index.css";
import userSvg from "../../../assets/userSvg.png";
import emailSvg from "../../../assets/emailSvgIcon.png";
import passSvg from "../../../assets/passSvgIcon.png";
import Button from "../../../components/Button/Button";
import { log } from "console";

type Props = {};

type userData = {
  fullName: string;
  email: string;
  password: string;
};

const SignUp = (props: Props) => {
  const initialState = {
    fullName: "",
    email: "",
    password: "",
  };
  const [formData, setFormData] = useState<userData>(initialState);

  const formHandle = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
  };

  const inputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="signWrapper">
      <img className="logoImg" src={logo} alt="logo" />
      <h2 className="mainText">Create your account</h2>
      <form onSubmit={formHandle} className="signUpForm">
        <div className="nameGroup">
          <label className="nameGroupText" htmlFor="name">
            Full Name
          </label>
          <div className="inputWrapper">
            <input
              value={formData.fullName}
              className="loginInput"
              name="fullName"
              id="name"
              type="text"
              onChange={inputHandler}
            />
            <img className="userSvg" src={userSvg} alt="userSvg" />
          </div>
        </div>

        <div className="emailGroup">
          <label className="emailGroupText" htmlFor="email">
            Email Address
          </label>
          <div className="inputWrapper">
            <input
              className="loginInput"
              name="email"
              id="email"
              type="email"
              value={formData.email}
              onChange={inputHandler}
            ></input>
            <img className="userSvg" src={emailSvg} alt="userSvg" />
          </div>
        </div>

        <div className="passGroup">
          <label className="passGroupText" htmlFor="pass">
            Password
          </label>
          <div className="inputWrapper">
            <input
              className="loginInput"
              name="password"
              id="email"
              type="password"
              value={formData.password}
              onChange={inputHandler}
            ></input>
            <img className="userSvg" src={passSvg} alt="userSvg" />
          </div>
        </div>
        <Button>Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUp;
