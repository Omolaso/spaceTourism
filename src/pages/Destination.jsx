import React from "react";
import Navbar from "../utils/Navbar";
import { style, bodyStyle } from "../utils/BgStyle";
import data from "../../data.json";

const Destination = () => {
  const { destinations } = data;
  console.log(destinations);

  return (
    <main
      style={style}
      className="bg-[url('/src/assets/destination/background-destination-tablet.jpg')] md:bg-[url('/src/assets/destination/background-destination-desktop.jpg')]"
    >
      <Navbar />
      <section
        style={bodyStyle}
        className="items-start lg:items-center mx-auto w-full md:max-w-[1000px] lg:max-w-[1200px]"
      >
        Destination
      </section>
    </main>
  );
};

export default Destination;
