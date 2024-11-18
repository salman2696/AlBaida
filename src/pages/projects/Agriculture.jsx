import React from "react";
import HeroSection from "../../components/projects/HeroSection";
import ImageWithDesc from "../../components/HomePage/ImageWithDesc";
import Faqs from "../../components/Faqs";
import projectHeroImage from "../../assets/images/projects/agriculture/heroImage.jpg";
import projectDetailsImage from "../../assets/images/projects/agriculture/heroImage.jpg";
import companyLogo from "../../assets/images/projects/agriculture/companyLogo.png";
import categoryIcon from "../../assets/images/projects/agriculture/planting.png";
import calendarIcon from "../../assets/images/projects/camelRace/calendar.png";
import employeeIcon from "../../assets/images/projects/qatarUniversity/employee.png";
import { useTranslation } from "react-i18next";

const Agriculture = () => {
  const { t, i18n } = useTranslation();
  const herosection = [
    {
      projectHeroImage: projectHeroImage,
      heroTitle: t("projects.agriculture.heroSection.title"),
      heroDescription: t("projects.agriculture.heroSection.description"),
      showIcons: true,
      logo: companyLogo,
      categoryIcon: categoryIcon,
      calendarIcon: calendarIcon,
      employeeIcon: employeeIcon,
      title1: t("projects.agriculture.cardSection.title1"),
      title2: t("projects.agriculture.cardSection.title2"),
      title3: t("projects.agriculture.cardSection.title3"),
      title4: t("projects.agriculture.cardSection.title4"),
      style: "md:w-24",
    },
  ];

  const faqsData = [
    {
      category: t("projects.agriculture.FAQS.QnA.0.category"),
      question: t("projects.agriculture.FAQS.QnA.0.question"),
      answer: t("projects.agriculture.FAQS.QnA.0.answer"),
    },
    {
      category: t("projects.agriculture.FAQS.QnA.1.category"),
      question: t("projects.agriculture.FAQS.QnA.1.question"),
      answer: t("projects.agriculture.FAQS.QnA.1.answer"),
    },
    {
      category: t("projects.agriculture.FAQS.QnA.2.category"),
      question: t("projects.agriculture.FAQS.QnA.2.question"),
      answer: t("projects.agriculture.FAQS.QnA.2.answer"),
    },
    {
      category: t("projects.agriculture.FAQS.QnA.3.category"),
      question: t("projects.agriculture.FAQS.QnA.3.question"),
      answer: t("projects.agriculture.FAQS.QnA.3.answer"),
    },
    {
      category: t("projects.agriculture.FAQS.QnA.4.category"),
      question: t("projects.agriculture.FAQS.QnA.4.question"),
      answer: t("projects.agriculture.FAQS.QnA.4.answer"),
    },
    {
      category: t("projects.agriculture.FAQS.QnA.5.category"),
      question: t("projects.agriculture.FAQS.QnA.5.question"),
      answer: t("projects.agriculture.FAQS.QnA.5.answer"),
    },
    {
      category: t("projects.agriculture.FAQS.QnA.6.category"),
      question: t("projects.agriculture.FAQS.QnA.6.question"),
      answer: t("projects.agriculture.FAQS.QnA.6.answer"),
    },
    {
      category: t("projects.agriculture.FAQS.QnA.7.category"),
      question: t("projects.agriculture.FAQS.QnA.7.question"),
      answer: t("projects.agriculture.FAQS.QnA.7.answer"),
    },
    {
      category: t("projects.agriculture.FAQS.QnA.8.category"),
      question: t("projects.agriculture.FAQS.QnA.8.question"),
      answer: t("projects.agriculture.FAQS.QnA.8.answer"),
    },
    {
      category: t("projects.agriculture.FAQS.QnA.9.category"),
      question: t("projects.agriculture.FAQS.QnA.9.question"),
      answer: t("projects.agriculture.FAQS.QnA.9.answer"),
    },
  ];

  return (
    <div>
      <HeroSection sections={herosection} />
      <ImageWithDesc
        title={t("projects.agriculture.projectdetails.title")}
        subtitle={t("projects.agriculture.projectdetails.subTitle")}
        description={t("projects.agriculture.projectdetails.description")}
        imageSrc={projectDetailsImage}
        reverseLayout={false}
        bgColor="bg-[#e9eae5]"
        showButton={false}
      />
      <Faqs faqs={faqsData} />
    </div>
  );
};

export default Agriculture;
