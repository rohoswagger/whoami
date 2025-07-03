"use client";

import Link from "next/link";
import { LINKS } from "@/public/data/links";

const Hero: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4">
      <div className="max-w-2xl text-center space-y-8">
        {/* Main heading */}
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
          hey, i'm roshan
        </h1>
        
        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
          i build things and organize events that bring people together
        </p>
        
        {/* What I've done */}
        <div className="space-y-4">
          <p className="text-lg text-gray-700">
            so far, i've organized hackathons with <span className="font-semibold">1200+ attendees</span> in college
          </p>
          <p className="text-base text-gray-500">
            more things coming soon...
          </p>
        </div>
        
        {/* Links */}
        <div className="flex justify-center space-x-6 pt-8">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              <link.icon className="w-6 h-6" />
            </a>
          ))}
        </div>
        
        {/* Contact */}
        <div className="pt-8">
          <p className="text-gray-600">
            want to chat?{" "}
            <a 
              href="mailto:rohoswagger@gmail.com" 
              className="text-blue-600 hover:text-blue-800 underline"
            >
              shoot me an email
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;