import { cn } from "@/lib/utils";
import React from "react";

/**
 * A wrapper component that centers its children both vertically and horizontally
 * within a full-screen container.
 *
 * @component
 * @param {WrapperProps} props - The properties object.
 * @param {React.ReactNode} props.children - The child elements to be rendered inside the wrapper.
 * @param {string} [props.className=""] - Additional class names to apply to the wrapper.
 * @returns {JSX.Element} The rendered wrapper component.
 */
const AuthWrapper: React.FC<WrapperProps> = ({ children, className = "" }) => {
  return (
    <div
      className={cn(
        `flex flex-col items-center justify-center h-screen w-screen`,
        className
      )}
    >
      {children}
    </div>
  );
};

AuthWrapper.displayName = "AuthWrapper";

export default AuthWrapper;
