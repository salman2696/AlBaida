import React from "react";
import HeroSection from "../../components/HeroSection";
import heroImage from "../../assets/images/divisions/infrastructure/heroImage.jpg";
import Banner from "../../components/Banner";
import Services1 from "../../components/Services1";
import { FaDraftingCompass } from "react-icons/fa";
import { FaRoad } from "react-icons/fa";
import { FaTools } from "react-icons/fa";
import { GiElectricalResistance } from "react-icons/gi";
import { FaCircleCheck } from "react-icons/fa6";
import serviceimage1 from "../../assets/images/divisions/infrastructure/services1.png";
import serviceimage2 from "../../assets/images/divisions/infrastructure/services2.png";
import serviceimage3 from "../../assets/images/divisions/infrastructure/services3.png";
import serviceimage4 from "../../assets/images/divisions/infrastructure/services4.png";
import camelImage1 from "../../assets/images/divisions/infrastructure/camel1.png";
import camelImage2 from "../../assets/images/divisions/infrastructure/camel2.png";
import camelImage3 from "../../assets/images/divisions/infrastructure/camel3.png";
import camelImage4 from "../../assets/images/divisions/infrastructure/camel4.png";

const Infrastructure = () => {
  const services = [
    { icon: <FaDraftingCompass />, text: "Planning & Designing The Layout" },
    { icon: <FaRoad />, text: "Construction Of Roads" },
    { icon: <FaTools />, text: "Maintenance" },
    {
      icon: <GiElectricalResistance />,
      text: "Electrical Services – Implementation Of Street Light Poles",
    },
  ];

  const images = [
    { src: serviceimage1, alt: "Image 1" },
    { src: serviceimage2, alt: "Image 2" },
    { src: serviceimage3, alt: "Image 3" },
    { src: serviceimage4, alt: "Image 3" },
    // Add more images as needed
  ];

  return (
    <div>
      <HeroSection
        heroImage={heroImage}
        title="Infrastructure, Roads & Project Development"
        descripton="Infrastructure is truly the backbone of growth and prosperity of a nation."
      />
      <div className="max-w-7xl mx-auto">
        <Banner title="Infrastructure is truly the backbone of growth and prosperity of a nation." />
        <Services1
          title="Our Services"
          description="Right throughout planning the project, construction and even after completion, our services remain inevitable to our clients. This makes us a reliable solution for our clients with even the most challenging projects."
          services={services}
          images={images}
        />
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 center-title">
            Camel Race Trucks
          </h2>
          <p className="text-lg text-gray-600">
            Adding Class to sports & leisure
          </p>
          <p className="text-base text-gray-600 mt-4 px-4">
            We are renowned for our massive Camel Race Tracks – Al Shahaniya &
            Al Shamaliya on the whole of Qatar. These are the only hubs for
            Camel Races that exist in the entire Qatar, which was exclusively
            planned, designed, constructed and even maintained by Al Baida. Our
            expertise in Camel Race Tracks since 2011 is a great gravity for a
            lot more prospects in the future, as this is a legacy that is
            treasured by the Arabs since ages.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-8 p-6">
          {/* Left Section */}
          <div className="lg:w-1/2 space-y-6">
            {/* Services Section */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Services</h2>
              <ul className="space-y-2 text-gray-700">
                {[
                  "Planning and designing the Camel Race Tracks",
                  "Planning and designing the allied road along the tracks",
                  "Implantation of lamp posts along the tracks",
                  "Construction of the race tracks and roads",
                  "Maintenance of the tracks, road and entire arena",
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <FaCircleCheck
                      
                      className="text-custom-red"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Activities of Maintenance Section */}
            <div>
              <h2 className="text-2xl font-bold mb-4">
                Activities of Maintenance
              </h2>
              <ul className="space-y-2 text-gray-700">
                {[
                  "Loosening the sand by grader and tractor",
                  "Cleaning the race tracks",
                  "Preparation of tracks before race",
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <FaCircleCheck
                      className="text-custom-red"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Section (Image Grid) */}
          <div className="lg:w-1/2 grid grid-cols-2 gap-4">
            <img
              src={camelImage1}
              alt="Description 1"
              className="w-full h-48 object-cover rounded-lg shadow-md"
            />
            <img
              src={camelImage2}
              alt="Description 2"
              className="w-full h-48 object-cover rounded-lg shadow-md"
            />
            <img
              src={camelImage3}
              alt="Description 3"
              className="w-full h-48 object-cover rounded-lg shadow-md"
            />
            <img
              src={camelImage4}
              alt="Description 4"
              className="w-full h-48 object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Infrastructure;
