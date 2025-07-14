"use client";

import Link from "next/link";

const Content: React.FC = () => {
  return (
    <div className="min-h-screen px-4 py-8 md:py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-center">
          content
        </h1>
        
        <p className="text-lg md:text-xl text-gray-600 text-center mb-8 md:mb-12 max-w-2xl mx-auto">
          things that shape how i think
        </p>
        
        <div className="space-y-8 md:space-y-10">
          <div>
            <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-gray-900">
              Books
            </h2>
            <ul className="space-y-1 md:space-y-2 text-sm md:text-base text-gray-700">
              <li>• Zero to One - Peter Thiel</li>
              <li>• The Hard Thing About Hard Things - Ben Horowitz</li>
              <li>• Atomic Habits - James Clear</li>
              <li>• The Lean Startup - Eric Ries</li>
              <li>• Blitzscaling - Reid Hoffman</li>
              <li>• The Mom Test - Rob Fitzpatrick</li>
              <li>• Crossing the Chasm - Geoffrey Moore</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-gray-900">
              Podcasts
            </h2>
            <ul className="space-y-1 md:space-y-2 text-sm md:text-base text-gray-700">
              <li>• The Tim Ferriss Show</li>
              <li>• How I Built This</li>
              <li>• The Knowledge Project</li>
              <li>• Lex Fridman Podcast</li>
              <li>• Masters of Scale</li>
              <li>• The a16z Podcast</li>
              <li>• Invest Like the Best</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-gray-900">
              Movies & Shows
            </h2>
            <ul className="space-y-1 md:space-y-2 text-sm md:text-base text-gray-700">
              <li>• The Social Network</li>
              <li>• Steve Jobs</li>
              <li>• Silicon Valley (HBO)</li>
              <li>• The Founder</li>
              <li>• Halt and Catch Fire</li>
              <li>• Pirates of Silicon Valley</li>
              <li>• The Internship</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-gray-900">
              Blogs & Newsletters
            </h2>
            <ul className="space-y-1 md:space-y-2 text-sm md:text-base text-gray-700">
              <li>• Paul Graham Essays</li>
              <li>• First Round Review</li>
              <li>• Hacker News</li>
              <li>• Morning Brew</li>
              <li>• The Hustle</li>
              <li>• Stratechery</li>
              <li>• Benedict Evans</li>
            </ul>
          </div>
        </div>
        
        <div className="text-center mt-12 md:mt-16">
          <p className="text-sm md:text-base text-gray-600 mb-4">
            got recommendations?
          </p>
          <a 
            href="mailto:rohoswagger@gmail.com" 
            className="text-sm md:text-base text-blue-600 hover:text-blue-800 underline"
          >
            send them my way
          </a>
        </div>
        
        <div className="text-center mt-6 md:mt-8">
          <Link 
            href="/" 
            className="text-sm md:text-base text-gray-600 hover:text-gray-900 transition-colors"
          >
            ← back home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Content;