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
import Gallery from "../../components/Gallery";

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
      <div className="max-w-7xl mx-auto p-4">
        <h1 className="text-2xl font-bold mb-10">
          Qatar University Safety Excellence Award Distribution Ceremony
        </h1>
        <Gallery images={galleryImages} />
      </div>
      <Faqs faqs={faqsData} />
    </div>
  );
};

export default QatarUniversity;
