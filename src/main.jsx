import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Player from "./pages/Player.jsx";
import "./index.css";

// ROUTER
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home.jsx";

const router = createBrowserRouter([
  {
    path: "/animusic",
    element: <App />,
    children: [
      {
        path: "/animusic",
        element: <Home />,
      },
      {
        path: "/animusic/player",
        element: <Player />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
