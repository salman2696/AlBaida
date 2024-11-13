import React from "react";
import { FaBullseye, FaLightbulb, FaHeart } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const MissionVisionValues = () => {
  const { t } = useTranslation();
  const data = [
    {
      title: t("aboutUs.missionVisionValues.cardData.0.title"),
      icon: <FaBullseye size={100} className="text-gray-700 mx-auto" />,
      description:
      t("aboutUs.missionVisionValues.cardData.0.description"),
    },
    {
      title: t("aboutUs.missionVisionValues.cardData.1.title"),
      icon: <FaLightbulb size={100} className="text-gray-700 mx-auto" />,
      description:
      t("aboutUs.missionVisionValues.cardData.1.description"),
    },
    {
      title: t("aboutUs.missionVisionValues.cardData.2.title"),
      icon: <FaHeart size={100} className="text-gray-700 mx-auto" />,
      description:
      t("aboutUs.missionVisionValues.cardData.2.description"),
    },
  ];

  return (
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <h1 className="text-5xl font-yhin text-gray-800 mb-10">
        {t("aboutUs.missionVisionValues.title1")} <br />
        {t("aboutUs.missionVisionValues.title2")}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
        {data.map((item, index) => (
          <div key={index} className="flex flex-col items-center shadow-lg p-2">
            <div className="mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold text-custom-red mb-2">
              {item.title}
            </h3>
            <div className="w-12 h-0.5 bg-gray-300 mb-4"></div>
            <p className="text-gray-600 max-w-xs">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MissionVisionValues;
