import React from "react";
import HeroSection from "../../components/projects/HeroSection";
import ImageWithDesc from "../../components/HomePage/ImageWithDesc";
import Faqs from "../../components/Faqs";
import projectHeroImage from "../../assets/images/projects/ministryOfDefence/heroImage.jpg";
import projectDetailsImage from "../../assets/images/projects/ministryOfDefence/projectDetailsImage.jpg";
import companyLogo from "../../assets/images/projects/ministryOfDefence/companyLogo.png";
import categoryIcon from "../../assets/images/projects/ministryOfDefence/governmentIcon.png";
import calendarIcon from "../../assets/images/projects/camelRace/calendar.png";
import employeeIcon from "../../assets/images/projects/qatarUniversity/employee.png";
import { useTranslation } from "react-i18next";

const MinistryOfDefence = () => {
  const { t, i18n } = useTranslation();
  const herosection = [
    {
      projectHeroImage: projectHeroImage,
      heroTitle: t("projects.ministryOfDefence.heroSection.title"),
      heroDescription: t("projects.ministryOfDefence.heroSection.description"),
      showIcons: true,
      logo: companyLogo,
      categoryIcon: categoryIcon,
      calendarIcon: calendarIcon,
      employeeIcon: employeeIcon,
      title1: t("projects.ministryOfDefence.cardSection.title1"),
      title2: t("projects.ministryOfDefence.cardSection.title2"),
      title3: t("projects.ministryOfDefence.cardSection.title3"),
      title4: t("projects.ministryOfDefence.cardSection.title4"),
      style: "md:w-16",
    },
  ];

  const faqsData = [
    {
      category: t("projects.ministryOfDefence.FAQS.QnA.0.category"),
      question: t("projects.ministryOfDefence.FAQS.QnA.0.question"),
      answer: t("projects.ministryOfDefence.FAQS.QnA.0.answer"),
    },
    {
      category: t("projects.ministryOfDefence.FAQS.QnA.1.category"),
      question: t("projects.ministryOfDefence.FAQS.QnA.1.question"),
      answer: t("projects.ministryOfDefence.FAQS.QnA.1.answer"),
    },
    {
      category: t("projects.ministryOfDefence.FAQS.QnA.2.category"),
      question: t("projects.ministryOfDefence.FAQS.QnA.2.question"),
      answer: t("projects.ministryOfDefence.FAQS.QnA.2.answer"),
    },
    {
      category: t("projects.ministryOfDefence.FAQS.QnA.3.category"),
      question: t("projects.ministryOfDefence.FAQS.QnA.3.question"),
      answer: t("projects.ministryOfDefence.FAQS.QnA.3.answer"),
    },
    {
      category: t("projects.ministryOfDefence.FAQS.QnA.4.category"),
      question: t("projects.ministryOfDefence.FAQS.QnA.4.question"),
      answer: t("projects.ministryOfDefence.FAQS.QnA.4.answer"),
    },
    {
      category: t("projects.ministryOfDefence.FAQS.QnA.5.category"),
      question: t("projects.ministryOfDefence.FAQS.QnA.5.question"),
      answer: t("projects.ministryOfDefence.FAQS.QnA.5.answer"),
    },
    {
      category: t("projects.ministryOfDefence.FAQS.QnA.6.category"),
      question: t("projects.ministryOfDefence.FAQS.QnA.6.question"),
      answer: t("projects.ministryOfDefence.FAQS.QnA.6.answer"),
    },
    {
      category: t("projects.ministryOfDefence.FAQS.QnA.7.category"),
      question: t("projects.ministryOfDefence.FAQS.QnA.7.question"),
      answer: t("projects.ministryOfDefence.FAQS.QnA.7.answer"),
    },
    {
      category: t("projects.ministryOfDefence.FAQS.QnA.8.category"),
      question: t("projects.ministryOfDefence.FAQS.QnA.8.question"),
      answer: t("projects.ministryOfDefence.FAQS.QnA.8.answer"),
    },
    {
      category: t("projects.ministryOfDefence.FAQS.QnA.9.category"),
      question: t("projects.ministryOfDefence.FAQS.QnA.9.question"),
      answer: t("projects.ministryOfDefence.FAQS.QnA.9.answer"),
    },
  ];

  return (
    <div>
      <HeroSection sections={herosection} />
      <ImageWithDesc
        title={t("projects.ministryOfDefence.projectdetails.title")}
        subtitle={t("projects.ministryOfDefence.projectdetails.subTitle")}
        description={t("projects.ministryOfDefence.projectdetails.description")}
        imageSrc={projectDetailsImage}
        reverseLayout={false}
        bgColor="bg-[#e9eae5]"
        showButton={false}
      />
      <Faqs faqs={faqsData} />
    </div>
  );
};

export default MinistryOfDefence;
