import React from "react";
import { useRouteError, useNavigate } from "react-router-dom";
import { spaceURLs } from "../../URLs";

const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  return (
    <main className="flex items-center p-4 justify-center min-h-screen bg-center bg-no-repeat bg-cover bg-[url('../../assets/home/background-home-tablet.jpg')] md:bg-[url('../../assets/home/background-home-desktop.jpg')]">
      <section className="flex text-blue flex-col gap-5 text-center text-[16px] md:text-[22px]">
        <h1 className="flex text-[20px] md:text-[24px] items-center justify-center">
          Oops! <span>&#129301;</span>
        </h1>

        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
        <button
          type="button"
          className=" text-black bg-white p-4 rounded-full hover:shadow-[0px_0px_7px_7px_] active:scale-90 duration-300 ease-in-out hover:shadow-blue"
          onClick={() => navigate(spaceURLs.home)}
        >
          Back To Space
        </button>
      </section>
    </main>
  );
};

export default ErrorPage;
