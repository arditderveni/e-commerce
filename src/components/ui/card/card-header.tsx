import { cn } from "@/lib/utils";
import { FC } from "react";

const CardHeader: FC<CardHeaderProps> = ({ className, ref, ...props }) => (
  <div
    ref={ref}
    className={cn(
      "flex flex-row border-b-slate-300 border-b-2 space-y-1.5 p-4",
      className
    )}
    {...props}
  />
);
CardHeader.displayName = "CardHeader";

export default CardHeader;
