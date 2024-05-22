import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

import { Card } from "./ui/card";
import Tag from "./ui/tag";
import { IoLogoJavascript } from "react-icons/io";
import { DiHeroku } from "react-icons/di";
import { FaTelegramPlane } from "react-icons/fa";

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
    <div className="my-16 m-8 lg:mx-40 lg:mt-40 ">
      <div className="flex flex-col text-gray-300 font-semibold text-3xl lg:text-4xl">
        <span>I build applications.</span>
        <span style={{ opacity: opacity, transition: "opacity 1s" }}>
          Take a closer look.
        </span>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-start my-16 md:space-x-8 text-gray-300">
        <Carousel className="max-w-xs dark mx-16">
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card className="">
                    <img src="dobby-mockup-portrait.png" alt="Mockup" />
                    {/* <CardHeader className="p-6">Whisper Well</CardHeader>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <span className="text-4xl font-semibold">
                        {index + 1}
                      </span>
                    </CardContent> */}
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <div className="flex-col items-center justify-center space-y-8 mx-8">
          <h1 className="text-white font-semibold text-2xl sm:text-3xl lg:text-4xl">
            Alpha's Dobby 2.0
          </h1>
          <p className="text-gray-300 font-medium text-l text-justify">
            Dobby 2.0 is a Telegram Bot built to streamline company processes.
            Before Dobby, the company had to manually update the database with
            new information. This was time-consuming and prone to errors. Dobby
            2.0 automates this process, saving the company time and reducing
            errors. Moreover, Dobby 2.0 also introduces additional features,
            such as leaves management.
          </p>
          <div className="flex flex-wrap justify-start">
            <Tag icon={<IoLogoJavascript />} tagName="Node.js" />
            <Tag icon={<DiHeroku />} tagName="Heroku" />
            <Tag icon={<FaTelegramPlane />} tagName="Telegram API" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
