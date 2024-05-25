import React, { useEffect, useState } from "react";
import Dobby from "./showcase/dobby";
import Frcs from "./showcase/frcs";
import Whisperwell from "./showcase/whisperwell";
import Portfolio from "./showcase/portfolio-showcase";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Showcase = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showComponents, setShowComponents] = useState(false);

  const handleScroll = () => {
    const position = window.pageYOffset;
    const halfwayDown = window.innerHeight / 2;
    setScrollPosition(position > halfwayDown ? position : 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const opacity = Math.min(scrollPosition / (window.innerHeight / 3), 1);

  return (
    <div className="my-16 m-8 lg:mx-40 lg:mt-40 ">
      <div className="flex flex-col mb-16 text-gray-300 font-semibold text-3xl lg:text-4xl">
        <span>I build applications.</span>
        <span style={{ opacity: opacity, transition: "opacity 1s" }}>
          Take a closer look.
        </span>
      </div>
      <Whisperwell />
      <Frcs />
      <div
        className={`transition-all duration-200 ease-in-out overflow-hidden origin-top ${
          showComponents
            ? "opacity-100 scale-y-100 max-h-full"
            : "opacity-0 scale-y-0 max-h-0"
        }`}
      >
        <Portfolio />
        <Dobby />
      </div>
      <div className="flex justify-center items-center">
        {!showComponents ? (
          <button
            className="flex items-center justify-center text-gray-400 hover:text-white text-l border border-gray-400 hover:border-white space-x-2 px-8 py-2 rounded-xl m-1 transition-colors duration-200"
            onClick={() => setShowComponents(true)}
          >
            <span>View More</span> <FaChevronDown />
          </button>
        ) : (
          <button
            className="flex items-center justify-center text-gray-400 hover:text-white text-l border border-gray-400 hover:border-white space-x-2 px-8 py-2 rounded-xl m-1 transition-colors duration-200"
            onClick={() => {
              setShowComponents(false);
            }}
          >
            <span>Hide</span> <FaChevronUp />
          </button>
        )}
      </div>
    </div>
  );
};

export default Showcase;
