import { Category, categoryInfo } from "../misc/projects";

export type LabelProps = {
  category: Category;
};

export const Label = ({ category }: LabelProps) => {
  const info = categoryInfo[category];
  return (
    <div
      style={{ backgroundColor: info.color }}
      className="text-white px-3 py-1 font-bold text-sm"
    >
      {info.name}
    </div>
  );
};
