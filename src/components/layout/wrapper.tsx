import { cn } from "@/lib/utils";
import React from "react";

/**
 * Wrapper component that provides a consistent padding and allows for additional custom classes.
 *
 * @component
 * @param props - The properties for the Wrapper component.
 * @param props.children - The content to be wrapped inside the div.
 * @param props.className - Additional class names to apply to the div.
 * @returns The rendered Wrapper component.
 */
const Wrapper: React.FC<WrapperProps> = ({ children, className = "" }) => {
  return <div className={cn(`p-4`, className)}>{children}</div>;
};

Wrapper.displayName = "Wrapper";

export default Wrapper;
