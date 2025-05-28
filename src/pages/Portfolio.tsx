// src/pages/Portfolio.tsx
import React from "react";
import { projects } from "../constants/projects";
import { Footer, Nav } from "../shared/layout";
import { Link } from "react-router-dom";

const Portfolio: React.FC = () => {
  return (
    <>
      <div className="px-6 mt-8 min-h-screen">
        <Nav />
        <h2 className="text-3xl font-bold mb-8 text-gray">My Projects</h2>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map(
            ({
              title,
              description,
              github,
              demo,
              route,
              techStack,
              role,
              status,
            }) => (
              <div
                key={title}
                className="border rounded-lg p-6 shadow-md bg-customBlueGray transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:bg-customBlueGrayLight"
              >
                <h3 className="text-xl font-semibold mb-2 text-slateblue">
                  {title}
                </h3>
                {role && (
                  <p className="text-sm text-slateblue italic mb-2">{role}</p>
                )}
                <p className="text-slateblue mb-4">{description}</p>

                {/* Tech Stack */}
                {techStack && techStack.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {techStack.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-secondary text-navy text-sm px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                {/* Links */}
                {status !== "coming-soon" && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {github && (
                      <a
                        href={github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-navy hover:underline"
                      >
                        GitHub
                      </a>
                    )}
                    {demo && (
                      <a
                        href={demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-slateblue text-secondary px-2 py-1 rounded hover:underline"
                      >
                        Demo
                      </a>
                    )}
                    {route && (
                      <Link
                        to={route}
                        className="bg-navy text-secondary px-2 py-1 rounded hover:underline"
                      >
                        More details
                      </Link>
                    )}
                  </div>
                )}

                {status === "coming-soon" && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-secondary text-navy text-xs font-semibold px-2 py-1 rounded-full">
                      Coming Soon
                    </span>
                    {demo && (
                      <a
                        href={demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-slateblue text-secondary px-2 py-1 rounded hover:underline"
                      >
                        Demo
                      </a>
                    )}
                    {route && (
                      <a
                        href={route}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-navy text-secondary px-2 py-1 rounded hover:underline"
                      >
                        More details
                      </a>
                    )}
                  </div>
                )}
              </div>
            )
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Portfolio;
