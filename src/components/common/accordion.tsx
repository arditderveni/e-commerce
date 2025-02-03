import React from "react";
import {
  AccordionComp,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui";

const Accordion: React.FC<AccordionProps> = ({
  className,
  collapsible,
  type,
  items,
  ref,
}) => {
  return (
    <AccordionComp
      {...{
        className,
        collapsible,
        type,
        ref,
      }}
    >
      {items.map(({ trigger, content }, index) => (
        <AccordionItem key={index} value={`accordion-item-${index}`}>
          <AccordionTrigger>{trigger}</AccordionTrigger>
          <AccordionContent>{content}</AccordionContent>
        </AccordionItem>
      ))}
    </AccordionComp>
  );
};

export default Accordion;
