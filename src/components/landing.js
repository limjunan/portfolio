import React, { useEffect, useState } from "react";

const Landing = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

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

  const letterSpacing = Math.max(0.02 - scrollPosition / 5000, 0);
  const lineHeight = Math.max(1.5 - scrollPosition / 1000, 1);
  const opacity = Math.max(1 - scrollPosition / 500, 0);

  return (
    <div>
      <div
        className="min-h-screen bg-cover bg-center flex flex-col lg:flex-row justify-center items-center lg:justify-start"
        style={{
          backgroundImage: "url('/background.jpeg')",
        }}
      >
        <div
          className="text-white m-4 lg:w-2/5 text-4xl lg:text-5xl lg:ml-20 transition-all duration-500"
          style={{
            letterSpacing: `${letterSpacing}em`,
            lineHeight: lineHeight,
          }}
        >
          Hi, I'm Bryan Lim. <br />A software engineer.
        </div>
        <img
          src="/moon.png"
          alt="Moon"
          className="w-1/2 h-1/2 object-contain object-center"
          style={{ opacity: opacity }}
        />
      </div>
    </div>
  );
};

export default Landing;
