"use client";

import Link from "next/link";

const Content: React.FC = () => {
  return (
    <div className="min-h-screen px-4 py-8 md:py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-left">
          content
        </h1>

        <p className="text-lg md:text-xl text-gray-600 text-left mb-8 md:mb-12 max-w-2xl">
          things that shape how i think. information diet is really important so i try to be pretty critical about what i consume.
        </p>

        <div className="space-y-8 md:space-y-10">
          <div>
            <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-gray-900">
              Books
            </h2>
            <ul className="space-y-4 md:space-y-5 text-sm md:text-base text-gray-700">
              <li>
                • Can't Hurt Me - David Goggins
                <div className="ml-5 text-gray-500 text-xs md:text-sm">
                  we are all capable of more than we think - your "limits" are only self-imposed
                </div>
              </li>
              <li>
                • The Alchemist - Paulo Coelho
                <div className="ml-5 text-gray-500 text-xs md:text-sm">
                  follow your dreams and trust the journey, side quests are everything
                </div>
              </li>
              <li>
                • Atomic Habits - James Clear
                <div className="ml-5 text-gray-500 text-xs md:text-sm">
                  consistency is the key to success
                </div>
              </li>
              <li>
                • Deep Work - Cal Newport
                <div className="ml-5 text-gray-500 text-xs md:text-sm">
                  get off your phone. the power of deep work is unmatched.
                </div>
              </li>
              <li>
                • The Subtle Art of Not Giving a F*ck - Mark Manson
                <div className="ml-5 text-gray-500 text-xs md:text-sm">
                  you can choose where to give your f*cks
                </div>
              </li>
              <li>
                • Glucose Revolution - Jesse Inchauspe
                <div className="ml-5 text-gray-500 text-xs md:text-sm">
                  got diagnosed with prediabetes at 20 despite being in great shape (5'9 140lbs with ~10% body fat), these small hacks helped me reverse it by 21
                </div>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-gray-900">
              General Content
            </h2>
            <ul className="space-y-4 md:space-y-5 text-sm md:text-base text-gray-700">
              <li>
                • <a href="https://www.youtube.com/watch?v=tnBQmEqBCY0" target="_blank" rel="noopener noreferrer" className="underline">Elon Musk on how to build the future</a>
              </li>
              <li>
                • Truett Hanes does 10000 pullups
              </li>
              <li>
                • <a href="https://www.youtube.com/watch?v=c8VcUnz3nVc&t=2130s" target="_blank" rel="noopener noreferrer" className="underline">MrBeast is obsessed with making videos</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;