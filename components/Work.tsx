"use client";

import Image from "next/image";
import { Experience, Project } from "./types";
import experienceData from "@/data/experience.json";
import projectsData from "@/data/projects.json";

// Logos
import robinhoodLogo from "@/app/logos/robinhood.png";
import itentialLogo from "@/app/logos/itential.png";
import pGLogo from "@/app/logos/pg.png";
import hexlabsLogo from "@/app/logos/hexlabs.png";

const Work = () => {
  return (
    <div className="flex flex-col h-full px-4 w-full flex-grow p-2">
      <h1 className="text-5xl font-bold mb-12 text-purple-400 mr-auto">Work</h1>
      <ExperienceList experiences={experienceData} />

      <h2 className="text-5xl font-bold mt-16 mb-12 text-purple-400">
        Projects
      </h2>
      <ProjectList projects={projectsData as Project[]} />
    </div>
  );
};

const ExperienceList = ({ experiences }: { experiences: Experience[] }) => (
  <div className="space-y-12">
    {experiences.map((exp, index) => (
      <div key={index} className="flex items-start">
        <div className="w-20 mr-6 flex-shrink-0">
          <Image
            src={getCompanyLogo(exp.company)}
            alt={`${exp.company} logo`}
            width={80}
            height={80}
            className="rounded-lg"
          />
        </div>
        <div className="flex-grow border-l-4 border-purple-300 pl-6">
          {exp.company_url ? (
            <a
              href={exp.company_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl font-semibold mb-2 underline">
              {exp.company}
            </a>
          ) : (
            <h3 className="text-3xl font-semibold mb-2">{exp.company}</h3>
          )}
          <p className="text-2xl text-gray-700">{exp.title}</p>
          <p className="text-xl text-gray-500 mb-2">{exp.dates}</p>
          <p className="text-xl">{exp.description}</p>
        </div>
      </div>
    ))}
  </div>
);

const ProjectList = ({ projects }: { projects: Project[] }) => (
  <div className="grid grid-cols-1 gap-12">
    {projects.map((project, index) => (
      <div
        key={index}
        className={`border-2 border-purple-300 rounded-lg p-6 shadow-lg transform transition-transform ${project.url ? 'hover:scale-105 cursor-pointer' : ''}`}
        onClick={() => project.url && window.open(project.url, '_blank')}
      >
        <div>
          <h3 className="text-3xl font-semibold mb-2">
            {project.title}
          </h3>
          <p className="text-xl mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag, tagIndex) => (
              <span
                key={tagIndex}
                className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-lg">
                {tag}
              </span>
            ))}
          </div>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-3 py-1 bg-gray-500 text-white text-md font-medium rounded shadow hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              onClick={(e) => e.stopPropagation()}
            >
              <svg
                className="w-5 h-5 mr-1"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.34-3.369-1.34-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.607.069-.607 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.682-.103-.253-.446-1.27.098-2.646 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.91-1.294 2.75-1.025 2.75-1.025.544 1.376.201 2.393.099 2.646.64.698 1.028 1.591 1.028 2.682 0 3.841-2.337 4.687-4.565 4.936.36.31.682.92.682 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.579.688.481C19.138 20.165 22 16.418 22 12c0-5.523-4.477-10-10-10z"
                  clipRule="evenodd"
                />
              </svg>
              GitHub
            </a>
          )}
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
