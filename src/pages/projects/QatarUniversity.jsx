import React from "react";
import projectHeroImage from "../../assets/images/projects/qatarUniversity/qatar-university.jpg";
import projectDetailsImage from "../../assets/images/projects/qatarUniversity/projectDetailsImage.jpg";
import qatarUniversityLogo from "../../assets/images/projects/qatarUniversity/qatar-university-logo.jpg";
import categoryIcon from "../../assets/images/projects/qatarUniversity/university.png";
import calendarIcon from "../../assets/images/projects/qatarUniversity/calendar.png";
import employeeIcon from "../../assets/images/projects/qatarUniversity/employee.png";
import ImageWithDesc from "../../components/HomePage/ImageWithDesc";
import TitleWithCards from "../../components/TitleWithCards";
import ServiceCard1 from "../../components/ServiceCard1";
import service1 from "../../assets/images/projects/qatarUniversity/service-1.jpg";
import service2 from "../../assets/images/projects/qatarUniversity/service-2.jpg";
import service3 from "../../assets/images/projects/qatarUniversity/service-3.jpg";
import HeroSection from "../../components/projects/HeroSection";
import Faqs from "../../components/Faqs";
import Gallery from "../../components/Gallery";
import { FaBroom, FaTools, FaSoap } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const QatarUniversity = () => {
  const { t, i18n } = useTranslation();
  const herosection = [
    {
      projectHeroImage: projectHeroImage,
      heroTitle: t("projects.qatarUniversity.heroSection.title"),
      heroDescription: t("projects.qatarUniversity.heroSection.description"),
      logo: qatarUniversityLogo,
      categoryIcon: categoryIcon,
      calendarIcon: calendarIcon,
      employeeIcon: employeeIcon,
      title1: t("projects.qatarUniversity.cardSection.title1"),
      title2: t("projects.qatarUniversity.cardSection.title2"),
      title3: t("projects.qatarUniversity.cardSection.title3"),
      title4: t("projects.qatarUniversity.cardSection.title4"),
      style: "md:w-24",
    },
  ];

  const services = [
    {
      icon: <FaTools />,
      title: t("projects.qatarUniversity.services.serviceCard.0.title"),
      description: t(
        "projects.qatarUniversity.services.serviceCard.0.description"
      ),
      bgImage: service1,
    },
    {
      icon: <FaBroom />,
      title: t("projects.qatarUniversity.services.serviceCard.1.title"),
      description: t(
        "projects.qatarUniversity.services.serviceCard.1.description"
      ),
      bgImage: service2,
    },
    {
      icon: <FaSoap />,
      title: t("projects.qatarUniversity.services.serviceCard.2.title"),
      description: t(
        "projects.qatarUniversity.services.serviceCard.2.description"
      ),
      bgImage: service3,
    },
    // Add more services as needed
  ];

  const faqsData = [
    {
      category: t("projects.qatarUniversity.FAQS.QnA.0.category"),
      question: t("projects.qatarUniversity.FAQS.QnA.0.question"),
      answer: t("projects.qatarUniversity.FAQS.QnA.0.answer"),
    },
    {
      category: t("projects.qatarUniversity.FAQS.QnA.1.category"),
      question: t("projects.qatarUniversity.FAQS.QnA.1.question"),
      answer: t("projects.qatarUniversity.FAQS.QnA.1.answer"),
    },
    {
      category: t("projects.qatarUniversity.FAQS.QnA.2.category"),
      question: t("projects.qatarUniversity.FAQS.QnA.2.question"),
      answer: t("projects.qatarUniversity.FAQS.QnA.2.answer"),
    },
    {
      category: t("projects.qatarUniversity.FAQS.QnA.3.category"),
      question: t("projects.qatarUniversity.FAQS.QnA.3.question"),
      answer: t("projects.qatarUniversity.FAQS.QnA.3.answer"),
    },
    {
      category: t("projects.qatarUniversity.FAQS.QnA.4.category"),
      question: t("projects.qatarUniversity.FAQS.QnA.4.question"),
      answer: t("projects.qatarUniversity.FAQS.QnA.4.answer"),
    },
    {
      category: t("projects.qatarUniversity.FAQS.QnA.5.category"),
      question: t("projects.qatarUniversity.FAQS.QnA.5.question"),
      answer: t("projects.qatarUniversity.FAQS.QnA.5.answer"),
    },
    {
      category: t("projects.qatarUniversity.FAQS.QnA.6.category"),
      question: t("projects.qatarUniversity.FAQS.QnA.6.question"),
      answer: t("projects.qatarUniversity.FAQS.QnA.6.answer"),
    },
    {
      category: t("projects.qatarUniversity.FAQS.QnA.7.category"),
      question: t("projects.qatarUniversity.FAQS.QnA.7.question"),
      answer: t("projects.qatarUniversity.FAQS.QnA.7.answer"),
    },
    {
      category: t("projects.qatarUniversity.FAQS.QnA.8.category"),
      question: t("projects.qatarUniversity.FAQS.QnA.8.question"),
      answer: t("projects.qatarUniversity.FAQS.QnA.8.answer"),
    },
    {
      category: t("projects.qatarUniversity.FAQS.QnA.9.category"),
      question: t("projects.qatarUniversity.FAQS.QnA.9.question"),
      answer: t("projects.qatarUniversity.FAQS.QnA.9.answer"),
    },
  ];

  const galleryImages = [
    {
      fullImage: "/photogallery/qu1.jpg",
      thumbImage: "/photogallery/qu1.jpg",
      altText: "img1",
    },
    {
      fullImage: "/photogallery/qu2.jpg",
      thumbImage: "/photogallery/qu2.jpg",
      altText: "img2",
    },
    {
      fullImage: "/photogallery/qu3.jpg",
      thumbImage: "/photogallery/qu3.jpg",
      altText: "img3",
    },
    {
      fullImage: "/photogallery/qu4.jpg",
      thumbImage: "/photogallery/qu4.jpg",
      altText: "img4",
    },

    {
      fullImage: "/photogallery/qu5.jpg",
      thumbImage: "/photogallery/qu5.jpg",
      altText: "img5",
    },
    {
      fullImage: "/photogallery/qu6.jpg",
      thumbImage: "/photogallery/qu6.jpg",
      altText: "img6",
    },
    {
      fullImage: "/photogallery/qu7.jpg",
      thumbImage: "/photogallery/qu7.jpg",
      altText: "img7",
    },
    {
      fullImage: "/photogallery/qu8.jpg",
      thumbImage: "/photogallery/qu8.jpg",
      altText: "img8",
    },
  ];

  return (
    <div>
      <HeroSection sections={herosection} />
      <ImageWithDesc
        title={t("projects.qatarUniversity.projectdetails.title")}
        subtitle={t("projects.qatarUniversity.projectdetails.subTitle")}
        description={t("projects.qatarUniversity.projectdetails.description")}
        imageSrc={projectDetailsImage}
        reverseLayout={false}
        bgColor="bg-[#e9eae5]"
        showButton={false}
      />
      <div className="bg-[#f3f4f6] min-h-[700px] flex flex-col justify-center py-10">
        <ServiceCard1
          services={services}
          MainTitle={t("projects.qatarUniversity.services.title")}
        />
        <p className="text-lg mb-6 max-w-7xl mx-auto p-4">
          {" "}
          {t("projects.qatarUniversity.services.paragraph")}
        </p>
      </div>
      <div className="max-w-7xl mx-auto p-4 min-h-[700px] flex flex-col justify-center">
        <h1 className="text-2xl md:text-4xl font-bold mb-10">
          {t("projects.qatarUniversity.services.galleryTitle")}
        </h1>
        <Gallery images={galleryImages} />
      </div>
      <Faqs faqs={faqsData} />
    </div>
  );
};

export default QatarUniversity;
