import React from 'react';
import { Redirect } from "react-router-dom";
const Login = React.lazy(() => import("@/pages/login/login"));
const Register = React.lazy(() => import("@/pages/login/register"));
const Detail = React.lazy(() => import("@/pages/detail"));
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
    {
        path: "/detail",
        component: Detail
    },
    
  ];
  
  export default routes;