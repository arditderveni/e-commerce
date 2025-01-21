import React from "react";
import { Input } from "../ui/input";

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
