import React from "react";
import HeroSection from "../components/HeroSection";
import MissionVisionValues from "../components/MissionVisionValues";
import Partners from "../components/Partners";
import ChairmanMsg from "../components/ChairmanMsg";
import heroImage from "../assets/images/AboutUs/heroImage.jpg";
import { useTranslation } from "react-i18next";

const AboutUs = () => {
  const { t } = useTranslation();

  const cardData = [
    {
      title: t("aboutUs.ourHistory.cardData.0.title"),
      description: t("aboutUs.ourHistory.cardData.0.description"),
    },
    {
      title: t("aboutUs.ourHistory.cardData.1.title"),
      description: t("aboutUs.ourHistory.cardData.1.description"),
    },
    {
      title: t("aboutUs.ourHistory.cardData.2.title"),
      description: t("aboutUs.ourHistory.cardData.2.description"),
    },
    {
      title: t("aboutUs.ourHistory.cardData.3.title"),
      description: t("aboutUs.ourHistory.cardData.3.description"),
    },
  ];

  return (
    <div>
      <HeroSection
        heroImage={heroImage}
        title={t("aboutUs.heroSection.title")}
        subtitle={t("aboutUs.heroSection.subTitle")}
        descripton={t("aboutUs.heroSection.description")}
      />
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 center-title">
            {t("aboutUs.ourHistory.heading")}
          </h2>
          <p className="text-lg text-gray-600">
            {t("aboutUs.ourHistory.subHeading")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cardData.map((card, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                {card.title}
              </h3>
              <p className="text-gray-600">{card.description}</p>
            </div>
          ))}
        </div>
      </section>
      <Partners />
      <MissionVisionValues />
      <ChairmanMsg />
    </div>
  );
};

export default AboutUs;
