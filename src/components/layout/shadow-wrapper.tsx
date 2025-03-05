import { cn } from "@/lib/utils";

import React from "react";

/**
 * ShadowWrapper is a React functional component that wraps its children
 * with a div element that has predefined margin, padding, shadow, and
 * rounded corners. Additional class names can be passed via the className prop.
 *
 * @param children - The content to be wrapped inside the div.
 * @param className - Additional class names to apply to the div.
 *
 * @returns A div element with the specified styles and children.
 */
const ShadowWrapper: React.FC<WrapperProps> = ({
  children,
  className = "",
}) => {
  return (
    <div className={cn("m-4 p-4 shadow-md rounded-md", className)}>
      {children}
    </div>
  );
};

ShadowWrapper.displayName = "ShadowWrapper";

export default ShadowWrapper;
