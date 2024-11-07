import React from "react";

const HeroSection = ({ sections }) => {
  return (
    <div>
      {sections.map((section, index) => (
        <div key={index} className="">
          {/* Hero Section */}
          <div
            className="relative w-full md:min-h-[80vh] h-[70vh] overflow-hidden bg-fixed"
            style={{
              backgroundImage: `url(${section.projectHeroImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black opacity-50"></div>

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
          <div className="relative -top-16 md:max-w-7xl w-[80vw] mx-auto bg-white shadow-lg flex justify-center p-5 transition-all duration-300">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full text-sm md:text-lg">
              <div className="flex flex-col items-center">
                <img
                  className={`w-10 ${section.style}`}
                  src={section.logo}
                  alt="Section Logo"
                />
                <p
                  className="mt-1 text-center"
                  dangerouslySetInnerHTML={{ __html: section.title1 }}
                />
              </div>
              <div className="flex flex-col items-center">
                <img
                  className="w-10 md:w-16 md:h-16 h-10"
                  src={section.categoryIcon}
                  alt="Category Icon"
                />
                <p
                  className="mt-1 text-center"
                  dangerouslySetInnerHTML={{ __html: section.title2 }}
                />
              </div>
              <div className="flex flex-col items-center">
                <img
                  className="w-10 md:w-16 md:h-16 h-10"
                  src={section.calendarIcon}
                  alt="Calendar Icon"
                />
                <p
                  className="mt-1 text-center"
                  dangerouslySetInnerHTML={{ __html: section.title3 }}
                />
              </div>
              <div className="flex flex-col items-center">
                <img
                  className="w-10 md:w-16 md:h-16 h-10"
                  src={section.employeeIcon}
                  alt="Employee Icon"
                />
                <p
                  className="mt-1 text-center"
                  dangerouslySetInnerHTML={{ __html: section.title4 }}
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeroSection;
