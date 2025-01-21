"use client";

import createCartContext from "./create-cart-context";

const defaultCartState: CartState = {
  items: [],
  totalAmount: 0,
};

const CartContext = createCartContext(defaultCartState);

export default CartContext;
