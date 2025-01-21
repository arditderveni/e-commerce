"use client";

import { FC, useId } from "react";
import FormItemContext from "./FormItemContext";
import { cn } from "@/lib/utils";

const FormItem: FC<FormItemProps> = ({ className, ref, ...props }) => {
  const id = useId();

  return (
    <FormItemContext.Provider value={{ id }}>
      <div ref={ref} className={cn("space-y-2", className)} {...props} />
    </FormItemContext.Provider>
  );
};
FormItem.displayName = "FormItem";

export default FormItem;
