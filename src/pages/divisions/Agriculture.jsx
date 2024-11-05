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
import { FaCircleCheck } from "react-icons/fa6";
import Services from "../../components/Servces";
import Partner from "../../components/Partner";
import logo from "../../assets/images/divisions/agriculture/alkhorayef.png";
import newsImage from "../../assets/images/divisions/agriculture/news.jpg";
import gubretasImage from "../../assets/images/divisions/agriculture/gubretas.png";
import daymsa from "../../assets/images/divisions/agriculture/daymsa.png";
import sAndw from "../../assets/images/divisions/agriculture/sw.png";
import ContentWithImage from "../../components/ContentWithImage";
import TitleWithCards from "../../components/TitleWithCards";
import fertilizer from "../../assets/images/divisions/agriculture/fertilizer.png";
import plant from "../../assets/images/divisions/agriculture/plant.png";
import soil from "../../assets/images/divisions/agriculture/soil.png";

const Agriculture = () => {
  const services = [
    { name: "Production", icon: <FaIndustry /> },
    { name: "Trading", icon: <FaExchangeAlt /> },
    { name: "Irrigation System", icon: <FaSeedling /> },
    { name: "Excavation", icon: <FaTruck /> },
    { name: "Landscaping", icon: <FaTree /> },
    { name: "Plantation", icon: <FaLeaf /> },
  ];

  const cards = [
    { image: fertilizer, text: " Solid, Water-Soluble Organic Fertilizers" },
    { image: plant, text: "Plant Growth Regulators" },
    { image: soil, text: "Soil Conditioners" },
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
      </div>
      <div className="bg-[#e9eae5]">
        <div className="flex flex-col lg:flex-row items-center gap-8 p-6 max-w-7xl mx-auto">
          <div className="lg:w-1/2 space-y-6">
            {/* Services Section */}
            <h2 className="text-4xl font-bold mb-8 animate-line def-title relative">Our Valuable Partner</h2>
            <h3 className="text-xl mb-4">
              Al Baida Technical Services is exclusive business partner in
              Qatar. Alkhorayef is leading irrigation company in GCC and
              provides wide range of agriculture services
            </h3>
            <ul className="space-y-2 text-gray-700">
              {[
                "Planning and designing the Camel Race Tracks",
                "Planning and designing the allied road along the tracks",
                "Implantation of lamp posts along the tracks",
                "Construction of the race tracks and roads",
                "Maintenance of the tracks, road and entire arena",
              ].map((item, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <FaCircleCheck className="text-custom-red" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <Partner
            name="Alkhorayef Group"
            description="Alkhorayef Group was founded in 1957, Alkhorayef Group has achieved excellence on agricultural market by representing and marketing the top of the line brands, combined with a variety of excellent services to its customers."
            logo={logo}
            customClass="lg:w-1/2"
          />
        </div>
      </div>
      <div className="p-4 max-w-7xl mx-auto">
        <h2 className="text-4xl text-center font-bold mb-4 mt-6 center-title">From the News</h2>
        <p className="text-xl mb-4 text-center">
          Al Baida Group’s Chairman Engineer Ali Abdullatif Almesned,
          accompanying its CEO Eng. Mohamed Elwan signed the agreement with
          Sheikh Mohamed Abdulla Alkhorayef, chairman of Alkhorayef Group.
        </p>
        <img
          src={newsImage}
          alt="news"
          className="w-full h-full object-cover rounded-lg shadow-md"
        />
      </div>
      <div className="space-y-8 max-w-7xl mx-auto">
        <ContentWithImage
          title="Gubretas"
          description1="Al Baida Technical Services is a cardinal distributor for one of the largest Fertilizer Company ‘Gubretas’ at Turkey."
          description2="Gubretas was founded in 1952 catering the fertilizer needs of Turkish agricultural industry. Having been a predominant organization in Turkey’s top 50 largest industries, it owns a rich product portfolio in meeting the nutritional requirement of crops."
          image={gubretasImage}
        />
        <TitleWithCards title="Top Selling Products" cards={cards} />
        <ContentWithImage
          title="Daymsa"
          description1="Established in 1970 Daymsa is present in more than 40 countries This structure is highly effective in transferring new techniques, developed by the Spanish central office, to the market as well as in the control and monitoring of its implementation and development throughout the world."
          description2="Daymsa has met with a warm welcome in the more developed countries where they are sensitive to this new concept that has gradually become more widespread around the world: Agriculture, like all other means of production, must be environmentally friendly and sustainable in the long term. Al Baida Technical Services is an exclusive business partner and distributor for Qatar"
          image={daymsa}
          reverse={true}
        />
        <ContentWithImage
          title="S&W Seed Company"
          description1="We are an accredited dealer for one of the leading agricultural organization, ‘S&W’ in Qatar."
          description2="S&W is one its kind in the agricultural market, in practicing the most nourishing techniques for a greater production. Their expertise in this field makes them an exceptional firm for maximum yield with superior traits."
          image={sAndw}
        />
      </div>
    </div>
  );
};

export default Agriculture;
