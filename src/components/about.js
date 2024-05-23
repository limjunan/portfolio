import React, { useEffect, useRef } from "react";

const About = () => {
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("opacity-0");
          entry.target.classList.add("opacity-100");
        } else {
          entry.target.classList.remove("opacity-100");
          entry.target.classList.add("opacity-0");
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);
  return (
    <div className="mb-20 mx-8 lg:mx-40 font-semibold flex flex-col bg-cod-gray py-20 px-12 sm:px-20">
      <div className="mb-2 flex space-x-4 text-gray-400 text-3xl">
        <p>Who am I?</p>
      </div>

      <span className="text-4xl text-white lg:text-5xl border-b border-gray-500 pb-4">
        About the developer behind the screen.
      </span>
      <div className="flex items-center justify-center text-gray-400 text-xl pt-8">
        <p>
          I am a student software engineer based in{" "}
          <span className="text-white">Singapore</span> and I have a passion for
          building applications and solving problems. I have had the privilege
          of working as a freelancer, in a start-up, and in a huge corporation.
          This diverse experience has equipped me with the skills needed in
          software engineering. <br />
          <br />
          <span
            ref={ref}
            className="text-white opacity-0 transition-opacity duration-1000"
          >
            I develop with the user in mind.
          </span>{" "}
        </p>
      </div>
    </div>
  );
};

export default About;
