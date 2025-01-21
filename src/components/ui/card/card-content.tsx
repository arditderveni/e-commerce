import { cn } from "@/lib/utils";
import { FC } from "react";

const CardContent: FC<CardContentProps> = ({ className, ref, ...props }) => (
  <div ref={ref} className={cn("p-4 flex-grow", className)} {...props} />
); // Allow content to grow and take available space
CardContent.displayName = "CardContent";

export default CardContent;
