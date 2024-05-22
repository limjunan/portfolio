import React from "react";

const About = () => {
  return (
    <div className="mb-20 mx-8 lg:mx-40 font-semibold flex flex-col bg-cod-gray p-20">
      <div className="mb-2 flex space-x-4 text-gray-400 text-3xl">
        <p>Who am I?</p>
      </div>

      <span className="text-4xl text-white lg:text-5xl border-b border-gray-500 pb-4">
        About the developer behind the screen.
      </span>
      <div className="flex items-center justify-center text-gray-400 text-xl pt-8">
        <div>
          <p>
            I am a student software engineer based in Singapore and have a
            passion for building applications and solving problems.{` `}
            <span className="text-white">I develop with the user in mind.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
