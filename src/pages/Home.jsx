import React from "react";
import Navbar from "../utils/Navbar";
import { style, bodyStyle } from "../utils/BgStyle";

const Home = () => {
  return (
    <main
      style={style}
      className="bg-[url('/src/assets/home/background-home-tablet.jpg')] md:bg-[url('/src/assets/home/background-home-desktop.jpg')]"
    >
      <Navbar />

      <section style={bodyStyle}>Home</section>
    </main>
  );
};

export default Home;
