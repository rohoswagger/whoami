"use client";

import Image from "next/image";
import { Experience, Project } from "./types";
import experienceData from "@/public/data/experience.json";
import projectsData from "@/public/data/projects.json";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

// Logos
import robinhoodLogo from "@/public/logos/robinhood.png";
import itentialLogo from "@/public/logos/itential.png";
import pGLogo from "@/public/logos/pg.png";
import hexlabsLogo from "@/public/logos/hexlabs.png";

const Work = () => {
  return (
    <div className="relative">
      {/* Background Text */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-10 transform -rotate-45 text-gray-100 text-[150px] md:text-[200px] font-bold whitespace-nowrap">
          WORK
        </div>
      </div>

      {/* Main content */}
      <div className="flex flex-col h-full w-full flex-grow p-2 md:p-4 relative z-10">
        <h1 className="text-3xl md:text-5xl font-medium mb-6 md:mb-12">Work</h1>
        <ExperienceList experiences={experienceData} />

        <h2 className="text-3xl md:text-5xl font-medium mt-8 md:mt-16 mb-6 md:mb-12">
          Projects
        </h2>
        <ProjectList projects={projectsData as Project[]} />
      </div>
    </div>
  );
};

const ExperienceList = ({ experiences }: { experiences: Experience[] }) => (
  <div className="space-y-6 md:space-y-12">
    {experiences.map((exp, index) => (
      <div key={index} className="flex items-start">
        <div className="hidden md:block w-16 h-16 mr-4 flex-shrink-0">
          <Image
            src={getCompanyLogo(exp.company)}
            alt={`${exp.company} logo`}
            width={64}
            height={64}
            className="rounded-lg w-full h-full object-contain"
          />
        </div>
        <div className="flex-grow border-l-2 md:border-l-4 pl-3 md:pl-4 relative">
          <div className="flex items-center mb-1">
            <h3 className="text-lg md:text-2xl font-semibold">{exp.company}</h3>
            {exp.company_url && (
              <a
                href={exp.company_url}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 hover:scale-110 transition-transform">
                <FaExternalLinkAlt className="w-3 h-3 md:w-4 md:h-4" />
              </a>
            )}
          </div>
          <p className="text-base md:text-lg text-gray-700">{exp.title}</p>
          <p className="text-sm md:text-base text-gray-500 mb-1">{exp.dates}</p>
          <p className="text-sm md:text-base">{exp.description}</p>
          <div className="md:hidden absolute left-[-13px] top-0 w-6 h-6 bg-white flex items-center justify-center">
            <Image
              src={getCompanyLogo(exp.company)}
              alt={`${exp.company} logo`}
              width={20}
              height={20}
              className="rounded-sm object-contain grayscale-0"
            />
          </div>
        </div>
      </div>
    ))}
  </div>
);

const ProjectList = ({ projects }: { projects: Project[] }) => (
  <div className="grid grid-cols-1 gap-6 md:gap-12 px-6">
    {projects.map((project, index) => (
      <div key={index} className="border-2 rounded-lg p-4 md:p-6 shadow-lg">
        <div>
          <h3 className="text-xl md:text-3xl font-semibold mb-2">
            {project.title}
          </h3>
          <p className="text-sm md:text-base mb-3">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-3">
            {/* {project.tags.map((tag, tagIndex) => (
              <span
                key={tagIndex}
                className="bg-gray-100 px-2 py-1 rounded-full text-xs md:text-sm">
                {tag}
              </span>
            ))} */}
          </div>
          <div className="flex space-x-2">
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-3 py-1 bg-black text-white text-xs md:text-sm font-medium rounded shadow hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2">
                <FaExternalLinkAlt className="mr-1" /> Visit
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-3 py-1 bg-gray-500 text-white text-xs md:text-sm font-medium rounded shadow hover:bg-gray-600 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                <FaGithub className="mr-1" /> GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default Work;

function getCompanyLogo(
  company: string
): string | import("next/dist/shared/lib/get-img-props").StaticImport {
  switch (company) {
    case "Robinhood":
      return robinhoodLogo;
    case "Itential":
      return itentialLogo;
    case "Procter & Gamble":
      return pGLogo;
    case "Hexlabs":
      return hexlabsLogo;
    default:
      return "";
  }
}
