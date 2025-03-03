import React from "react";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { DynamicInput } from ".";
import { FieldValues, Path } from "react-hook-form";

/**
 * A generic form input component that integrates with react-hook-form.
 *
 * @template T - The type of the form values.
 *
 * @param {Object} props - The properties object.
 * @param {UseFormReturn<T>} props.form - The form instance from react-hook-form.
 * @param {Path<T>} props.name - The name of the field.
 * @param {string} props.label - The label for the input field.
 * @param {string} [props.description] - An optional description for the input field.
 * @param {Object} [props.inputProps] - Additional properties to pass to the input component.
 * @param {string} [props.className] - An optional class name to apply to the form item.
 *
 * @returns {JSX.Element} The rendered form input component.
 */
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
