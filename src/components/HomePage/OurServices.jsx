// OurServices.jsx
import React from "react";
import Slider from "react-slick";
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
  const services = [
    {
      imageSrc: imageService1,
      title: "Facility Management",
      description:
        "We offer complete integrated facility solutions that helps leverage a smooth functioning of your business facility.",
      buttonText: "Read More",
    },
    {
      imageSrc: imageService2,
      title: "Agriculture projects & training",
      description:
        "he world is nothing with no pastures and peasants. Agriculture is the sole reason of our very existence.",
      buttonText: "Read More",
    },
    {
      imageSrc: imageService3,
      title: "Contracting & Trading",
      description:
        "Al Baida Group is a company driven by a vision aligned to the National Vision of Qatar. We go beyond mere transactions, instead building mutually beneficial relationships with our clients. ",
      buttonText: "Read More",
    },
    {
      imageSrc: imageService4,
      title: "Infrastructure & project development",
      description:
        "Infrastructure is truly the backbone of growth and prosperity of a nation. Our venture in the sector of road construction has delivered and developed world class projects in Qatar.",
      buttonText: "Read More",
    },
    {
      imageSrc: imageService5,
      title: "Cleaning Services",
      description:
        "Al Baida Group has made its distinct name for the last 20 years in providing exceptional cleaning services for post-construction & commercial cleaning and residential cleaning.",
      buttonText: "Read More",
    },
    {
      imageSrc: imageService6,
      title: "Heavy Equipment Rental",
      description:
        "Heavy equipment is an indispensable section for a flourishing industry. The equipment requirement varies based on market segments.",
      buttonText: "Read More",
    },
    {
      imageSrc: imageService7,
      title: "HR Management & Outsourcing",
      description:
        "With a stringent selection procedure, we can provide a range of workforce to meet our clients needs, ranging from clerks and extending to IT professionals and Project Managers.",
      buttonText: "Read More",
    },
    {
      imageSrc: imageService8,
      title: "Cargo logistics & Custom Clearance",
      description:
        "Al Baida Cargo & Customs Clearance is considered as a unique company in the field of Cargo & Customs Clearance.",
      buttonText: "Read More",
    },
    {
      imageSrc: imageService9,
      title: "Engineering Consultancy",
      description:
        "Al Baida Group Engineering Consultancy team is made up of well experienced, qualified and dedicated team of Architects and Engineers and familiarized in obtaining approvals from concerned Government Authorities.",
      buttonText: "Read More",
    },
    {
      imageSrc: imageService10,
      title: "Business Management Consultancy",
      description:
        "We offer a variety of business and management consulting services that support your business needs. We offer a variety of solutions to support your growth plan and the optimization of your organization.",
      buttonText: "Read More",
    },
    {
      imageSrc: imageService11,
      title: "Agency Representation",
      description:
        "Al Baida has been a Business conglomerate since 1970. So, has a good hold over businesses in Qatar. AL Baida has been assisting agencies to represent in Qatar.",
      buttonText: "Read More",
    },
    {
      imageSrc: imageService12,
      title: "Construction",
      description:
        "We expertise in building construction, ground plus two stored, warehouse, mosque, Villa complex fencing, and other construction projects.",
      buttonText: "Read More",
    },
  ];

  const CustomPrevArrow = (props) => {
    const { className, style, onClick } = props;
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
    arrows: true,
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
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 center-title">OUR SERVICES</h2>
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
