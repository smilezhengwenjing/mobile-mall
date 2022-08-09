import React, { memo, Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
// import { Provider } from "react-redux";
// import store from "./store";
import routes from "@/router";
export default memo(function App() {
    return (
        <BrowserRouter>
          <Suspense fallback={<h1>loading...</h1>}>{renderRoutes(routes)}</Suspense>
        </BrowserRouter>
    );
  });