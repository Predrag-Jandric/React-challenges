import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import ErrorPage from './components/ErrorPage';
import Panel from './components/Panel';
import Challenge1 from './components/Challenges/Challenge1';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage/>,
  },
  {
    path: "panel",
    element: <Panel />,
  },
  {
    path: "challenge1",
    element: <Challenge1 />,
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

