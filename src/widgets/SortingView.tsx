import { ArrayElement } from "@/components/sorting/ArrayElement";
import { useAppContext } from "@/context/useAppContext";
import { useEffect, useRef, useState } from "react";

export const SortingView = () => {
  const { toSort } = useAppContext();
  const sortingRef = useRef<HTMLDivElement>(null);
  const [totalHeight, setTotalHeight] = useState(0);

  useEffect(() => {
    if (sortingRef.current) {
      setTotalHeight(sortingRef.current.clientHeight);
    }
  }, []);

  return (
    <div ref={sortingRef} className="h-full w-full flex items-end ">
      <div className="flex items-end gap-4 w-screen m-6">
        {toSort.map((item, idx) => (
          <ArrayElement
            key={`${item}-${idx}`}
            item={item}
            totalHeight={totalHeight}
          />
        ))}
      </div>
    </div>
  );
};
