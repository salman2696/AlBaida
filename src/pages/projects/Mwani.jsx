import React from "react";
import HeroSection from "../../components/projects/HeroSection";
import ImageWithDesc from "../../components/HomePage/ImageWithDesc";
import ServiceCard1 from "../../components/ServiceCard1";
import Faqs from "../../components/Faqs";
import projectHeroImage from "../../assets/images/projects/mwani/heroImage.jpg";
import projectDetailsImage from "../../assets/images/projects/mwani/projectDetailsImage.jpg";
import qatarUniversityLogo from "../../assets/images/projects/mwani/mwani-logo.jpg";
import categoryIcon from "../../assets/images/projects/mwani/supply-chain-management.png";
import calendarIcon from "../../assets/images/projects/qatarUniversity/calendar.png";
import employeeIcon from "../../assets/images/projects/qatarUniversity/employee.png";
import {
  FaUnlockAlt,
  FaBoxOpen,
  FaLock,
  FaUsers,
  FaAnchor,
  FaShip,
  FaTruckLoading,
  FaFileAlt,
} from "react-icons/fa";
import service1 from "../../assets/images/projects/qatarUniversity/service-1.jpg";
import service2 from "../../assets/images/projects/qatarUniversity/service-2.jpg";
import service3 from "../../assets/images/projects/qatarUniversity/service-3.jpg";
import { useTranslation } from "react-i18next";

const Mwani = () => {
  const { t, i18n } = useTranslation();
  const herosection = [
    {
      projectHeroImage: projectHeroImage,
      heroTitle: t("projects.mwaniProject.heroSection.title"),
      heroDescription: t("projects.mwaniProject.heroSection.description"),
      showIcons: true,
      logo: qatarUniversityLogo,
      categoryIcon: categoryIcon,
      calendarIcon: calendarIcon,
      employeeIcon: employeeIcon,
      title1: t("projects.mwaniProject.cardSection.title1"),
      title2: t("projects.mwaniProject.cardSection.title2"),
      title3: t("projects.mwaniProject.cardSection.title3"),
      title4: t("projects.mwaniProject.cardSection.title4"),
      style: "md:w-24",
    },
  ];

  const services = [
    {
      icon: <FaUnlockAlt />,
      title: t("projects.mwaniProject.services.serviceCard.0.title"),
      description: t(
        "projects.mwaniProject.services.serviceCard.0.description"
      ),
      bgImage: service1,
    },
    {
      icon: <FaBoxOpen />,
      title: t("projects.mwaniProject.services.serviceCard.1.title"),
      description: t(
        "projects.mwaniProject.services.serviceCard.1.description"
      ),
      bgImage: service2,
    },
    {
      icon: <FaLock />,
      title: t("projects.mwaniProject.services.serviceCard.2.title"),
      description: t(
        "projects.mwaniProject.services.serviceCard.2.description"
      ),
      bgImage: service3,
    },
    {
      icon: <FaUsers />,
      title: t("projects.mwaniProject.services.serviceCard.3.title"),
      description: t(
        "projects.mwaniProject.services.serviceCard.3.description"
      ),
      bgImage: service3,
    },
    {
      icon: <FaAnchor />,
      title: t("projects.mwaniProject.services.serviceCard.4.title"),
      description: t(
        "projects.mwaniProject.services.serviceCard.4.description"
      ),
      bgImage: service3,
    },
    {
      icon: <FaShip />,
      title: t("projects.mwaniProject.services.serviceCard.5.title"),
      description: t(
        "projects.mwaniProject.services.serviceCard.5.description"
      ),
      bgImage: service3,
    },
    {
      icon: <FaTruckLoading />,
      title: t("projects.mwaniProject.services.serviceCard.6.title"),
      description: t(
        "projects.mwaniProject.services.serviceCard.6.description"
      ),
      bgImage: service3,
    },
    {
      icon: <FaFileAlt />,
      title: t("projects.mwaniProject.services.serviceCard.7.title"),
      description: t(
        "projects.mwaniProject.services.serviceCard.7.description"
      ),
      bgImage: service3,
    },
  ];

  const faqsData = [
    {
      category: t("projects.mwaniProject.FAQS.QnA.0.category"),
      question: t("projects.mwaniProject.FAQS.QnA.0.question"),
      answer: t("projects.mwaniProject.FAQS.QnA.0.answer"),
    },
    {
      category: t("projects.mwaniProject.FAQS.QnA.1.category"),
      question: t("projects.mwaniProject.FAQS.QnA.1.question"),
      answer: t("projects.mwaniProject.FAQS.QnA.1.answer"),
    },
    {
      category: t("projects.mwaniProject.FAQS.QnA.2.category"),
      question: t("projects.mwaniProject.FAQS.QnA.2.question"),
      answer: t("projects.mwaniProject.FAQS.QnA.2.answer"),
    },
    {
      category: t("projects.mwaniProject.FAQS.QnA.3.category"),
      question: t("projects.mwaniProject.FAQS.QnA.3.question"),
      answer: t("projects.mwaniProject.FAQS.QnA.3.answer"),
    },
    {
      category: t("projects.mwaniProject.FAQS.QnA.4.category"),
      question: t("projects.mwaniProject.FAQS.QnA.4.question"),
      answer: t("projects.mwaniProject.FAQS.QnA.4.answer"),
    },
    {
      category: t("projects.mwaniProject.FAQS.QnA.5.category"),
      question: t("projects.mwaniProject.FAQS.QnA.5.question"),
      answer: t("projects.mwaniProject.FAQS.QnA.5.answer"),
    },
    {
      category: t("projects.mwaniProject.FAQS.QnA.6.category"),
      question: t("projects.mwaniProject.FAQS.QnA.6.question"),
      answer: t("projects.mwaniProject.FAQS.QnA.6.answer"),
    },
    {
      category: t("projects.mwaniProject.FAQS.QnA.7.category"),
      question: t("projects.mwaniProject.FAQS.QnA.7.question"),
      answer: t("projects.mwaniProject.FAQS.QnA.7.answer"),
    },
    {
      category: t("projects.mwaniProject.FAQS.QnA.8.category"),
      question: t("projects.mwaniProject.FAQS.QnA.8.question"),
      answer: t("projects.mwaniProject.FAQS.QnA.8.answer"),
    },
    {
      category: t("projects.mwaniProject.FAQS.QnA.9.category"),
      question: t("projects.mwaniProject.FAQS.QnA.9.question"),
      answer: t("projects.mwaniProject.FAQS.QnA.9.answer"),
    },
  ];

  return (
    <div>
      <HeroSection sections={herosection} />
      <ImageWithDesc
        title={t("projects.mwaniProject.projectdetails.title")}
        subtitle={t("projects.mwaniProject.projectdetails.subTitle")}
        description={t("projects.mwaniProject.projectdetails.description")}
        imageSrc={projectDetailsImage}
        reverseLayout={false}
        bgColor="bg-[#e9eae5]"
        showButton={false}
      />
      <div className="bg-[#f3f4f6] min-h-[700px] flex flex-col justify-around py-10">
        <ServiceCard1
          services={services}
          MainTitle={t("projects.mwaniProject.services.title")}
        />
        <p className="text-lg mb-6 max-w-7xl mx-auto p-4">
          {t("projects.mwaniProject.services.paragraph")}
        </p>
      </div>
      <Faqs faqs={faqsData} />
    </div>
  );
};

export default Mwani;
