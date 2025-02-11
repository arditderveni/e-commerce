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
