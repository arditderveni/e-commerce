import React from "react";
import {
  Select as SelectComponent,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const Select: React.FC<SelectProps> = ({
  placeholder = "",
  label = "",
  options = [],
  className,
  onChange,
}) => {
  return (
    <SelectComponent>
      <SelectTrigger>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent className={className}>
        <SelectGroup
          onChange={(event) =>
            onChange?.((event.target as HTMLDivElement).innerText)
          }
        >
          {label && <SelectLabel>{label} </SelectLabel>}

          {options.map(({ label, value }) => (
            <SelectItem key={value} value={value}>
              {label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </SelectComponent>
  );
};

export default Select;
