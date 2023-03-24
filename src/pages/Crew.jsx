import React from "react";
import { bodyStyle, style } from "../utils/BgStyle";
import Navbar from "../utils/Navbar";

const Crew = () => {
  return (
    <main
      style={style}
      className="bg-[url('./src/assets/crew/background-crew-tablet.jpg')] md:bg-[url('./src/assets/crew/background-crew-desktop.jpg')]"
    >
      <Navbar />
      <section style={bodyStyle}>Crew</section>
    </main>
  );
};

export default Crew;
