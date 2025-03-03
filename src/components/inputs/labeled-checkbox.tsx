import { cn } from "@/lib/utils";
import React from "react";
import { CheckBox } from "../ui";
import { cva } from "class-variance-authority";

interface Props {
  className?: string;
  id: string;
  children?: React.ReactNode | string;
  checked: boolean;
  onClick: () => void;
  variant?: "default" | "rounded" | "outline" | "bold";
  size?: "default" | "sm" | "lg";
}

/**
 * A labeled checkbox component that supports different variants and sizes.
 *
 * @component
 * @param {object} props - The properties object.
 * @param {string} [props.className=""] - Additional class names to apply to the component.
 * @param {string} props.id - The unique identifier for the checkbox.
 * @param {boolean} props.checked - The checked state of the checkbox.
 * @param {function} props.onClick - The click event handler for the checkbox.
 * @param {React.ReactNode} props.children - The label content for the checkbox.
 * @param {"default" | "rounded" | "outline" | "bold"} [props.variant="default"] - The variant style of the checkbox.
 * @param {"default" | "sm" | "lg"} [props.size="default"] - The size of the checkbox.
 * @returns {JSX.Element} The rendered labeled checkbox component.
 */
const LabeledCheckbox: React.FC<Props> = ({
  className = "",
  id,
  checked,
  onClick,
  children,
  variant = "default", // Default variant
  size = "default",
}) => {
  const checkboxVariants = cva("flex gap-2 items-center align-middle", {
    variants: {
      variant: {
        default: "",
        rounded: "rounded-lg p-1 hover:bg-accent hover:bg-opacity-10",
        outline: "focus-within:ring-2 focus-within:ring-blue-500",
        bold: "font-bold",
      },
      size: {
        default: "text-base",
        sm: "text-sm",
        lg: "text-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  });

  return (
    <div className={cn(checkboxVariants({ variant, size }), className)}>
      <CheckBox id={id} onClick={onClick} checked={checked} />
      <label htmlFor={id}>{children}</label>
    </div>
  );
};

export default LabeledCheckbox;
