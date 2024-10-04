// import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import DiscoverPage from "./pages/DiscoverPage";
import ErrorPage from "./pages/ErrorPage";
import FavoritePage from "./pages/FavoritePage"; 
import LoginPage from "./pages/Login";
import Signup from "./pages/Signup";

import "./index.css";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <DiscoverPage />
      }, {
        path: '/favorite',
        element: <FavoritePage />
      }, {
        path: '/signup',
        element: <Signup />
      }, {
        path: '/login',
        element: <LoginPage />
      }, 
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
