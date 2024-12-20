import React from "react";
import expertiseImage1 from "../../assets/images/divisions/facilityManagement/expertise1.jpg";
import expertiseImage2 from "../../assets/images/divisions/facilityManagement/expertise2.jpg";
import expertiseImage3 from "../../assets/images/divisions/facilityManagement/expertise3.jpg";
import expertiseImage4 from "../../assets/images/divisions/facilityManagement/expertise4.jpg";
import expertiseImage5 from "../../assets/images/divisions/facilityManagement/expertise5.jpg";
import expertiseImage6 from "../../assets/images/divisions/facilityManagement/expertise6.jpg";

import {
  FaPaintRoller,
  FaHammer,
  FaTools,
  FaWater,
  FaCouch,
  FaLightbulb,
  FaRedo,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

const AreasOfExpertise = ({ title, description }) => {
  const { t, i18n } = useTranslation();

  const expertiseAreas = [
    {
      name: t("division.facilityManagement.expertise.expertiseAreas.0.name"),
      icon: <FaCouch />,
      image: expertiseImage1,
    },
    {
      name: t("division.facilityManagement.expertise.expertiseAreas.1.name"),
      icon: <FaWater />,
      image: expertiseImage1,
    },
    {
      name: t("division.facilityManagement.expertise.expertiseAreas.2.name"),
      icon: <FaTools />,
      image: expertiseImage2,
    },
    {
      name: t("division.facilityManagement.expertise.expertiseAreas.3.name"),
      icon: <FaHammer />,
      image: expertiseImage3,
    },
    {
      name: t("division.facilityManagement.expertise.expertiseAreas.4.name"),
      icon: <FaLightbulb />,
      image: expertiseImage4,
    },
    {
      name: t("division.facilityManagement.expertise.expertiseAreas.5.name"),
      icon: <FaPaintRoller />,
      image: expertiseImage5,
    },
    {
      name: t("division.facilityManagement.expertise.expertiseAreas.6.name"),
      icon: <FaRedo />,
      image: expertiseImage6,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-10 text-center max-w-7xl">
      {/* Title and Description */}
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 center-title">
        {title}
      </h2>
      <p className="text-gray-700 mb-8 text-lg">{description}</p>

      {/* Expertise Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {expertiseAreas.map((area, index) => (
          <div
            key={index}
            className="relative group bg-gray-100 p-6 rounded-lg shadow-md hover:bg-cover hover:bg-center transition-all duration-300"
            style={{ backgroundImage: `url(${area.image})` }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>

            {/* Icon and Text */}
            <div className="relative flex flex-col items-center">
              <div className="text-4xl text-white mb-4">{area.icon}</div>
              <h3 className="text-xl font-semibold text-white group-hover:text-white">
                {area.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AreasOfExpertise;
