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
import { RiNextjsFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { RiOpenaiFill } from "react-icons/ri";
import { DiPostgresql } from "react-icons/di";
import { FaStripeS } from "react-icons/fa";

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
            <Tag icon={<DiPostgresql />} tagName="PostgreSQL" />
            <Tag icon={<FaTelegramPlane />} tagName="Telegram API" />
          </div>
        </div>
      </div>
      <div className="flex flex-col xl:flex-row items-center justify-start my-16 space-y-8 xl:space-x-8 text-gray-300">
        <div className="flex-col items-center justify-center space-y-8 mx-8">
          <h1 className="text-white font-semibold text-2xl sm:text-3xl lg:text-4xl">
            FRCSviva.com
          </h1>
          <p className="text-gray-300 font-medium text-l text-justify">
            FRCSviva.com is a web application that helps students prepare for
            the FRCS surgery examination. The application provides students with
            a platform to practice for the exam by taking mock tests. The
            application also provides students with feedback on their
            performance through the OpenAi API, helping them identify areas for
            improvement. It comes complete with an authentication system, and a
            subscription model powered by the Stripe API.
          </p>
          <div className="flex flex-wrap justify-start">
            <Tag icon={<RiNextjsFill />} tagName="Next.js" />
            <Tag icon={<SiTypescript />} tagName="Typescript" />
            <Tag icon={<DiPostgresql />} tagName="PostgreSQL" />
            <Tag icon={<RiOpenaiFill />} tagName="OpenAi API" />
            <Tag icon={<FaStripeS />} tagName="Stripe API" />
          </div>
        </div>
        <Carousel className="max-w-md sm:max-w-2xl dark mx-16">
          <CarouselContent>
            {Array.from({ length: 3 }, (_, i) => i + 1).map((index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card className="">
                    <img src={`frcsviva_${index}.png`} alt="Mockup" />
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default Showcase;
