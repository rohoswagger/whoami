import React from "react";

import Image from "next/image";
import pfp from "@/app/pfp.png";

const About: React.FC = () => {
  return (
    <div className="flex flex-row h-full py-16 px-4 max-w-6xl mx-auto items-center">
      <Image
        src={pfp}
        alt="Profile Picture"
        className="rounded-full border-4 border-purple-300 shadow-lg mr-12"
        width={400}
        height={400}
      />
      <div className="flex flex-col">
        <h2 className="text-5xl font-bold mb-8 text-purple-400">About Me</h2>
        <p className="text-3xl mb-6">
          I&apos;m a software engineer passionate about building applied AI
          solutions to solve real-world problems. I&apos;m currently based in
          <span className="text-orange-500 font-bold"> San Francisco</span> and
          working at <span className="text-green-500 font-bold">Robinhood</span>
          .
        </p>
        <p className="text-3xl">
          When I&apos;m not coding, you can find me practicing calisthenics,
          running long distances, experimenting with new recipes in the kitchen,
          or playing piano.
        </p>
      </div>
    </div>
  );
};

export default About;
