"use client";

import { createContext } from "react";

const createCartContext = (cartState: CartState) => {
  return createContext<CartContextProps>({
    ...cartState,
    addItem: () => {},
    removeItem: () => {},
    clearCart: () => {},
  });
};

export default createCartContext;
