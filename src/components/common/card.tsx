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
 * @param {CardCompProps} props - The properties for the Card component.
 * @param {string} props.title - The title of the card.
 * @param {React.ReactNode} props.children - The content to be displayed inside the card.
 * @param {React.ReactNode} props.footer - The footer content of the card.
 * @param {string} [props.className=""] - Additional class names for the card component.
 * @param {React.ElementType} [props.Icon] - Optional icon component to be displayed in the header.
 * @param {React.Ref<HTMLDivElement>} [props.ref] - Ref to be forwarded to the card component.
 * @param {"ltr" | "rtl"} [props.headerVariant] - Variant of the header layout, either "ltr" (left-to-right) or "rtl" (right-to-left).
 * @returns {JSX.Element} The rendered Card component.
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
