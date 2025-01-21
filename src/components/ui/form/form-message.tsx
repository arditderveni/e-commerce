import { FC } from "react";
import useFormField from "./useFormField";
import { cn } from "@/lib/utils";

const FormMessage: FC<FormMessageProps> = ({
  className,
  children,
  ref,
  ...props
}) => {
  const { error, formMessageId } = useFormField();
  const body = error ? String(error?.message) : children;

  if (!body) {
    return null;
  }

  return (
    <p
      ref={ref}
      id={formMessageId}
      className={cn("text-[0.8rem] font-medium text-destructive", className)}
      {...props}
    >
      {body}
    </p>
  );
};
FormMessage.displayName = "FormMessage";

export default FormMessage;
