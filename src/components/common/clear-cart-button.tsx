"use client";

import React from "react";
import { Button } from "../ui/button";
import useCartContext from "@/hooks/use-cart-context";

const ClearCartButton = () => {
  const { clearCart } = useCartContext();

  return <Button onClick={clearCart}>Clear</Button>;
};

export default ClearCartButton;
