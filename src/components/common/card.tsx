import {
  Card as CardComponent,
  CardContent,
  //   CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import React from "react";

/**
 * Card component that displays a card with a header, content, and footer.
 *
 * @component
 * @param props - The properties for the Card component.
 * @param props.title - The title of the card.
 * @param props.children - The content to be displayed inside the card.
 * @param props.footer - The footer content of the card.
 * @param props.className - Additional class names for the card component.
 * @param props.Icon - Optional icon component to be displayed in the header.
 * @param props.ref - Ref to be forwarded to the card component.
 * @param props.headerVariant - Variant of the header layout, either "ltr" (left-to-right) or "rtl" (right-to-left).
 * @returns The rendered Card component.
 */
const Card: React.FC<CardCompProps> = ({
  title,
  //   description,
  children,
  footer,
  className = "",
  Icon,
  ref,
  headerVariant,
}) => {
  const Header =
    headerVariant === "ltr" ? (
      <CardTitle>
        {title} {Icon && <Icon />}
      </CardTitle>
    ) : (
      <CardTitle>
        {Icon && <Icon />} {title}
      </CardTitle>
    );

  return (
    <CardComponent className={className} ref={ref}>
      <CardHeader className="flex justify-between border-none">
        <CardTitle>{Header}</CardTitle>
        {/* <CardDescription>{description}</CardDescription> */}
      </CardHeader>
      <CardContent>{children}</CardContent>
      <CardFooter>{footer}</CardFooter>
    </CardComponent>
  );
};

Card.displayName = "Card";

export default Card;
