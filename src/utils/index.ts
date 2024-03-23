import { PostOverview } from "../../pages/blog";

export const sortByDate = (a: PostOverview, b: PostOverview) => {
  return (
    Date.parse(b.date ?? "9999-12-30") - Date.parse(a.date ?? "9999-12-30")
  );
};
