import React from "react";
import { Input } from "../ui/input";

/**
 * A dynamic input component that renders different types of inputs based on the `type` prop.
 *
 * @component
 * @param props - The props object.
 * @param props.type - The type of the input, e.g., "text", "date", etc.
 * @param props.onChange - The function to call when the input value changes.
 * @param props.placeholder - The placeholder text for the input.
 * @param props.ariaLabel - The aria-label attribute for accessibility.
 * @param props.className - Additional CSS classes to apply to the input.
 * @param props.props - Additional props to spread onto the input element.
 * @returns The rendered input component.
 */
const DynamicInput: React.FC<DynamicInputProps> = ({
  type,
  onChange,
  placeholder,
  ariaLabel,
  className = "",
  ...props
}) => {
  switch (type) {
    case "date": {
      // return ()
      return <div>Date picker</div>;
    }
    default: {
      return (
        <Input
          type={type}
          onChange={onChange}
          placeholder={placeholder}
          aria-label={ariaLabel}
          className={className}
          {...props}
        />
      );
    }
  }
};

DynamicInput.displayName = "DynamicInput";

export default DynamicInput;
