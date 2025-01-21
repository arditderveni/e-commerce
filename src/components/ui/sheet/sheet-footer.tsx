import { cn } from "@/lib/utils";
import { FC } from "react";

const SheetFooter: FC<SheetFooterProps> = ({ className, ...props }) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  />
);
SheetFooter.displayName = "SheetFooter";

export default SheetFooter;
