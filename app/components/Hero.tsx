"use client";

const Hero: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center px-4 md:px-8 lg:px-16">
      <div className="max-w-4xl space-y-6 md:space-y-8 lg:space-y-12">
        {/* Main heading */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-gray-900 leading-tight">
          yo! i&apos;m roshan
        </h1>
        
        {/* Subtitle */}
        <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-600 leading-relaxed">
          i build things
        </p>
        
        {/* What I've done */}
        <div className="space-y-4 md:space-y-6">
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-700 leading-relaxed">
            so far, i&apos;ve organized hackathons with <span className="font-semibold">1200+ attendees</span> in college
          </p>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-500">
            more things coming soon...
          </p>
        </div>
        
        {/* Contact */}
        <div className="pt-4 md:pt-8">
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600">
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