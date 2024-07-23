import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Welcome from "./pages/welcome/Welcome";
import SignUp from "./pages/auth/signUp/SignUp";
import Main from "./pages/mainMenu/Main";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TaskDetails from "./pages/TaskDetails/TaskDetails";
import { useAppSelector } from "./redux/hooks";
import { useDispatch } from "react-redux";
import { AppDispatch } from "./redux/store";
import { getTasks } from "./redux/slices/taskSlice";

function App() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    console.log("it works");
    dispatch(getTasks());
  }, []);
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
