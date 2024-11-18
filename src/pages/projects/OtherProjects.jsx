import React, { useState } from "react";
import Card from "../../components/Card";
import HeroSection from "../../components/projects/HeroSection";
import projectHeroImage from "../../assets/images/projects/otherProjects/heroImage.jpg";
import projectImage1 from "../../assets/images/projects/otherProjects/project1.png";
import projectImage2 from "../../assets/images/projects/otherProjects/project2.png";
import projectImage3 from "../../assets/images/projects/otherProjects/project3.png";
import projectImage4 from "../../assets/images/projects/otherProjects/project4.png";
import projectImage5 from "../../assets/images/projects/otherProjects/project5.png";
import projectImage6 from "../../assets/images/projects/otherProjects/project6.png";
import { useTranslation } from "react-i18next";

const OtherProjects = () => {
  const { t, i18n } = useTranslation();
  const [visibleProjects, setVisibleProjects] = useState(6);

  const loadMoreProjects = () => {
    setVisibleProjects(visibleProjects + 6);
  };

  const herosection = [
    {
      projectHeroImage: projectHeroImage,
      heroTitle: t("projects.otherProjects.heroSection.title"),
      showIcons: false,
    },
  ];

  const projects = [
    {
      id: 1,
      imageUrl: projectImage1,
      title: t("projects.otherProjects.projectdetails.0.title"),
      description: t("projects.otherProjects.projectdetails.0.description"),
    },
    {
      id: 2,
      imageUrl: projectImage2,
      title: t("projects.otherProjects.projectdetails.1.title"),
      description: t("projects.otherProjects.projectdetails.1.description"),
    },
    {
      id: 3,
      imageUrl: projectImage3,
      title: t("projects.otherProjects.projectdetails.2.title"),
      description: t("projects.otherProjects.projectdetails.2.description"),
    },
    {
      id: 4,
      imageUrl: projectImage4,
      title: t("projects.otherProjects.projectdetails.3.title"),
      description: t("projects.otherProjects.projectdetails.3.description"),
    },
    {
      id: 5,
      imageUrl: projectImage5,
      title: t("projects.otherProjects.projectdetails.4.title"),
      description: t("projects.otherProjects.projectdetails.4.description"),
    },
    {
      id: 6,
      imageUrl: projectImage6,
      title: t("projects.otherProjects.projectdetails.5.title"),
      description: t("projects.otherProjects.projectdetails.5.description"),
    },
  ];

  return (
    <div>
      <HeroSection sections={herosection} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 max-w-7xl place-items-center mx-auto my-10 px-4 transition-all duration-300">
        {projects.slice(0, visibleProjects).map((study, index) => (
          <Card
            key={index}
            imageUrl={study.imageUrl}
            title={study.title}
            description={study.description}
            link={study.link}
          />
        ))}
      </div>
      {/* Load More Button */}
      {/* {visibleProjects < projects.length && (
        <div className="flex justify-center my-8">
          <button
            onClick={loadMoreProjects}
            className="px-6 py-2 text-white bg-[#c20001] rounded hover:bg-[#c22828]"
          >
            Load More
          </button>
        </div>
      )} */}
    </div>
  );
};

export default OtherProjects;
