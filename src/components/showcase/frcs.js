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
import { SiTypescript } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { FaAws } from "react-icons/fa";
import { DiPostgresql } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";
import { RiOpenaiFill } from "react-icons/ri";
import { FaStripeS } from "react-icons/fa";
import { SiNextdns } from "react-icons/si";
import { Skeleton } from "../ui/skeleton";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const Frcs = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="flex flex-col-reverse md:flex-row justify-center items-center mx-4 mb-16 space-y-reverse space-y-8 md:space-x-16 text-gray-300">
      <div className="flex-col items-center md:w-1/2">
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="flex flex-row items-center space-x-4">
              <Avatar>
                <AvatarImage src="/portfolio/frcs.png" alt="FRCS" />
                <AvatarFallback>F</AvatarFallback>
              </Avatar>
              <h1 className="text-white font-semibold text-2xl sm:text-3xl lg:text-4xl">
                FRCS Exam Preparation Platform
              </h1>
            </div>
            <p className="text-gray-300 font-medium text-l">
              The FRCS Exam Preparation Platform is a comprehensive, full-stack
              web application designed to assist students in their preparation
              for the{" "}
              <a
                className="underline decoration-dotted text-white"
                target="_blank"
                rel="noreferrer"
                href="https://www.rcseng.ac.uk/education-and-exams/exams/search/international-fellowship-examination-jscfe/"
              >
                Fellowship of the Royal College of Surgeons (FRCS) examination
              </a>
              . <br />
              <br />
              This platform offers an opportunity for students to engage in mock
              tests, crafted by industry professionals. Leveraging the OpenAi
              API, the platform delivers feedback on students' performance,
              enabling them to pinpoint on areas of improvement. <br />
              <br /> The platform includes an authentication system and features
              a subscription model, integrated with the Stripe API. It also
              comes complete with an admin dashboard, allowing for the
              management of users and tests.
            </p>
          </div>
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
                "The Next.js 14 framework was used to allow Server-Side rendering of React Components. This enabled the application to dynamically generate pages from the database."
              }
            />
            <Tag
              icon={<FaAws />}
              tagName="AWS"
              popover={
                "Amazon Web Services (AWS) was used to host the application. S3 was used to store images and RDS was used to store the database."
              }
            />
            <Tag
              icon={<DiPostgresql />}
              tagName="PostgreSQL"
              popover={
                "Database of choice: PostgreSQL. A relational database was chosen as stored data would be structured."
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
                "OpenAi's Chat Completions API was used to generate feedback for the student based on their answer. OpenAi's Whisper API was also implemented to enable speech in the application."
              }
            />
            <Tag
              icon={<FaStripeS />}
              tagName="Stripe API"
              popover={
                "Stripe's API was used to provide a subscription service for students to use the platform. This allows for secure payment processing."
              }
            />
            <Tag
              icon={<SiNextdns />}
              tagName="NextAuth.js"
              popover={
                "NextAuth was used to provide authentication for the application. This allowed users to sign in and access the platform securely."
              }
            />
          </div>
        </div>
      </div>
      <div className="flex md:w-1/2">
        <Carousel className="dark mx-8">
          <CarouselContent>
            {Array.from({ length: 3 }, (_, i) => i + 1).map((index) => (
              <CarouselItem key={index}>
                <div>
                  <Card>
                    {!imageLoaded && (
                      <Skeleton className="dark h-[350px] w-[350px] rounded-xl" />
                    )}
                    <img
                      src={`/portfolio/frcs_${index}.png`}
                      alt="Mockup"
                      style={{ opacity: imageLoaded ? 1 : 0 }}
                      onLoad={() => setImageLoaded(true)}
                      loading="lazy"
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

export default Frcs;
