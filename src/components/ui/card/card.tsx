import { cn } from "@/lib/utils";
import { FC } from "react";

const Card: FC<CardProps> = ({ className, ref, ...props }) => (
  <div
    ref={ref}
    className={cn(
      "flex flex-col rounded-xl bg-card text-card-foreground", // Ensure Card is a flex container
      className
    )}
    {...props}
  />
);
Card.displayName = "Card";

export default Card;
