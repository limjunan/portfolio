import {
  TooltipProvider,
  TooltipTrigger,
  Tooltip,
  TooltipContent,
} from "./ui/tooltip";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { GoLinkExternal } from "react-icons/go";

const Contact = () => {
  return (
    <div className="my-16 sm:my-32 mx-8 lg:mx-20 text-gray-300 flex flex-col space-y-10 justify-center items-center">
      <span className="font-semibold text-3xl lg:text-4xl text-center">
        Impressed? Get in touch.
      </span>
      <div className="flex items-center justify-center mt-24px">
        <div className="border-gray-500 rounded-md border p-4 px-8 space-x-8 flex">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <span>
                  <a
                    href="mailto:bryanlim0803020@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SiGmail
                      size={32}
                      className="hover:cursor-pointer hover:text-white"
                    />
                  </a>
                </span>
              </TooltipTrigger>
              <TooltipContent className="dark flex flex-row space-x-1 font-medium">
                <span>Drop me an email.</span>
                <GoLinkExternal />
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
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
              </TooltipTrigger>
              <TooltipContent className="dark flex flex-row space-x-1 font-medium">
                <span>Connect with me on LinkedIn.</span>
                <GoLinkExternal />
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
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
              </TooltipTrigger>
              <TooltipContent className="dark flex flex-row space-x-1 font-medium">
                <span>Check out my Github.</span>
                <GoLinkExternal />
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
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
              </TooltipTrigger>
              <TooltipContent className="dark flex flex-row space-x-1 font-medium">
                <span>Message me on Telegram.</span>
                <GoLinkExternal />
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </div>
  );
};

export default Contact;
