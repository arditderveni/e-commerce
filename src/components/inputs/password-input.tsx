"use client";

import React, { useState } from "react";
import { FieldValues, Path } from "react-hook-form";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Eye, EyeOff } from "lucide-react";

/**
 * PasswordInput component renders a password input field with an optional label, description, and visibility toggle.
 *
 * @template T - The type of the form values.
 * @param props - The properties object.
 * @param props.form - The form object returned by `useForm` from `react-hook-form`.
 * @param props.name - The name of the field.
 * @param props.label - The label for the input field.
 * @param props.description - The description for the input field.
 * @param props.className - Additional class names for the form item.
 * @param props.autoComplete - The autocomplete attribute for the input field.
 * @returns The rendered password input component.
 */
const PasswordInput = <T extends FieldValues>({
  form,
  name,
  label,
  description,
  className,
  autoComplete,
}: PasswordInputProps<T>) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <FormField
      control={form.control}
      name={name as Path<T>}
      render={({ field }) => (
        <FormItem className={className}>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <div className="flex items-center h-9 w-full rounded-md border border-input bg-transparent py-1 text-base shadow-sm transition-colors focus-within:ring-1 focus-within:ring-ring  placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 md:text-sm">
              <Input
                {...field}
                type={showPassword ? "text" : "password"}
                className="peer border-0 focus-visible:ring-0"
                autoComplete={autoComplete}
              />
              <div
                className="px-2 cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </div>
            </div>
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default PasswordInput;
