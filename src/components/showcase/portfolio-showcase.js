import React, { useState } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Card } from "../ui/card";
import Tag from "../ui/tag";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SiShadcnui } from "react-icons/si";
import { Skeleton } from "../ui/skeleton";

const Portfolio = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="flex flex-col md:flex-row justify-center items-center mb-16 mx-4 space-y-8 md:space-x-16 text-gray-300">
      <div className="flex md:w-1/2">
        <Carousel className="dark mx-8">
          <CarouselContent>
            {Array.from({ length: 2 }, (_, i) => i + 1).map((index) => (
              <CarouselItem key={index}>
                <div>
                  <Card>
                    <div className="flex h-[350px] justify-center items-center">
                      {!imageLoaded && (
                        <Skeleton className="dark h-[350px] w-[350px] rounded-xl" />
                      )}
                      <img
                        src={`/portfolio/portfolio_${index}.png`}
                        alt="Mockup"
                        style={{ opacity: imageLoaded ? 1 : 0 }}
                        onLoad={() => setImageLoaded(true)}
                        loading="lazy"
                        className="max-h-[350px]"
                      />
                    </div>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <div className="flex-col items-center md:w-1/2">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-white font-semibold text-2xl sm:text-3xl lg:text-4xl">
              Portfolio React App
            </h1>
            <p className="text-gray-300 font-medium text-l text-justify">
              This portfolio website is a digital platform that showcases my
              skills, projects, and about myself as a developer. Designed with a
              focus on user experience, it ensures fast load speeds through
              efficient techniques such as{" "}
              <a
                href="https://www.cloudflare.com/en-gb/learning/performance/what-is-lazy-loading/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                lazy loading
              </a>
              . <br /> <br />
              The design was inspired by Apple's clean and intuitive layout. The
              website was built with a mobile-first approach, ensuring full
              responsiveness and optimal viewing across all devices.
            </p>
          </div>
          <div className="flex flex-wrap justify-start">
            <Tag
              icon={<IoLogoJavascript />}
              tagName="Javascript"
              popover={"Language of choice: Javascript."}
            />
            <Tag
              icon={<FaReact />}
              tagName="React.js"
              popover={
                "React.js was used to build the frontend of the application. It is a popular library for building UIs."
              }
            />
            <Tag
              icon={<FaGithub />}
              tagName="Github Pages"
              popover={"Github Pages was used to host the application."}
            />
            <Tag
              icon={<FaFigma />}
              tagName="Figma"
              popover={
                "Figma was used to design the UI and the individual components of the application."
              }
            />
            <Tag
              icon={<SiTailwindcss />}
              tagName="Tailwind CSS"
              popover={
                "Tailwind CSS was used for styling the application due to its utility-first approach. This leads to less CSS bloat and a more maintainable codebase."
              }
            />
            <Tag
              icon={<SiShadcnui />}
              tagName="shadcn/ui"
              popover={
                "shadcn/ui is an open source component library that was used in the UI of the application."
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
