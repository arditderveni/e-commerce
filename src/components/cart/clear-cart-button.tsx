"use client";

import React from "react";
import { Button } from "../ui/button";
import { useCartContext } from "@/hooks";

/**
 * A button component that clears the cart when clicked.
 *
 * This component uses the `useCartContext` hook to access the `clearCart` function,
 * which is called when the button is clicked.
 *
 * @component
 * @example
 * // Usage example:
 * <ClearCartButton />
 *
 * @returns {JSX.Element} A button element that clears the cart.
 */
const ClearCartButton = () => {
  const { clearCart } = useCartContext();

  return <Button onClick={clearCart}>Clear</Button>;
};

export default ClearCartButton;
