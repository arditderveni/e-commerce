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
