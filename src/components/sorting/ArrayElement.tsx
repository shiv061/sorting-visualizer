import { cn } from "@/lib/utils";
import { useMemo } from "react";

export const ArrayElement = ({
  item,
  totalHeight,
}: {
  item: number;
  totalHeight: number;
}) => {
  return (
    <div className={cn("flex-1 bg-blue-400")} style={{ height: `${item}px` }} />
  );
};
