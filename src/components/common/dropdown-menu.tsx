import React, { Fragment } from "react";
import {
  DropdownMenuComp,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui";
import { cn } from "@/lib/utils";
interface Props {
  className?: string;
  trigger: React.ReactNode;
  label?: string | React.ReactNode;
  options: string[] | React.ReactNode[];
  dir: "ltr" | "rtl";
}

/**
 * DropdownMenu component renders a dropdown menu with customizable options.
 *
 * @component
 * @param props - The properties object.
 * @param props.className - Additional class names to style the dropdown menu.
 * @param props.trigger - The element that triggers the dropdown menu.
 * @param props.label - The label displayed at the top of the dropdown menu.
 * @param props.dir - The direction in which the dropdown menu opens.
 * @param props.options - The list of options to be displayed in the dropdown menu.
 *
 * @returns The rendered DropdownMenu component.
 */
const DropdownMenu: React.FC<Props> = ({
  className,
  trigger,
  label,
  dir,
  options,
}) => {
  return (
    <DropdownMenuComp dir={dir}>
      <DropdownMenuTrigger className="focus-visible:outline-none">
        {trigger}
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className={cn("w-fit min-w-fit focus-visible:unset", className)}
      >
        {label ? (
          <Fragment>
            <DropdownMenuLabel>{label}</DropdownMenuLabel>{" "}
            <DropdownMenuSeparator />
          </Fragment>
        ) : null}
        {options.map((option, index) => (
          <DropdownMenuItem key={index} className="w-fit">
            {option}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenuComp>
  );
};

export default DropdownMenu;
