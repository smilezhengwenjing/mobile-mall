import React from 'react';
import {
  Redirect
} from "react-router-dom";
const Login = React.lazy(() => import("@/pages/login/login"));
const Register = React.lazy(() => import("@/pages/login/register"));
const Home = React.lazy(() => import("@/pages/Home/home"));

const routes = [{
    path: "/",
    exact: true,
    render: () => ( <
      Redirect to = "/login" / >
    )
  },
  {
    path: "/login",
    component: Login
  },
  {
    path: "/register",
    component: Register
  },
  {
    path: "/Home",
    component: Home
  },
];

export default routes;