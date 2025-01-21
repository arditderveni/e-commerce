import {
  Card as CardComponent,
  CardContent,
  //   CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import React from "react";

const Card: React.FC<CardCompProps> = ({
  title,
  //   description,
  children,
  footer,
  className = "",
  Icon,
  ref,
}) => {
  return (
    <CardComponent className={className} ref={ref}>
      <CardHeader>
        <CardTitle>
          {title} {Icon && <Icon />}
        </CardTitle>
        {/* <CardDescription>{description}</CardDescription> */}
      </CardHeader>
      <CardContent>{children}</CardContent>
      <CardFooter>{footer}</CardFooter>
    </CardComponent>
  );
};

Card.displayName = "Card";

export default Card;
