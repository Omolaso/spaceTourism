import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { spaceURLs } from "../../URLs";
import spaceLogo from "../assets/shared/logo.svg";
import hamburger from "../assets/shared/icon-hamburger.svg";
import closeIcon from "../assets/shared/icon-close.svg";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const { pathname } = useLocation();

  return (
    <>
      <main className="styled-animate-opaque flex flex-row items-center justify-between min-h-[10vh]">
        <Link to={spaceURLs.landingPage} className="p-4">
          <img src={spaceLogo} alt="LOGO" className="max-w-[40px]" />
        </Link>

        <section className="hidden md:flex items-center justify-center bg-opacity-70 bg-black flex-1 gap-2 max-w-[700px] px-4">
          <ul className="flex flex-row text-[22px] items-center justify-between w-full max-w-lg mx-auto">
            <li
              className={
                pathname === spaceURLs.home
                  ? "min-h-[60px] flex flex-row items-center justify-center shadow-[0px_2px_0px_0px] shadow-white"
                  : "min-h-[60px] flex flex-row items-center justify-center hover:shadow-blue duration-300 hover:shadow-[0px_2px_0px_0px]"
              }
            >
              <Link
                to={spaceURLs.home}
                className="flex flex-row items-center justify-center gap-1 min-h-[60px]"
              >
                <span className="text-white">00</span>
                <span className="text-blue">Home</span>
              </Link>
            </li>

            <li
              className={
                pathname === spaceURLs.destination
                  ? "min-h-[60px] flex flex-row items-center justify-center shadow-[0px_2px_0px_0px] shadow-white"
                  : "min-h-[60px] flex flex-row items-center justify-center hover:shadow-blue duration-300 hover:shadow-[0px_2px_0px_0px]"
              }
            >
              <Link
                to={spaceURLs.destination}
                className="flex flex-row items-center justify-center gap-1 min-h-[60px]"
              >
                <span className="text-white">01</span>
                <span className="text-blue">Destination</span>
              </Link>
            </li>

            <li
              className={
                pathname === spaceURLs.crew
                  ? "min-h-[60px] flex flex-row items-center justify-center shadow-[0px_2px_0px_0px] shadow-white"
                  : "min-h-[60px] flex flex-row items-center justify-center hover:shadow-blue duration-300 hover:shadow-[0px_2px_0px_0px]"
              }
            >
              <Link
                to={spaceURLs.crew}
                className="flex flex-row items-center justify-center gap-1 min-h-[60px]"
              >
                <span className="text-white">02</span>
                <span className="text-blue">Crew</span>
              </Link>
            </li>

            <li
              className={
                pathname === spaceURLs.tech
                  ? "min-h-[60px] flex flex-row items-center justify-center shadow-[0px_2px_0px_0px] shadow-white"
                  : "min-h-[60px] flex flex-row items-center justify-center hover:shadow-blue duration-300 hover:shadow-[0px_2px_0px_0px]"
              }
            >
              <Link
                to={spaceURLs.tech}
                className="flex flex-row items-center justify-center gap-1 min-h-[60px]"
              >
                <span className="text-white">03</span>
                <span className="text-blue">Technology</span>
              </Link>
            </li>
          </ul>
        </section>

        <button
          className="block md:hidden p-4"
          onClick={() => setSidebar(true)}
        >
          <img src={hamburger} alt="hamburger" />
        </button>
      </main>

      {/* SIDEBAR */}
      <ul
        className={
          sidebar
            ? "fixed md:hidden right-0 text-[22px] top-0 bg-opacity-100 duration-300 ease-in-out bg-black flex p-8 items-start z-50 justify-start flex-col w-full max-w-[70vw] min-h-full"
            : "flex md:hidden items-start fixed text-[22px] bg-opacity-100 duration-300 ease-in-out bg-black right-[-100%] p-8 top-0 justify-start flex-col w-full max-w-[70vw] min-h-full"
        }
      >
        <li className="self-end">
          <button className="" onClick={() => setSidebar(false)}>
            <img src={closeIcon} alt="close" />
          </button>
        </li>

        <li className="min-h-[60px] flex flex-row items-center justify-center">
          <Link
            to={spaceURLs.home}
            className="flex flex-row gap-3"
            onClick={() => setSidebar(false)}
          >
            <span className="text-white">00</span>
            <span className="text-blue">Home</span>
          </Link>
        </li>

        <li className="min-h-[60px] flex flex-row items-center justify-center">
          <Link
            to={spaceURLs.destination}
            className="flex flex-row gap-3"
            onClick={() => setSidebar(false)}
          >
            <span className="text-white">01</span>
            <span className="text-blue">Destination</span>
          </Link>
        </li>

        <li
          className="min-h-[60px] flex flex-row items-center justify-center"
          onClick={() => setSidebar(false)}
        >
          <Link to={spaceURLs.crew} className="flex flex-row gap-3">
            <span className="text-white">02</span>
            <span className="text-blue">Crew</span>
          </Link>
        </li>

        <li className="min-h-[60px] flex flex-row items-center justify-center">
          <Link
            to={spaceURLs.tech}
            className="flex flex-row gap-3"
            onClick={() => setSidebar(false)}
          >
            <span className="text-white">03</span>
            <span className="text-blue">Technology</span>
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
