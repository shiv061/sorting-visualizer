export type TActiveSort = "merge" | "heap" | null;

export type TAppContextType = {
  toSort: number[];
  activeSort: TActiveSort;
  handleActiveSort: (nextSort: TActiveSort) => void;
};
