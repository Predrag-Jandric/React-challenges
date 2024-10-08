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
import Ch4 from "./components/Challenges/Ch4";
import Ch5 from "./components/Challenges/Ch5";
import Ch6 from "./components/Challenges/Ch6";
import Ch7 from "./components/Challenges/Ch7";
import Ch8 from "./components/Challenges/Ch8";

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
  {
    path: "Ch4",
    element: <Ch4 />,
  },
  {
    path: "Ch5",
    element: <Ch5 />,
  },
  {
    path: "Ch6",
    element: <Ch6 />,
  },
  {
    path: "Ch7",
    element: <Ch7 />,
  },
  {
    path: "Ch8",
    element: <Ch8 />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
