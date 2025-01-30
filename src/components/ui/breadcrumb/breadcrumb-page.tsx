import { cn } from "@/lib/utils";
import { FC } from "react";

const BreadcrumbPage: FC<BreadcrumbPageProps> = ({
  className,
  ref,
  ...props
}) => (
  <span
    ref={ref}
    role="link"
    aria-disabled="true"
    aria-current="page"
    className={cn("font-normal text-foreground", className)}
    {...props}
  />
);
BreadcrumbPage.displayName = "BreadcrumbPage";

export default BreadcrumbPage;
