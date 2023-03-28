import React, { useState } from "react";
import Navbar from "../utils/Navbar";
import { style, bodyStyle } from "../utils/BgStyle";
import { data } from "../../data";

const Destination = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { destinations } = data;

  return (
    <main
      style={style}
      className="bg-[url('/src/assets/destination/background-destination-tablet.jpg')] lg:bg-[url('/src/assets/destination/background-destination-desktop.jpg')]"
    >
      <Navbar />
      <section
        style={bodyStyle}
        className="items-start lg:items-center mx-auto w-full md:max-w-[1000px] lg:max-w-[1200px]"
      >
        <div className="w-full flex flex-col gap-5 md:gap-10">
          <h2 className="styled-animate-left text-[22px] md:text-[28px] lg:text-left text-center">
            PICK YOUR DESTINATION
          </h2>
          <div className="flex flex-col lg:flex-row items-center gap-4 justify-between w-full">
            <img
              src={destinations[currentIndex].images.webp}
              alt={destinations[currentIndex].name}
              className="styled-animate-opaque max-w-[300px] lg:max-w-[420px] flex-1"
            />
            <div className="flex flex-col gap-2 items-center lg:items-start w-full flex-1 max-w-[580px] text-center lg:text-left lg:max-w-[500px]">
              <div className="flex flex-row items-center justify-center lg:justify-start gap-6 w-full">
                {destinations.map((destination, index) => (
                  <button
                    type="button"
                    key={destination.name}
                    className={
                      destination.name === destinations[currentIndex].name
                        ? "styled-animate-right text-[18px] md:text-[22px] min-h-[30px] shadow-[0px_2px_0px_0px] shadow-white"
                        : "styled-animate-right text-[18px] md:text-[22px] min-h-[30px] hover:shadow-blue duration-300 hover:shadow-[0px_2px_0px_0px]"
                    }
                    onClick={() => setCurrentIndex(index)}
                  >
                    {destination.name}
                  </button>
                ))}
              </div>
              <h1 className="styled-animate-opaque text-[80px] md:text-[100px]">
                {destinations[currentIndex].name}
              </h1>
              <p className="styled-animate-opaque text-[18px] md:text-[20px]">
                {destinations[currentIndex].description}
              </p>
              <div className="styled-animate-opaque mt-3 border-t border-t-white flex flex-col md:flex-row text-[18px] md:text-[22px] items-center justify-between w-full gap-4 p-4">
                <div className="flex flex-col gap-1">
                  <p className="text-[18px] md:text-[22px]">AVG. DISTANCE</p>
                  <h1 className="text-[22px] md:text-[28px] font-semibold">
                    {destinations[currentIndex].distance}
                  </h1>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-[18px] md:text-[22px]">EST. TRAVEL TIME</p>
                  <h1 className="text-[22px] md:text-[28px] font-semibold">
                    {destinations[currentIndex].travel}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Destination;
