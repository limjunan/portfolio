import React from "react";
import { useState } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Card } from "../ui/card";
import Tag from "../ui/tag";
import { Skeleton } from "../ui/skeleton";
import { IoLogoJavascript } from "react-icons/io5";
import { DiHeroku } from "react-icons/di";
import { FaTelegramPlane } from "react-icons/fa";
import { DiPostgresql } from "react-icons/di";
import { FaNode } from "react-icons/fa";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const Dobby = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="flex flex-col-reverse md:flex-row justify-center items-center mx-4 mb-16 space-y-reverse space-y-8 md:space-x-16 text-gray-300">
      <div className="flex-col items-center md:w-1/2">
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="flex flex-row items-center space-x-4">
              <Avatar>
                <AvatarImage
                  src="/portfolio/dobby_avatar.jpg"
                  alt="Alpha's Dobby"
                />
                <AvatarFallback>WW</AvatarFallback>
              </Avatar>
              <h1 className="text-white font-semibold text-2xl sm:text-3xl lg:text-4xl">
                Alpha's Dobby 2.0
              </h1>
            </div>
            <p className="text-gray-300 font-medium text-l">
              Dobby 2.0 is a Telegram Bot designed to automate and streamline
              company processes. Prior to the implementation of Dobby, the
              company relied on manual database updates, a process that was not
              only time-consuming but also susceptible to errors. <br /> <br />
              Dobby 2.0's primary function is to automatically update the
              database whenever personnel check in or out, significantly
              reducing the time spent on these tasks and minimizing the
              potential for errors. In addition to this, Dobby 2.0 introduces
              features such as an efficient leaves management system.
            </p>
          </div>
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
                "Database of choice: PostgreSQL. A relational database was chosen as stored data would be structured."
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
      <div className="flex justify-center items-center md:w-1/2">
        <Carousel className="dark mx-8">
          <CarouselContent>
            {Array.from({ length: 2 }, (_, i) => i + 1).map((index) => (
              <CarouselItem key={index}>
                <div>
                  <Card className="flex items-center justify-center">
                    {!imageLoaded && (
                      <Skeleton className="dark h-[350px] w-[350px] rounded-xl" />
                    )}
                    <img
                      src={`/portfolio/dobby_${index}.png`}
                      alt="Mockup"
                      style={{ opacity: imageLoaded ? 1 : 0 }}
                      onLoad={() => setImageLoaded(true)}
                      loading="lazy"
                      className="max-h-[350px]"
                    />
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

export default Dobby;
