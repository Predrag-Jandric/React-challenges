import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import Panel from "./components/Panel";
import Ch1 from "./components/Challenges/Ch1";
import Ch2 from "./components/Challenges/Ch2";
import Ch3 from "./components/Challenges/Ch3";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "panel",
    element: <Panel />,
  },
  {
    path: "Ch1",
    element: <Ch1 />,
  },
  {
    path: "Ch2",
    element: <Ch2 />,
  },
  {
    path: "Ch3",
    element: <Ch3 />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
