import { ClearCartButton } from "@/components/common";
import { CartItemsGrid } from "@/components/containers";
import { Wrapper } from "@/components/layout";
import React from "react";

const Cart: React.FC = () => {
  return (
    <Wrapper>
      <ClearCartButton />
      <CartItemsGrid />
    </Wrapper>
  );
};

export default Cart;
