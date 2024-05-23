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
            <a
              href="mailto:your-email@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiGmail
                size={32}
                className="hover:cursor-pointer hover:text-white"
              />
            </a>
          </span>
          <span>
            <a
              href="https://www.linkedin.com/in/lim-jun-an-bryan-068bba185/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin
                size={32}
                className="hover:cursor-pointer hover:text-white"
              />
            </a>
          </span>
          <span>
            <a
              href="https://github.com/limjunan"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub
                size={32}
                className="hover:cursor-pointer hover:text-white"
              />
            </a>
          </span>
          <span>
            <a
              href="https://t.me/salmonroee"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTelegramPlane
                size={32}
                className="hover:cursor-pointer hover:text-white"
              />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
