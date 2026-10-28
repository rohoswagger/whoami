"use client";

import Image from "next/image";
import Link from "@/app/components/_common/Link";

const Hero: React.FC = () => {
  return (
    <div className="home-hero flex flex-col justify-center w-full max-w-6xl mx-auto px-4">
      <div className="home-intro max-w-4xl space-y-6 md:space-y-8 lg:space-y-12">
        {/* Main heading */}
        <h1 className="home-heading text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 leading-tight">
          yo! i&apos;m roshan
        </h1>

        {/* Subtitle */}
        <p className="home-current text-2xl sm:text-3xl md:text-4xl text-gray-600 leading-relaxed">
          currently shipping things at{" "}
          <a
            href="/work/onyx"
            className="text-gray-900 underline decoration-gray-300 underline-offset-4 hover:decoration-gray-900 transition-colors"
          >
            onyx
          </a>{" "}
          <span className="whitespace-nowrap">(acq. by zoom)</span>
        </p>

        {/* What I've done */}
        <div className="space-y-4 md:space-y-6">
          <p className="home-history text-lg sm:text-xl md:text-2xl text-gray-700 leading-relaxed">
            before that, i was a swe at robinhood, and even earlier i was
            running hackathons with{" "}
            <span className="font-semibold">1200+ participants</span>
          </p>
          <p className="home-viola text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
            <Image src="/img/icons/viola.svg" width="24" height="30" alt="" aria-hidden="true" />
            in a previous life, i was a top 200 violist in the nation
          </p>
          <p className="home-projects text-base sm:text-lg md:text-xl text-gray-500 leading-relaxed">
            plus some small things i&apos;ve built:{" "}
            <Link href="https://swaggin.dev">swaggin.dev</Link>,{" "}
            <Link href="https://trygojo.com">trygojo.com</Link>,{" "}
            <Link href="https://searchmaxx.link">searchmaxx.link</Link>
          </p>
        </div>

        {/* Contact */}
        <div className="home-contact pt-4 md:pt-8">
          <p className="text-base sm:text-lg md:text-xl text-gray-600">
            want to chat?{" "}
            <a
              href="mailto:rohoswagger@gmail.com"
              className="text-blue-600 hover:text-blue-800 underline transition-colors"
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
