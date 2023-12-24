import {
    createBrowserRouter
  } from "react-router-dom";
import Main from "../Main/Main";
import ErrorPage from "../Main/ErrorPage";
import Home from "../Home/Home/Home";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children: [
        {
          path:'/',
          element:<Home></Home>
        },
        
      ]
    },
  ]);