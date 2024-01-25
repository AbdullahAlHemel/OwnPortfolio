import {
    createBrowserRouter
  } from "react-router-dom";
import Main from "../Main/Main";
import ErrorPage from "../Main/ErrorPage";
import Home from "../Home/Home/Home";
import Contract from "../components/Contract/Contract";
import WhatIDo from "../Home/Home/WhatIDO/WhatIDo";

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
          path:'/contract',
          element:<Contract></Contract>
        },

        {
          path:'/skills',
          element:<WhatIDo></WhatIDo>
        }
        
      ]
    },
  ]);