import { cn } from "@/lib/utils";
import { FC } from "react";

const BreadcrumbItem: FC<BreadcrumbItemProps> = ({
  className,
  ref,
  ...props
}) => (
  <li
    ref={ref}
    className={cn("inline-flex items-center gap-1.5", className)}
    {...props}
  />
);
BreadcrumbItem.displayName = "BreadcrumbItem";

export default BreadcrumbItem;
