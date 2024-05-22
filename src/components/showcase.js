import React, { useEffect, useState } from "react";

const Showcase = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

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
    <div className="h-screen my-16 m-8 lg:m-20 text-gray-300 font-semibold text-2xl lg:text-4xl">
      <div className="flex flex-col">
        <span>I build applications.</span>
        <span style={{ opacity: opacity, transition: "opacity 1s" }}>
          Take a closer look.
        </span>
      </div>
    </div>
  );
};

export default Showcase;
