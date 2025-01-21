import { cn } from "@/lib/utils";
import { FC } from "react";

const CardTitle: FC<CardTitleProps> = ({ className, ref, ...props }) => (
  <div
    ref={ref}
    className={cn(
      "font-semibold leading-none tracking-tight flex justify-between items-center",
      className
    )}
    {...props}
  />
);
CardTitle.displayName = "CardTitle";

export default CardTitle;
