import React from "react";
import HeroSection from "../../components/HeroSection";
import heroImage from "../../assets/images/divisions/facilityManagement/heroImage.jpg";
import ServicesSection from "../../components/Divisions/ServicesSection";
import AreasOfExpertise from "../../components/Divisions/AreasOfExpertise";
import Banner from "../../components/Banner";
import {
  FaTools,
  FaThermometerHalf,
  FaArtstation,
  FaBuilding,
  FaShieldAlt,
  FaUsers,
  FaConciergeBell,
  FaBug,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";


const FacilityManagement = () => {
  const { t, i18n } = useTranslation();

  const services = [
    {
      name: t("division.facilityManagement.servicesSection.services.0.name"),
      icon: <FaTools />,
    },
    {
      name: t("division.facilityManagement.servicesSection.services.1.name"),
      icon: <FaThermometerHalf />,
    },
    {
      name: t("division.facilityManagement.servicesSection.services.2.name"),
      icon: <FaArtstation />,
    },
    {
      name: t("division.facilityManagement.servicesSection.services.3.name"),
      icon: <FaBuilding />,
    },
    {
      name: t("division.facilityManagement.servicesSection.services.4.name"),
      icon: <FaShieldAlt />,
    },
    {
      name: t("division.facilityManagement.servicesSection.services.5.name"),
      icon: <FaUsers />,
    },
    {
      name: t("division.facilityManagement.servicesSection.services.6.name"),
      icon: <FaConciergeBell />,
    },
    {
      name: t("division.facilityManagement.servicesSection.services.7.name"),
      icon: <FaBug />,
    },
    {
      name: t("division.facilityManagement.servicesSection.services.8.name"),
      icon: <FaShieldAlt />,
    },
  ];

  return (
    <div>
      <HeroSection
        heroImage={heroImage}
        title={t("division.facilityManagement.heroSection.title")}
        descripton={t("division.facilityManagement.heroSection.description")}
      />
      <Banner
        title={t("division.facilityManagement.banner.title")}
      />
      <ServicesSection
        title={t("division.facilityManagement.servicesSection.title")}
        description={t(
          "division.facilityManagement.servicesSection.description"
        )}
        services={services}
      />
      <AreasOfExpertise
        title={t(
          "division.facilityManagement.expertise.title"
        )}
        description={t(
          "division.facilityManagement.expertise.description"
        )}
      />
    </div>
  );
};

export default FacilityManagement;
