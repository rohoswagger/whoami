const Hero: React.FC = () => {
  return (
    <div className="relative h-full w-full">
      {/* Fixed Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-10 transform -rotate-45 text-gray-100 text-[150px] md:text-[200px] font-bold whitespace-nowrap">
          BUILD
        </div>
      </div>
    </div>
  );
};

export default Hero;
