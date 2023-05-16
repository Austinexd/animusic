import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// ROUTER
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./pages/About.jsx";
import Home from "./pages/Home.jsx";
import Signup from "./pages/Signup.jsx";
import Login from "./pages/Login.jsx";

const router = createBrowserRouter([
  {
    path: "/animusic",
    element: <App />,
    children: [
      {
        path: "animusic/",
        element: <Home />,
      },
      {
        path: "animusic/about",
        element: <About />,
      },
      {
        path: "animusic/signup",
        element: <Signup />,
      },
      {
        path: "animusic/login",
        element: <Login />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
