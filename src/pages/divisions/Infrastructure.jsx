import React from "react";
import HeroSection from "../../components/HeroSection";
import heroImage from "../../assets/images/divisions/infrastructure/heroImage.jpg";
import Banner from "../../components/Banner";
import Services1 from "../../components/Services1";
import { FaDraftingCompass } from "react-icons/fa";
import { FaRoad } from "react-icons/fa";
import { FaTools } from "react-icons/fa";
import { GiElectricalResistance } from "react-icons/gi";
import serviceimage1 from "../../assets/images/divisions/infrastructure/services1.png";
import serviceimage2 from "../../assets/images/divisions/infrastructure/services2.png";
import serviceimage3 from "../../assets/images/divisions/infrastructure/services3.png";
import serviceimage4 from "../../assets/images/divisions/infrastructure/services4.png";

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
          <p className="text-base text-gray-600 mt-4">
            We are renowned for our massive Camel Race Tracks – Al Shahaniya &
            Al Shamaliya on the whole of Qatar. These are the only hubs for
            Camel Races that exist in the entire Qatar, which was exclusively
            planned, designed, constructed and even maintained by Al Baida. Our
            expertise in Camel Race Tracks since 2011 is a great gravity for a
            lot more prospects in the future, as this is a legacy that is
            treasured by the Arabs since ages.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Infrastructure;
