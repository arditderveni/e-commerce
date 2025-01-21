import { FC } from "react";
import useFormField from "./useFormField";
import { Label } from "../label";
import { cn } from "@/lib/utils";

const FormLabel: FC<FormLabelProps> = ({ className, ref, ...props }) => {
  const { error, formItemId } = useFormField();

  return (
    <Label
      ref={ref}
      className={cn(error && "text-destructive", className)}
      htmlFor={formItemId}
      {...props}
    />
  );
};
FormLabel.displayName = "FormLabel";

export default FormLabel;
