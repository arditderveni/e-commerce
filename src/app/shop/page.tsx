import { Filters, ProductGrid } from "@/components/containers";
import { FlexContainer } from "@/components/layout";
import { FC } from "react";

const Shop: FC = () => {
  return (
    <FlexContainer>
      <Filters className="sticky top-0" />
      <ProductGrid variant="shop" className="flex-grow md:grid-cols-2" />
    </FlexContainer>
  );
};

export default Shop;
