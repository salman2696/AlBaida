import React from "react";
import HeroSection from "../../components/HeroSection";
import heroImage from "../../assets/images/divisions/engineeringConsultancy/heroImage.jpg";
import { useTranslation } from "react-i18next";

const EngineeringConsultancy = () => {
  const { t, i18n } = useTranslation();
  return (
    <div>
      <HeroSection
        heroImage={heroImage}
        title={t("division.engineeringConsultancy.heroSection.title")}
        descripton={t(
          "division.engineeringConsultancy.heroSection.description"
        )}
      />
      <p className="p-4 md:p-6 max-w-7xl mx-auto text-lg">
        {t("division.engineeringConsultancy.paragraph1")}
        <br />
        {t("division.engineeringConsultancy.paragraph2")}
      </p>
    </div>
  );
};

export default EngineeringConsultancy;
