import React from "react";
import { Banner } from "@/components/containers";
import { FlexContainer } from "@/components/layout";
import { cn, stringToSlug } from "@/lib/utils";

const brandList = [
  "Adidas",
  "Nike",
  "Puma",
  "Reebok",
  "Under Armour",
  "New Balance",
  "Converse",
  "Vans",
  "Asics",
];

const Brands: React.FC = () => {
  return (
    <FlexContainer className="p-0 flex-col gap-3">
      {brandList.map((brand, index) => (
        <Banner
          key={index}
          // image={`/images/brands/${brand.toLowerCase()}.png`}
          button
          buttonText="Go To Brand"
          path={`/brands/${stringToSlug(brand)}`}
          text={brand}
          className={cn(
            "hover:scale-125 hover:z-10 transition-transform duration-300 ease-in-out",
            "flex-col gap-4",
            index === 0 && "origin-top",
            index === brandList.length - 1 && "origin-bottom"
          )}
        />
      ))}
    </FlexContainer>
  );
};

export default Brands;
