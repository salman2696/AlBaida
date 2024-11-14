import React from "react";
import HeroSection from "../../components/HeroSection";
import heroImage from "../../assets/images/divisions/cleaningServices/heroImage.jpg";
import Banner from "../../components/Banner";
import ServicesSection from "../../components/Divisions/ServicesSection";
import { useTranslation } from "react-i18next";
import {
  MdCleaningServices,
  MdRestaurant,
  MdMeetingRoom,
  MdBuild,
} from "react-icons/md";
import { FaWindowMaximize, FaCouch, FaBroom } from "react-icons/fa";
import { GiVacuumCleaner, GiChemicalDrop } from "react-icons/gi";

const CleaningServices = () => {
  const { t, i18n } = useTranslation();
  const services = [
    {
      name: t("division.cleaningServices.servicesSection.services.0.name"),
      icon: <MdCleaningServices />,
    },
    {
      name: t("division.cleaningServices.servicesSection.services.1.name"),
      icon: <MdRestaurant />,
    },
    {
      name: t("division.cleaningServices.servicesSection.services.2.name"),
      icon: <FaWindowMaximize />,
    },
    {
      name: t("division.cleaningServices.servicesSection.services.3.name"),
      icon: <GiVacuumCleaner />,
    },
    {
      name: t("division.cleaningServices.servicesSection.services.4.name"),
      icon: <FaCouch />,
    },
    {
      name: t("division.cleaningServices.servicesSection.services.5.name"),
      icon: <MdMeetingRoom />,
    },
    {
      name: t("division.cleaningServices.servicesSection.services.6.name"),
      icon: <GiChemicalDrop />,
    },
    {
      name: t("division.cleaningServices.servicesSection.services.7.name"),
      icon: <MdBuild />,
    },
    {
      name: t("division.cleaningServices.servicesSection.services.8.name"),
      icon: <FaBroom />,
    },
  ];

  return (
    <div>
      <HeroSection
        heroImage={heroImage}
        title={t("division.cleaningServices.heroSection.title")}
        descripton={t("division.cleaningServices.heroSection.description")}
      />
      <Banner title={t("division.cleaningServices.banner.title")} />
      <ServicesSection
        title={t("division.cleaningServices.servicesSection.title")}
        description={t("division.cleaningServices.servicesSection.description")}
        services={services}
      />
    </div>
  );
};

export default CleaningServices;
