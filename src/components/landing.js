import React, { useEffect, useState } from "react";
import { Skeleton } from "./ui/skeleton";

const Landing = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = "/portfolio/moon-smooth.png";
    img.onload = () => setImageLoaded(true);
  }, []);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const opacity = Math.max(1 - scrollPosition / 500, 0);

  return (
    <div>
      <div
        className="min-h-[80vh] md:min-h-screen bg-cover bg-center flex flex-col lg:flex-row justify-center items-center lg:justify-start"
        style={{
          backgroundImage: "url('/portfolio/background.jpeg')",
        }}
      >
        <div className="text-gray-100 m-8 lg:w-2/5 text-4xl lg:text-5xl lg:ml-20 transition-all duration-500 font-semibold">
          Hi, I'm Bryan Lim. <br />A software engineer.
        </div>
        {imageLoaded ? (
          <img
            src={"/portfolio/moon-smooth.png"}
            alt="Moon"
            className="w-2/3 h-2/3 md:w-1/2 md:h-1/2 object-contain object-center"
            style={{ opacity: opacity }}
            onLoad={() => setImageLoaded(true)}
          />
        ) : (
          <Skeleton className="h-[300px] w-[300px] lg:h-[700px] lg:w-[700px] rounded-full dark" />
        )}
      </div>
    </div>
  );
};

export default Landing;
