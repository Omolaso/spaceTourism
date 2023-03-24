import React from "react";
import { style, bodyStyle } from "../utils/BgStyle";
import Navbar from "../utils/Navbar";

const Technology = () => {
  return (
    <main
      style={style}
      className="bg-[url('./src/assets/technology/background-technology-tablet.jpg')] md:bg-[url('./src/assets/technology/background-technology-desktop.jpg')]"
    >
      <Navbar />
      <section style={bodyStyle}>Tech</section>
    </main>
  );
};

export default Technology;
