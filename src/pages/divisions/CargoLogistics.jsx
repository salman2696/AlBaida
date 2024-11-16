import React from "react";
import HeroSection from "../../components/HeroSection";
import heroImage from "../../assets/images/divisions/cargoLogistics/heroImage.jpg";
import { useTranslation } from "react-i18next";

const CargoLogistics = () => {
  const { t, i18n } = useTranslation();
  return (
    <div>
      <HeroSection
        heroImage={heroImage}
        title={t("division.cargoLogistics.heroSection.title")}
        descripton={t("division.cargoLogistics.heroSection.description")}
      />
      <p className="p-4 md:p-6 max-w-7xl mx-auto text-lg">
        {t("division.cargoLogistics.paragraph")}
      </p>
    </div>
  );
};

export default CargoLogistics;
