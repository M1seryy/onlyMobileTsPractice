import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Welcome from "./pages/welcome/Welcome";
import SignUp from "./pages/auth/signUp/SignUp";
import Main from "./pages/mainMenu/Main";

function App() {
  return (
    <div className="App">
      <Welcome />
      {/* <SignUp /> */}
      {/* <Main /> */}
    </div>
  );
}

export default App;
