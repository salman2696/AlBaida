import React from "react";

const HeroSection = ({ sections }) => {
  return (
    <div>
      {sections.map((section, index) => (
        <div key={index} className="">
          {/* Hero Section */}
          <div className="relative w-full min-h-[80vh] overflow-hidden">
            {/* Background Image */}
            <img
              src={section.projectHeroImage}
              alt="Background"
              className="absolute inset-0 w-full h-full object-cover opacity-70"
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black opacity-60"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col justify-center h-[80vh] text-white px-4 max-w-7xl mx-auto">
              <h1 className="text-3xl xl:text-5xl 2xl:text-5xl 3xl:text-6xl font-bold mb-4 uppercase transition-all duration-300">
                {section.heroTitle}
              </h1>
              <p className="text-sm xl:text-base 2xl:text-lg 3xl:text-xl max-w-sm xl:max-w-lg 2xl:max-w-xl 3xl:max-w-2xl transition-all duration-300">
                {section.heroDescription}
              </p>
            </div>
          </div>

          {/* Icon Section */}
          <div className="relative -top-16 max-w-7xl mx-auto bg-white shadow-lg flex justify-center p-5">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full text-sm md:text-lg">
              <div className="flex flex-col items-center">
                <img
                  className="w-10 md:w-24"
                  src={section.logo}
                  alt="Section Logo"
                />
                <p className="mt-1 text-center">Qatar University</p>
              </div>
              <div className="flex flex-col items-center">
                <img
                  className="w-10 md:w-16 md:h-16 h-10"
                  src={section.categoryIcon}
                  alt="Category Icon"
                />
                <p className="mt-1 text-center">
                  Education <br /> Sector
                </p>
              </div>
              <div className="flex flex-col items-center">
                <img
                  className="w-10 md:w-16 md:h-16 h-10"
                  src={section.calendarIcon}
                  alt="Calendar Icon"
                />
                <p className="mt-1 text-center">
                  Year <br /> 2020
                </p>
              </div>
              <div className="flex flex-col items-center">
                <img
                  className="w-10 md:w-16 md:h-16 h-10"
                  src={section.employeeIcon}
                  alt="Employee Icon"
                />
                <p className="mt-1 text-center">
                  Employment <br /> Opportunity
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeroSection;
