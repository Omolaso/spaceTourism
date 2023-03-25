import React, { Suspense } from "react";
import { spaceURLs } from "./URLs";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import logo from "./src/assets/shared/logo.svg";

const Routers = () => {
  const Home = React.lazy(() => import("./src/pages/Home"));
  const ErrorPage = React.lazy(() => import("./src/pages/ErrorPage"));
  const Crew = React.lazy(() => import("./src/pages/Crew"));
  const Destination = React.lazy(() => import("./src/pages/Destination"));
  const Technology = React.lazy(() => import("./src/pages/Technology"));

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

  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-black">
          <img src={logo} alt="Loading..." className="animate-spin" />
        </div>
      }
    >
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default Routers;
