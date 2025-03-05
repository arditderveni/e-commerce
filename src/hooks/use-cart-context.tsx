"use client";

import { useContext } from "react";
import CartContext from "@/lib/store/cart/cart-context";

/**
 * Custom hook to access the CartContext.
 *
 * This hook provides a convenient way to access the cart context within the application.
 * It uses the `useContext` hook to retrieve the current context value of `CartContext`.
 *
 * @returns The current context value of `CartContext`.
 */
const useCartContext = () => {
  return useContext(CartContext);
};

export default useCartContext;
