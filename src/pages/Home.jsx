import React from "react";
import Navbar from "../utils/Navbar";
import { style, bodyStyle } from "../utils/BgStyle";
import { spaceURLs } from "../../URLs";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <main
      style={style}
      className="bg-[url('/src/assets/home/background-home-tablet.jpg')] lg:bg-[url('/src/assets/home/background-home-desktop.jpg')]"
    >
      <Navbar />

      <section
        style={bodyStyle}
        className="items-start lg:items-center mx-auto w-full md:max-w-[1000px] lg:max-w-[1200px]"
      >
        <div className="flex lg:flex-row flex-col flex-wrap gap-10 md:gap-5 md:py-0 py-5 items-center justify-between w-full min-h-[50vh]">
          <div className="styled-animate-left flex w-full max-w-[500px] flex-col items-center text-center lg:text-left">
            <p className="text-[20px] md:text-[28px] self-center lg:self-start">
              SO YOU WANT TO TRAVEL TO
            </p>
            <h1 className="text-[100px] md:text-[150px] w-full text-white">
              SPACE
            </h1>
            <p className="text-[18px]">
              Let&apos;s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well, sit back and relax because we will give you a truly out
              of the world experience!
            </p>
          </div>

          <button
            type="button"
            onClick={() => navigate(spaceURLs.destination)}
            className="styled-animate-right max-w-[150px] font-medium text-[20px] md:text-[28px] md:max-w-[200px] min-h-[150px] md:min-h-[200px] rounded-full duration-300 ease-in-out active:scale-90 hover:shadow-[rgba(0,0,0,0.3)] hover:shadow-[0px_0px_10px_50px_] bg-white text-black w-full"
          >
            EXPLORE
          </button>
        </div>
      </section>
    </main>
  );
};

export default Home;
