import React from "react";
import { spaceURLs } from "./URLs";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, Crew, Destination, Technology, ErrorPage } from "./src/pages";

const Routers = () => {
  const router = createBrowserRouter([
    {
      path: spaceURLs.landingPage,
      element: <Home />,
      errorElement: <ErrorPage />,
    },
    {
      path: spaceURLs.home,
      element: <Home />,
    },
    {
      path: spaceURLs.crew,
      element: <Crew />,
    },
    {
      path: spaceURLs.destination,
      element: <Destination />,
    },
    {
      path: spaceURLs.tech,
      element: <Technology />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Routers;
