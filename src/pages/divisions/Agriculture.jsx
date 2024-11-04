import React from "react";
import HeroSection from "../../components/HeroSection";
import heroImage from "../../assets/images/divisions/agriculture/heroImage.jpg";
import Banner from "../../components/Banner";
import {
  FaIndustry,
  FaExchangeAlt,
  FaSeedling,
  FaTruck,
  FaTree,
  FaLeaf,
} from "react-icons/fa";
import Services from "../../components/Servces";
import Partner from "../../components/Partner";
import logo from "../../assets/images/divisions/agriculture/alkhorayef.png"

const Agriculture = () => {
  const services = [
    { name: "Production", icon: <FaIndustry /> },
    { name: "Trading", icon: <FaExchangeAlt /> },
    { name: "Irrigation System", icon: <FaSeedling /> },
    { name: "Excavation", icon: <FaTruck /> },
    { name: "Landscaping", icon: <FaTree /> },
    { name: "Plantation", icon: <FaLeaf /> },
  ];

  return (
    <div>
      <HeroSection
        heroImage={heroImage}
        title="Agriculture Projects & Training"
        descripton="The world is nothing with no pastures and peasants. Agriculture is the sole reason of our very existence."
      />
      <div className="max-w-7xl mx-auto">
        <Banner title="Agriculture is the sole reason of our very existence." />
        <Services services={services} />
        <p className="p-4 text-lg">
          We are immensely proud to be the investor and developer of Um Guilina
          for cultivation of green fodder, which is one of Qatar’s most precious
          project owned by the Ministry of Municipality & Environment. Having
          accomplished this project makes us feel that we could break any
          barriers that would restrain us from our dreams. We are the sole
          distributer of every kind of agricultural products for more than 5
          international companies. We have attained greater reputation for
          accomplishing the government’s vision through our adept skill and
          strategies.
        </p>
        <Partner
          name="Alkhorayef Group"
          description="Alkhorayef Group was founded in 1957, Alkhorayef Group has achieved excellence on agricultural market by representing and marketing the top of the line brands, combined with a variety of excellent services to its customers."
          logo={logo}
        />
      </div>
    </div>
  );
};

export default Agriculture;
