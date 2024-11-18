import React from "react";
import HeroSection from "../../components/HeroSection";
import heroImage from "../../assets/images/divisions/businessManagementConsultancy/heroImage.jpg";
import { useTranslation } from "react-i18next";

const BussinesManagement = () => {
  const { t, i18n } = useTranslation();
  return (
    <div>
      <HeroSection
        heroImage={heroImage}
        title={t("division.businessManagement.heroSection.title")}
        descripton={t("division.businessManagement.heroSection.description")}
      />
      <p className="p-4 md:p-6 max-w-7xl mx-auto text-lg">
        {t("division.businessManagement.paragraph1")}
        <br />
        {t("division.businessManagement.paragraph2")}
      </p>
    </div>
  );
};

export default BussinesManagement;
