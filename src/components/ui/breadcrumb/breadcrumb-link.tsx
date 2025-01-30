import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { FC } from "react";

const BreadcrumbLink: FC<BreadcrumbLinkProps> = ({
  asChild,
  className,
  ref,
  ...props
}) => {
  const Comp = asChild ? Slot : "a";

  return (
    <Comp
      ref={ref}
      className={cn("transition-colors hover:text-foreground", className)}
      {...props}
    />
  );
};
BreadcrumbLink.displayName = "BreadcrumbLink";

export default BreadcrumbLink;
