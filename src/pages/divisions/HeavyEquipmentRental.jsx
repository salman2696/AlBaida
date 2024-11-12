import React from "react";
import HeroSection from "../../components/HeroSection";
import heroImage from "../../assets/images/divisions/HeavyEquipmentRental/heroImage.jpg";

const HeavyEquipmentRental = () => {
  return (
    <div>
      <HeroSection
        heroImage={heroImage}
        title="Heavy Equipment Rental"
        descripton="Heavy equipment is an indispensable section for a flourishing industry. The equipment requirement varies based on market segments."
      />
    </div>
  );
};

export default HeavyEquipmentRental;
