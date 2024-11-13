// OurServices.jsx
import React from "react";
import Slider from "react-slick";
import { useTranslation } from "react-i18next";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ServiceCard from "../ServiceCard";
import imageService1 from "../../assets/images/services/service-1.jpg";
import imageService2 from "../../assets/images/services/service-2.jpg";
import imageService3 from "../../assets/images/services/service-3.jpg";
import imageService4 from "../../assets/images/services/service-4.jpg";
import imageService5 from "../../assets/images/services/service-5.jpg";
import imageService6 from "../../assets/images/services/service-6.jpg";
import imageService7 from "../../assets/images/services/service-7.jpg";
import imageService8 from "../../assets/images/services/service-8.jpg";
import imageService9 from "../../assets/images/services/service-9.jpg";
import imageService10 from "../../assets/images/services/service-10.jpg";
import imageService11 from "../../assets/images/services/service-11.jpg";
import imageService12 from "../../assets/images/services/service-12.jpg";

const OurServices = () => {
  const { t } = useTranslation();
  

  const services = [
    {
      imageSrc: imageService1,
      title: t("home.services.cards.0.title"),
      description: t("home.services.cards.0.description"),
      buttonText: t("home.services.cards.0.buttonText"),
    },
    {
      imageSrc: imageService2,
      title: t("home.services.cards.1.title"),
      description: t("home.services.cards.1.description"),
      buttonText: t("home.services.cards.1.buttonText"),
    },
    {
      imageSrc: imageService3,
      title: t("home.services.cards.2.title"),
      description: t("home.services.cards.2.description"),
      buttonText: t("home.services.cards.2.buttonText"),
    },
    {
      imageSrc: imageService4,
      title: t("home.services.cards.3.title"),
      description: t("home.services.cards.3.description"),
      buttonText: t("home.services.cards.3.buttonText"),
    },
    {
      imageSrc: imageService5,
      title: t("home.services.cards.4.title"),
      description: t("home.services.cards.4.description"),
      buttonText: t("home.services.cards.4.buttonText"),
    },
    {
      imageSrc: imageService6,
      title: t("home.services.cards.5.title"),
      description: t("home.services.cards.5.description"),
      buttonText: t("home.services.cards.5.buttonText"),
    },
    {
      imageSrc: imageService7,
      title: t("home.services.cards.6.title"),
      description: t("home.services.cards.6.description"),
      buttonText: t("home.services.cards.6.buttonText"),
    },
    {
      imageSrc: imageService8,
      title: t("home.services.cards.7.title"),
      description: t("home.services.cards.7.description"),
      buttonText: t("home.services.cards.7.buttonText"),
    },
    {
      imageSrc: imageService9,
      title: t("home.services.cards.8.title"),
      description: t("home.services.cards.8.description"),
      buttonText: t("home.services.cards.8.buttonText"),
    },
    {
      imageSrc: imageService10,
      title: t("home.services.cards.9.title"),
      description: t("home.services.cards.9.description"),
      buttonText: t("home.services.cards.9.buttonText"),
    },
    {
      imageSrc: imageService11,
      title: t("home.services.cards.10.title"),
      description: t("home.services.cards.10.description"),
      buttonText: t("home.services.cards.10.buttonText"),
    },
    {
      imageSrc: imageService12,
      title: t("home.services.cards.11.title"),
      description: t("home.services.cards.11.description"),
      buttonText: t("home.services.cards.11.buttonText"),
    },
  ];

  const CustomPrevArrow = (props) => {
    const { 
      className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          position: "absolute",
          left: "-15px",
          zIndex: 1,
          color: "#C20001", // Customize color
          fontSize: "30px", // Customize size
          cursor: "pointer",
        }}
        onClick={onClick}
      >
        <FaChevronLeft />
      </div>
    );
  };

  const CustomNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          position: "absolute",
          right: "-5px",
          zIndex: 1,
          color: "#C20001", // Customize color
          fontSize: "30px", // Customize size
          cursor: "pointer",
        }}
        onClick={onClick}
      >
        <FaChevronRight />
      </div>
    );
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000,
    arrows: false,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="py-12">
      <div className="container mx-auto max-w-7xl px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 center-title">
          {t("home.services.title")}
        </h2>
        <Slider {...settings}>
          {services.map((service, index) => (
            <div key={index}>
              <ServiceCard
                imageSrc={service.imageSrc}
                title={service.title}
                description={service.description}
                buttonText={service.buttonText}
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default OurServices;
