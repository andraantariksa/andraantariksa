import { flatCategories, Project as ProjectType } from "../misc/projects";
import { Label } from "./Label";
import { ProjectCategoryLabels } from "./Labels";

export type ProjectProps = {
  project: ProjectType;
};

export const Project = ({ project }: ProjectProps) => {
  return (
    <a href={project.url}>
      <div className="flex flex-col gap-2 shadow-xl px-6 py-4 border-2 border-gray-100">
        <h2 className="font-bold text-xl">{project.name}</h2>
        <h4>{project.url}</h4>
        <div className="flex flex-row gap-1">
          {Array.from(project.categories).map((category, index) => (
            <Label key={index} category={category} />
          ))}
        </div>
      </div>
    </a>
  );
};
