"use client";

import React from "react";
import Image from "next/image";
import pfp from "@/public/pfp.png";
import Link from "@/app/components/_common/Link";

const Section = ({
  title,
  content,
}: {
  title: string;
  content: React.ReactNode;
}) => {
  return (
    <div className="pb-6">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-purple-400">
        {title}
      </h2>
      <div className="space-y-6 text-lg md:text-xl">{content}</div>
    </div>
  );
};

const About: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Left column - Static image */}
      <div className="hidden md:flex md:w-1/4 lg:w-1/3 items-center justify-center md:h-screen">
        <div className="flex items-center justify-center">
          <Image
            src={pfp}
            alt="Profile Picture"
            className="rounded-full border-4 border-purple-300 shadow-lg"
            width={300}
            height={300}
          />
        </div>
      </div>

      {/* Right column - Scrollable text content */}
      <div className="md:w-2/3 lg:w-3/4 p-8 md:p-16 overflow-y-scroll h-screen">
        <div className="space-y-6 text-lg md:text-xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-purple-400">
            About Me
          </h2>
          <Section
            title="Who am I?"
            content={
              <>
                <p>I&apos;m just a guy who loves to 🛠️ build and 👨🏽‍🎓 learn.</p>
              </>
            }
          />
          <Section
            title="What is this?"
            content={
              <>
                <p>
                  A collection of my thoughts, projects, and{" "}
                  <Link href="/work" openInNewTab={false}>
                    experiences
                  </Link>
                  .
                </p>
                <div>
                  Check out
                  <ul className="list-disc list-inside">
                    <li>
                      My{" "}
                      <Link href="/commandments" openInNewTab={false}>
                        commandments to live by
                      </Link>
                    </li>
                    <li>
                      My{" "}
                      <Link href="/blog" openInNewTab={false}>
                        attempts at writing
                      </Link>
                    </li>
                    {/* <li>
                      My <Link href="/work" openInNewTab={false}>media diet</Link>
                    </li> */}
                  </ul>
                </div>
              </>
            }
          />
          <Section
            title="What do I do?"
            content={
              <>
                <p>
                  I&apos;m currently a software engineer! Currently, I&apos;m
                  interested in applied AI. I&apos;m based out of
                  <span className="text-orange-500 font-bold">
                    {" "}
                    San Francisco
                  </span>{" "}
                  and working at{" "}
                  <span className="text-green-500 font-bold">Robinhood</span>.
                </p>
              </>
            }
          />
          <Section
            title="In my free time, I like to..."
            content={
              <>
                <p>
                  When I&apos;m not coding, you can find me practicing
                  calisthenics, running long distances, experimenting with new
                  recipes in the kitchen, or playing piano.
                </p>
              </>
            }
          />
          <Section
            title="Wanna Chat?"
            content={
              <>
                <p>
                  Feel free to reach out! I&apos;m always looking to meet new
                  people and make new connections. I&apos;m easiest to reach via{" "}
                  <Link href="mailto:rohoswagger@gmail.com">email</Link> or{" "}
                  <Link href="https://www.linkedin.com/in/desairoshan">
                    LinkedIn
                  </Link>
                  .
                </p>
              </>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default About;
