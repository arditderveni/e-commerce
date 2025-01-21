import React from "react";
// import { Label } from "../ui/label";
import { cn } from "@/lib/utils";
interface Props {
  label: string;
  info: string;
  className?: string;
}

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
