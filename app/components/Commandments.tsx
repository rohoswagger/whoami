"use client";

import React from "react";
import commandmentsData from "@/data/commandments.json";

interface Commandment {
  number: number;
  text: string;
}

const Commandments: React.FC = () => {
  return (
    <div className="relative h-full w-full">
      {/* Background Text */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-10 transform -rotate-45 text-gray-100 text-[150px] md:text-[200px] font-bold whitespace-nowrap">
          RULES
        </div>
      </div>

      {/* Main content */}
      <div className="flex flex-col h-full w-full flex-grow p-2 md:p-4 relative z-10">
        <h1 className="text-3xl md:text-5xl font-medium mb-6 md:mb-12">
          Commandments to live by
        </h1>
        <div className="bg-amber-100 p-6 md:p-8 rounded-lg shadow-lg">
          <div className="border-4 border-amber-700 p-4 md:p-6 rounded-lg">
            <ul className="space-y-4 md:space-y-6">
              {commandmentsData.map((commandment: Commandment) => (
                <li key={commandment.number} className="flex items-start">
                  <span className="text-2xl md:text-3xl font-bold text-amber-800 mr-4 flex-shrink-0">
                    {commandment.number}.
                  </span>
                  <p className="text-lg md:text-xl text-amber-900">
                    {commandment.text}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Commandments;
