import { Slot } from "@radix-ui/react-slot";
import useFormField from "./useFormField";
import { FC } from "react";

const FormControl: FC<FormControlProps> = ({ ref, ...props }) => {
  const { error, formItemId, formDescriptionId, formMessageId } =
    useFormField();

  return (
    <Slot
      ref={ref}
      id={formItemId}
      aria-describedby={
        !error
          ? `${formDescriptionId}`
          : `${formDescriptionId} ${formMessageId}`
      }
      aria-invalid={!!error}
      {...props}
    />
  );
};
FormControl.displayName = "FormControl";

export default FormControl;
