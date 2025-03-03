import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";
interface Props {
  className?: string;
  children: ReactNode;
}

/**
 * A functional component that renders its children inside a paragraph element
 * with a small text size. Additional class names can be passed via the `className` prop.
 *
 * @param {object} props - The props object.
 * @param {string} props.className - Additional class names to apply to the paragraph element.
 * @param {React.ReactNode} props.children - The content to be rendered inside the paragraph element.
 *
 * @returns {JSX.Element} The rendered paragraph element with the specified class names and children.
 */
const FinePrint: React.FC<Props> = ({ className, children }) => {
  return <p className={cn("text-xs", className)}>{children}</p>;
};

export default FinePrint;
