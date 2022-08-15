import { Project as ProjectType, projects } from "../misc/projects";
import { Project } from "./Project";

export const Projects = () => {
  return (
    <div className="flex flex-col gap-3">
      {projects.map((project) => (
        <Project project={project} />
      ))}
    </div>
  );
};
