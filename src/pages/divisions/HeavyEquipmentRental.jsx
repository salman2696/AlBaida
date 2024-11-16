import React from "react";
import HeroSection from "../../components/HeroSection";
import heroImage from "../../assets/images/divisions/HeavyEquipmentRental/heroImage.jpg";
import gridImage1 from "../../assets/images/divisions/HeavyEquipmentRental/gridImage1.png";
import gridImage2 from "../../assets/images/divisions/HeavyEquipmentRental/gridImage2.png";
import gridImage3 from "../../assets/images/divisions/HeavyEquipmentRental/gridImage3.png";
import gridImage4 from "../../assets/images/divisions/HeavyEquipmentRental/gridImage4.png";
import { useTranslation } from "react-i18next";

const HeavyEquipmentRental = () => {
  const { t, i18n } = useTranslation();
  const gridImages = [gridImage1, gridImage2, gridImage3, gridImage4];

  return (
    <div>
      <HeroSection
        heroImage={heroImage}
        title={t("division.heavyEquipmentRental.heroSection.title")}
        descripton={t("division.heavyEquipmentRental.heroSection.description")}
      />
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row p-4">
        <div className="w-full md:w-2/4 p-2">
          <p className="text-lg">
            {t("division.heavyEquipmentRental.paragraph.p1")}
            <br /> {t("division.heavyEquipmentRental.paragraph.p2")}
            <br />
            {t("division.heavyEquipmentRental.paragraph.p3")}
          </p>
        </div>
        <div className="w-full md:w-2/4 p-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {gridImages.map((image, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-lg shadow-md transform transition hover:scale-105"
              >
                <img
                  src={image}
                  alt={`Image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeavyEquipmentRental;
