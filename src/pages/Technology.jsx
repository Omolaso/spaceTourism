import React, { useState } from "react";
import { style } from "../utils/BgStyle";
import Navbar from "../utils/Navbar";
import { data } from "../../data";

const Technology = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { technology } = data;

  return (
    <main
      style={style}
      className="bg-[url('/src/assets/technology/background-technology-tablet.jpg')] md:bg-[url('/src/assets/technology/background-technology-desktop.jpg')]"
    >
      <Navbar />
      <section className="flex justify-end py-2 items-start lg:items-center w-full">
        <div className="w-full flex h-full flex-col gap-5 md:gap-5 lg:text-left text-center md:max-w-[1000px] lg:max-w-[1200px]">
          <h1 className="styled-animate-left md:px-5 text-[22px] md:text-[28px] md:self-start self-center">
            SPACE LAUNCH
          </h1>
          <div className="styled-animate-opaque flex h-full flex-col-reverse lg:flex-row w-full gap-5 items-center justify-between">
            <div className="flex flex-col lg:flex-row gap-8 p-4 items-center text-center lg:text-left lg:items-start h-full flex-1 lg:px-5">
              <div className="flex flex-row lg:flex-col gap-4 item-center lg:items-start">
                {technology.map((tech, index) => (
                  <button
                    type="button"
                    key={tech.name}
                    onClick={() => setCurrentIndex(index)}
                    className={
                      currentIndex === index
                        ? "min-h-[50px] lg:min-h-[80px] text-[16px] md:text-[18px] h-full w-full min-w-[50px] lg:min-w-[80px] border border-white bg-white text-black duration-300 ease-in-out rounded-full"
                        : "min-h-[50px] lg:min-h-[80px] text-[16px] md:text-[18px] h-full w-full min-w-[50px] lg:min-w-[80px] border border-white bg-[transparent] text-white duration-300 ease-in-out rounded-full"
                    }
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
              <div className="flex flex-col gap-2 items-center lg:items-start flex-1 mx-auto max-w-[330px] md:max-w-full md:mx-0 lg:max-w-[470px]">
                <small className="text-[15px] md:text-[18px]">
                  THE TERMINOLOGY...
                </small>
                <h1 className="text-[30px] md:text-[50px]">
                  {technology[currentIndex].name}
                </h1>
                <p className="text-[16px] md:text-[18px]">
                  {technology[currentIndex].description}
                </p>
              </div>
            </div>
            <img
              src={technology[currentIndex].images.portrait}
              alt={technology[currentIndex].name}
              className="hidden lg:block max-h-[500px] flex-1"
            />
            <img
              src={technology[currentIndex].images.landscape}
              alt={technology[currentIndex].name}
              className="block lg:hidden flex-1 md:min-w-[768px] md:max-h-[350px] border"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Technology;
