import React, { createContext, useCallback, useState } from "react";
import { TActiveSort, TAppContextType } from "./context.types";

export const AppContext = createContext({} as TAppContextType);

const toSortArray = [5, 6, 7, 12, 3, 45, 6, 12, 34, 5, 55, 2, 76, 67];

export const AppContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [toSort, setToSort] = useState(toSortArray);
  const [activeSort, setActiveSort] = useState<TActiveSort>(null);

  const handleActiveSort = useCallback((nextSort: TActiveSort) => {
    setActiveSort(nextSort);
  }, []);

  return (
    <AppContext.Provider value={{ toSort, activeSort, handleActiveSort }}>
      {children}
    </AppContext.Provider>
  );
};
