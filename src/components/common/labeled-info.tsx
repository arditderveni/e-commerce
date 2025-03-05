import React from "react";
// import { Label } from "../ui/label";
import { cn } from "@/lib/utils";
interface Props {
  label: string;
  info: string;
  className?: string;
}

/**
 * A React functional component that displays labeled information.
 *
 * @component
 * @param props - The props object.
 * @param props.label - The label text to display.
 * @param props.info - The information text to display.
 * @param props.className - Optional additional class names to apply to the container.
 * @returns The rendered component.
 */
const LabeledInfo: React.FC<Props> = ({ label, info, className }) => {
  return (
    <div
      className={cn(
        "flex gap-3 align-middle rounded-md bg-secondary p-2",
        className
      )}
    >
      <p className="text-secondary-foreground">{label}</p>
      <p className="text-secondary-foreground">{info}</p>
    </div>
  );
};

export default LabeledInfo;
