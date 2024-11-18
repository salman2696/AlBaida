import React from "react";
import HeroSection from "../../components/projects/HeroSection";
import ImageWithDesc from "../../components/HomePage/ImageWithDesc";
import ServiceCard1 from "../../components/ServiceCard1";
import Faqs from "../../components/Faqs";
import projectHeroImage from "../../assets/images/projects/camelRace/heroImage.jpg";
import projectDetailsImage from "../../assets/images/projects/camelRace/projectDetailsImage.jpg";
import companyLogo from "../../assets/images/projects/camelRace/companyLogo.png";
import categoryIcon from "../../assets/images/projects/camelRace/camelRacing.png";
import calendarIcon from "../../assets/images/projects/camelRace/calendar.png";
import mapIcon from "../../assets/images/projects/camelRace/map.png";
import { FaTractor, FaBroom } from "react-icons/fa";
import { RiWaterFlashFill } from "react-icons/ri";
import { GiRunningNinja } from "react-icons/gi";
import service1 from "../../assets/images/projects/qatarUniversity/service-1.jpg";
import service2 from "../../assets/images/projects/qatarUniversity/service-2.jpg";
import service3 from "../../assets/images/projects/qatarUniversity/service-3.jpg";
import { useTranslation } from "react-i18next";

const CamelRace = () => {
  const { t, i18n } = useTranslation();
  const herosection = [
    {
      projectHeroImage: projectHeroImage,
      heroTitle: t("projects.camelRaceProject.heroSection.title"),
      heroDescription: t("projects.camelRaceProject.heroSection.description"),
      showIcons: true,
      logo: companyLogo,
      categoryIcon: categoryIcon,
      calendarIcon: calendarIcon,
      employeeIcon: mapIcon,
      title1: t("projects.camelRaceProject.cardSection.title1"),
      title2: t("projects.camelRaceProject.cardSection.title2"),
      title3: t("projects.camelRaceProject.cardSection.title3"),
      title4: t("projects.camelRaceProject.cardSection.title4"),
      style: "md:w-16",
    },
  ];

  const services = [
    {
      icon: <FaTractor />,
      title: t("projects.camelRaceProject.services.serviceCard.0.title"),
      description: t(
        "projects.camelRaceProject.services.serviceCard.0.description"
      ),
      bgImage: service1,
    },
    {
      icon: <FaBroom />,
      title: t("projects.camelRaceProject.services.serviceCard.1.title"),
      description: t(
        "projects.camelRaceProject.services.serviceCard.1.description"
      ),
      bgImage: service2,
    },
    {
      icon: <RiWaterFlashFill />,
      title: t("projects.camelRaceProject.services.serviceCard.2.title"),
      description: t(
        "projects.camelRaceProject.services.serviceCard.2.description"
      ),
      bgImage: service3,
    },
    {
      icon: <GiRunningNinja />,
      title: t("projects.camelRaceProject.services.serviceCard.3.title"),
      description: t(
        "projects.camelRaceProject.services.serviceCard.3.description"
      ),
      bgImage: service3,
    },
  ];

  const faqsData = [
    {
      category: t("projects.camelRaceProject.FAQS.QnA.0.category"),
      question: t("projects.camelRaceProject.FAQS.QnA.0.question"),
      answer: t("projects.camelRaceProject.FAQS.QnA.0.answer"),
    },
    {
      category: t("projects.camelRaceProject.FAQS.QnA.1.category"),
      question: t("projects.camelRaceProject.FAQS.QnA.1.question"),
      answer: t("projects.camelRaceProject.FAQS.QnA.1.answer"),
    },
    {
      category: t("projects.camelRaceProject.FAQS.QnA.2.category"),
      question: t("projects.camelRaceProject.FAQS.QnA.2.question"),
      answer: t("projects.camelRaceProject.FAQS.QnA.2.answer"),
    },
    {
      category: t("projects.camelRaceProject.FAQS.QnA.3.category"),
      question: t("projects.camelRaceProject.FAQS.QnA.3.question"),
      answer: t("projects.camelRaceProject.FAQS.QnA.3.answer"),
    },
    {
      category: t("projects.camelRaceProject.FAQS.QnA.4.category"),
      question: t("projects.camelRaceProject.FAQS.QnA.4.question"),
      answer: t("projects.camelRaceProject.FAQS.QnA.4.answer"),
    },
    {
      category: t("projects.camelRaceProject.FAQS.QnA.5.category"),
      question: t("projects.camelRaceProject.FAQS.QnA.5.question"),
      answer: t("projects.camelRaceProject.FAQS.QnA.5.answer"),
    },
    {
      category: t("projects.camelRaceProject.FAQS.QnA.6.category"),
      question: t("projects.camelRaceProject.FAQS.QnA.6.question"),
      answer: t("projects.camelRaceProject.FAQS.QnA.6.answer"),
    },
    {
      category: t("projects.camelRaceProject.FAQS.QnA.7.category"),
      question: t("projects.camelRaceProject.FAQS.QnA.7.question"),
      answer: t("projects.camelRaceProject.FAQS.QnA.7.answer"),
    },
    {
      category: t("projects.camelRaceProject.FAQS.QnA.8.category"),
      question: t("projects.camelRaceProject.FAQS.QnA.8.question"),
      answer: t("projects.camelRaceProject.FAQS.QnA.8.answer"),
    },
    {
      category: t("projects.camelRaceProject.FAQS.QnA.9.category"),
      question: t("projects.camelRaceProject.FAQS.QnA.9.question"),
      answer: t("projects.camelRaceProject.FAQS.QnA.9.answer"),
    },
  ];

  return (
    <div>
      <HeroSection sections={herosection} />
      <ImageWithDesc
        title={t("projects.camelRaceProject.projectdetails.title")}
        subtitle={t("projects.camelRaceProject.projectdetails.subTitle")}
        description={t("projects.camelRaceProject.projectdetails.description")}
        imageSrc={projectDetailsImage}
        reverseLayout={false}
        bgColor="bg-[#e9eae5]"
        showButton={false}
      />
      <div className="bg-[#f3f4f6] min-h-[700px] flex flex-col justify-around py-10">
        <ServiceCard1
          services={services}
          MainTitle={t("projects.camelRaceProject.services.title")}
        />
        <p className="text-lg mb-6 max-w-7xl mx-auto p-4">
          {" "}
          {t("projects.camelRaceProject.services.paragraph")}
        </p>
      </div>
      <Faqs faqs={faqsData} />
    </div>
  );
};

export default CamelRace;
