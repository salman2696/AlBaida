import React from "react";
import projectHeroImage from "../../assets/images/projects/qatarUniversity/qatar-university.jpg";
import projectDetailsImage from "../../assets/images/projects/qatarUniversity/projectDetailsImage.jpg";
import qatarUniversityLogo from "../../assets/images/projects/qatarUniversity/qatar-university-logo.jpg";
import categoryIcon from "../../assets/images/projects/qatarUniversity/university.png";
import calendarIcon from "../../assets/images/projects/qatarUniversity/calendar.png";
import employeeIcon from "../../assets/images/projects/qatarUniversity/employee.png";
import ImageWithDesc from "../../components/HomePage/ImageWithDesc";
import TitleWithCards from "../../components/TitleWithCards";
import service1 from "../../assets/images/projects/qatarUniversity/service-1.jpg";
import service2 from "../../assets/images/projects/qatarUniversity/service-2.jpg";
import service3 from "../../assets/images/projects/qatarUniversity/service-3.jpg";
import HeroSection from "../../components/projects/HeroSection";
import Faqs from "../../components/Faqs";

const QatarUniversity = () => {
  const herosection = [
    {
      projectHeroImage: projectHeroImage,
      heroTitle: "Qatar University Project",
      heroDescription:
        " Al Baida’s leading education sector project at Qatar University supports over 530 jobs, providing infrastructure management, housekeeping, and cleaning services.",
      logo: qatarUniversityLogo,
      categoryIcon: categoryIcon,
      calendarIcon: calendarIcon,
      employeeIcon: employeeIcon,
    },
  ];

  const cards = [
    { image: service1, text: "Infrastructure Management" },
    { image: service2, text: "House Keeping" },
    { image: service3, text: "Cleaning Services" },
  ];

  const faqData = [
    { question: "How can I pay for my appointment?", answer: "You can pay using various methods like credit card, debit card, or online payment systems." },
    { question: "What can I expect at my first consultation?", answer: "Your first consultation will involve a discussion of your needs and expectations." },
    { question: "What are your opening hours?", answer: "We are open from 9 AM to 5 PM, Monday to Friday." },
    { question: "Do I need a referral?", answer: "No, you do not need a referral to make an appointment." },
    { question: "Is the cost of the appointment covered by private health insurance?", answer: "Coverage depends on your specific insurance plan. Please contact your provider for details." }
  ];

  return (
    <div>
      <HeroSection sections={herosection} />
      <ImageWithDesc
        title="Project Details"
        subtitle="A pristine gesture for an enlightened tomorrow"
        description="Al Baida's flagship project in Qatar's education sector is a comprehensive support initiative at Qatar University. This prestigious project is notable not only for its scale but also for its impact on local employment, as it provides job opportunities for over 530 individuals. The project encompasses a wide range of essential services, including infrastructure management, housekeeping, and cleaning, all tailored to meet the high standards of the university. Through this endeavor, Al Baida contributes significantly to maintaining a well-managed and clean campus environment, while supporting the university's mission of excellence in education and research."
        imageSrc={projectDetailsImage}
        reverseLayout={false}
        bgColor="bg-[#e9eae5]"
        showButton={false}
      />
      <div className="bg-[#f3f4f6] min-h-[600px]">
        <TitleWithCards title="Services Offered" cards={cards} />
        <p className="text-lg mb-6 max-w-7xl mx-auto p-4">
          {" "}
          We offered a broad range of services with a sophisticated and cleaner
          surrounding at the university. Our services are exquisite, top-notch,
          and of supreme quality. Every employee we supply is trained and
          skilled to provide the best service at the university.
        </p>
      </div>
      <Faqs faqs={faqData} />
    </div>
  );
};

export default QatarUniversity;
