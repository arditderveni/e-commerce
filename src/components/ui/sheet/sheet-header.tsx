import { cn } from "@/lib/utils";
import { FC } from "react";

const SheetHeader: FC<SheetHeaderProps> = ({ className, ...props }) => (
  <div
    className={cn(
      "flex flex-col space-y-2 text-center sm:text-left",
      className
    )}
    {...props}
  />
);
SheetHeader.displayName = "SheetHeader";

export default SheetHeader;
