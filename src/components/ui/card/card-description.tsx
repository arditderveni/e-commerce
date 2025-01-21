import { cn } from "@/lib/utils";
import { FC } from "react";

const CardDescription: FC<CardDescriptionProps> = ({
  className,
  ref,
  ...props
}) => (
  <div
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
);
CardDescription.displayName = "CardDescription";

export default CardDescription;
