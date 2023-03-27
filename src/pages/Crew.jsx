import React, { useState } from "react";
import { style } from "../utils/BgStyle";
import Navbar from "../utils/Navbar";
import data from "../../data.json";

const Crew = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { crew } = data;

  return (
    <main
      style={style}
      className="bg-[url('/src/assets/crew/background-crew-tablet.jpg')] md:bg-[url('/src/assets/crew/background-crew-desktop.jpg')]"
    >
      <Navbar />
      <section className="flex justify-center px-4 items-start lg:items-center mx-auto w-full md:max-w-[1000px] lg:max-w-[1200px]">
        <div className="w-full flex h-full flex-col items-center gap-5 md:gap-5 lg:text-left text-center">
          <h1 className="styled-animate-left text-[22px] md:text-[28px] lg:self-start self-center">
            MEET YOUR CREW
          </h1>
          <div className="flex h-full flex-col-reverse md:flex-col lg:flex-row w-full gap-5 items-center justify-between">
            <div className="styled-animate-opaque flex flex-1 flex-col items-center lg:items-start gap-5">
              <p className="text-[18px] md:text-[22px]">
                {crew[currentIndex].role.toUpperCase()}
              </p>
              <h2 className="text-[30px] md:text-[50px] text-white">
                {crew[currentIndex].name.toUpperCase()}
              </h2>
              <p className="text-[18px] md:text-[22px]">
                {crew[currentIndex].bio}
              </p>
              <div className="flex flex-row gap-4 w-full items-center justify-center lg:justify-start min-h-[50px]">
                {crew.map((member, index) => (
                  <button
                    key={member.name}
                    onClick={() => setCurrentIndex(index)}
                  >
                    <div
                      className={
                        member.name === crew[currentIndex].name
                          ? "w-[15px] h-[15px] bg-white rounded-full hover:bg-blue duration-300 ease-linear"
                          : "w-[15px] h-[15px] bg-grey rounded-full hover:bg-blue duration-300 ease-linear"
                      }
                    />
                  </button>
                ))}
              </div>
            </div>
            <img
              src={crew[currentIndex].images.png}
              alt={crew[currentIndex].name}
              className="styled-animate-opaque flex-1 max-w-[235px] md:max-w-[535px]"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Crew;
