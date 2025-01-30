import { cn } from "@/lib/utils";
import { FC } from "react";

const BreadcrumbList: FC<BreadcrumbListProps> = ({
  className,
  ref,
  ...props
}) => (
  <ol
    ref={ref}
    className={cn(
      "flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5",
      className
    )}
    {...props}
  />
);
BreadcrumbList.displayName = "BreadcrumbList";

export default BreadcrumbList;
