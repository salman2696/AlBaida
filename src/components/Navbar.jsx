import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../assets/images/logo.png";
import { useTranslation } from "react-i18next";
import {
  FaChalkboardTeacher,
  FaHandshake,
  FaRoad,
  FaBroom,
  FaTractor,
  FaUserTie,
  FaTruckMoving,
  FaBuilding,
  FaChartLine,
  FaRegClipboard,
  FaTools,
  FaSeedling,
} from "react-icons/fa";
import FlagUS from "../assets/images/englishFlag.jpg"; // Example flag import
import FlagAr from "../assets/images/arabicFlag.jpg"; // Example flag import

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDivisionsOpen, setisDivisionsOpen] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [transparentNavbar, setTransparentNavbar] = useState(true);

  const { t, i18n } = useTranslation();
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState({
    name: "English",
    flag: FlagUS,
    code: "en",
    direction: "ltr",
  });

  const languages = [
    { name: "English", flag: FlagUS, code: "en", direction: "ltr" },
    { name: "Arabic", flag: FlagAr, code: "ar", direction: "rtl" },
  ];

  const toggleLanguageDropdown = () => {
    setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
  };

  const selectLanguage = (language) => {
    setSelectedLanguage(language);
    i18n.changeLanguage(language.code);
    document.documentElement.setAttribute("dir", language.direction);
    setIsLanguageDropdownOpen(false);
  };

  const controlNavbar = () => {
    if (window.scrollY > 100) {
      setTransparentNavbar(false);
    } else {
      setTransparentNavbar(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setisDivisionsOpen(false);
    setIsProjectsOpen(false);
  };

  const toggleDivisionsMenu = () => {
    setisDivisionsOpen(!isDivisionsOpen);
    setIsProjectsOpen(false);
  };

  const toggleProjectsMenu = () => {
    setIsProjectsOpen(!isProjectsOpen);
    setisDivisionsOpen(false);
  };

  const divisions = [
    {
      name: "Facility Management",
      link: "/divisions/facility-management",
    },
    {
      name: "Contracting & Trading",
      link: "/divisions/contracting",
    },
    {
      name: "Infrastructure Roads & Development",
      link: "/divisions/infrastructure",
    },
    {
      name: "Cleaning Services",
      link: "/divisions/cleaning-services",
    },
    {
      name: "Agriculture Projects & Training",
      link: "/divisions/agriculture-projects",
    },
    {
      name: "Heavy Equipment Rental",
      link: "/divisions/heavy-equipment-rental",
    },
    {
      name: "HR Management & Outsourcing",
      link: "/divisions/human-resource-managament",
    },
    {
      name: "Cargo Logistics & Custom Clearance",
      link: "/divisions/cargo-logistics",
    },
    {
      name: "Engineering Consultancy",
      link: "/divisions/engineering-consultancy",
    },
    {
      name: "Business Management Consultancy",
      link: "/divisions/business-management-consulancy",
    },
    {
      name: "Agency & Representation",
      link: "/divisions/agency-and-representation",
    },
    {
      name: "Construction",
      link: "/divisions/construction",
    },
  ];

  const items = [
    {
      icon: <FaChalkboardTeacher className="text-3xl text-custom-red" />,
      title: "Facility Management",
      description: "Managing educational staff and resources",
      path: "/divisions/facility-management",
    },
    {
      icon: <FaHandshake className="text-3xl text-custom-red" />,
      title: "Contracting & Trading",
      description: "Business deals and trade partnerships",
      path: "/divisions/contracting",
    },
    {
      icon: <FaRoad className="text-3xl text-custom-red" />,
      title: "Infrastructure Roads & Project Development",
      description: "Building roads and large-scale projects",
      path: "/divisions/infrastructure",
    },
    {
      icon: <FaBroom className="text-3xl text-custom-red" />,
      title: "Cleaning Services",
      description: "Professional cleaning and sanitation",
      path: "/divisions/cleaning-services",
    },
    {
      icon: <FaSeedling className="text-3xl text-custom-red" />,
      title: "Agriculture Projects & Training",
      description: "Farming projects and skill development",
      path: "/divisions/agriculture-projects",
    },
    {
      icon: <FaTractor className="text-3xl text-custom-red" />,
      title: "Heavy Equipment Rental",
      description: "Machinery and equipment leasing services",
      path: "/divisions/heavy-equipment-rental",
    },
    {
      icon: <FaUserTie className="text-3xl text-custom-red" />,
      title: "Human Resource Management & Outsourcing",
      description: "Employee management and staffing solutions",
      path: "/divisions/human-resource-managament",
    },
    {
      icon: <FaTruckMoving className="text-3xl text-custom-red" />,
      title: "Cargo Logistics & Custom Clearance",
      description: "Transporting goods and handling customs",
      path: "/divisions/cargo-logistics",
    },
    {
      icon: <FaBuilding className="text-3xl text-custom-red" />,
      title: "Engineering Consultancy",
      description: "Expert guidance on engineering projects",
      path: "/divisions/engineering-consultancy",
    },
    {
      icon: <FaChartLine className="text-3xl text-custom-red" />,
      title: "Business Management Consultancy",
      description: "Consulting for business growth and efficiency",
      path: "/divisions/business-management-consulancy",
    },
    {
      icon: <FaRegClipboard className="text-3xl text-custom-red" />,
      title: "Agency & Representation",
      description: "Acting as agents for various businesses",
      path: "/divisions/agency-and-representation",
    },
    {
      icon: <FaTools className="text-3xl text-custom-red" />,
      title: "Construction",
      description: "Building and construction services",
      path: "/divisions/construction",
    },
  ];

  // Sample project data
  const projects = [
    { id: 1, link: "/projects/project-1", image: "/projects/project1.jpg" },
    { id: 2, link: "/projects/project-2", image: "/projects/project2.jpg" },
    { id: 3, link: "/projects/project-3", image: "/projects/project3.jpg" },
    { id: 4, link: "/projects/project-4", image: "/projects/project4.jpg" },
    { id: 5, link: "/projects/project-5", image: "/projects/project5.jpg" },
    { id: 6, link: "/projects/project-6", image: "/projects/project1.jpg" },
  ];
  const [hoveredProject, setHoveredProject] = useState(projects[0]);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        transparentNavbar
          ? "md:bg-transparent bg-white shadow-lg md:shadow-none"
          : "bg-white shadow-lg"
      } `}
    >
      <div className="container mx-auto max-w-7xl 2xl:px-0 px-4">
        <div className="flex items-center justify-between py-2 3xl:text-lg 2xl:text-base text-sm transition-all duration-300">
          <div className="flex items-center">
            <Link to="/">
              <img src={Logo} alt="Logo" className="h-14 w-auto" />
            </Link>
          </div>
          {isMobile ? (
            <button
              onClick={toggleMenu}
              className="text-black focus:outline-none"
              aria-label="Toggle menu"
            >
              <div className={`hamburger ${isOpen ? "open" : ""}`}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </button>
          ) : (
            <ul
              className={`hidden md:flex space-x-6 ${
                transparentNavbar ? "text-white" : "text-black"
              }`}
            >
              <li>
                <Link to="/" className="hover:text-custom-red">
                  {t("HOME")}
                </Link>
              </li>
              <li className="relative group">
                <button
                  className="flex items-center hover:text-custom-red focus:outline-none"
                  onClick={toggleDivisionsMenu}
                  aria-expanded={isDivisionsOpen}
                  aria-haspopup={true}
                >
                  {t("DIVISIONS")}
                  <FiChevronDown className="ml-1" />
                </button>
                <div className="fixed inset-x-0 mt-4 max-w-5xl mx-auto bg-white rounded-lg shadow-lg z-10 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-500 ease-in-out translate-y-4 group-hover:translate-y-0">
                  <div className="absolute left-0 mt-2 w-full bg-white shadow-lg rounded-lg p-4 grid grid-cols-3 gap-6">
                    {items.map((item, index) => (
                      <Link to={item.path}>
                        <div
                          key={index}
                          className="flex items-center p-3 border rounded-md hover:bg-gray-100 "
                        >
                          <div className="mr-4">{item.icon}</div>
                          <div className="3xl:text-sm xl:text-xs text-xs transition-all duration-500">
                            <h3 className="font-semibold  text-black">
                              {item.title}
                            </h3>
                            <p className="t text-gray-500">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </li>
              <li className="relative group">
                <button
                  className="flex items-center hover:text-custom-red focus:outline-none"
                  onClick={toggleDivisionsMenu}
                  aria-expanded={isDivisionsOpen}
                  aria-haspopup={true}
                >
                  {t("PROJECTS")}
                  <FiChevronDown className="ml-1" />
                </button>
                <div className="fixed inset-x-0 mt-4 max-w-4xl mx-auto bg-white rounded-lg shadow-lg z-10 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-500 ease-in-out translate-y-4 group-hover:translate-y-0">
                  {/* Dropdown container */}
                  <div className="absolute left-0 mt-2 w-full bg-white shadow-lg rounded-lg p-4 flex">
                    {/* Project List on the Left */}
                    <div className="w-1/3 border-r border-gray-200 pr-4 text-black">
                      <ul className="space-y-2">
                        {projects.map((project) => (
                          <li
                            key={project.id}
                            className={`cursor-pointer p-2 rounded-md hover:bg-gray-100 ${
                              hoveredProject.id === project.id
                                ? "bg-gray-100"
                                : ""
                            }`}
                            onMouseEnter={() => setHoveredProject(project)}
                          >
                            {t(`projects.${project.id}.title`)}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Project Details on the Right */}
                    <div className="w-2/3 pl-4">
                      <img
                        src={hoveredProject.image}
                        alt={t(`projects.${hoveredProject.id}.title`)}
                        className="w-full h-48 object-cover rounded-md mb-4"
                      />
                      <h3 className="text-lg text-black font-semibold">
                        {t(`projects.${hoveredProject.id}.title`)}
                      </h3>
                      <p className="text-sm text-gray-500 mb-4">
                        {t(`projects.${hoveredProject.id}.description`)}
                      </p>
                      <Link
                        to={hoveredProject.link}
                        className="text-custom-red hover:underline font-medium"
                      >
                        View all the details
                      </Link>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <Link to="about-us" className="hover:text-custom-red">
                  {t("ABOUT US")}
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-custom-red">
                  {t("CONTACT US")}
                </a>
              </li>
              <li className="relative">
                <button
                  onClick={toggleLanguageDropdown}
                  className="flex items-center space-x-2 focus:outline-none"
                >
                  <img
                    src={selectedLanguage.flag}
                    alt={selectedLanguage.name}
                    className="w-5 h-5"
                  />
                  <span>{selectedLanguage.name}</span>
                  <FiChevronDown />
                </button>
                {isLanguageDropdownOpen && (
                  <ul className="absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-lg">
                    {languages.map((language, index) => (
                      <li
                        key={index}
                        onClick={() => selectLanguage(language)}
                        className="flex items-center p-2 cursor-pointer text-black"
                      >
                        <img
                          src={language.flag}
                          alt={language.name}
                          className="w-5 h-5 mr-2"
                        />
                        <span>{language.name}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            </ul>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobile && isOpen && (
          <motion.div
            className="md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="px-4 pt-2 pb-4 space-y-2">
              <li>
                <Link
                  to="/"
                  onClick={toggleMenu}
                  className="block hover:bg-gray-200 px-2 py-1 rounded"
                >
                  HOME
                </Link>
              </li>
              <li>
                <button
                  className="flex items-center justify-between w-full hover:bg-gray-200 px-2 py-1 rounded focus:outline-none"
                  onClick={toggleDivisionsMenu}
                  aria-expanded={isDivisionsOpen}
                  aria-haspopup={true}
                >
                  DIVISIONS
                  <FiChevronDown
                    className={`ml-1 transform ${
                      isDivisionsOpen ? "rotate-180" : ""
                    } transition-transform duration-200`}
                  />
                </button>
                <AnimatePresence>
                  {isDivisionsOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-2 space-y-2 pl-4 max-h-52 overflow-y-auto border-b-2"
                    >
                      {divisions.map((division, index) => (
                        <div key={index}>
                          <Link
                            to={division.link}
                            onClick={toggleMenu}
                            className="flex items-center justify-between w-full hover:bg-gray-200 px-2 py-1 rounded focus:outline-none"
                          >
                            {division.name}
                          </Link>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
              <li>
                <button
                  className="flex items-center justify-between w-full hover:bg-gray-200 px-2 py-1 rounded focus:outline-none"
                  onClick={toggleProjectsMenu}
                  aria-expanded={isProjectsOpen}
                  aria-haspopup={true}
                >
                  PROJECTS
                  <FiChevronDown
                    className={`ml-1 transform ${
                      isProjectsOpen ? "rotate-180" : ""
                    } transition-transform duration-200`}
                  />
                </button>
                <AnimatePresence>
                  {isProjectsOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-2 space-y-2 pl-4 border-b-2"
                    >
                      {projects.map((project, index) => (
                        <div key={index}>
                          <Link
                            to={project.link}
                            onClick={toggleMenu}
                            className="flex items-center justify-between w-full hover:bg-gray-200 px-2 py-1 rounded focus:outline-none"
                          >
                            {project.title}
                          </Link>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>

              <li>
                <Link
                  to="/about-us"
                  className="block hover:bg-gray-200 px-2 py-1 rounded"
                  onClick={toggleMenu}
                >
                  ABOUT US
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  onClick={toggleMenu}
                  className="block hover:bg-gray-200 px-2 py-1 rounded"
                >
                  CONTACT US
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
      <style jsx>{`
        .hamburger {
          width: 30px;
          height: 20px;
          position: relative;
          transform: rotate(0deg);
          transition: 0.5s ease-in-out;
          cursor: pointer;
        }

        .hamburger span {
          display: block;
          position: absolute;
          height: 3px;
          width: 100%;
          background-color: black;
          border-radius: 9px;
          opacity: 1;
          left: 0;
          transform: rotate(0deg);
          transition: 0.25s ease-in-out;
        }

        .hamburger span:nth-child(1) {
          top: 0px;
        }

        .hamburger span:nth-child(2) {
          top: 10px;
        }

        .hamburger span:nth-child(3) {
          top: 20px;
        }

        .hamburger.open span:nth-child(1) {
          top: 10px;
          transform: rotate(135deg);
        }

        .hamburger.open span:nth-child(2) {
          opacity: 0;
          left: -60px;
        }

        .hamburger.open span:nth-child(3) {
          top: 10px;
          transform: rotate(-135deg);
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
