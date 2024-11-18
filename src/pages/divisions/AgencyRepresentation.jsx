import React from "react";
import HeroSection from "../../components/HeroSection";
import heroImage from "../../assets/images/divisions/agencyRepresentation/heroImage.jpg";
import { useTranslation } from "react-i18next";

const AgencyRepresentation = () => {
  const { t, i18n } = useTranslation();
  return (
    <div>
      <HeroSection
        heroImage={heroImage}
        title={t("division.agencyRepresentation.heroSection.title")}
        descripton={t("division.agencyRepresentation.heroSection.description")}
      />
      <p className="p-4 md:p-6 max-w-7xl mx-auto text-lg">
        {t("division.agencyRepresentation.paragraph1")}
        <br />
        {t("division.agencyRepresentation.paragraph2")}
      </p>
    </div>
  );
};

export default AgencyRepresentation;
