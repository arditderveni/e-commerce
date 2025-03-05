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

/**
 * A custom Select component that renders a dropdown menu with selectable options.
 *
 * @component
 * @param props - The properties object.
 * @param props.placeholder - The placeholder text for the select input.
 * @param props.label - The label for the select group.
 * @param props.options - The options to display in the dropdown.
 * @param  props.className - Additional class names for the select content.
 * @param  props.onChange - Callback function to handle the change event.
 *
 * @example
 * <Select
 *   placeholder="Select an option"
 *   label="Options"
 *   options={[{ label: 'Option 1', value: '1' }, { label: 'Option 2', value: '2' }]}
 *   onChange={(value) => console.log(value)}
 * />
 */
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
