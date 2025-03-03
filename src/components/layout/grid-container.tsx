import { cn } from "@/lib/utils";
import React from "react";

/**
 * GridContainer component that arranges its children in a responsive grid layout.
 *
 * @param {WrapperProps} props - The properties passed to the component.
 * @param {React.ReactNode} props.children - The child elements to be rendered within the grid.
 * @param {string} [props.className=""] - Additional class names to apply to the grid container.
 *
 * @returns {JSX.Element} A div element with a responsive grid layout.
 */
const GridContainer: React.FC<WrapperProps> = ({
  children,
  className = "",
}) => {
  return (
    <div
      className={cn(
        `grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4`,
        className
      )}
    >
      {children}
    </div>
  );
};

GridContainer.displayName = "GridContainer";

export default GridContainer;
