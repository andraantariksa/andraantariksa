import { PostOverview } from "../../pages/blog";

export const sortByDate = (a: PostOverview, b: PostOverview) => {
  return Date.parse(b.data.date) - Date.parse(a.data.date);
};
