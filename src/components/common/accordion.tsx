import React from "react";
import {
  AccordionComp,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui";

/**
 * Accordion component that renders a list of collapsible items.
 *
 * @component
 * @param props - The properties for the Accordion component.
 * @param props.className - Additional class names for the Accordion component.
 * @param props.collapsible - Determines if the Accordion items are collapsible.
 * @param props.type - The type of the Accordion.
 * @param props.items - The items to be rendered in the Accordion.
 * @param props.ref - Ref to be forwarded to the Accordion component.
 *
 * @returns The rendered Accordion component.
 */
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
