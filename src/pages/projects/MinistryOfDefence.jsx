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

const MinistryOfDefence = () => {
  const herosection = [
    {
      projectHeroImage: projectHeroImage,
      heroTitle: "Ministry of Defence",
      heroDescription:
        "Camel racing, extravagant leisure of the Arabs is valued more than a sport as a part of their traditions. This sport is continued to date at the small hamlet of Al Shahaniya as a part of their heritage.",
      logo: companyLogo,
      categoryIcon: categoryIcon,
      calendarIcon: calendarIcon,
      employeeIcon: employeeIcon,
      title1: "Hejen <br /> Racing Committee",
      title2: "Traditional <br/> Sport",
      title3: "Year <br /> 2012",
      title4: "Employment <br /> Opportunity",
      style: "md:w-16",
    },
  ];

  const services = [
    {
      icon: <FaUnlockAlt />,
      title: "Open Door Seals",
      description:
        "Opening and removing the seals on request for secure access to cargo or containers.",
      bgImage: service1,
    },
    {
      icon: <FaBoxOpen />,
      title: "Cargo Package Handling",
      description:
        "Emptying and refilling cargo packages to ensure proper storage and transportation.",
      bgImage: service2,
    },
    {
      icon: <FaLock />,
      title: "Close & Seal Container",
      description:
        "Closing and sealing container doors after loading/unloading for security and safe transport.",
      bgImage: service3,
    },
    {
      icon: <FaUsers />,
      title: "Supply Labor",
      description:
        "Providing human resources including labor, tally clerks, and foreman supervisors for efficient operations.",
      bgImage: service3,
    },
    {
      icon: <FaAnchor />,
      title: "Mooring & Unmooring",
      description:
        "Managing mooring and unmooring labor activities on authorized request to ensure vessel docking and departure.",
      bgImage: service3,
    },
    {
      icon: <FaShip />,
      title: "Port Operations",
      description:
        "Handling various port management tasks, including vessel and yard operations, as needed.",
      bgImage: service3,
    },
    {
      icon: <FaTruckLoading />,
      title: "Cargo Handling",
      description:
        "Overseeing the loading and unloading of cargo at designated areas to ensure efficient logistics.",
      bgImage: service3,
    },
    {
      icon: <FaFileAlt />,
      title: "Documentation",
      description:
        "Managing paperwork, documentation, recording, and reporting to ensure compliance and accurate records.",
      bgImage: service3,
    },
  ];

  const faqsData = [
    {
      category: "General",
      question: "What is your refund policy?",
      answer:
        "We offer a 30-day refund policy. If you are not satisfied with our service, you can request a full refund within 30 days of purchase.",
    },
    {
      category: "General",
      question: "How do I contact customer support?",
      answer:
        "You can contact our customer support team through email at support@company.com or by calling 1-800-123-4567.",
    },
    {
      category: "Trust & Safety",
      question: "How do you ensure privacy?",
      answer:
        "We use encryption technology to protect your data. We also follow strict privacy policies and GDPR regulations to ensure your information is safe.",
    },
    {
      category: "Trust & Safety",
      question: "Are my payment details secure?",
      answer:
        "Yes, we use SSL encryption to securely process all transactions. Your payment information is never stored on our servers.",
    },
    {
      category: "Services",
      question: "What services do you offer?",
      answer:
        "We offer a range of services including home cleaning, office cleaning, and specialized deep cleaning services.",
    },
    {
      category: "Services",
      question: "Can I customize my cleaning plan?",
      answer:
        "Yes, you can customize your cleaning plan according to your needs. We offer flexible scheduling and various cleaning packages.",
    },
    {
      category: "Billing",
      question: "How do I pay for services?",
      answer:
        "We accept payments through credit cards, PayPal, and bank transfers. Payments are processed securely through our payment gateway.",
    },
    {
      category: "Billing",
      question: "Can I get a refund for a service I didn’t like?",
      answer:
        "Yes, if you are not satisfied with a service, please reach out to our support team within 7 days to request a refund.",
    },
    {
      category: "Office Cleaning",
      question: "What does your office cleaning service include?",
      answer:
        "Our office cleaning service includes dusting, vacuuming, trash removal, and cleaning of common areas, restrooms, and kitchenettes.",
    },
    {
      category: "Office Cleaning",
      question: "Do you offer eco-friendly cleaning products?",
      answer:
        "Yes, we use eco-friendly and non-toxic cleaning products upon request. We aim to provide a safe and sustainable cleaning experience.",
    },
  ];

  return (
    <div>
      <HeroSection sections={herosection} />
      <ImageWithDesc
        title="Project Details"
        subtitle="A dream work at infinite pace against innumerable hurdles"
        description="This is one of our magnificent projects with a traditional prospect we have ever accomplished which covers a vast area of around 43 kilometers. The project commenced in the year 2012 and was swiftly completed in a span of just 2 years.
    The scope of the project involved planning, designing, and constructing the entire racing track, allied roadway, and arena in Shahaniya, West Doha.

    Being a sentimental element of the Arabs, this project required intense planning and precision which was flawlessly delivered by us. Right from understanding the requirement, and throughout the construction we have substantially maintained world-class standards with an ethnic touch.

    Additionally, we take care of the maintenance of the camel race area and preparation of the track lines for racing since 2008."
        imageSrc={projectDetailsImage}
        reverseLayout={false}
        bgColor="bg-[#e9eae5]"
        showButton={false}
      />
      <div className="bg-[#f3f4f6] min-h-[700px] flex flex-col justify-around py-10">
        <ServiceCard1 services={services} MainTitle="Services Offered" />
        <p className="text-lg mb-6 max-w-7xl mx-auto p-4">
          {" "}
          We offer a comprehensive range of services, designed to enhance the
          university experience with a sophisticated and well-maintained
          environment. Our services are of the highest quality, tailored to meet
          the needs of both students and staff. Every employee we provide is
          carefully trained and skilled, ensuring they deliver top-notch service
          with professionalism and attention to detail. Our commitment is to
          support the university community with reliable, efficient, and
          exceptional service.
        </p>
      </div>
      <Faqs faqs={faqsData} />
    </div>
  );
};

export default MinistryOfDefence;
