import React from "react";
import Navbar from "../utils/Navbar";
import { style, bodyStyle } from "../utils/BgStyle";

const Destination = () => {
  return (
    <main
      style={style}
      className="bg-[url('/src/assets/destination/background-destination-tablet.jpg')] md:bg-[url('/src/assets/destination/background-destination-desktop.jpg')]"
    >
      <Navbar />
      <section style={bodyStyle}>Destination</section>
    </main>
  );
};

export default Destination;
