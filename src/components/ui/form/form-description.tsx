import { FC } from "react";
import useFormField from "./useFormField";
import { cn } from "@/lib/utils";

const FormDescription: FC<FormDescriptionProps> = ({
  className,
  ref,
  ...props
}) => {
  const { formDescriptionId } = useFormField();

  return (
    <p
      ref={ref}
      id={formDescriptionId}
      className={cn("text-[0.8rem] text-muted-foreground", className)}
      {...props}
    />
  );
};
FormDescription.displayName = "FormDescription";

export default FormDescription;
