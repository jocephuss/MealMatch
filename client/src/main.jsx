import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import DiscoverPage from "./pages/DiscoverPage";
import ErrorPage from "./pages/ErrorPage";
import FavoritePage from "./pages/FavoritePage";
import AuthenticatePage from "./pages/Authenticate.jsx";
import Signup from "./components/Signup";
import Login from "./components/Login";

import "./index.css";

const AppWithLoginHandler = ({ handleLogin }) => {
  return <App handleLogin={handleLogin} />;
};

const handleLogin = () => {};

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppWithLoginHandler handleLogin={handleLogin} />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <AuthenticatePage />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/favorite",
        element: <FavoritePage />,
      },
      {
        path: "/home",
        element: <DiscoverPage />,
      },
      {
        path: "/login",
        element: <Login onLogin={handleLogin} />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
