"use client";

import { createContext } from "react";

/**
 * Creates a React context for the cart state and actions.
 *
 * @param cartState - The initial state of the cart.
 * @returns A React context with the cart state and actions.
 */
const createCartContext = (cartState: CartState) => {
  return createContext<CartContextProps>({
    ...cartState,
    addItem: () => {},
    removeItem: () => {},
    clearCart: () => {},
  });
};

export default createCartContext;
