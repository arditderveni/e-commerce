import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";
import Breadcrumb from "./breadcrumb";
interface Props {
  title: string;
  className?: string;
  breadcrumb: boolean;
  button?: ReactNode;
}

/**
 * SectionHeader component renders a header section with a title, optional breadcrumb, and an optional button.
 *
 * @component
 * @param {Props} props - The props for the SectionHeader component.
 * @param {string} props.title - The title to be displayed in the header.
 * @param {string} [props.className] - Additional class names to style the header.
 * @param {React.ReactNode} [props.breadcrumb] - Optional breadcrumb component to be displayed.
 * @param {React.ReactNode} [props.button] - Optional button component to be displayed.
 * @returns {JSX.Element} The rendered SectionHeader component.
 */
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
