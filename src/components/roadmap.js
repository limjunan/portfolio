import React from "react";
import { SiZendesk } from "react-icons/si";
import { IoIosLaptop } from "react-icons/io";

const Roadmap = () => {
  return (
    <div className="my-16 m-8 lg:mx-40 lg:mt-40 ">
      <div className="mb-16 text-gray-300 font-semibold text-3xl lg:text-4xl">
        My roadmap
      </div>
      <div className="flex flex-col space-y-8 lg:px-20">
        <div className="flex flex-row space-x-16">
          <div className="flex flex-col justify-center items-center min-w-[80px]">
            <div>
              <img
                src="/portfolio/nus-logo.png"
                alt="nus"
                className="max-w-24"
              />
            </div>
            <div className="h-full pt-2">
              <span className="w-[0.1rem] h-full bg-gray-700 block"></span>
            </div>
          </div>
          <div className="flex flex-col space-y-6 text-gray-300">
            <div className="flex flex-col xl:flex-row justify-between space-y-4 xl:space-y-0">
              <div>
                <span className="text-nus-400 bg-nus-950 py-2 px-4 rounded-lg">
                  National University of Singapore
                </span>
              </div>
              <div className="flex flex-row space-x-4 items-center">
                <IoIosLaptop size={24}></IoIosLaptop>
                <span className="text-gray-400 w-64">
                  Computer Science Undergraduate
                </span>
              </div>
            </div>
            <div>
              I am a Computer Science Major at the National University of
              Singapore. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.
            </div>
          </div>
        </div>
        <div className="flex flex-row space-x-16">
          <div className="flex flex-col justify-center items-center min-w-[80px]">
            <div>
              <SiZendesk size={48} className="text-zendesk-cyprus-950" />
            </div>
            <div className="h-full p-2">
              <span className="w-[0.1rem] h-full bg-gray-700 block"></span>
            </div>
          </div>
          <div className="flex flex-col space-y-6 text-gray-300">
            <div className="flex flex-col xl:flex-row justify-between space-y-4 xl:space-y-0">
              <div>
                <span className="text-zendesk-cyprus-400 bg-zendesk-cyprus-950 py-2 px-4 rounded-lg">
                  Zendesk
                </span>
              </div>
              <div className="flex flex-row space-x-4 items-center">
                <IoIosLaptop size={24}></IoIosLaptop>
                <span className="text-gray-400 w-64">
                  Software Engineering Intern
                </span>
              </div>
            </div>
            <div>
              I interned at Zendesk. Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
