import React from 'react';
import { Redirect } from "react-router-dom";
const Login = React.lazy(() => import("@/pages/login"));
const Register = React.lazy(() => import("@/pages/login/register"));

const routes = [
    {
      path: "/",
      exact: true,
      render: () => (
        <Redirect to="/login"/>
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
  ];
  
  export default routes;