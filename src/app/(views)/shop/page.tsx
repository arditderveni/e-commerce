import { Filters, ProductGrid } from "@/components/containers";
import { FlexContainer } from "@/components/layout";
import { FC } from "react";

const Shop: FC = () => {
  return (
    <FlexContainer className="relative">
      <Filters className="sticky top-0 h-max overflow-y-auto" />
      <ProductGrid
        variant="shop"
        className="sm:grid-cols-1 md:grid-cols-2 flex-grow max-w-[calc(100%-220px)]"
      />
    </FlexContainer>
  );
};

export default Shop;
