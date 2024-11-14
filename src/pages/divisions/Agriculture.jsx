import React from "react";
import HeroSection from "../../components/HeroSection";
import heroImage from "../../assets/images/divisions/agriculture/heroImage.jpg";
import Banner from "../../components/Banner";
import { useTranslation } from "react-i18next";
import {
  FaIndustry,
  FaExchangeAlt,
  FaSeedling,
  FaTruck,
  FaTree,
  FaLeaf,
} from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";
import Services from "../../components/Services";
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
  const { t, i18n } = useTranslation();

  const services = [
    {
      name: t("division.agriculture.servicesSection.services.0.name"),
      icon: <FaIndustry />,
      description: t(
        "division.agriculture.servicesSection.services.0.description"
      ),
    },
    {
      name: t("division.agriculture.servicesSection.services.1.name"),
      icon: <FaExchangeAlt />,
      description: t(
        "division.agriculture.servicesSection.services.1.description"
      ),
    },
    {
      name: t("division.agriculture.servicesSection.services.2.name"),
      icon: <FaSeedling />,
      description: t(
        "division.agriculture.servicesSection.services.2.description"
      ),
    },
    {
      name: t("division.agriculture.servicesSection.services.3.name"),
      icon: <FaTruck />,
      description: t(
        "division.agriculture.servicesSection.services.3.description"
      ),
    },
    {
      name: t("division.agriculture.servicesSection.services.4.name"),
      icon: <FaTree />,
      description: t(
        "division.agriculture.servicesSection.services.4.description"
      ),
    },
    {
      name: t("division.agriculture.servicesSection.services.5.name"),
      icon: <FaLeaf />,
      description: t(
        "division.agriculture.servicesSection.services.5.description"
      ),
    },
  ];
  const cards = [
    {
      image: fertilizer,
      text: t(
        "division.agriculture.companiesInfo.0.topSellingProducts.product1"
      ),
    },
    {
      image: plant,
      text: t(
        "division.agriculture.companiesInfo.0.topSellingProducts.product2"
      ),
    },
    {
      image: soil,
      text: t(
        "division.agriculture.companiesInfo.0.topSellingProducts.product3"
      ),
    },
  ];

  return (
    <div>
      <HeroSection
        heroImage={heroImage}
        title={t("division.agriculture.heroSection.title")}
        descripton={t("division.agriculture.heroSection.description")}
      />
      <div className="max-w-7xl mx-auto">
        <Banner title={t("division.agriculture.banner.title")} />
        <Services
          title={t("division.agriculture.servicesSection.title")}
          services={services}
        />
        <p className="p-4 text-lg">{t("division.agriculture.paragraph")}</p>
      </div>
      <div className="bg-[#e9eae5]">
        <div className="flex flex-col lg:flex-row items-center gap-8 p-6 max-w-7xl mx-auto">
          <div className="lg:w-1/2 space-y-6">
            {/* Services Section */}
            <h2 className="text-4xl font-bold mb-8 animate-line def-title relative">
              {t("division.agriculture.partner.title")}
            </h2>
            <h3 className="text-xl mb-4">
              {t("division.agriculture.partner.description")}
            </h3>
            <ul className="space-y-2 text-gray-700">
              {[
                t("division.agriculture.partner.list.0.name"),
                t("division.agriculture.partner.list.1.name"),
                t("division.agriculture.partner.list.2.name"),
                t("division.agriculture.partner.list.3.name"),
                t("division.agriculture.partner.list.4.name"),
              ].map((item, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <FaCircleCheck className="text-custom-red" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <Partner
            name={t("division.agriculture.partner.brandCard.title")}
            description={t(
              "division.agriculture.partner.brandCard.description"
            )}
            logo={logo}
            customClass="lg:w-1/2"
          />
        </div>
      </div>
      <div className="p-4 max-w-7xl mx-auto">
        <h2 className="text-4xl text-center font-bold mb-4 mt-6 center-title">
          {t("division.agriculture.news.title")}
        </h2>
        <p className="text-xl mb-4 text-center">
          {t("division.agriculture.news.description")}
        </p>
        <img
          src={newsImage}
          alt="news"
          className="w-full h-full object-cover rounded-lg shadow-md"
        />
      </div>
      <div className="space-y-8 max-w-7xl mx-auto">
        <ContentWithImage
          title={t("division.agriculture.companiesInfo.0.title")}
          description1={t("division.agriculture.companiesInfo.0.description1")}
          description2={t("division.agriculture.companiesInfo.0.description2")}
          image={gubretasImage}
        />
        <TitleWithCards
          title={t(
            "division.agriculture.companiesInfo.0.topSellingProducts.title"
          )}
          cards={cards}
        />
        <ContentWithImage
          title={t("division.agriculture.companiesInfo.1.title")}
          description1={t("division.agriculture.companiesInfo.1.description1")}
          description2={t("division.agriculture.companiesInfo.1.description2")}
          image={daymsa}
          reverse={true}
        />
        <ContentWithImage
          title={t("division.agriculture.companiesInfo.2.title")}
          description1={t("division.agriculture.companiesInfo.2.description1")}
          description2={t("division.agriculture.companiesInfo.2.description2")}
          image={sAndw}
        />
      </div>
    </div>
  );
};

export default Agriculture;
