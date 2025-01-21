"use client";

import { cn } from "@/lib/utils";
import { FC } from "react";
import sheetVariants from "./sheetVariants";
import { SheetPortal } from "../sheet";
import SheetOverlay from "./sheet-overlay";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";

const SheetContent: FC<SheetContentProps> = ({
  side = "right",
  className,
  children,
  ref,
  ...props
}) => (
  <SheetPortal>
    <SheetOverlay />
    <SheetPrimitive.Content
      ref={ref}
      className={cn(sheetVariants({ side }), className)}
      {...props}
    >
      <SheetPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary">
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </SheetPrimitive.Close>
      {children}
    </SheetPrimitive.Content>
  </SheetPortal>
);
SheetContent.displayName = SheetPrimitive.Content.displayName;

export default SheetContent;
