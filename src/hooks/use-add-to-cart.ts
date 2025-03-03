import { useCallback } from "react";
import useCartContext from "./use-cart-context";

interface Params {
  item: CartItem;
}

/**
 * Custom hook to add an item to the cart.
 *
 * @param {Params} params - The parameters for the hook.
 * @param {Item} params.item - The item to be added to the cart.
 * @returns {Object} An object containing the `addToCart` function.
 * @returns {Function} returns.addToCart - Function to add the item to the cart.
 */
const useAddToCart = ({ item }: Params) => {
  const { addItem } = useCartContext();

  const addToCart = useCallback(() => {
    addItem(item);
  }, [item, addItem]);

  return { addToCart };
};

export default useAddToCart;
