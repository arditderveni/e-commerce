"use client";

import * as SheetPrimitive from "@radix-ui/react-dialog";

const Sheet = SheetPrimitive.Root;

const SheetTrigger = SheetPrimitive.Trigger;

const SheetClose = SheetPrimitive.Close;

const SheetPortal = SheetPrimitive.Portal;

export { default as sheetVariants } from "./sheetVariants";
export { default as SheetOverlay } from "./sheet-overlay";
export { default as SheetContent } from "./sheet-content";
export { default as SheetHeader } from "./sheet-header";
export { default as SheetFooter } from "./sheet-footer";
export { default as SheetTitle } from "./sheet-title";
export { default as SheetDescription } from "./sheet-description";
export { Sheet, SheetTrigger, SheetClose, SheetPortal };
