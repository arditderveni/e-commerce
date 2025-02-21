"use client";

import { useContext } from "react";
import CartContext from "@/lib/store/cart/cart-context";

const useCartContext = () => {
  return useContext(CartContext);
};

export default useCartContext;
