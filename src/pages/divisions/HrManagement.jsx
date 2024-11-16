import React from "react";
import HeroSection from "../../components/HeroSection";
import heroImage from "../../assets/images/divisions/HrManagement/heroImage.jpg";
import Banner from "../../components/Banner";
import Services from "../../components/Services";
import { FaHandshake, FaTruckLoading, FaUsersCog } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const HrManagement = () => {
  const { t, i18n } = useTranslation();
  const services = [
    {
      name: t("division.hrManagement.servicesSection.services.0.name"),
      icon: <FaHandshake />,
      description: t(
        "division.hrManagement.servicesSection.services.0.description"
      ),
    },
    {
      name: t("division.hrManagement.servicesSection.services.1.name"),
      icon: <FaTruckLoading />,
      description: t(
        "division.hrManagement.servicesSection.services.1.description"
      ),
    },
    {
      name: t("division.hrManagement.servicesSection.services.2.name"),
      icon: <FaUsersCog />,
      description: t(
        "division.hrManagement.servicesSection.services.2.description"
      ),
    },
  ];

  return (
    <div>
      <HeroSection
        heroImage={heroImage}
        title={t("division.hrManagement.heroSection.title")}
        descripton={t("division.hrManagement.heroSection.description")}
      />
      <div className="max-w-7xl mx-auto">
        <Banner title={t("division.hrManagement.banner.title")} />
        <Services
          title={t("division.hrManagement.servicesSection.title")}
          description={t("division.hrManagement.servicesSection.decription")}
          services={services}
        />
        <p className="p-4 text-lg">{t("division.hrManagement.paragraph")}</p>
      </div>
    </div>
  );
};

export default HrManagement;
