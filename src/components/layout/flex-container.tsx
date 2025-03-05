import { cn } from "@/lib/utils";
import React from "react";

/**
 * FlexContainer is a React functional component that serves as a flexible container
 * for its children elements. It applies padding, flexbox layout, and gap between
 * child elements.
 *
 * @param className - Additional custom class names to apply to the container.
 * @param children - The child elements to be rendered within the container.
 *
 * @returns A div element with the specified classes and children.
 */
const FlexContainer: React.FC<WrapperProps> = ({
  className = "",
  children,
}) => {
  return (
    <div className={cn(`p-4 flex flex-wrap gap-4`, className)}>{children}</div>
  );
};

FlexContainer.displayName = "FlexContainer";

export default FlexContainer;
