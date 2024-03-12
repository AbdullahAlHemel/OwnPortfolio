import {
    createBrowserRouter
  } from "react-router-dom";
import Main from "../Main/Main";
import ErrorPage from "../Main/ErrorPage";
import Home from "../Home/Home/Home";
import Contract from "../components/Contract/Contract";
import WhatIDo from "../Home/Home/WhatIDO/Skills";
import Skills from "../Home/Home/WhatIDO/Skills";
import Projects from "../components/Projects/Projects";
import Education from "../components/Edu/Education";

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

        {
          path:'/skill',
          element:<Skills></Skills>
        },
        
        {
          path:'/project',
          element:<Projects></Projects>
        },

        {
          path:'/Education',
          element:<Education></Education>
        },
        {
          path:'/contract',
          element:<Contract></Contract>
        }
        
      ]
    },
  ]);