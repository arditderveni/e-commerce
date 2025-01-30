"use client";

import React, { useContext, useMemo } from "react";
import GridContainer from "../layout/grid-container";
// import useCartContext from "@/hooks/use-cart-context";
import { CartItemCard } from "../common";
import CartContext from "@/lib/store/cart-context";

const CartItemsGrid: React.FC = ({}) => {
  //   const { items } = useCartContext();

  const { items } = useContext(CartContext);

  const cartItems = useMemo(() => {
    return items.map((item) => <CartItemCard key={item.id} item={item} />);
  }, [items]);

  return (
    <GridContainer className="grid-cols-1 sm:grid-cols-2 md:grid-cols-2">
      {cartItems}
    </GridContainer>
  );
};

export default CartItemsGrid;
