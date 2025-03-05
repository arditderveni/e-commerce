import { FormInput, PasswordInput } from "@/components/inputs";

import { Button } from "@/components/ui/button";
import { JSX } from "react";
import { FieldValues, FormProvider } from "react-hook-form";
import cn from "./classnames";

/**
 * Renders a dynamic form based on the provided inputs and form configuration.
 *
 * @template T - The type of the field values.
 * @param params - The parameters for rendering the dynamic form.
 * @param params.form - The form instance from `react-hook-form`.
 * @param params.inputs - The array of input configurations.
 * @param params.submitText - The text to display on the submit button.
 * @param params.submitHandler - The handler function to call on form submission.
 * @returns The rendered dynamic form component.
 */
const dynamicFormRender = <T extends FieldValues>({
  form,
  inputs,
  submitText,
  submitHandler,
  className = "",
}: DynamicFormRenderParams<T>): JSX.Element => {
  return (
    <FormProvider {...form}>
      <form
        onSubmit={() => {
          /** Add submit logic here */
          submitHandler(form.getValues());
        }}
        className={cn(`flex flex-wrap align-middle items-center`, className)}
      >
        {inputs.map((el, i) => {
          switch (el.type) {
            case "password": {
              return (
                <PasswordInput
                  key={i}
                  name={el.name}
                  label={el.label}
                  form={form}
                  className={el.className}
                />
              );
            }

            default: {
              return (
                <FormInput
                  key={i}
                  name={el.name}
                  label={el.label}
                  form={form}
                  className={el.className}
                  inputProps={{
                    type: el.type,
                    placeholder: el.placeholder,
                  }}
                />
              );
            }
          }
        })}
        <Button type="submit" className="mt-2">
          {submitText}
        </Button>
      </form>
    </FormProvider>
  );
};

export default dynamicFormRender;
