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
import { IoLogoJavascript } from "react-icons/io5";
import { DiHeroku } from "react-icons/di";
import { FaTelegramPlane } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { RiOpenaiFill } from "react-icons/ri";
import { DiPostgresql } from "react-icons/di";
import { FaStripeS } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { FaNode } from "react-icons/fa";

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
      <div className="flex flex-col md:flex-row items-center justify-start my-16 space-y-8 md:space-x-8 text-gray-300">
        <Carousel className="max-w-xs dark mx-16">
          <CarouselContent>
            {Array.from({ length: 2 }, (_, i) => i + 1).map((index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card className="">
                    <img src={`dobby_${index}.png`} alt="Mockup" />
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <div className="flex-col items-center justify-center space-y-8">
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
            <Tag
              icon={<IoLogoJavascript />}
              tagName="Javascript"
              popover={"Language of choice: Javascript."}
            />
            <Tag
              icon={<FaNode />}
              tagName="Node.js"
              popover={
                "Node.js was used to allow Javascript to run server side. This allowed the bot to interact with the database and other services."
              }
            />
            <Tag
              icon={<DiHeroku />}
              tagName="Heroku"
              popover={"Heroku was used to host the bot."}
            />
            <Tag
              icon={<DiPostgresql />}
              tagName="PostgreSQL"
              popover={
                "Database of choice: PostgreSQL. A relational database as stored data would be structured."
              }
            />
            <Tag
              icon={<FaTelegramPlane />}
              tagName="Telegram API"
              popover={
                "The Telegram API allowed the bot to interact with the Telegram system."
              }
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col xl:flex-row items-center justify-start my-16 space-y-8 xl:space-x-16 text-gray-300">
        <div className="flex-col items-center justify-center space-y-8 mx-8">
          <h1 className="text-white font-semibold text-2xl sm:text-3xl lg:text-4xl">
            FRCSviva.com
          </h1>
          <p className="text-gray-300 font-medium text-l text-justify min-w-80">
            FRCSviva.com is a web application that helps students prepare for
            the FRCS surgery examination. The application provides students with
            a platform to practice for the exam by taking mock tests. The
            application also provides students with feedback on their
            performance through the OpenAi API, helping them identify areas for
            improvement. It comes complete with an authentication system, and a
            subscription model powered by the Stripe API.
          </p>
          <div className="flex flex-wrap justify-start">
            <Tag
              icon={<SiTypescript />}
              tagName="Typescript"
              popover={"Language of choice: Typescript."}
            />
            <Tag
              icon={<RiNextjsFill />}
              tagName="Next.js"
              popover={
                "Next.js 14 framework was used to allow Server-Side rendering of React Components. This enabled the application to dynamically generate pages from the database."
              }
            />
            <Tag
              icon={<FaAws />}
              tagName="AWS"
              popover={
                "Amazon Web Services (AWS) was used to host the application."
              }
            />
            <Tag
              icon={<DiPostgresql />}
              tagName="PostgreSQL"
              popover={
                "Database of choice: PostgreSQL. A relational database as stored data would be structured."
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
              icon={<RiOpenaiFill />}
              tagName="OpenAi API"
              popover={
                "OpenAi's chat completions API was used to generate feedback for the user based on their answer. This feedback is then streamed to the user."
              }
            />
            <Tag
              icon={<FaStripeS />}
              tagName="Stripe API"
              popover={
                "Stripe's API was used to provide a subscription service for users to use the web application. This allows for secure payment processing."
              }
            />
          </div>
        </div>
        <Carousel className="max-w-md sm:max-w-2xl dark mx-8">
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
