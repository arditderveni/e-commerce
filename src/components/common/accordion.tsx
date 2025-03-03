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
 * @param {AccordionProps} props - The properties for the Accordion component.
 * @param {string} props.className - Additional class names for the Accordion component.
 * @param {boolean} props.collapsible - Determines if the Accordion items are collapsible.
 * @param {string} props.type - The type of the Accordion.
 * @param {Array<{ trigger: React.ReactNode, content: React.ReactNode }>} props.items - The items to be rendered in the Accordion.
 * @param {React.Ref<any>} props.ref - Ref to be forwarded to the Accordion component.
 *
 * @returns {JSX.Element} The rendered Accordion component.
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
