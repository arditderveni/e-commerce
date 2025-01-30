import React from "react";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { DynamicInput } from "./";
import { FieldValues, Path } from "react-hook-form";

const FormInput = <T extends FieldValues>({
  form,
  name,
  label,
  description,
  inputProps,
  className,
}: FormInputProps<T>) => {
  return (
    <FormField
      control={form.control}
      name={name as Path<T>}
      render={({ field }) => (
        <FormItem className={className}>
          {" "}
          {/* Add this className */}
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <DynamicInput {...{ ...field, ...inputProps }} />
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

FormInput.displayName = "FormInput";

export default FormInput;
