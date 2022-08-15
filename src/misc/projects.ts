// Category

export enum Category {
  Mobile,
  Android,
  ReactNative,
  ComputerGraphics,
}

type CategoryHierarchy = {
  [category: string]: CategoryHierarchy | undefined;
};

export const categoryHierarchy: CategoryHierarchy = {
  [Category.Mobile]: {
    [Category.Android]: undefined,
    [Category.ReactNative]: undefined,
  },
  [Category.ComputerGraphics]: undefined,
};

export type CategoryInfo = {
  name: string;
  color: string;
};

type CategoryInfos = {
  [category: string]: CategoryInfo;
};

export const categoryInfo: CategoryInfos = {
  [Category.Mobile]: {
    name: "Mobile",
    color: "#f08a5d",
  },
  [Category.Android]: {
    name: "Android",
    color: "#b83b5e",
  },
  [Category.ReactNative]: {
    name: "React Native",
    color: "#6a2c70",
  },
  [Category.ComputerGraphics]: {
    name: "Computer Graphics",
    color: "#3A5BA0",
  },
};

export const flatCategories: Array<Category> = [];

const DFS = (categories: CategoryHierarchy) => {
  const categoriesEntries = Object.entries(categories);
  for (const [key, val] of categoriesEntries) {
    flatCategories.push(parseInt(key));
    if (val) {
      DFS(val);
    }
  }
};
DFS(categoryHierarchy);

// Project

enum ProjectHost {
  GitHub,
  PlayStore,
}

export type Project = {
  name: string;
  host?: ProjectHost;
  url?: string;
  categories: Set<Category>;
};

export const projects: Array<Project> = [
  {
    name: "MoneyHub",
    host: ProjectHost.PlayStore,
    url: "https://play.google.com/store/apps/details?id=id.moneyhub.app",
    categories: new Set([Category.ReactNative, Category.Mobile]),
  },
  {
    name: "Wargaa",
    host: ProjectHost.PlayStore,
    url: "https://play.google.com/store/apps/details?id=com.wargaa.app",
    categories: new Set([Category.ReactNative, Category.Mobile]),
  },
  {
    name: "MoneyHub",
    host: ProjectHost.PlayStore,
    categories: new Set([Category.ReactNative, Category.Mobile]),
  },
  {
    name: "MoneyHub",
    host: ProjectHost.PlayStore,
    categories: new Set([Category.ReactNative, Category.Mobile]),
  },
];
