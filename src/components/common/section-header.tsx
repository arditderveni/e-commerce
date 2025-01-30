import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";
import Breadcrumb from "./breadcrumb";
interface Props {
  title: string;
  className?: string;
  breadcrumb: boolean;
  button?: ReactNode;
}

const SectionHeader: React.FC<Props> = ({
  title,
  className,
  breadcrumb,
  button,
}) => {
  return (
    <div className={cn("flex justify-between items-center p-4", className)}>
      <p className="text-2xl font-bold">{title}</p>
      <div className="flex gap-4 items-center">
        {button}
        {breadcrumb && <Breadcrumb />}
      </div>
    </div>
  );
};

export default SectionHeader;
