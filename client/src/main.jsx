import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ApolloProvider } from "@apollo/client"; // Import ApolloProvider
import client from "./apolloClient"; // Import the Apollo client

import App from "./App.jsx";
import DiscoverPage from "./pages/DiscoverPage";
import ErrorPage from "./pages/ErrorPage";
import FavoritePage from "./pages/FavoritePage";
import AuthenticatePage from "./pages/Authenticate.jsx";
import Signup from "./pages/Signup.jsx";

import "./index.css";

const handleLogin = () => {
  console.log("User logged in");
};

// Define the router
const router = createBrowserRouter([
  {
    path: "/",
    element: <App handleLogin={handleLogin} />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <AuthenticatePage onLogin={handleLogin} />,
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
    ],
  },
]);

// Render the application with ApolloProvider
ReactDOM.createRoot(document.getElementById("root")).render(
  <ApolloProvider client={client}>
    <RouterProvider router={router} />
  </ApolloProvider>
);
