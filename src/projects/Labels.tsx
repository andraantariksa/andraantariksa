import { flatCategories } from "../misc/projects";
import { Label } from "./Label";

export const ProjectCategoryLabels = () => {
  return (
    <div className="flex flex-row gap-1 items-center">
      Filter by:{" "}
      {flatCategories.map((category, index) => (
        <Label key={index} category={category} />
      ))}
    </div>
  );
};
