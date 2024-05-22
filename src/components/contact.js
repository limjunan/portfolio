import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  return (
    <div className="h-[25vh] mx-8 lg:mx-20 text-gray-300 flex flex-col items-center">
      <span className="font-semibold text-3xl lg:text-4xl">
        Impressed? Get in touch.
      </span>
      <div className="flex items-center justify-center flex-grow">
        <div className="border-gray-500 rounded-md border p-4 px-16 space-x-8 flex">
          <span>
            <SiGmail
              size={32}
              className="hover:cursor-pointer hover:text-white"
            />
          </span>
          <span>
            <FaLinkedin
              size={32}
              className="hover:cursor-pointer hover:text-white"
            />
          </span>
          <span>
            <FaGithub
              size={32}
              className="hover:cursor-pointer hover:text-white"
            />
          </span>
          <span>
            <FaTelegramPlane
              size={32}
              className="hover:cursor-pointer hover:text-white"
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
