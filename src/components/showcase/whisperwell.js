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
import { DiHeroku } from "react-icons/di";
import { FaTelegramPlane } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { DiPostgresql } from "react-icons/di";
import { DiRedis } from "react-icons/di";
import { Skeleton } from "../ui/skeleton";

const Whisperwell = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="flex flex-col md:flex-row justify-center items-center mx-4 mb-16 space-y-8 md:space-x-16 text-gray-300">
      <div className="flex md:w-1/4 max-w-[320px]">
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
                      src={`/portfolio/whisper_${index}.png`}
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
      <div className="flex-col items-center md:w-3/4">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-white font-semibold text-2xl sm:text-3xl lg:text-4xl">
              Whisper Well
            </h1>
            <p className="text-gray-300 font-medium text-l text-justify">
              Whisper Well is a specialised Telegram Bot (
              <a
                href="https://t.me/Whisperwell_bot"
                className="underline"
                target="_blank"
                rel="noreferrer"
              >
                @Whisperwell_bot
              </a>
              ) built to equip youths with an easier way to reach out for peer
              support. <br /> <br />
              The bot matches users with volunteers who are trained to provide
              emotional support, enabling them to chat in real time. It offers
              features such as the ability for users to specify their preferred
              volunteer gender, maintain anonymity through a pseudonym, and set
              taboo topics to guide the conversation. <br /> <br />
              Whisper Well also incorporates role separation among users,
              volunteers, and admins, facilitating efficient platform
              management. Admin functions include banning, volunteer management,
              and reassigning of users.
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
              icon={<DiRedis />}
              tagName="Redis"
              popover={
                "Redis was implemented to allow in-memory caching of data. This is especially useful for this use-case as it allows for quick retrieval of user data when exchanging messages."
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
    </div>
  );
};

export default Whisperwell;
