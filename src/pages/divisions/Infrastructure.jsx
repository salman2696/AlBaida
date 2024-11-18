import React from "react";
import HeroSection from "../../components/HeroSection";
import heroImage from "../../assets/images/divisions/infrastructure/heroImage.jpg";
import Banner from "../../components/Banner";
import Services1 from "../../components/Services1";
import { useTranslation } from "react-i18next";
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
  const { t, i18n } = useTranslation();

  const services = [
    {
      icon: <FaDraftingCompass />,
      text: t("division.infrastructure.servicesSection.services.0.name"),
    },
    {
      icon: <FaRoad />,
      text: t("division.infrastructure.servicesSection.services.1.name"),
    },
    {
      icon: <FaTools />,
      text: t("division.infrastructure.servicesSection.services.2.name"),
    },
    {
      icon: <GiElectricalResistance />,
      text: t("division.infrastructure.servicesSection.services.3.name"),
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
        title={t("division.infrastructure.heroSection.title")}
        descripton={t("division.infrastructure.heroSection.description")}
      />
      <div className="max-w-7xl mx-auto">
        <Banner title={t("division.infrastructure.banner.title")} />
        <Services1
          title={t("division.infrastructure.servicesSection.title")}
          description={t("division.infrastructure.servicesSection.description")}
          services={services}
          images={images}
        />
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 center-title">
            {t("division.infrastructure.camelrace.title")}
          </h2>
          <p className="text-lg text-gray-600">
            {t("division.infrastructure.camelrace.description1")}
          </p>
          <p className="text-base text-gray-600 mt-4 px-4">
            {t("division.infrastructure.camelrace.description2")}
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-8 p-6">
          {/* Left Section */}
          <div className="lg:w-1/2 space-y-6">
            {/* Services Section */}
            <div>
              <h2 className="text-2xl font-bold mb-4">
                {t("division.infrastructure.camelrace.services.title")}
              </h2>
              <ul className="space-y-2 text-gray-700">
                {[
                  t("division.infrastructure.camelrace.services.list.0.name"),
                  t("division.infrastructure.camelrace.services.list.1.name"),
                  t("division.infrastructure.camelrace.services.list.2.name"),
                  t("division.infrastructure.camelrace.services.list.3.name"),
                  t("division.infrastructure.camelrace.services.list.4.name"),
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <FaCircleCheck className="text-custom-red" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Activities of Maintenance Section */}
            <div>
              <h2 className="text-2xl font-bold mb-4">
                {t("division.infrastructure.camelrace.activities.title")}
              </h2>
              <ul className="space-y-2 text-gray-700">
                {[
                  t("division.infrastructure.camelrace.activities.list.0.name"),
                  t("division.infrastructure.camelrace.activities.list.1.name"),
                  t("division.infrastructure.camelrace.activities.list.2.name"),
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <FaCircleCheck className="text-custom-red" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Section (Image Grid) */}
          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
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
