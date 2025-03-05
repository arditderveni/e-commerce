"use client";

import React, { useContext, useMemo } from "react";
import GridContainer from "../layout/grid-container";
import { CartItemCard } from "../common";
import CartContext from "@/lib/store/cart/cart-context";

/**
 * CartItemsGrid component renders a grid of cart items.
 *
 * This component uses the `CartContext` to retrieve the items in the cart and
 * maps over them to create a list of `CartItemCard` components. The grid layout
 * is responsive, adjusting the number of columns based on the screen size.
 *
 * @component
 * @example
 * // Usage example:
 * <CartItemsGrid />
 *
 * @returns A grid container with cart item cards.
 */
const CartItemsGrid: React.FC = ({}) => {
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
