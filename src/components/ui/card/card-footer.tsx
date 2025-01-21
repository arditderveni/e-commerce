import { cn } from "@/lib/utils";
import { FC } from "react";

const CardFooter: FC<CardFooterProps> = ({ className, ref, ...props }) => (
  <div
    ref={ref}
    className={cn("flex items-center p-4  mt-auto", className)} // Use mt-auto to push to bottom
    {...props}
  />
);
CardFooter.displayName = "CardFooter";

export default CardFooter;
