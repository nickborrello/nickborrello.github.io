import { FaLocationArrow } from "react-icons/fa";
import type { Project } from "../types";

interface RecentProjectsProps {
  projects: Project[];
}

const RecentProjects = ({ projects }: RecentProjectsProps) => {
  return (
    <div className="py-20 mt-10" id="projects">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">Recent Projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="sm:h-[41rem] sm:w-[570px] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center w-[80vw]"
          >
            <div>
              <div className="relative flex items-center justify-center sm:w-[570px] sm:h-[40vh] w-[80vw] overflow-hidden h[30vh] lg:h-[30vh] mb-10">
                <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162D]">
                  <img src="/bg.png" alt="bg-img" />
                </div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="z-10 absolute bottom-0 "
                />
              </div>
              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {project.title}
              </h1>
              <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2">
                {project.description}
              </p>
              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {project.technologies.map((tech, idx) => (
                    <div
                      key={idx}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * idx + 2}px)`,
                      }}
                    >
                      <span className="text-xs">{tech}</span>
                    </div>
                  ))}
                </div>
                {project.links.live && (
                  <div className="flex justify-center items-center">
                    <a
                      href={project.links.live}
                      className="flex lg:text-xl md:text-xs text-sm text-purple"
                    >
                      Check It Out
                    </a>
                    <FaLocationArrow className="ms-3" color="#CBACF9" />
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;