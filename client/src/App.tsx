import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Welcome from "./pages/welcome/Welcome";
import SignUp from "./pages/auth/signUp/SignUp";
import Main from "./pages/mainMenu/Main";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TaskDetails from "./pages/TaskDetails/TaskDetails";
import { useAppSelector } from "./redux/hooks";

function App() {
 
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Welcome />,
    },

    {
      path: "/signUp",
      element: <SignUp />,
    },
    {
      path: "/main",
      element: <Main />,
    },
    {
      path: "/details/:id",
      element: <TaskDetails />,
    },
  ]);

  return (
    <div className="">
      <RouterProvider router={router} />
      {/* <Main/> */}
      {/* <TaskDetails/> */}
    </div>
  );
}

export default App;
